<template>
  <div class="hotspot-container">
    <div class="hotspot-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="hotspot-content">
      <!-- 左侧内容区 -->
      <div class="hotspot-content-left">
        <div class="hotspot-card hotspot-card-01">
          <div class="hotspot-card-header"><i class="iconfont icon-guanzhu"></i>为什么西亚长期受世界关注</div>

          <p class="mb-8">
            西亚长期成为世界关注的热点地区，并不是单一因素造成的，而是由
            <strong>地理位置、能源资源、交通通道、水资源、民族宗教和国际关系</strong>
            等多种因素共同作用形成的。
          </p>

          <div class="note-box">
            <div class="note-title">核心结论</div>
            <div>
              西亚的“热点性”可以概括为：
              <strong>位置重要、资源关键、通道集中、矛盾复杂、外部关注度高</strong>。
            </div>
          </div>
        </div>

        <div class="hotspot-card hotspot-card-02">
          <div class="hotspot-card-header"><i class="iconfont icon-redian"></i>六大热点原因</div>

          <div class="reason-grid">
            <div class="reason-card reason-location">
              <div class="reason-icon">🌍</div>
              <div class="reason-title">地理位置重要</div>
              <div class="reason-desc">位于亚、欧、非三洲交会地带，是连接印度洋、大西洋和地中海方向的重要区域。</div>
            </div>

            <div class="reason-card reason-oil">
              <div class="reason-icon">⛽</div>
              <div class="reason-title">石油资源丰富</div>
              <div class="reason-desc">波斯湾及其沿岸是世界重要油气产区，能源供应影响全球经济。</div>
            </div>

            <div class="reason-card reason-route">
              <div class="reason-icon">🚢</div>
              <div class="reason-title">交通咽喉集中</div>
              <div class="reason-desc">霍尔木兹海峡、苏伊士运河、曼德海峡等通道影响国际贸易和能源运输。</div>
            </div>

            <div class="reason-card reason-water">
              <div class="reason-icon">💧</div>
              <div class="reason-title">水资源短缺</div>
              <div class="reason-desc">干旱区广，河流水源有限，跨境河流和地下水利用容易带来区域矛盾。</div>
            </div>

            <div class="reason-card reason-culture">
              <div class="reason-icon">🕌</div>
              <div class="reason-title">民族宗教复杂</div>
              <div class="reason-desc">多民族、多语言、多宗教并存，历史文化联系深，社会结构复杂。</div>
            </div>

            <div class="reason-card reason-power">
              <div class="reason-icon">⚖</div>
              <div class="reason-title">外部力量关注</div>
              <div class="reason-desc">能源、通道和安全问题使西亚长期受到国际社会和大国力量关注。</div>
            </div>
          </div>
        </div>

        <div class="hotspot-card hotspot-card-03">
          <div class="hotspot-card-header"><i class="iconfont icon-anchor-full"></i>关键咽喉通道</div>

          <div class="choke-item">
            <div class="choke-title">霍尔木兹海峡</div>
            <div class="choke-desc">连接波斯湾和阿曼湾，是波斯湾油气外运的关键通道，被称为“世界油阀”。</div>
          </div>

          <div class="choke-item">
            <div class="choke-title">苏伊士运河</div>
            <div class="choke-desc">连接红海和地中海，是印度洋到欧洲、大西洋方向的重要捷径。</div>
          </div>

          <div class="choke-item">
            <div class="choke-title">曼德海峡</div>
            <div class="choke-desc">位于红海和亚丁湾之间，是红海通往印度洋方向的重要出口。</div>
          </div>
        </div>

        <div class="hotspot-card hotspot-card-04">
          <div class="hotspot-card-header"><i class="iconfont icon-maodunjiufen"></i>资源矛盾与区域发展</div>

          <div class="contrast-panel">
            <div class="contrast-card oil-card">
              <div class="contrast-title">石油资源</div>
              <div class="contrast-value">丰富</div>
              <div class="contrast-desc">带来财富，也带来国际关注和能源安全问题。</div>
            </div>

            <div class="contrast-card water-card">
              <div class="contrast-title">淡水资源</div>
              <div class="contrast-value">短缺</div>
              <div class="contrast-desc">影响农业、城市发展和跨境河流利用。</div>
            </div>
          </div>

          <div class="resource-summary">
            西亚的突出特征是：<strong>地下油气丰富，地表淡水紧张</strong>。 这使能源开发、城市扩张、农业用水和生态保护之间的协调尤为重要。
          </div>
        </div>

        <div class="hotspot-card hotspot-card-05">
          <div class="hotspot-card-header"><i class="iconfont icon-kaoshi"></i>中考综合答题模板</div>

          <div class="answer-template">
            <div class="template-title">为什么西亚长期成为世界热点地区？</div>

            <ul class="exam-list">
              <li><strong>位置：</strong>位于亚欧非交会地带，联系两洋三洲，战略位置重要。</li>
              <li><strong>资源：</strong>波斯湾及其沿岸石油资源丰富，影响世界能源供应。</li>
              <li><strong>通道：</strong>霍尔木兹海峡、苏伊士运河、曼德海峡等交通咽喉集中。</li>
              <li><strong>水源：</strong>气候干旱，水资源短缺，河流和地下水利用矛盾突出。</li>
              <li><strong>文化：</strong>民族、宗教、语言多元，历史问题复杂。</li>
              <li><strong>外部：</strong>能源、交通和安全利益使外部力量长期关注。</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="hotspot-content-right">
        <div id="hotspotMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看热点因素分布</div>

        <div class="map-control-panel">
          <div class="panel-title">地图控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showOil" @change="refreshMapLayers" />
            石油核心区
          </label>

          <label>
            <input type="checkbox" v-model="showChokepoints" @change="refreshMapLayers" />
            交通咽喉
          </label>

          <label>
            <input type="checkbox" v-model="showWaterStress" @change="refreshMapLayers" />
            缺水严重区
          </label>

          <label>
            <input type="checkbox" v-model="showCultureNodes" @change="refreshMapLayers" />
            宗教文化节点
          </label>

          <label>
            <input type="checkbox" v-model="showHotspotAreas" @change="refreshMapLayers" />
            典型热点区域
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-area oil-area"></span>
              <span>石油核心区</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot choke-dot"></span>
              <span>交通咽喉</span>
            </div>

            <div class="legend-row">
              <span class="legend-area water-area"></span>
              <span>缺水严重区</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot culture-dot"></span>
              <span>宗教文化节点</span>
            </div>

            <div class="legend-row">
              <span class="legend-area hotspot-area"></span>
              <span>典型热点区域</span>
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

