<template>
  <div class="water-container">
    <div class="water-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="water-content">
      <!-- 左侧内容区 -->
      <div class="water-content-left">
        <div class="water-card water-card-01">
          <div class="water-card-header"><i class="iconfont icon-shuiziyuan"></i>水资源总体特征</div>

          <p class="mb-8">西亚大部分地区气候干旱、蒸发强烈，河流稀少且分布不均，水资源短缺是影响区域生产生活的重要因素。</p>

          <div class="contrast-box">
            <div class="contrast-item oil">
              <div class="contrast-title">石油</div>
              <div class="contrast-value">丰富</div>
              <div class="contrast-desc">波斯湾沿岸油气资源集中</div>
            </div>

            <div class="contrast-item water">
              <div class="contrast-title">淡水</div>
              <div class="contrast-value">短缺</div>
              <div class="contrast-desc">降水少、河流少、蒸发强</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>西亚的区域矛盾之一是：地下有“黑色金子”，地表却普遍缺少淡水。</div>
          </div>
        </div>

        <div class="water-card water-card-02">
          <div class="water-card-header"><i class="iconfont icon-leixing"></i>主要水源类型</div>

          <div class="source-item">
            <div class="source-title">河流水源</div>
            <div class="source-desc">幼发拉底河、底格里斯河和约旦河是区域内重要河流，其中两河流域是西亚重要农业区。</div>
          </div>

          <div class="source-item">
            <div class="source-title">地下水与绿洲</div>
            <div class="source-desc">沙漠和高原内部依赖地下水、泉水和绿洲，形成有限的聚落和农业空间。</div>
          </div>

          <div class="source-item">
            <div class="source-title">海水淡化</div>
            <div class="source-desc">波斯湾沿岸部分富油国家利用能源和资金发展海水淡化，缓解城市与工业用水压力。</div>
          </div>
        </div>

        <div class="water-card water-card-03">
          <div class="water-card-header"><i class="iconfont icon-fenbu"></i>空间分布特点</div>

          <ul class="list-disc pl-5">
            <li class="mb-2"><strong>较湿润地区</strong>：地中海东岸、土耳其部分地区和山地迎风坡，降水相对较多。</li>
            <li class="mb-2"><strong>河流农业区</strong>：两河流域依靠河水灌溉，是西亚重要农业地带。</li>
            <li class="mb-2"><strong>极端干旱区</strong>：阿拉伯半岛内陆、叙利亚沙漠、伊朗高原内部，水资源尤为紧张。</li>
            <li class="mb-2"><strong>海湾城市区</strong>：依靠海水淡化、地下水和外来粮食供应维持城市发展。</li>
          </ul>
        </div>

        <div class="water-card water-card-04">
          <div class="water-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一看气候：</strong>热带、亚热带干旱区广，降水少。</li>
            <li><strong>二看河流：</strong>幼发拉底河、底格里斯河是重点。</li>
            <li><strong>三看农业：</strong>绿洲农业和灌溉农业依赖水源。</li>
            <li><strong>四看矛盾：</strong>石油丰富，但淡水短缺。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="water-content-right">
        <div id="waterMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看水资源分布</div>

        <div class="map-control-panel">
          <div class="panel-title">地图控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showRivers" @change="refreshMapLayers" />
            主要河流
          </label>

          <label>
            <input type="checkbox" v-model="showWaterStress" @change="refreshMapLayers" />
            缺水严重区
          </label>

          <label>
            <input type="checkbox" v-model="showDesalination" @change="refreshMapLayers" />
            海水淡化区
          </label>

          <label>
            <input type="checkbox" v-model="showOasis" @change="refreshMapLayers" />
            绿洲 / 灌溉农业
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-line river-line"></span>
              <span>主要河流</span>
            </div>

            <div class="legend-row">
              <span class="legend-area stress-area"></span>
              <span>缺水严重区</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot desalination-dot"></span>
              <span>海水淡化区</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot oasis-dot"></span>
              <span>绿洲 / 灌溉农业</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

defineProps<{
  current: {
    title: string
    desc: string
    index: number
  }
}>()

type DomLabel = {
  latlng: L.LatLng
  el: HTMLDivElement
  offsetX: number
  offsetY: number
}

type WaterPoint = {
  name: string
  lat: number
  lng: number
  type: 'desalination' | 'oasis' | 'stress'
  offsetX?: number
  offsetY?: number
}

type GeoRiverLayerConfig = {
  id: string
  name: string
  url: string
  layer: L.GeoJSON | null
  labels: DomLabel[]
  abortController: AbortController | null
}

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

