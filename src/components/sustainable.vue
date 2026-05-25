<template>
  <div class="sustainable-container">
    <div class="sustainable-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="sustainable-content">
      <!-- 左侧内容区 -->
      <div class="sustainable-content-left">
        <div class="sustainable-card sustainable-card-01">
          <div class="sustainable-card-header"><i class="iconfont icon-huiyuanfazhanqushi"></i>为什么要可持续发展</div>

          <p class="mb-8">
            西亚部分国家依靠石油资源获得较高收入，但石油属于<strong>非可再生资源</strong>，长期依赖石油出口容易受到国际能源价格波动影响。
          </p>

          <p class="mb-8">
            同时，西亚普遍面临<strong>水资源短缺、生态环境脆弱、农业用水压力大</strong>等问题，因此必须推动经济、资源和环境协调发展。
          </p>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>
              西亚可持续发展的关键，是从<strong>“依赖石油”</strong>逐步走向
              <strong>“产业多元、节水高效、能源转型、环境友好”</strong>。
            </div>
          </div>
        </div>

        <div class="sustainable-card sustainable-card-02">
          <div class="sustainable-card-header"><i class="iconfont icon-zhuanxingliyong"></i>四条主要转型路径</div>

          <div class="path-grid">
            <div class="path-card oil-path">
              <div class="path-icon">⛽</div>
              <div class="path-title">石油经济转型</div>
              <div class="path-desc">发展金融、航空、港口、旅游、会展和高端服务业，降低单一石油出口依赖。</div>
            </div>

            <div class="path-card water-path">
              <div class="path-icon">💧</div>
              <div class="path-title">水资源高效利用</div>
              <div class="path-desc">发展海水淡化、污水回用、节水灌溉和城市节水管理，提高淡水利用效率。</div>
            </div>

            <div class="path-card solar-path">
              <div class="path-icon">☀</div>
              <div class="path-title">太阳能开发</div>
              <div class="path-desc">利用日照充足、荒漠面积广的条件，发展太阳能等可再生能源。</div>
            </div>

            <div class="path-card eco-path">
              <div class="path-icon">🌿</div>
              <div class="path-title">生态与农业改善</div>
              <div class="path-desc">推广滴灌、温室农业和耐旱作物，减少过度开采地下水和土地退化。</div>
            </div>
          </div>
        </div>

        <div class="sustainable-card sustainable-card-03">
          <div class="sustainable-card-header"><i class="iconfont icon-shuiziyuan"></i>水资源与农业可持续</div>

          <div class="measure-item">
            <div class="measure-title">海水淡化</div>
            <div class="measure-desc">沿海富油国家利用资金和能源优势发展海水淡化，缓解城市生活与工业用水压力。</div>
          </div>

          <div class="measure-item">
            <div class="measure-title">节水农业</div>
            <div class="measure-desc">在绿洲和灌溉农业区推广滴灌、喷灌和温室农业，减少大水漫灌造成的水资源浪费。</div>
          </div>

          <div class="measure-item">
            <div class="measure-title">地下水保护</div>
            <div class="measure-desc">干旱区过度抽取地下水会导致水位下降和土地退化，因此需要控制开采强度。</div>
          </div>
        </div>

        <div class="sustainable-card sustainable-card-04">
          <div class="sustainable-card-header"><i class="iconfont icon-nengyuan"></i>能源转型与城市发展</div>

          <div class="city-transform">
            <div class="city-transform-title">从“资源型经济”到“综合型经济”</div>
            <div class="city-transform-desc">一些海湾城市依托港口、机场、金融、旅游、商业服务和高端制造，逐步增强非石油产业比重。</div>
          </div>

          <div class="city-transform">
            <div class="city-transform-title">从“化石能源”到“多元能源”</div>
            <div class="city-transform-desc">在石油天然气仍占重要地位的同时，部分国家积极发展太阳能、绿色制氢等新能源方向。</div>
          </div>

          <div class="city-transform">
            <div class="city-transform-title">从“高耗水农业”到“节水农业”</div>
            <div class="city-transform-desc">通过技术改良和农业结构调整，提高单位水资源产出，减轻干旱区生态压力。</div>
          </div>
        </div>

        <div class="sustainable-card sustainable-card-05">
          <div class="sustainable-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一看资源：</strong>石油丰富，但属于非可再生资源。</li>
            <li><strong>二看短板：</strong>水资源短缺、生态环境脆弱。</li>
            <li><strong>三看方向：</strong>发展多元经济、节水农业、海水淡化和新能源。</li>
            <li><strong>四看条件：</strong>太阳能开发潜力大，沿海城市具备港口和贸易优势。</li>
            <li><strong>五看本质：</strong>从资源依赖型发展转向可持续、综合型发展。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="sustainable-content-right">
        <div id="sustainableMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看可持续发展方向</div>

        <div class="map-control-panel">
          <div class="panel-title">地图控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showDiversification" @change="refreshMapLayers" />
            多元化城市节点
          </label>

          <label>
            <input type="checkbox" v-model="showDesalination" @change="refreshMapLayers" />
            海水淡化重点区
          </label>

          <label>
            <input type="checkbox" v-model="showSolar" @change="refreshMapLayers" />
            太阳能潜力区
          </label>

          <label>
            <input type="checkbox" v-model="showWaterSaving" @change="refreshMapLayers" />
            节水农业示意区
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-dot city-dot"></span>
              <span>多元化城市节点</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot water-dot"></span>
              <span>海水淡化重点区</span>
            </div>

            <div class="legend-row">
              <span class="legend-area solar-area"></span>
              <span>太阳能潜力区</span>
            </div>

            <div class="legend-row">
              <span class="legend-area agri-area"></span>
              <span>节水农业示意区</span>
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