type HotspotPoint = {
  name: string
  lat: number
  lng: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type HotspotArea = {
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
const showOil = ref(true)
const showChokepoints = ref(true)
const showWaterStress = ref(true)
const showCultureNodes = ref(true)
const showHotspotAreas = ref(true)

const oilLayer = L.layerGroup()
const chokepointLayer = L.layerGroup()
const waterStressLayer = L.layerGroup()
const cultureNodeLayer = L.layerGroup()
const hotspotAreaLayer = L.layerGroup()

const oilLabels: DomLabel[] = []
const chokepointLabels: DomLabel[] = []
const waterStressLabels: DomLabel[] = []
const cultureNodeLabels: DomLabel[] = []
const hotspotAreaLabels: DomLabel[] = []

const oilAreas: HotspotArea[] = [
  {
    name: '波斯湾石油核心区',
    lat: 27.2,
    lng: 50.8,
    radius: 520000,
    color: '#f59e0b',
    desc: '西亚油气资源最集中的区域，周边分布着沙特、伊朗、伊拉克、科威特、卡塔尔、阿联酋等产油国。',
  },
]

const chokepoints: HotspotPoint[] = [
  {
    name: '霍尔木兹海峡',
    lat: 26.5,
    lng: 56.2,
    desc: '波斯湾石油外运关键通道，是世界能源运输的重要咽喉。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '苏伊士运河',
    lat: 30.4,
    lng: 32.3,
    desc: '连接红海和地中海，是印度洋到欧洲、大西洋方向的重要捷径。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '曼德海峡',
    lat: 12.6,
    lng: 43.3,
    desc: '连接红海和亚丁湾，是红海通往印度洋方向的重要出口。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '土耳其海峡',
    lat: 41.0,
    lng: 29.0,
    desc: '黑海通往地中海方向的重要门户，也是传统亚欧分界线的一部分。',
    offsetX: 10,
    offsetY: -2,
  },
]

const waterStressAreas: HotspotArea[] = [
  {
    name: '阿拉伯半岛干旱区',
    lat: 23.2,
    lng: 45.0,
    radius: 620000,
    color: '#f97316',
    desc: '降水稀少、蒸发强烈，淡水资源短缺，是西亚水资源矛盾突出的地区。',
  },
  {
    name: '叙利亚沙漠干旱区',
    lat: 34.0,
    lng: 39.5,
    radius: 260000,
    color: '#fb923c',
    desc: '位于西亚内陆干旱区，水源有限，生态环境较脆弱。',
  },
  {
    name: '伊朗高原内部干旱区',
    lat: 31.5,
    lng: 55.0,
    radius: 360000,
    color: '#ea580c',
    desc: '高原内部干旱半干旱范围广，地下水和绿洲资源对生产生活意义重大。',
  },
]

const cultureNodes: HotspotPoint[] = [
  {
    name: '耶路撒冷',
    lat: 31.7683,
    lng: 35.2137,
    desc: '对犹太教、基督教和伊斯兰教都具有重要宗教和历史意义。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '麦加',
    lat: 21.3891,
    lng: 39.8579,
    desc: '伊斯兰教最重要的圣地，具有突出的宗教地理意义。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '麦地那',
    lat: 24.5247,
    lng: 39.5692,
    desc: '伊斯兰教重要圣地之一，与伊斯兰教早期历史密切相关。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '伊斯坦布尔',
    lat: 41.0082,
    lng: 28.9784,
    desc: '位于欧亚联系的重要节点，历史上长期是东西方交流中心。',
    offsetX: 10,
    offsetY: -2,
  },
]

const hotspotAreas: HotspotArea[] = [
  {
    name: '东地中海热点区',
    lat: 32.8,
    lng: 35.6,
    radius: 220000,
    color: '#dc2626',
    desc: '宗教圣地、民族宗教问题、地中海交通位置等因素交织，区域关注度高。',
  },
  {
    name: '两河流域热点区',
    lat: 33.2,
    lng: 44.2,
    radius: 260000,
    color: '#b91c1c',
    desc: '位于幼发拉底河和底格里斯河流域，兼具石油资源、河流水源和历史文明意义。',
  },
  {
    name: '波斯湾热点区',
    lat: 26.8,
    lng: 51.5,
    radius: 360000,
    color: '#991b1b',
    desc: '油气资源、能源运输和霍尔木兹海峡等因素集中，是世界关注的重要区域。',
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

  if (showOil.value) {
    oilLabels.forEach(updateOneLabelPosition)
  }

  if (showChokepoints.value) {
    chokepointLabels.forEach(updateOneLabelPosition)
  }

  if (showWaterStress.value) {
    waterStressLabels.forEach(updateOneLabelPosition)
  }

  if (showCultureNodes.value) {
    cultureNodeLabels.forEach(updateOneLabelPosition)
  }

  if (showHotspotAreas.value) {
    hotspotAreaLabels.forEach(updateOneLabelPosition)
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

function addAreaLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], areas: HotspotArea[], labelClassName: string) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  areas.forEach(item => {
    const circle = L.circle([item.lat, item.lng], {
      radius: item.radius,
      color: item.color,
      weight: 2,
      fillColor: item.color,
      fillOpacity: 0.16,
      opacity: 0.85,
    }).addTo(targetLayer)

    bindInfoPopup(circle, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: labelClassName,
      offsetX: 0,
      offsetY: 0,
    })

    if (label) targetLabels.push(label)
  })

  targetLayer.addTo(map)
}

function addPointLayer(
  targetLayer: L.LayerGroup,
  targetLabels: DomLabel[],
  points: HotspotPoint[],
  markerStyle: {
    color: string
    fillColor: string
    radius: number
    labelClassName: string
  },
) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  points.forEach(item => {
    const marker = L.circleMarker([item.lat, item.lng], {
      radius: markerStyle.radius,
      color: markerStyle.color,
      weight: 2,
      fillColor: markerStyle.fillColor,
      fillOpacity: 1,
    }).addTo(targetLayer)

    bindInfoPopup(marker, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: markerStyle.labelClassName,
      offsetX: item.offsetX ?? 10,
      offsetY: item.offsetY ?? -2,
    })

    if (label) targetLabels.push(label)
  })

  targetLayer.addTo(map)
}

