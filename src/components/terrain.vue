<template>
  <div class="terrain-container">
    <div class="terrain-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="terrain-content">
      <!-- 左侧文字内容区 -->
      <div class="terrain-content-left">
        <div class="terrain-card terrain-card-01">
          <div class="terrain-card-header"><i class="iconfont icon-haibagaodu"></i>地形与海拔特征</div>

          <p class="mb-8">西亚地形并非单一高原，而是由高原、山地、沙漠、盆地和平原共同组成，整体起伏较大，地势高低差异明显。</p>

          <ul class="list-disc pl-5 mb-8">
            <li class="mb-2"><strong>安纳托利亚高原</strong>：位于区域西北部，周缘山地发育，地势起伏明显。</li>
            <li class="mb-2"><strong>伊朗高原</strong>：位于区域东北部和东部，海拔较高，周围受山脉环绕。</li>
            <li class="mb-2"><strong>阿拉伯高原</strong>：位于阿拉伯半岛，整体以干旱高原和沙漠地貌为主，西部地势较高，向东部和波斯湾沿岸降低。</li>
          </ul>

          <p class="mb-8">区域低地主要分布在美索不达米亚平原、波斯湾沿岸和地中海东岸等地；死海湖面低于海平面约430米，是世界陆地最低地区之一。</p>
        </div>

        <div class="terrain-card terrain-card-02">
          <div class="terrain-card-header"><i class="iconfont icon-gaoyuanfanyingshengu"></i>主要河流与山地</div>

          <div class="geo-item mb-6">
            <div class="item-title">幼发拉底河、底格里斯河</div>
            <div class="item-desc">两河自北部山地流向波斯湾方向，冲积形成美索不达米亚平原，是西亚重要的农业和文明发祥区域。</div>
          </div>

          <div class="geo-item mb-6">
            <div class="item-title">扎格罗斯山脉</div>
            <div class="item-desc">位于伊朗高原西南缘，是伊朗高原与美索不达米亚低地之间的重要地形分界。</div>
          </div>

          <div class="geo-item">
            <div class="item-title">大高加索山脉</div>
            <div class="item-desc">位于西亚北缘附近，山地高耸，对区域北部地形格局和水汽分布具有重要影响。</div>
          </div>
        </div>

        <div class="terrain-card terrain-card-03">
          <div class="terrain-card-header"><i class="iconfont icon-jiangshui"></i>降水分布特点</div>

          <p class="mb-8">西亚整体干旱、半干旱范围广，但降水并非处处稀少，空间差异很明显。</p>

          <ul class="list-disc pl-5 mb-4">
            <li class="mb-2"><strong>地中海沿岸</strong>：受地中海气候影响，降水多集中在冬季。</li>
            <li class="mb-2"><strong>山地迎风坡</strong>：受地形抬升影响，局部降水相对较多。</li>
            <li class="mb-2"><strong>阿拉伯半岛内陆与伊朗高原内部</strong>：远离海洋且受干旱气候控制，降水稀少，荒漠和半荒漠广布。</li>
          </ul>
        </div>

        <div class="terrain-card terrain-card-04">
          <div class="terrain-card-header"><i class="iconfont icon-quanqiuqihou"></i>气候类型概况</div>

          <p class="mb-8">西亚以干旱、半干旱气候为主，但受纬度、海陆位置和地形影响，气候类型具有明显地域差异。</p>

          <div class="climate-item mb-6">
            <div class="item-title">热带、亚热带沙漠气候</div>
            <div class="item-desc">主要分布在阿拉伯半岛、叙利亚沙漠和伊朗南部等地，降水稀少，蒸发强烈。</div>
          </div>

          <div class="climate-item mb-6">
            <div class="item-title">地中海气候</div>
            <div class="item-desc">主要分布在地中海东岸和土耳其西部、南部沿海，表现为夏季炎热干燥、冬季温和多雨。</div>
          </div>

          <div class="climate-item">
            <div class="item-title">温带大陆性与高山气候</div>
            <div class="item-desc">多见于安纳托利亚高原、伊朗高原及其周边山地，气温年较差较大，山地垂直差异明显。</div>
          </div>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="terrain-content-right">
        <div id="westAsiaMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看细节</div>

        <!-- 右侧图层控制 + 海拔图例 -->
        <div class="layer-control-panel">
          <div class="panel-title">图层控制</div>

          <div class="layer-item" v-for="layer in layerList.filter(item => (!isEnhance ? item.id !== 'asia-river' : true))" :key="layer.id">
            <label>
              <input type="checkbox" :checked="layer.visible" @change="handleLayerChange(layer.id, $event)" />
              {{ layer.name }}
            </label>
          </div>

          <div class="elevation-legend">
            <div class="legend-title">海拔图例</div>

            <div class="legend-gradient"></div>

            <div class="legend-scale">
              <span>低</span>
              <span>高</span>
            </div>

            <div class="legend-item">
              <span class="legend-color sea-low"></span>
              <span>低于0米：洼地、死海沿岸</span>
            </div>

            <div class="legend-item">
              <span class="legend-color lowland"></span>
              <span>0–200米：平原、沿海低地</span>
            </div>

            <div class="legend-item">
              <span class="legend-color plain"></span>
              <span>200–500米：低高原、盆地</span>
            </div>

            <div class="legend-item">
              <span class="legend-color plateau"></span>
              <span>500–1500米：高原、丘陵</span>
            </div>

            <div class="legend-item">
              <span class="legend-color mountain"></span>
              <span>1500–3000米：山地、高原边缘</span>
            </div>

            <div class="legend-item">
              <span class="legend-color high-mountain"></span>
              <span>3000米以上：高山地区</span>
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
import { GEOJSON_MAP, TILE_MAP } from '@/resource'