const centerLat = 25.5
const centerLng = 45.5
const zoomLevel = 5

const useGoogle = ref(false)
const showRivers = ref(true)
const showWaterStress = ref(true)
const showDesalination = ref(true)
const showOasis = ref(true)

const baseGeoUrl = 'https://course-code.oss-cn-shanghai.aliyuncs.com/geojson/'

const riverGeoLayer: GeoRiverLayerConfig = {
  id: 'westasia-river',
  name: '西亚主要河流分布',
  url: baseGeoUrl + '西亚主要河流分布.geojson',
  layer: null,
  labels: [],
  abortController: null,
}

const stressLayer = L.layerGroup()
const desalinationLayer = L.layerGroup()
const oasisLayer = L.layerGroup()

const stressLabels: DomLabel[] = []
const desalinationLabels: DomLabel[] = []
const oasisLabels: DomLabel[] = []

const waterStressAreas: WaterPoint[] = [
  {
    name: '阿拉伯半岛内陆',
    lat: 22.8,
    lng: 45.2,
    type: 'stress',
  },
  {
    name: '叙利亚沙漠',
    lat: 34.0,
    lng: 39.8,
    type: 'stress',
  },
  {
    name: '伊朗高原内部',
    lat: 31.8,
    lng: 55.0,
    type: 'stress',
  },
]

const desalinationPoints: WaterPoint[] = [
  {
    name: '波斯湾沿岸淡化区',
    lat: 25.7,
    lng: 51.5,
    type: 'desalination',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '阿联酋沿岸淡化区',
    lat: 24.5,
    lng: 54.5,
    type: 'desalination',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '红海沿岸淡化区',
    lat: 21.5,
    lng: 39.2,
    type: 'desalination',
    offsetX: 10,
    offsetY: -2,
  },
]

const oasisPoints: WaterPoint[] = [
  {
    name: '两河流域灌溉农业',
    lat: 32.6,
    lng: 44.5,
    type: 'oasis',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '约旦河谷灌溉农业',
    lat: 31.8,
    lng: 35.5,
    type: 'oasis',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '阿拉伯半岛绿洲',
    lat: 24.2,
    lng: 46.6,
    type: 'oasis',
    offsetX: 10,
    offsetY: -2,
  },
]

function switchBaseLayer() {
  if (!map) return

  if (baseLayer) {
    baseLayer.removeFrom(map)
    baseLayer = null
  }

  const url = useGoogle.value
    ? 'https://zdys.szjx.ai-study.net/geo-resources-folder/tiles/google-tiles/{z}/{x}/{y}.png'
    : 'https://zdys.szjx.ai-study.net/geo-resources-folder/tiles/osm-tiles/{z}/{x}/{y}.png'

  baseLayer = L.tileLayer(url, {
    attribution: '',
    minZoom: 2,
    maxZoom: 7,
  }).addTo(map)

  scheduleUpdateLabels()
}

function initLabelPane() {
  if (!map) return

  const container = map.getContainer()

  const oldPane = container.querySelector('.custom-map-label-pane')
  if (oldPane) {
    oldPane.remove()
  }

  labelPane = document.createElement('div')
  labelPane.className = 'custom-map-label-pane'

  container.appendChild(labelPane)
}

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function createDomLabel(options: { lat: number; lng: number; content: string; className: string; offsetX?: number; offsetY?: number }) {
  if (!labelPane) return null

  const el = document.createElement('div')
  el.className = options.className
  el.innerHTML = escapeHtml(options.content)

  labelPane.appendChild(el)

  const label: DomLabel = {
    latlng: L.latLng(options.lat, options.lng),
    el,
    offsetX: options.offsetX ?? 0,
    offsetY: options.offsetY ?? 0,
  }

  updateOneLabelPosition(label)

  return label
}

function updateOneLabelPosition(label: DomLabel) {
  if (!map) return

  const point = map.latLngToContainerPoint(label.latlng)

  label.el.style.left = `${point.x + label.offsetX}px`
  label.el.style.top = `${point.y + label.offsetY}px`
}

function updateAllLabelPositions() {
  updateLabelRaf = 0

  if (showRivers.value) {
    riverGeoLayer.labels.forEach(updateOneLabelPosition)
  }

  if (showWaterStress.value) {
    stressLabels.forEach(updateOneLabelPosition)
  }

  if (showDesalination.value) {
    desalinationLabels.forEach(updateOneLabelPosition)
  }

  if (showOasis.value) {
    oasisLabels.forEach(updateOneLabelPosition)
  }
}