type SustainPoint = {
  name: string
  lat: number
  lng: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type SustainArea = {
  name: string
  lat: number
  lng: number
  radius: number
  desc: string
  color: string
}

type DomLabel = {
  latlng: L.LatLng
  el: HTMLDivElement
  offsetX: number
  offsetY: number
}

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

const centerLat = 25.5
const centerLng = 45.5
const zoomLevel = 5

const useGoogle = ref(false)
const showDiversification = ref(true)
const showDesalination = ref(true)
const showSolar = ref(true)
const showWaterSaving = ref(true)

const diversificationLayer = L.layerGroup()
const desalinationLayer = L.layerGroup()
const solarLayer = L.layerGroup()
const waterSavingLayer = L.layerGroup()

const diversificationLabels: DomLabel[] = []
const desalinationLabels: DomLabel[] = []
const solarLabels: DomLabel[] = []
const waterSavingLabels: DomLabel[] = []

const diversificationCities: SustainPoint[] = [
  {
    name: '迪拜',
    lat: 25.2048,
    lng: 55.2708,
    desc: '波斯湾沿岸重要的航空、港口、金融、旅游和商业服务中心，体现经济多元化方向。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '阿布扎比',
    lat: 24.4539,
    lng: 54.3773,
    desc: '依托能源基础发展金融、文化、航空和新能源产业，是海湾地区多元化发展的代表城市之一。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '多哈',
    lat: 25.2854,
    lng: 51.531,
    desc: '波斯湾西岸城市，依托能源收入发展航空、会展、体育和服务业。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '利雅得',
    lat: 24.7136,
    lng: 46.6753,
    desc: '阿拉伯半岛内陆重要城市，承担行政、金融和现代服务业中心功能。',
    offsetX: 10,
    offsetY: -2,
  },
]

const desalinationPoints: SustainPoint[] = [
  {
    name: '波斯湾沿岸淡化区',
    lat: 25.8,
    lng: 51.5,
    desc: '波斯湾沿岸人口和城市集中，海水淡化是缓解城市用水压力的重要方式。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '阿联酋沿岸淡化区',
    lat: 24.6,
    lng: 54.9,
    desc: '沿海城市用水需求大，海水淡化和再生水利用是重要补充。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '红海沿岸淡化区',
    lat: 21.5,
    lng: 39.3,
    desc: '红海沿岸城市可利用海水淡化缓解淡水不足问题。',
    offsetX: 10,
    offsetY: -2,
  },
]

const solarPotentialAreas: SustainArea[] = [
  {
    name: '阿拉伯半岛太阳能潜力区',
    lat: 23.5,
    lng: 45.5,
    radius: 620000,
    color: '#f59e0b',
    desc: '阿拉伯半岛日照强、荒漠面积广，太阳能开发潜力较大。',
  },
  {
    name: '伊朗高原太阳能潜力区',
    lat: 31.5,
    lng: 54.0,
    radius: 430000,
    color: '#f97316',
    desc: '伊朗高原内部干旱少云，具备发展太阳能的自然条件。',
  },
  {
    name: '约旦—内盖夫荒漠潜力区',
    lat: 30.5,
    lng: 35.8,
    radius: 180000,
    color: '#fbbf24',
    desc: '东地中海内陆荒漠和半荒漠地区，适合发展分布式太阳能利用。',
  },
]

const waterSavingAreas: SustainArea[] = [
  {
    name: '两河流域节水农业区',
    lat: 32.7,
    lng: 44.5,
    radius: 260000,
    color: '#22c55e',
    desc: '两河流域传统灌溉农业集中，推广节水灌溉有利于提高水资源利用效率。',
  },
  {
    name: '约旦河谷节水农业区',
    lat: 31.8,
    lng: 35.5,
    radius: 110000,
    color: '#16a34a',
    desc: '约旦河谷农业依赖稳定水源，节水技术对农业持续发展非常重要。',
  },
  {
    name: '海湾绿洲农业改良区',
    lat: 24.8,
    lng: 49.6,
    radius: 160000,
    color: '#0f766e',
    desc: '绿洲农业依赖地下水，发展滴灌和设施农业有助于减少水资源浪费。',
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

  if (oldPane) oldPane.remove()

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

  if (showDiversification.value) {
    diversificationLabels.forEach(updateOneLabelPosition)
  }

  if (showDesalination.value) {
    desalinationLabels.forEach(updateOneLabelPosition)
  }

  if (showSolar.value) {
    solarLabels.forEach(updateOneLabelPosition)
  }

  if (showWaterSaving.value) {
    waterSavingLabels.forEach(updateOneLabelPosition)
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

function bindInfoPopup(layer: L.Layer, title: string, desc: string) {
  if ('bindPopup' in layer && typeof layer.bindPopup === 'function') {
    layer.bindPopup(`
      <div style="min-width: 160px; line-height: 1.5;">
        <div style="font-weight: bold; margin-bottom: 4px;">${escapeHtml(title)}</div>
        <div style="font-size: 12px; color: #444;">${escapeHtml(desc)}</div>
      </div>
    `)
  }
}

function addDiversificationLayer() {
  if (!map) return

  diversificationLayer.clearLayers()
  clearDomLabels(diversificationLabels)

  diversificationCities.forEach(item => {
    const marker = L.circleMarker([item.lat, item.lng], {
      radius: 5.5,
      color: '#1e3a8a',
      weight: 2,
      fillColor: '#bfdbfe',
      fillOpacity: 1,
    }).addTo(diversificationLayer)

    bindInfoPopup(marker, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: 'diversification-label-dom',
      offsetX: item.offsetX ?? 10,
      offsetY: item.offsetY ?? -2,
    })

    if (label) diversificationLabels.push(label)
  })

  diversificationLayer.addTo(map)
}

function addDesalinationLayer() {
  if (!map) return

  desalinationLayer.clearLayers()
  clearDomLabels(desalinationLabels)

  desalinationPoints.forEach(item => {
    const marker = L.circleMarker([item.lat, item.lng], {
      radius: 5,
      color: '#0284c7',
      weight: 2,
      fillColor: '#e0f2fe',
      fillOpacity: 1,
    }).addTo(desalinationLayer)

    bindInfoPopup(marker, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: 'desalination-label-dom',
      offsetX: item.offsetX ?? 10,
      offsetY: item.offsetY ?? -2,
    })

    if (label) desalinationLabels.push(label)
  })

  desalinationLayer.addTo(map)
}

function addSolarLayer() {
  if (!map) return

  solarLayer.clearLayers()
  clearDomLabels(solarLabels)

  solarPotentialAreas.forEach(item => {
    const circle = L.circle([item.lat, item.lng], {
      radius: item.radius,
      color: item.color,
      weight: 2,
      fillColor: item.color,
      fillOpacity: 0.18,
      opacity: 0.85,
    }).addTo(solarLayer)

    bindInfoPopup(circle, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: 'solar-label-dom',
      offsetX: 0,
      offsetY: 0,
    })

    if (label) solarLabels.push(label)
  })

  solarLayer.addTo(map)
}

function addWaterSavingLayer() {
  if (!map) return

  waterSavingLayer.clearLayers()
  clearDomLabels(waterSavingLabels)

  waterSavingAreas.forEach(item => {
    const circle = L.circle([item.lat, item.lng], {
      radius: item.radius,
      color: item.color,
      weight: 2,
      fillColor: item.color,
      fillOpacity: 0.17,
      opacity: 0.85,
    }).addTo(waterSavingLayer)

    bindInfoPopup(circle, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: 'water-saving-label-dom',
      offsetX: 0,
      offsetY: 0,
    })

    if (label) waterSavingLabels.push(label)
  })

  waterSavingLayer.addTo(map)
}

