<template>
  <div class="position-container">
    <div class="position-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="position-content">
      <!-- 左侧内容区 -->
      <div class="position-content-left">
        <div class="position-card position-card-01">
          <div class="position-card-header"><i class="iconfont icon-diqiu"></i>位置解析</div>

          <p class="mb-8" style="color: var(--text-color)">
            西亚地处亚洲西南部，位于亚洲、欧洲和非洲的交会地带，是沟通东西方与连接海陆交通的重要区域。
          </p>

          <p class="mb-8">
            <i class="iconfont icon-duihao"></i>
            <strong>联系三大洲</strong>：亚洲、欧洲、非洲。
          </p>

          <p class="mb-8">
            <i class="iconfont icon-duihao"></i>
            <strong>沟通两大洋</strong>：通过红海、苏伊士运河和地中海方向联系印度洋与大西洋。
          </p>

          <p class="mb-8">
            <i class="iconfont icon-duihao"></i>
            <strong>濒临五海</strong>：阿拉伯海、红海、地中海、黑海、里海。
          </p>

          <div class="note-box">
            <div class="note-title">说明</div>
            <div>里海是世界最大的内陆湖，教学中常放入“五海”一起记忆。</div>
            <div>波斯湾不是“五海”之一，但它是西亚石油运输和海上通道中的核心水域。</div>
          </div>
        </div>

        <div class="position-card position-card-04">
          <div class="position-card-header"><i class="iconfont icon-jingweidu"></i>经纬位置</div>

          <p class="mb-8">从经纬度看，西亚大致位于<strong>20°E—75°E</strong>、<strong>12°N—43°N</strong>之间，主体位于东半球和北半球。</p>

          <div class="geo-position-item">
            <div class="geo-position-title">经度位置</div>
            <div class="geo-position-desc">
              西起地中海东岸和小亚细亚一带，东到伊朗高原、阿富汗附近，整体跨经度较广，体现出东西交通过渡地带的特点。
            </div>
          </div>

          <div class="geo-position-item">
            <div class="geo-position-title">纬度位置</div>
            <div class="geo-position-desc">多位于北纬20°—40°之间，属于低纬到中纬过渡地区；北回归线穿过阿拉伯半岛中部，干旱、半干旱气候分布广。</div>
          </div>

          <div class="geo-position-item">
            <div class="geo-position-title">读图重点</div>
            <div class="geo-position-desc">观察地图上的30°N和40°N纬线，以及30°E、40°E、50°E、60°E经线，可帮助判断西亚在亚欧非交界处的位置。</div>
          </div>
        </div>

        <div class="position-card position-card-02">
          <div class="position-card-header"><i class="iconfont icon-anchor-full"></i>咽喉要道（考点重点）</div>

          <div class="position-card-module mb-8">
            <div class="mb-8"><strong>霍尔木兹海峡</strong></div>
            <p class="text">
              位于波斯湾与阿曼湾之间，是波斯湾石油外运的重要海上通道，常被称为
              <span style="color: red">“世界油阀”</span>。
            </p>
          </div>

          <div class="position-card-module mb-8">
            <div class="mb-8"><strong>苏伊士运河</strong></div>
            <p class="text">沟通红海与地中海，使印度洋到大西洋方向的航程大幅缩短，是亚欧非交通联系中的重要人工水道。</p>
          </div>

          <div class="position-card-module mb-8">
            <div class="mb-8"><strong>土耳其海峡</strong></div>
            <p class="text">包括博斯普鲁斯海峡、马尔马拉海和达达尼尔海峡，是黑海通往地中海方向的重要门户，也是传统亚欧分界线的一部分。</p>
          </div>

          <div class="position-card-module">
            <div class="mb-8"><strong>曼德海峡</strong></div>
            <p class="text">位于红海与亚丁湾之间，是红海进入印度洋方向的重要出口，与苏伊士运河共同影响欧亚海上交通。</p>
          </div>
        </div>

        <div class="position-card position-card-03">
          <div class="position-card-header"><i class="iconfont icon-kongjian"></i>空间记忆</div>

          <div class="memory-item">
            <div class="memory-title">西北方向</div>
            <div class="memory-desc">临近欧洲，联系黑海、地中海和土耳其海峡。</div>
          </div>

          <div class="memory-item">
            <div class="memory-title">西南方向</div>
            <div class="memory-desc">经红海、苏伊士运河联系非洲和地中海方向。</div>
          </div>

          <div class="memory-item">
            <div class="memory-title">东南方向</div>
            <div class="memory-desc">经波斯湾、霍尔木兹海峡、阿拉伯海联系印度洋。</div>
          </div>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="position-content-right">
        <div id="westAsiaMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看细节</div>

        <div class="map-control-panel">
          <div class="panel-title">地图控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showGraticule" @change="toggleGraticule" />
            显示经纬网
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-dot continent-dot"></span>
              <span>大洲</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot ocean-dot"></span>
              <span>海洋 / 水域</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot strait-dot"></span>
              <span>海峡 / 运河</span>
            </div>

            <div class="legend-row">
              <span class="legend-line graticule-line"></span>
              <span>经纬线</span>
            </div>

            <div class="legend-row">
              <span class="legend-line tropic-line"></span>
              <span>北回归线</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