function scheduleUpdateLabels() {
  if (updateLabelRaf) return
  updateLabelRaf = requestAnimationFrame(updateAllLabelPositions)
}

function bindMapLabelEvents() {
  if (!map) return

  map.on('move', scheduleUpdateLabels)
  map.on('moveend', scheduleUpdateLabels)
  map.on('zoom', scheduleUpdateLabels)
  map.on('zoomend', scheduleUpdateLabels)
  map.on('viewreset', scheduleUpdateLabels)
  map.on('resize', scheduleUpdateLabels)
}

function unbindMapLabelEvents() {
  if (!map) return

  map.off('move', scheduleUpdateLabels)
  map.off('moveend', scheduleUpdateLabels)
  map.off('zoom', scheduleUpdateLabels)
  map.off('zoomend', scheduleUpdateLabels)
  map.off('viewreset', scheduleUpdateLabels)
  map.off('resize', scheduleUpdateLabels)
}

function clearDomLabels(labels: DomLabel[]) {
  labels.forEach(label => {
    label.el.remove()
  })

  labels.length = 0
}

function clearRiverLayer() {
  if (riverGeoLayer.abortController) {
    riverGeoLayer.abortController.abort()
    riverGeoLayer.abortController = null
  }

  if (riverGeoLayer.layer && map) {
    riverGeoLayer.layer.removeFrom(map)
    riverGeoLayer.layer = null
  }

  clearDomLabels(riverGeoLayer.labels)
}

async function addRiverLayer() {
  if (!map) return

  clearRiverLayer()

  const abortController = new AbortController()
  riverGeoLayer.abortController = abortController

  try {
    const response = await fetch(riverGeoLayer.url, {
      signal: abortController.signal,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (abortController.signal.aborted || !map || !showRivers.value) {
      return
    }

    riverGeoLayer.layer = L.geoJSON(data, {
      filter: feature => {
        const type = feature?.geometry?.type
        return type !== 'Point' && type !== 'MultiPoint'
      },

      style: feature => {
        const props = feature?.properties || {}
        const geometryType = feature?.geometry?.type

        if (geometryType === 'LineString' || geometryType === 'MultiLineString') {
          return {
            color: props.fillColor || '#2563eb',
            weight: 3,
            opacity: 0.95,
          }
        }

        return {
          color: props.fillColor || '#2563eb',
          weight: 2,
          fillColor: props.fillColor || '#2563eb',
          fillOpacity: 0.25,
          opacity: 0.95,
        }
      },
    }).addTo(map)

    addGeoJsonRiverLabels(data)

    await nextTick()

    map.invalidateSize(false)
    scheduleUpdateLabels()
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.log('西亚主要河流分布请求已取消')
    } else {
      console.error('加载西亚主要河流分布失败：', error)
    }
  } finally {
    if (riverGeoLayer.abortController === abortController) {
      riverGeoLayer.abortController = null
    }
  }
}

function getGeoJsonFeatures(geojson: any) {
  if (!geojson) return []

  if (geojson.type === 'FeatureCollection') {
    return Array.isArray(geojson.features) ? geojson.features : []
  }

  if (geojson.type === 'Feature') {
    return [geojson]
  }

  return []
}

function addGeoJsonRiverLabels(geojson: any) {
  const features = getGeoJsonFeatures(geojson)

  features.forEach((feature: any) => {
    if (!feature?.geometry) return

    const type = feature.geometry.type

    if (type === 'Point') {
      addGeoJsonRiverPointLabel(feature)
    }

    if (type === 'MultiPoint') {
      const coordinates = feature.geometry.coordinates
      if (!Array.isArray(coordinates)) return

      coordinates.forEach((coord: any) => {
        addGeoJsonRiverPointLabel({
          ...feature,
          geometry: {
            type: 'Point',
            coordinates: coord,
          },
        })
      })
    }
  })

  scheduleUpdateLabels()
}

function addGeoJsonRiverPointLabel(feature: any) {
  const labelText = feature.properties?.labelText
  if (!labelText) return

  const coordinates = feature.geometry?.coordinates
  if (!Array.isArray(coordinates) || coordinates.length < 2) return

  // 标准 GeoJSON 坐标顺序：[lng, lat]
  const lng = Number(coordinates[0])
  const lat = Number(coordinates[1])

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return

  const label = createDomLabel({
    lat,
    lng,
    content: labelText,
    className: 'river-label-dom',
    offsetX: 0,
    offsetY: -6,
  })

  if (label) {
    riverGeoLayer.labels.push(label)
  }
}

function addWaterStressLayer() {
  if (!map) return

  stressLayer.clearLayers()
  clearDomLabels(stressLabels)

  waterStressAreas.forEach(item => {
    L.circle([item.lat, item.lng], {
      radius: 420000,
      color: '#f97316',
      weight: 2,
      fillColor: '#f97316',
      fillOpacity: 0.18,
      opacity: 0.75,
      interactive: false,
    }).addTo(stressLayer)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: 'stress-label-dom',
      offsetX: 0,
      offsetY: 0,
    })

    if (label) {
      stressLabels.push(label)
    }
  })

  stressLayer.addTo(map)
}

