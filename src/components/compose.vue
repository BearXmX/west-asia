<template>
  <div class="compose-container">
    <div class="compose-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="compose-content">
      <!-- 左侧内容区 -->
      <div class="compose-content-left">
        <div class="compose-card compose-card-01">
          <div class="compose-card-header"><i class="iconfont icon-app-zucheng"></i>西亚组成概况</div>

          <p class="mb-8">西亚位于亚洲西南部，是连接亚洲、欧洲和非洲的重要区域，临近地中海、黑海、里海、红海和波斯湾，战略位置突出。</p>

          <p class="mb-8">
            本章采用<strong>广义教学口径</strong>：以西亚核心国家和地区为主体，同时纳入与西亚地理、历史和区域联系密切的伊朗、阿富汗，共展示
            <strong>20个国家/地区</strong>。
          </p>

          <div class="note-box">
            <div class="note-title">口径说明</div>
            <div>联合国统计口径下，西亚通常不包括伊朗和阿富汗；</div>
            <div>本课为区域认知与地图教学需要，采用更宽的展示范围。</div>
          </div>
        </div>

        <div class="compose-card compose-card-02">
          <div class="compose-card-header"><i class="iconfont icon-bankuai"></i>区域板块划分</div>

          <div class="region-group">
            <div class="region-title">小亚细亚与南高加索</div>
            <div class="region-desc">土耳其、格鲁吉亚、亚美尼亚、阿塞拜疆</div>
          </div>

          <div class="region-group">
            <div class="region-title">东地中海与黎凡特</div>
            <div class="region-desc">叙利亚、黎巴嫩、以色列、巴勒斯坦、约旦、塞浦路斯</div>
          </div>

          <div class="region-group">
            <div class="region-title">两河流域与波斯湾沿岸</div>
            <div class="region-desc">伊拉克、科威特、巴林、卡塔尔、阿联酋</div>
          </div>

          <div class="region-group">
            <div class="region-title">阿拉伯半岛</div>
            <div class="region-desc">沙特阿拉伯、也门、阿曼，以及半岛东岸的海湾国家</div>
          </div>

          <div class="region-group">
            <div class="region-title">伊朗高原及其邻近地区</div>
            <div class="region-desc">伊朗、阿富汗，是西亚与中亚、南亚之间的重要过渡地带</div>
          </div>
        </div>

        <div class="compose-card compose-card-03">
          <div class="compose-card-header"><i class="iconfont icon-jingweidu"></i>国家/地区定位</div>

          <p class="mb-8 production-tip">点击下方名称，地图会定位到对应国家或地区的中心位置。</p>

          <div class="country-buttons">
            <button v-for="item in countryList" :key="item.name" @click="flyToCountry(item)" :class="{ active: activeCountry === item.name }">
              {{ item.name }}
            </button>
          </div>
        </div>

        <div class="compose-card compose-card-04">
          <div class="compose-card-header"><i class="iconfont icon-bangzhuyushuoming"></i>特殊地理说明</div>

          <ul class="special-list">
            <li><strong>土耳其</strong>：横跨亚洲和欧洲，亚洲部分位于安纳托利亚半岛。</li>
            <li><strong>埃及</strong>：整体通常归入北非；虽然西奈半岛位于亚洲，但本章不把埃及列入西亚展示清单。</li>
            <li><strong>塞浦路斯与南高加索三国</strong>：在不同统计和区域研究口径中，可能被划入西亚、欧洲或跨区域范围。</li>
            <li><strong>巴勒斯坦</strong>：本章作为地理教学中的地区对象进行展示。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="compose-content-right">
        <div id="westAsiaMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看细节</div>

        <!-- 右侧控制器 + 图例 -->
        <div class="map-control-panel">
          <div class="panel-title">地图控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-line"></span>
              <span>西亚国家/地区轮廓</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot"></span>
              <span>国家/地区定位点</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
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
let geoJsonLayer: L.GeoJSON | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0
let abortController: AbortController | null = null

const activeCountry = ref('')
const useGoogle = ref(false)

const centerLat = 20.5
const centerLng = 45.5
const zoomLevel = 5

type CountryItem = {
  name: string
  lat: number
  lng: number
  zoom: number
  group: string
}

type DomLabel = {
  latlng: L.LatLng
  el: HTMLDivElement
  offsetX: number
  offsetY: number
}

const countryMarkers: L.CircleMarker[] = []
const countryLabels: DomLabel[] = []