defineProps<{
  current: {
    title: string
    desc: string
    index: number
  }
}>()

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

const centerLat = 10.5
const centerLng = 45.5
const zoomLevel = 5

const useGoogle = ref(false)
const showGraticule = ref(true)

type LabelType = 'continent' | 'ocean' | 'strait'

type MapLabelPoint = {
  name: string
  lat: number
  lng: number
  type: LabelType
  offsetX?: number
  offsetY?: number
}

type DomLabel = {
  latlng: L.LatLng
  el: HTMLDivElement
  offsetX: number
  offsetY: number
}

const markers: L.CircleMarker[] = []
const labels: DomLabel[] = []
const graticuleLabels: DomLabel[] = []

const graticuleLayer = L.layerGroup()

const mapLabelPoints: MapLabelPoint[] = [
  // 大洲
  { name: '亚洲', lat: 38, lng: 55, type: 'continent', offsetX: 10 },
  { name: '欧洲', lat: 42, lng: 22, type: 'continent', offsetX: 10 },
  { name: '非洲', lat: 15, lng: 30, type: 'continent', offsetX: 10 },

  // 大洋与重要水域
  { name: '印度洋', lat: 2, lng: 73, type: 'ocean', offsetX: 10 },
  { name: '大西洋', lat: 30, lng: -30, type: 'ocean', offsetX: 10 },
  { name: '里海', lat: 42, lng: 49, type: 'ocean', offsetX: 10 },
  { name: '地中海', lat: 34, lng: 30, type: 'ocean', offsetX: 10 },
  { name: '黑海', lat: 43, lng: 36, type: 'ocean', offsetX: 10 },
  { name: '红海', lat: 20, lng: 39, type: 'ocean', offsetX: 10 },
  { name: '阿拉伯海', lat: 14, lng: 55, type: 'ocean', offsetX: 10 },
  { name: '波斯湾', lat: 27, lng: 50, type: 'ocean', offsetX: 10 },

  // 咽喉要道
  { name: '霍尔木兹海峡', lat: 26.5, lng: 56, type: 'strait', offsetX: 10 },
  { name: '土耳其海峡', lat: 41, lng: 29, type: 'strait', offsetX: 10 },
  { name: '苏伊士运河', lat: 30, lng: 32, type: 'strait', offsetX: 10 },
  { name: '曼德海峡', lat: 12.6, lng: 43.3, type: 'strait', offsetX: 10 },
]

// 经线、纬线
const meridians = [20, 30, 40, 50, 60, 70]
const parallels = [10, 20, 23.5, 30, 40]

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

  labels.forEach(updateOneLabelPosition)

  if (showGraticule.value) {
    graticuleLabels.forEach(updateOneLabelPosition)
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

function getMarkerStyle(type: LabelType) {
  if (type === 'continent') {
    return {
      color: '#e53e3e',
      fillColor: '#e53e3e',
      radius: 5,
    }
  }

  if (type === 'ocean') {
    return {
      color: '#3182ce',
      fillColor: '#3182ce',
      radius: 4,
    }
  }

  return {
    color: '#222',
    fillColor: '#222',
    radius: 4,
  }
}

function getLabelClassName(type: LabelType) {
  if (type === 'continent') return 'continent-label-dom'
  if (type === 'ocean') return 'ocean-label-dom'
  return 'strait-label-dom'
}

function addMapLabels() {
  if (!map) return

  clearMapLabels()

  mapLabelPoints.forEach(item => {
    const style = getMarkerStyle(item.type)

    const marker = L.circleMarker([item.lat, item.lng], {
      radius: style.radius,
      color: style.color,
      weight: 1,
      fillColor: style.fillColor,
      fillOpacity: 1,
      interactive: false,
    }).addTo(map!)

    markers.push(marker)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: getLabelClassName(item.type),
      offsetX: item.offsetX ?? 10,
      offsetY: item.offsetY ?? 0,
    })

    if (label) {
      labels.push(label)
    }
  })

  scheduleUpdateLabels()
}