defineProps<{
  current: {
    title: string
    desc: string
    index: number
  }
  isEnhance: boolean
}>()

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

const centerLat = 25.5
const centerLng = 45.5
const zoomLevel = 5

type DomLabel = {
  latlng: L.LatLng
  el: HTMLDivElement
  offsetX: number
  offsetY: number
}

type GeoLayerConfig = {
  id: string
  name: string
  visible: boolean
  layer: L.GeoJSON | null
  labels: DomLabel[]
  abortController: AbortController | null
  data: GeoJSON.FeatureCollection<GeoJSON.Geometry, GeoJSON.GeoJsonProperties> | null
}

const layerList = ref<GeoLayerConfig[]>([
  {
    id: 'asia-climate',
    name: '亚洲气候类型',
    visible: false,
    layer: null,
    labels: [],
    abortController: null,
    data: GEOJSON_MAP['亚洲气候类型']!,
  },
  {
    id: 'westasia-rain',
    name: '西亚年降水量分布',
    visible: false,
    layer: null,
    labels: [],
    abortController: null,
    data: GEOJSON_MAP['西亚年降水量分布']!,
  },
  {
    id: 'westasia-river',
    name: '西亚主要河流分布',
    visible: false,
    layer: null,
    labels: [],
    abortController: null,
    data: GEOJSON_MAP['西亚主要河流分布']!,
  },
  {
    id: 'asia-river',
    name: '亚洲主要河流分布',
    visible: false,
    layer: null,
    labels: [],
    abortController: null,
    data: GEOJSON_MAP['亚洲主要河流分布']!,
  },
])

const fixedLabels: DomLabel[] = []