const countryList: CountryItem[] = [
  { name: '土耳其', lat: 38.9637, lng: 35.2433, zoom: 6, group: '小亚细亚' },
  { name: '格鲁吉亚', lat: 42.3154, lng: 43.3569, zoom: 7, group: '南高加索' },
  { name: '亚美尼亚', lat: 40.0691, lng: 45.0382, zoom: 7, group: '南高加索' },
  { name: '阿塞拜疆', lat: 40.1431, lng: 47.5769, zoom: 7, group: '南高加索' },

  { name: '叙利亚', lat: 34.8021, lng: 38.9988, zoom: 7, group: '黎凡特' },
  { name: '黎巴嫩', lat: 33.8547, lng: 35.8623, zoom: 8, group: '黎凡特' },
  { name: '以色列', lat: 31.0461, lng: 34.8516, zoom: 8, group: '黎凡特' },
  { name: '巴勒斯坦', lat: 31.9522, lng: 35.2332, zoom: 8, group: '黎凡特' },
  { name: '约旦', lat: 30.5852, lng: 36.2384, zoom: 7, group: '黎凡特' },
  { name: '塞浦路斯', lat: 35.1264, lng: 33.4299, zoom: 8, group: '东地中海' },

  { name: '伊拉克', lat: 33.2232, lng: 43.6793, zoom: 7, group: '两河流域' },
  { name: '科威特', lat: 29.3117, lng: 47.4818, zoom: 8, group: '海湾地区' },
  { name: '巴林', lat: 26.0667, lng: 50.5577, zoom: 9, group: '海湾地区' },
  { name: '卡塔尔', lat: 25.3548, lng: 51.1839, zoom: 8, group: '海湾地区' },
  { name: '阿联酋', lat: 23.4241, lng: 53.8478, zoom: 7, group: '海湾地区' },

  { name: '沙特阿拉伯', lat: 23.8859, lng: 45.0792, zoom: 6, group: '阿拉伯半岛' },
  { name: '也门', lat: 15.5527, lng: 48.5164, zoom: 7, group: '阿拉伯半岛' },
  { name: '阿曼', lat: 21.5126, lng: 55.9233, zoom: 7, group: '阿拉伯半岛' },

  { name: '伊朗', lat: 32.4279, lng: 53.688, zoom: 6, group: '伊朗高原' },
  { name: '阿富汗', lat: 33.9391, lng: 67.71, zoom: 6, group: '邻近过渡区' },
]

function flyToCountry(item: CountryItem) {
  activeCountry.value = item.name

  if (!map) return

  map.setView([item.lat, item.lng], item.zoom, {
    animate: false,
  })

  updateCountryLabelActiveState()
  scheduleUpdateLabels()
}

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