function clearMapLabels() {
  markers.forEach(marker => {
    if (map) marker.removeFrom(map)
  })

  markers.length = 0
  clearDomLabels(labels)
}

function clearDomLabels(targetLabels: DomLabel[]) {
  targetLabels.forEach(label => {
    label.el.remove()
  })

  targetLabels.length = 0
}

function buildLineByLng(lng: number): [number, number][] {
  const points: [number, number][] = []

  for (let lat = 0; lat <= 50; lat += 0.5) {
    points.push([lat, lng])
  }

  return points
}

function buildLineByLat(lat: number): [number, number][] {
  const points: [number, number][] = []

  for (let lng = -35; lng <= 80; lng += 0.5) {
    points.push([lat, lng])
  }

  return points
}

function formatLng(lng: number) {
  return `${Math.abs(lng)}°${lng >= 0 ? 'E' : 'W'}`
}

function formatLat(lat: number) {
  if (lat === 23.5) return '23.5°N 北回归线'
  return `${Math.abs(lat)}°${lat >= 0 ? 'N' : 'S'}`
}

function addGraticule() {
  if (!map) return

  clearGraticule()

  meridians.forEach(lng => {
    const linePoints = buildLineByLng(lng)

    // 经线白色描边
    L.polyline(linePoints, {
      color: '#ffffff',
      weight: 6,
      opacity: 0.95,
      interactive: false,
    }).addTo(graticuleLayer)

    // 经线主体
    L.polyline(linePoints, {
      color: '#4c1d95',
      weight: 2.6,
      opacity: 1,
      dashArray: '8 4',
      interactive: false,
    }).addTo(graticuleLayer)

    const label = createDomLabel({
      lat: 48,
      lng,
      content: formatLng(lng),
      className: 'graticule-label-dom',
      offsetX: 4,
      offsetY: 0,
    })

    if (label) graticuleLabels.push(label)
  })

  parallels.forEach(lat => {
    const linePoints = buildLineByLat(lat)
    const isTropic = lat === 23.5

    // 纬线白色描边
    L.polyline(linePoints, {
      color: '#ffffff',
      weight: isTropic ? 6 : 5,
      opacity: 0.92,
      interactive: false,
    }).addTo(graticuleLayer)

    // 纬线主体
    L.polyline(linePoints, {
      color: isTropic ? '#dc2626' : '#4c1d95',
      weight: isTropic ? 3 : 2.2,
      opacity: 1,
      dashArray: isTropic ? '12 5' : '8 4',
      interactive: false,
    }).addTo(graticuleLayer)

    const label = createDomLabel({
      lat,
      lng: -33,
      content: formatLat(lat),
      className: isTropic ? 'tropic-label-dom' : 'graticule-label-dom',
      offsetX: 0,
      offsetY: -4,
    })

    if (label) graticuleLabels.push(label)
  })

  graticuleLayer.addTo(map)
  scheduleUpdateLabels()
}

function clearGraticule() {
  graticuleLayer.clearLayers()
  clearDomLabels(graticuleLabels)

  if (map && map.hasLayer(graticuleLayer)) {
    graticuleLayer.removeFrom(map)
  }
}

function toggleGraticule() {
  if (showGraticule.value) {
    addGraticule()
  } else {
    clearGraticule()
  }

  scheduleUpdateLabels()
}