function addDesalinationLayer() {
  if (!map) return

  desalinationLayer.clearLayers()
  clearDomLabels(desalinationLabels)

  desalinationPoints.forEach(item => {
    L.circleMarker([item.lat, item.lng], {
      radius: 5,
      color: '#0284c7',
      weight: 2,
      fillColor: '#e0f2fe',
      fillOpacity: 1,
      interactive: false,
    }).addTo(desalinationLayer)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: 'desalination-label-dom',
      offsetX: item.offsetX ?? 10,
      offsetY: item.offsetY ?? -2,
    })

    if (label) {
      desalinationLabels.push(label)
    }
  })

  desalinationLayer.addTo(map)
}

function addOasisLayer() {
  if (!map) return

  oasisLayer.clearLayers()
  clearDomLabels(oasisLabels)

  oasisPoints.forEach(item => {
    L.circleMarker([item.lat, item.lng], {
      radius: 5,
      color: '#047857',
      weight: 2,
      fillColor: '#bbf7d0',
      fillOpacity: 1,
      interactive: false,
    }).addTo(oasisLayer)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: 'oasis-label-dom',
      offsetX: item.offsetX ?? 10,
      offsetY: item.offsetY ?? -2,
    })

    if (label) {
      oasisLabels.push(label)
    }
  })

  oasisLayer.addTo(map)
}

function refreshMapLayers() {
  if (!map) return

  if (showRivers.value) {
    addRiverLayer()
  } else {
    clearRiverLayer()
  }

  if (showWaterStress.value) {
    addWaterStressLayer()
  } else {
    stressLayer.clearLayers()
    clearDomLabels(stressLabels)
  }

  if (showDesalination.value) {
    addDesalinationLayer()
  } else {
    desalinationLayer.clearLayers()
    clearDomLabels(desalinationLabels)
  }

  if (showOasis.value) {
    addOasisLayer()
  } else {
    oasisLayer.clearLayers()
    clearDomLabels(oasisLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  clearRiverLayer()

  if (!map) return

  stressLayer.clearLayers()
  desalinationLayer.clearLayers()
  oasisLayer.clearLayers()

  if (map.hasLayer(stressLayer)) stressLayer.removeFrom(map)
  if (map.hasLayer(desalinationLayer)) desalinationLayer.removeFrom(map)
  if (map.hasLayer(oasisLayer)) oasisLayer.removeFrom(map)

  clearDomLabels(stressLabels)
  clearDomLabels(desalinationLabels)
  clearDomLabels(oasisLabels)
}

onMounted(async () => {
  map = L.map('waterMap', {
    zoomControl: true,
    attributionControl: false,
    minZoom: 2,
    maxZoom: 7,
    dragging: true,
    scrollWheelZoom: true,
    zoomAnimation: false,
    markerZoomAnimation: false,
    fadeAnimation: false,
  }).setView([centerLat, centerLng], zoomLevel)

  switchBaseLayer()
  initLabelPane()
  bindMapLabelEvents()
  refreshMapLayers()

  await nextTick()

  requestAnimationFrame(() => {
    map?.invalidateSize(false)
    scheduleUpdateLabels()
  })
})

onUnmounted(() => {
  if (updateLabelRaf) {
    cancelAnimationFrame(updateLabelRaf)
    updateLabelRaf = 0
  }

  unbindMapLabelEvents()
  cleanupMapLayers()

  if (baseLayer && map) {
    baseLayer.removeFrom(map)
    baseLayer = null
  }

  if (labelPane) {
    labelPane.remove()
    labelPane = null
  }

  if (map) {
    map.remove()
    map = null
  }
})
</script>

<style scoped lang="scss">
.water-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.water-header {
  margin-bottom: 32px;
}

.water-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.water-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.water-content-right {
  width: 61%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  position: relative;
}

:deep(.leaflet-map) {
  width: 100%;
  height: 100%;
  z-index: 1;
}

.water-card {
  border-radius: 8px;
  border: 1px solid #dbeafe;
  padding: 14px;
  background: #eff6ff;
}

.water-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #1e3a8a;
}

.iconfont {
  margin-right: 8px;
  color: #1e3a8a;
}

.water-card-01 {
  background: #eff6ff;
  border-color: #dbeafe;
}

.water-card-02 {
  background: #f0fdf4;
  border-color: #bbf7d0;
}

.water-card-02 .water-card-header,
.water-card-02 .iconfont {
  color: #047857;
}

.water-card-03 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.water-card-03 .water-card-header,
.water-card-03 .iconfont {
  color: #9a3412;
}

.water-card-04 {
  background: #fefce8;
  border-color: #fde68a;
}

.water-card-04 .water-card-header,
.water-card-04 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.mb-2 {
  margin-bottom: 2px;
}

.pl-5 {
  padding-left: 20px;
}

.list-disc {
  list-style: disc;
}

.water-card p {
  line-height: 1.65;
  color: #1f2937;
  margin-top: 0;
}

.contrast-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 12px 0;
}