const charPathList = [
  {
    path: [
      [39.8, 33.2],
      [39.2, 34.8],
    ],
    text: '安纳托利亚高原',
  },
  {
    path: [
      [33.5, 50.2],
      [32.2, 52.8],
    ],
    text: '伊朗高原',
  },
  {
    path: [
      [27.2, 41.5],
      [23.8, 44.2],
    ],
    text: '阿拉伯高原',
  },
  {
    path: [
      [31.8, 35.4],
      [31.0, 35.4],
    ],
    text: '死海',
  },
  {
    path: [
      [36.8, 38.2],
      [34.2, 41.5],
    ],
    text: '幼发拉底河',
  },
  {
    path: [
      [37.2, 43.2],
      [34.8, 43.8],
    ],
    text: '底格里斯河',
  },
  {
    path: [
      [41.8, 44.5],
      [41.2, 47.2],
    ],
    text: '大高加索山脉',
  },
  {
    path: [
      [35.2, 46.2],
      [32.8, 49.2],
    ],
    text: '扎格罗斯山脉',
  },
  {
    path: [
      [33.8, 43.8],
      [32.2, 45.8],
    ],
    text: '美索不达米亚平原',
  },
]

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function getPointsOnPath(path: number[][], count: number): [number, number][] {
  const pts: [number, number][] = []

  if (!path.length || count <= 0) return pts

  if (path.length === 1) {
    for (let i = 0; i < count; i++) {
      pts.push([path[0]![0]!, path[0]![1]!])
    }
    return pts
  }

  const start = path[0]
  const end = path[path.length - 1]!

  const latStep = (end[0]! - start![0]!) / (count - 1 || 1)
  const lngStep = (end[1]! - start![1]!) / (count - 1 || 1)

  for (let i = 0; i < count; i++) {
    pts.push([start![0]! + latStep * i, start![1]! + lngStep * i])
  }

  return pts
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

  fixedLabels.forEach(updateOneLabelPosition)

  layerList.value.forEach(layer => {
    layer.labels.forEach(updateOneLabelPosition)
  })
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

function addSingleCharLabel() {
  clearDomLabels(fixedLabels)

  charPathList.forEach(item => {
    const chars = item.text.split('')
    const points = getPointsOnPath(item.path, chars.length)

    chars.forEach((char, idx) => {
      const point = points[idx]
      if (!point) return

      const label = createDomLabel({
        lat: point[0],
        lng: point[1],
        content: char,
        className: 'single-char-label-dom',
        offsetX: 0,
        offsetY: 0,
      })

      if (label) {
        fixedLabels.push(label)
      }
    })
  })

  scheduleUpdateLabels()
}

function initBaseMap() {
  if (!map) return

  if (baseLayer) {
    baseLayer.removeFrom(map)
    baseLayer = null
  }

  const url = TILE_MAP['otm']!

  baseLayer = L.tileLayer(url, {
    attribution: '',
    minZoom: 2,
    maxZoom: 5,
  }).addTo(map)
}

function clearLayerResources(layerConfig: GeoLayerConfig) {
  if (layerConfig.abortController) {
    layerConfig.abortController.abort()
    layerConfig.abortController = null
  }

  clearDomLabels(layerConfig.labels)

  if (layerConfig.layer && map) {
    layerConfig.layer.removeFrom(map)
    layerConfig.layer = null
  }
}

function handleLayerChange(id: string, event: Event) {
  const target = event.target as HTMLInputElement
  toggleGeoJsonLayer(id, target.checked)
}

function getLayerLabelClassName(id: string) {
  if (id === 'westasia-rain') return 'rain-label-dom'
  if (id === 'westasia-river' || id === 'asia-river') return 'river-label-dom'
  return 'climate-label-dom'
}

function getLineLayerStyle(id: string, props: any) {
  const isRiverLayer = id === 'westasia-river' || id === 'asia-river'

  return {
    color: props.strokeColor || props.fillColor || (isRiverLayer ? '#0ea5e9' : '#2563eb'),
    weight: props.weight || (isRiverLayer ? 3 : 2),
    opacity: props.opacity ?? 1,
    dashArray: props.dashArray || '',
  }
}

async function toggleGeoJsonLayer(id: string, visible: boolean) {
  if (!map) return

  const layerConfig = layerList.value.find(l => l.id === id)
  if (!layerConfig) return

  clearLayerResources(layerConfig as GeoLayerConfig)

  layerConfig.visible = visible

  if (!visible) return

  const abortController = new AbortController()
  layerConfig.abortController = abortController

  try {
    const data = (await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(layerConfig.data!)
      }, 500)
    })) as GeoJSON.FeatureCollection<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>

    if (abortController.signal.aborted || !layerConfig.visible || !map) {
      return
    }

    layerConfig.layer = L.geoJSON(data!, {
      filter: feature => {
        const type = feature?.geometry?.type
        return type !== 'Point' && type !== 'MultiPoint'
      },

      style: feature => {
        const props = feature?.properties || {}
        const geometryType = feature?.geometry?.type

        if (geometryType === 'MultiLineString' || geometryType === 'LineString') {
          return getLineLayerStyle(id, props)
        }

        return {
          color: props.strokeColor || 'rgba(255, 255, 255, 0)',
          weight: props.weight || 2,
          fillColor: props.fillColor || '#cccccc',
          fillOpacity: props.fillOpacity ?? 0.8,
          opacity: props.opacity ?? 1,
        }
      },
    }).addTo(map)

    addGeoJsonDomLabels(data, id, layerConfig as GeoLayerConfig)

    await nextTick()

    map.invalidateSize(false)
    scheduleUpdateLabels()
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.log(`图层 ${layerConfig.name} 请求已取消`)
    } else {
      console.error(`加载图层 ${layerConfig.name} 失败:`, error)
      layerConfig.visible = false
      layerConfig.layer = null
      clearDomLabels(layerConfig.labels)
    }
  } finally {
    if (layerConfig.abortController === abortController) {
      layerConfig.abortController = null
    }
  }
}