onMounted(() => {
  map = L.map('westAsiaMap', {
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

  if (showGraticule.value) {
    addGraticule()
  }

  addMapLabels()

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

  clearMapLabels()
  clearGraticule()

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
.position-container {
  padding: 16px;
  height: 100%;
  width: 100%;

  .position-header {
    margin-bottom: 32px;
  }

  .position-content {
    display: flex;
    justify-content: space-between;
    height: calc(100% - 80px);

    &-left {
      width: 32%;
      display: flex;
      flex-direction: column;
      gap: 12px;
      overflow-y: auto;
      padding-right: 4px;
    }

    &-right {
      width: 67%;
      height: 100%;
      border-radius: 8px;
      overflow: hidden;
      background: #fff;
      position: relative;

      :deep(.leaflet-map) {
        width: 100%;
        height: 100%;
        z-index: 1;
      }
    }
  }
}

.position-content-left {
  .position-card {
    background-color: #eff6ff;
    border-radius: 8px;
    border: 1px solid #dbeafe;
    padding: 14px;

    .iconfont {
      margin-right: 8px;
      color: #1e3a8a;
    }

    .position-card-header {
      color: #1e3a8a;
      margin-bottom: 12px;
      font-weight: bold;
      font-size: 15px;
    }
  }

  .position-card-02 {
    background-color: #ffefd6;
    border: 1px solid #ffce80;

    .iconfont {
      color: #78350f;
    }

    .position-card-header {
      color: #78350f;
    }

    .position-card-module {
      background-color: #fff;
      padding: 12px;
      border: 1px solid #ffb43c;
      border-radius: 8px;
    }
  }

  .position-card-03 {
    background-color: #f0fdf4;
    border: 1px solid #bbf7d0;

    .iconfont {
      color: #047857;
    }

    .position-card-header {
      color: #047857;
    }
  }

  .position-card-04 {
    background-color: #f8fafc;
    border: 1px solid #cbd5e1;

    .iconfont {
      color: #334155;
    }

    .position-card-header {
      color: #334155;
    }
  }
}

.mb-8 {
  margin-bottom: 8px;
}

.text {
  line-height: 1.5;
  color: #444;
}

.note-box {
  background: #fff;
  border-left: 3px solid #2563eb;
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 13px;
  color: #374151;
}

.note-title {
  font-weight: bold;
  color: #1e3a8a;
  margin-bottom: 4px;
}

.geo-position-item {
  background: #fff;
  border-left: 3px solid #64748b;
  border-radius: 6px;
  padding: 8px 10px;
  margin-bottom: 8px;
}

.geo-position-item:last-child {
  margin-bottom: 0;
}

.geo-position-title {
  font-weight: bold;
  color: #334155;
  margin-bottom: 4px;
}

.geo-position-desc {
  color: #444;
  font-size: 13px;
  line-height: 1.45;
}

.memory-item {
  background: #fff;
  border-left: 3px solid #10b981;
  border-radius: 6px;
  padding: 8px 10px;
  margin-bottom: 8px;
}

.memory-item:last-child {
  margin-bottom: 0;
}

.memory-title {
  color: #065f46;
  font-weight: bold;
  margin-bottom: 4px;
}

.memory-desc {
  color: #444;
  font-size: 13px;
  line-height: 1.45;
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
  z-index: 10;
}

.map-control-panel {
  position: absolute;
  top: 45px;
  right: 10px;
  width: 160px;
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
}

.legend-row:last-child {
  margin-bottom: 0;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
}

.continent-dot {
  background: #e53e3e;
}

.ocean-dot {
  background: #3182ce;
}

.strait-dot {
  background: #222;
}

.legend-line {
  width: 24px;
  height: 0;
  border-top: 3px dashed #4c1d95;
  display: inline-block;
}

.graticule-line {
  border-color: #4c1d95;
}

.tropic-line {
  border-color: #dc2626;
  border-top-width: 3px;
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

:deep(.continent-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 30px;
  font-weight: bold;
  color: #e53e3e;
  text-shadow:
    0 0 2px #fff,
    0 0 4px #fff;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.ocean-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 26px;
  color: #3182ce;
  font-weight: bold;
  text-shadow:
    0 0 2px #fff,
    0 0 4px #fff;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.strait-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 20px;
  color: #222;
  font-weight: bold;
  text-shadow: 0 0 2px #fff;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.graticule-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #4c1d95;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(76, 29, 149, 0.85);
  border-radius: 4px;
  padding: 2px 6px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.24);
}

:deep(.tropic-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #dc2626;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(220, 38, 38, 0.75);
  border-radius: 4px;
  padding: 2px 6px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.24);
}
</style>