function refreshMapLayers() {
  if (!map) return

  if (showSolar.value) {
    addSolarLayer()
  } else {
    solarLayer.clearLayers()
    clearDomLabels(solarLabels)
  }

  if (showWaterSaving.value) {
    addWaterSavingLayer()
  } else {
    waterSavingLayer.clearLayers()
    clearDomLabels(waterSavingLabels)
  }

  if (showDiversification.value) {
    addDiversificationLayer()
  } else {
    diversificationLayer.clearLayers()
    clearDomLabels(diversificationLabels)
  }

  if (showDesalination.value) {
    addDesalinationLayer()
  } else {
    desalinationLayer.clearLayers()
    clearDomLabels(desalinationLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  diversificationLayer.clearLayers()
  desalinationLayer.clearLayers()
  solarLayer.clearLayers()
  waterSavingLayer.clearLayers()

  if (map.hasLayer(diversificationLayer)) diversificationLayer.removeFrom(map)
  if (map.hasLayer(desalinationLayer)) desalinationLayer.removeFrom(map)
  if (map.hasLayer(solarLayer)) solarLayer.removeFrom(map)
  if (map.hasLayer(waterSavingLayer)) waterSavingLayer.removeFrom(map)

  clearDomLabels(diversificationLabels)
  clearDomLabels(desalinationLabels)
  clearDomLabels(solarLabels)
  clearDomLabels(waterSavingLabels)
}

onMounted(async () => {
  map = L.map('sustainableMap', {
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
.sustainable-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.sustainable-header {
  margin-bottom: 32px;
}

.sustainable-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.sustainable-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.sustainable-content-right {
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

.sustainable-card {
  border-radius: 8px;
  border: 1px solid #dbeafe;
  padding: 14px;
  background: #eff6ff;
}

.sustainable-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #1e3a8a;
}

.iconfont {
  margin-right: 8px;
  color: #1e3a8a;
}

.sustainable-card-01 {
  background: #eff6ff;
  border-color: #dbeafe;
}

.sustainable-card-02 {
  background: #f0fdf4;
  border-color: #bbf7d0;
}

.sustainable-card-02 .sustainable-card-header,
.sustainable-card-02 .iconfont {
  color: #047857;
}

.sustainable-card-03 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.sustainable-card-03 .sustainable-card-header,
.sustainable-card-03 .iconfont {
  color: #0369a1;
}

.sustainable-card-04 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.sustainable-card-04 .sustainable-card-header,
.sustainable-card-04 .iconfont {
  color: #9a3412;
}

.sustainable-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.sustainable-card-05 .sustainable-card-header,
.sustainable-card-05 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.sustainable-card p {
  line-height: 1.65;
  color: #1f2937;
  margin-top: 0;
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

.path-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.path-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #bbf7d0;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.path-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.path-title {
  font-weight: bold;
  margin-bottom: 4px;
  color: #065f46;
}

.path-desc {
  font-size: 12px;
  line-height: 1.45;
  color: #374151;
}

.oil-path {
  border-color: #fed7aa;
}

.oil-path .path-title {
  color: #9a3412;
}

.water-path {
  border-color: #bae6fd;
}

.water-path .path-title {
  color: #0369a1;
}

.solar-path {
  border-color: #fde68a;
}

.solar-path .path-title {
  color: #b45309;
}

.eco-path {
  border-color: #bbf7d0;
}

.eco-path .path-title {
  color: #047857;
}

.measure-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid #0ea5e9;
  margin-bottom: 8px;
}

.measure-item:last-child {
  margin-bottom: 0;
}

.measure-title {
  font-weight: bold;
  color: #075985;
  margin-bottom: 4px;
}

.measure-desc {
  font-size: 13px;
  color: #444;
  line-height: 1.45;
}

.city-transform {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid #f97316;
  margin-bottom: 8px;
}

.city-transform:last-child {
  margin-bottom: 0;
}

.city-transform-title {
  font-weight: bold;
  color: #9a3412;
  margin-bottom: 4px;
}

.city-transform-desc {
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
  width: 210px;
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

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.city-dot {
  background: #bfdbfe;
  border: 2px solid #1e3a8a;
  box-sizing: border-box;
}

.water-dot {
  background: #e0f2fe;
  border: 2px solid #0284c7;
  box-sizing: border-box;
}

.legend-area {
  width: 14px;
  height: 10px;
  border-radius: 999px;
  display: inline-block;
  flex-shrink: 0;
}

.solar-area {
  background: rgba(245, 158, 11, 0.25);
  border: 1px solid #f59e0b;
}

.agri-area {
  background: rgba(34, 197, 94, 0.22);
  border: 1px solid #16a34a;
}

/* 自定义地图文字层，避免 Leaflet tooltip 缩放错位 */
:deep(.custom-map-label-pane) {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 650;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

:deep(.diversification-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #1e3a8a;
  background: rgba(239, 246, 255, 0.92);
  border: 1px solid rgba(30, 58, 138, 0.55);
  border-radius: 4px;
  padding: 2px 5px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  text-shadow: 0 0 2px #fff;
}

:deep(.desalination-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #0369a1;
  background: rgba(240, 249, 255, 0.94);
  border: 1px solid rgba(2, 132, 199, 0.6);
  border-radius: 4px;
  padding: 2px 5px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.solar-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #b45309;
  background: rgba(255, 251, 235, 0.94);
  border: 1px solid rgba(245, 158, 11, 0.65);
  border-radius: 999px;
  padding: 3px 8px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.water-saving-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #047857;
  background: rgba(240, 253, 244, 0.94);
  border: 1px solid rgba(22, 163, 74, 0.65);
  border-radius: 999px;
  padding: 3px 8px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}
</style>