function addGeoJsonDomLabels(geojson: any, id: string, layerConfig: GeoLayerConfig) {
  const features = getGeoJsonFeatures(geojson)

  features.forEach((feature: any) => {
    if (!feature?.geometry) return

    const type = feature.geometry.type

    if (type === 'Point') {
      addGeoJsonPointLabel(feature, id, layerConfig)
    }

    if (type === 'MultiPoint') {
      const coordinates = feature.geometry.coordinates
      if (!Array.isArray(coordinates)) return

      coordinates.forEach((coord: any) => {
        addGeoJsonPointLabel(
          {
            ...feature,
            geometry: {
              type: 'Point',
              coordinates: coord,
            },
          },
          id,
          layerConfig,
        )
      })
    }
  })

  scheduleUpdateLabels()
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

function addGeoJsonPointLabel(feature: any, id: string, layerConfig: GeoLayerConfig) {
  const labelText = feature.properties?.labelText || feature.properties?.name
  if (!labelText) return

  const coordinates = feature.geometry?.coordinates
  if (!Array.isArray(coordinates) || coordinates.length < 2) return

  const lng = Number(coordinates[0])
  const lat = Number(coordinates[1])

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return

  const content = id === 'westasia-rain' ? `${labelText}mm` : `${labelText}`

  const label = createDomLabel({
    lat,
    lng,
    content,
    className: getLayerLabelClassName(id),
    offsetX: 0,
    offsetY: -8,
  })

  if (label) {
    layerConfig.labels.push(label)
  }
}

function cleanupAllLayers() {
  layerList.value.forEach(layerConfig => {
    clearLayerResources(layerConfig as GeoLayerConfig)
    layerConfig.visible = false
  })
}

onMounted(() => {
  map = L.map('westAsiaMap', {
    zoomControl: true,
    attributionControl: false,
    minZoom: 2,
    maxZoom: 5,
    dragging: true,
    scrollWheelZoom: true,
    zoomAnimation: false,
    markerZoomAnimation: false,
    fadeAnimation: false,
  }).setView([centerLat, centerLng], zoomLevel)

  initBaseMap()
  initLabelPane()
  bindMapLabelEvents()
  addSingleCharLabel()

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

  cleanupAllLayers()
  clearDomLabels(fixedLabels)

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
.terrain-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.terrain-header {
  margin-bottom: 32px;
}

.terrain-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
}

.terrain-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
}

.terrain-content-right {
  width: 60%;
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

.map-tip {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  color: #666;
  z-index: 1000;
}

.terrain-card {
  border-radius: 8px;
  border: 1px solid #dbeafe;
  padding: 14px;
}

.terrain-card-01 {
  background-color: #eff6ff;
}

.terrain-card-02 {
  background-color: #f0fdf4;
  border-color: #bbf7d0;
}

.terrain-card-03 {
  background-color: #f0f7ff;
  border-color: #bfdbfe;
}

.terrain-card-04 {
  background-color: #ffefd6;
  border-color: #ffce80;
}

.iconfont {
  margin-right: 8px;
  color: #1e3a8a;
}

.terrain-card-02 .iconfont {
  color: #047857;
}

.terrain-card-03 .iconfont {
  color: #2563eb;
}

.terrain-card-04 .iconfont {
  color: #78350f;
}

.terrain-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #1e3a8a;
}

.terrain-card-02 .terrain-card-header {
  color: #047857;
}

.terrain-card-03 .terrain-card-header {
  color: #2563eb;
}

.terrain-card-04 .terrain-card-header {
  color: #78350f;
}

.mb-8 {
  margin-bottom: 8px;
}

.mb-6 {
  margin-bottom: 6px;
}

.mb-4 {
  margin-bottom: 4px;
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

.geo-item,
.climate-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 4px;
  border-left: 3px solid #f59e0b;
}

.item-title {
  font-weight: bold;
  margin-bottom: 4px;
  color: #78350f;
}

.item-desc {
  font-size: 14px;
  color: #444;
}

/* 右侧图层控制面板 + 海拔图例 */
.layer-control-panel {
  position: absolute;
  top: 48px;
  right: 10px;
  width: 230px;
  max-height: calc(100% - 70px);
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.95);
  padding: 10px;
  border-radius: 6px;
  font-size: 12px;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

.panel-title {
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

.layer-item {
  margin-bottom: 6px;
}

.layer-item:last-of-type {
  margin-bottom: 0;
}

/* 海拔图例 */
.elevation-legend {
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}

.legend-title {
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

.legend-gradient {
  width: 100%;
  height: 12px;
  border-radius: 999px;
  margin-bottom: 4px;
  background: linear-gradient(to right, #63b7d8 0%, #7fc97f 18%, #c9e89a 35%, #f2d27a 52%, #c98645 72%, #8b4a2b 90%, #f3efe2 100%);
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.legend-scale {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: #666;
  margin-bottom: 8px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 5px;
  line-height: 1.4;
  color: #333;
}

.legend-item:last-child {
  margin-bottom: 0;
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.legend-color.sea-low {
  background: #63b7d8;
}

.legend-color.lowland {
  background: #7fc97f;
}

.legend-color.plain {
  background: #c9e89a;
}

.legend-color.plateau {
  background: #f2d27a;
}

.legend-color.mountain {
  background: #c98645;
}

.legend-color.high-mountain {
  background: #8b4a2b;
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

:deep(.single-char-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: bold;
  color: #d92525;
  text-shadow: 0 0 2px #fff;
  padding: 4px;
  background-color: #fff;
  border-radius: 2px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.climate-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.rain-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: rgba(30, 64, 175, 0.8);
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.river-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: rgba(14, 116, 144, 0.86);
  color: #fff;
  padding: 2px 7px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  box-shadow:
    0 2px 6px rgba(15, 39, 72, 0.18),
    0 0 0 1px rgba(255, 255, 255, 0.45);
}
</style>