.contrast-item {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
}

.contrast-item.oil {
  border: 1px solid #fed7aa;
}

.contrast-item.water {
  border: 1px solid #bfdbfe;
}

.contrast-title {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 4px;
}

.contrast-value {
  font-weight: bold;
  font-size: 20px;
  color: #0f2748;
  margin-bottom: 4px;
}

.contrast-desc {
  font-size: 12px;
  color: #475569;
  line-height: 1.4;
}

.note-box {
  padding: 8px 10px;
  border-radius: 6px;
  background: #fff;
  border-left: 3px solid #2563eb;
  font-size: 13px;
  color: #374151;
}

.note-title {
  font-weight: bold;
  color: #1e3a8a;
  margin-bottom: 4px;
}

.source-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid #0ea5e9;
  margin-bottom: 8px;
}

.source-item:last-child {
  margin-bottom: 0;
}

.source-title {
  font-weight: bold;
  color: #075985;
  margin-bottom: 4px;
}

.source-desc {
  font-size: 13px;
  color: #444;
  line-height: 1.45;
}

.exam-list {
  margin: 0;
  padding-left: 18px;
  color: #3f2f12;
  line-height: 1.6;
}

.exam-list li {
  margin-bottom: 6px;
}

.exam-list li:last-child {
  margin-bottom: 0;
}

.exam-list strong {
  color: #b45309;
}

.map-tip {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.95);
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  color: #666;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}

.map-control-panel {
  position: absolute;
  top: 48px;
  right: 10px;
  width: 190px;
  background: rgba(255, 255, 255, 0.95);
  padding: 10px;
  border-radius: 6px;
  font-size: 12px;
  color: #333;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

.panel-title {
  font-weight: bold;
  margin-bottom: 8px;
}

.map-control-panel label {
  display: block;
  margin-bottom: 6px;
}

.map-control-panel label:last-of-type {
  margin-bottom: 0;
}

.map-legend {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}

.legend-title {
  font-weight: bold;
  margin-bottom: 6px;
}

.legend-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  line-height: 1.35;
}

.legend-row:last-child {
  margin-bottom: 0;
}

.legend-line {
  width: 24px;
  height: 0;
  display: inline-block;
  flex-shrink: 0;
}

.river-line {
  border-top: 3px solid #2563eb;
}

.legend-area {
  width: 14px;
  height: 10px;
  border-radius: 999px;
  display: inline-block;
  flex-shrink: 0;
}

.stress-area {
  background: rgba(249, 115, 22, 0.3);
  border: 1px solid #f97316;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.desalination-dot {
  background: #e0f2fe;
  border: 2px solid #0284c7;
}

.oasis-dot {
  background: #bbf7d0;
  border: 2px solid #047857;
}

:deep(.custom-map-label-pane) {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 650;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

:deep(.river-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 13px;
  font-weight: bold;
  color: #1d4ed8;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(37, 99, 235, 0.55);
  border-radius: 999px;
  padding: 2px 7px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  text-shadow: 0 0 2px #fff;
}

:deep(.stress-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 13px;
  font-weight: bold;
  color: #c2410c;
  background: rgba(255, 247, 237, 0.9);
  border: 1px solid rgba(249, 115, 22, 0.55);
  border-radius: 999px;
  padding: 2px 7px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.desalination-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #0369a1;
  background: rgba(240, 249, 255, 0.92);
  border: 1px solid rgba(2, 132, 199, 0.6);
  border-radius: 4px;
  padding: 2px 5px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.oasis-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #047857;
  background: rgba(240, 253, 244, 0.92);
  border: 1px solid rgba(4, 120, 87, 0.6);
  border-radius: 4px;
  padding: 2px 5px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}
</style>