function createDomLabel(options: {
  lat: number
  lng: number
  content: string
  className: string
  offsetX?: number
  offsetY?: number
  datasetName?: string
}) {
  if (!labelPane) return null

  const el = document.createElement('div')
  el.className = options.className
  el.innerHTML = escapeHtml(options.content)

  if (options.datasetName) {
    el.dataset.name = options.datasetName
  }

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
  countryLabels.forEach(updateOneLabelPosition)
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

function addCountryMarkersAndLabels() {
  if (!map) return

  clearCountryMarkersAndLabels()

  countryList.forEach(country => {
    const marker = L.circleMarker([country.lat, country.lng], {
      radius: 4,
      color: '#111827',
      weight: 1,
      fillColor: '#111827',
      fillOpacity: 1,
      interactive: false,
    }).addTo(map!)

    countryMarkers.push(marker)

    const label = createDomLabel({
      lat: country.lat,
      lng: country.lng,
      content: country.name,
      className: 'country-label-dom',
      offsetX: 12,
      offsetY: -2,
      datasetName: country.name,
    })

    if (label) {
      countryLabels.push(label)
    }
  })

  updateCountryLabelActiveState()
  scheduleUpdateLabels()
}

function updateCountryLabelActiveState() {
  countryLabels.forEach(label => {
    const name = label.el.dataset.name

    if (name && name === activeCountry.value) {
      label.el.classList.add('active')
    } else {
      label.el.classList.remove('active')
    }
  })
}

function clearCountryMarkersAndLabels() {
  countryMarkers.forEach(marker => {
    if (map) marker.removeFrom(map)
  })
  countryMarkers.length = 0

  clearDomLabels(countryLabels)
}

async function loadCountryBoundary() {
  if (!map) return

  if (abortController) {
    abortController.abort()
    abortController = null
  }

  abortController = new AbortController()

  try {
    const response = await fetch(
      'https://course-code.oss-cn-shanghai.aliyuncs.com/geojson/%E8%A5%BF%E4%BA%9A%E5%9B%BD%E5%AE%B6%E8%BD%AE%E5%BB%93%E7%BA%BF.geojson',
      {
        signal: abortController.signal,
      },
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (!map) return

    if (geoJsonLayer) {
      geoJsonLayer.removeFrom(map)
      geoJsonLayer = null
    }

    geoJsonLayer = L.geoJSON(data, {
      style: {
        color: '#1e3a8a',
        weight: 2,
        fillColor: '#dbeafe',
        fillOpacity: 0.28,
      },
    }).addTo(map)

    addCountryMarkersAndLabels()

    await nextTick()

    map.invalidateSize(false)
    scheduleUpdateLabels()
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.log('西亚国家轮廓线请求已取消')
    } else {
      console.error('加载西亚国家轮廓线失败：', error)
    }
  } finally {
    abortController = null
  }
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
  loadCountryBoundary()

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

  if (abortController) {
    abortController.abort()
    abortController = null
  }

  unbindMapLabelEvents()

  clearCountryMarkersAndLabels()

  if (geoJsonLayer && map) {
    geoJsonLayer.removeFrom(map)
    geoJsonLayer = null
  }

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
.compose-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.compose-header {
  margin-bottom: 32px;
}

.compose-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
}

.compose-content-left {
  width: 32%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.compose-content-right {
  width: 67%;
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
  z-index: 10;
}

.map-control-panel {
  position: absolute;
  top: 45px;
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
  color: #333;
}

.map-control-panel label {
  display: block;
  margin-bottom: 6px;
  color: #333;
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
  width: 22px;
  height: 0;
  border-top: 2px solid #1e3a8a;
  flex-shrink: 0;
}

.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #111827;
  flex-shrink: 0;
}

.compose-card {
  background-color: #eff6ff;
  border-radius: 8px;
  border: 1px solid #dbeafe;
  padding: 14px;
}

.compose-card-01 {
  background-color: #eff6ff;
  border-color: #dbeafe;
}

.compose-card-02 {
  background-color: #f0fdf4;
  border-color: #bbf7d0;
}

.compose-card-03 {
  background-color: #ffefd6;
  border-color: #ffce80;
}

.compose-card-04 {
  background-color: #fff7ed;
  border-color: #fed7aa;
}

.iconfont {
  margin-right: 8px;
  color: #1e3a8a;
}

.compose-card-01 .iconfont {
  color: #1e3a8a;
}

.compose-card-02 .iconfont {
  color: #047857;
}

.compose-card-03 .iconfont {
  color: #78350f;
}

.compose-card-04 .iconfont {
  color: #c2410c;
}

.compose-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #1e3a8a;
}

.compose-card-02 .compose-card-header {
  color: #047857;
}

.compose-card-03 .compose-card-header {
  color: #78350f;
}

.compose-card-04 .compose-card-header {
  color: #c2410c;
}

.mb-8 {
  margin-bottom: 8px;
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

.region-group {
  padding: 8px 10px;
  border-radius: 6px;
  background: #fff;
  margin-bottom: 8px;
  border-left: 3px solid #10b981;
}

.region-group:last-child {
  margin-bottom: 0;
}

.region-title {
  font-weight: bold;
  color: #065f46;
  margin-bottom: 4px;
}

.region-desc {
  font-size: 13px;
  color: #444;
  line-height: 1.45;
}

.country-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.country-buttons button {
  padding: 6px 10px;
  border: 1px solid #ffb43c;
  border-radius: 6px;
  background: #fff;
  color: #78350f;
  cursor: pointer;
  font-size: 13px;
  line-height: 1;
}

.country-buttons button:hover {
  background: #ffb43c;
  color: #fff;
}

.country-buttons button.active {
  background: #ffb43c;
  color: #fff;
  font-weight: bold;
}

.special-list {
  list-style: disc;
  padding-left: 18px;
  color: #444;
  line-height: 1.55;
  font-size: 13px;
}

.special-list li {
  margin-bottom: 6px;
}

.special-list li:last-child {
  margin-bottom: 0;
}

:deep(.leaflet-shadow-pane) {
  display: none;
}

:deep(.leaflet-marker-pane) {
  display: none;
}

/* 自定义地图文字层，避免使用 Leaflet tooltip */
:deep(.custom-map-label-pane) {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 650;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

:deep(.country-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 13px;
  font-weight: bold;
  color: #111827;
  text-shadow:
    0 0 2px #fff,
    0 0 4px #fff;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.country-label-dom.active) {
  color: #dc2626;
  font-size: 15px;
  text-shadow:
    0 0 2px #fff,
    0 0 5px #fff;
}

.production-tip {
  margin-top: 12px;
  padding: 10px 12px;
  background: #fff;
  border-left: 4px solid #ffb43c;
  border-radius: 8px;
  color: #6b7280;
  line-height: 1.55;
  font-size: 13px;
}
</style>