function refreshMapLayers() {
  if (!map) return

  if (showOil.value) {
    addAreaLayer(oilLayer, oilLabels, oilAreas, 'oil-label-dom')
  } else {
    oilLayer.clearLayers()
    clearDomLabels(oilLabels)
  }

  if (showWaterStress.value) {
    addAreaLayer(waterStressLayer, waterStressLabels, waterStressAreas, 'water-stress-label-dom')
  } else {
    waterStressLayer.clearLayers()
    clearDomLabels(waterStressLabels)
  }

  if (showHotspotAreas.value) {
    addAreaLayer(hotspotAreaLayer, hotspotAreaLabels, hotspotAreas, 'hotspot-area-label-dom')
  } else {
    hotspotAreaLayer.clearLayers()
    clearDomLabels(hotspotAreaLabels)
  }

  if (showChokepoints.value) {
    addPointLayer(chokepointLayer, chokepointLabels, chokepoints, {
      color: '#dc2626',
      fillColor: '#fff',
      radius: 5.5,
      labelClassName: 'chokepoint-label-dom',
    })
  } else {
    chokepointLayer.clearLayers()
    clearDomLabels(chokepointLabels)
  }

  if (showCultureNodes.value) {
    addPointLayer(cultureNodeLayer, cultureNodeLabels, cultureNodes, {
      color: '#7c3aed',
      fillColor: '#ede9fe',
      radius: 5.5,
      labelClassName: 'culture-node-label-dom',
    })
  } else {
    cultureNodeLayer.clearLayers()
    clearDomLabels(cultureNodeLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  oilLayer.clearLayers()
  chokepointLayer.clearLayers()
  waterStressLayer.clearLayers()
  cultureNodeLayer.clearLayers()
  hotspotAreaLayer.clearLayers()

  if (map.hasLayer(oilLayer)) oilLayer.removeFrom(map)
  if (map.hasLayer(chokepointLayer)) chokepointLayer.removeFrom(map)
  if (map.hasLayer(waterStressLayer)) waterStressLayer.removeFrom(map)
  if (map.hasLayer(cultureNodeLayer)) cultureNodeLayer.removeFrom(map)
  if (map.hasLayer(hotspotAreaLayer)) hotspotAreaLayer.removeFrom(map)

  clearDomLabels(oilLabels)
  clearDomLabels(chokepointLabels)
  clearDomLabels(waterStressLabels)
  clearDomLabels(cultureNodeLabels)
  clearDomLabels(hotspotAreaLabels)
}

onMounted(async () => {
  map = L.map('hotspotMap', {
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
.hotspot-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.hotspot-header {
  margin-bottom: 32px;
}

.hotspot-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.hotspot-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.hotspot-content-right {
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

.hotspot-card {
  border-radius: 8px;
  border: 1px solid #dbeafe;
  padding: 14px;
  background: #eff6ff;
}

.hotspot-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #1e3a8a;
}

.iconfont {
  margin-right: 8px;
  color: #1e3a8a;
}

.hotspot-card-01 {
  background: #eff6ff;
  border-color: #dbeafe;
}

.hotspot-card-02 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.hotspot-card-02 .hotspot-card-header,
.hotspot-card-02 .iconfont {
  color: #9a3412;
}

.hotspot-card-03 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.hotspot-card-03 .hotspot-card-header,
.hotspot-card-03 .iconfont {
  color: #0369a1;
}

.hotspot-card-04 {
  background: #fff1f2;
  border-color: #fecdd3;
}

.hotspot-card-04 .hotspot-card-header,
.hotspot-card-04 .iconfont {
  color: #991b1b;
}

.hotspot-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.hotspot-card-05 .hotspot-card-header,
.hotspot-card-05 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.hotspot-card p {
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

.reason-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.reason-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #fed7aa;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.reason-icon {
  font-size: 22px;
  margin-bottom: 4px;
}

.reason-title {
  font-weight: bold;
  margin-bottom: 4px;
  color: #9a3412;
}

.reason-desc {
  font-size: 12px;
  line-height: 1.45;
  color: #374151;
}

.reason-location {
  border-color: #bfdbfe;
}

.reason-location .reason-title {
  color: #1e3a8a;
}

.reason-oil {
  border-color: #fed7aa;
}

.reason-oil .reason-title {
  color: #9a3412;
}

.reason-route {
  border-color: #bae6fd;
}

.reason-route .reason-title {
  color: #0369a1;
}

.reason-water {
  border-color: #c7d2fe;
}

.reason-water .reason-title {
  color: #3730a3;
}

.reason-culture {
  border-color: #ddd6fe;
}

.reason-culture .reason-title {
  color: #6d28d9;
}

.reason-power {
  border-color: #fecdd3;
}

.reason-power .reason-title {
  color: #991b1b;
}

.choke-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid #0ea5e9;
  margin-bottom: 8px;
}

.choke-item:last-child {
  margin-bottom: 0;
}

.choke-title {
  font-weight: bold;
  color: #075985;
  margin-bottom: 4px;
}

.choke-desc {
  font-size: 13px;
  color: #444;
  line-height: 1.45;
}

.contrast-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.contrast-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
}

.oil-card {
  border: 1px solid #fed7aa;
}

.water-card {
  border: 1px solid #bae6fd;
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

.resource-summary {
  margin-top: 10px;
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid #dc2626;
  font-size: 13px;
  color: #374151;
  line-height: 1.55;
}

.answer-template {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border-left: 4px solid #f59e0b;
}

.template-title {
  font-weight: bold;
  color: #854d0e;
  margin-bottom: 8px;
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

.choke-dot {
  background: #fff;
  border: 2px solid #dc2626;
  box-sizing: border-box;
}

.culture-dot {
  background: #ede9fe;
  border: 2px solid #7c3aed;
  box-sizing: border-box;
}

.legend-area {
  width: 14px;
  height: 10px;
  border-radius: 999px;
  display: inline-block;
  flex-shrink: 0;
}

.oil-area {
  background: rgba(245, 158, 11, 0.25);
  border: 1px solid #f59e0b;
}

.water-area {
  background: rgba(249, 115, 22, 0.23);
  border: 1px solid #f97316;
}

.hotspot-area {
  background: rgba(220, 38, 38, 0.2);
  border: 1px solid #dc2626;
}

/* 自定义地图文字层 */
:deep(.custom-map-label-pane) {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 650;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

:deep(.oil-label-dom) {
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

:deep(.water-stress-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #c2410c;
  background: rgba(255, 247, 237, 0.94);
  border: 1px solid rgba(249, 115, 22, 0.65);
  border-radius: 999px;
  padding: 3px 8px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.hotspot-area-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #991b1b;
  background: rgba(255, 241, 242, 0.94);
  border: 1px solid rgba(220, 38, 38, 0.65);
  border-radius: 999px;
  padding: 3px 8px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.chokepoint-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #dc2626;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(220, 38, 38, 0.6);
  border-radius: 4px;
  padding: 2px 5px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.culture-node-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #6d28d9;
  background: rgba(245, 243, 255, 0.94);
  border: 1px solid rgba(124, 58, 237, 0.6);
  border-radius: 4px;
  padding: 2px 5px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}
</style>
