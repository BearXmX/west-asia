<template>
  <div class="oil-container">
    <div class="oil-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="oil-content">
      <div class="oil-content-left">
        <div class="oil-card oil-card-01">
          <div class="oil-card-header"><i class="iconfont icon-nengyuan"></i>西亚石油资源概况</div>

          <p>
            西亚是世界石油资源最丰富、石油产量和出口量都很重要的地区之一。 石油资源主要集中在
            <strong>波斯湾及其沿岸地区</strong>， 形成了沙特阿拉伯、伊朗、伊拉克、科威特、阿联酋、卡塔尔等重要产油国。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">资源特点</div>
              <div class="feature-value">储量大、油质好</div>
              <div class="feature-desc">波斯湾沿岸油气资源丰富，开采条件较好。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">出口特点</div>
              <div class="feature-value">大量出口</div>
              <div class="feature-desc">石油通过海运和管道输往东亚、欧洲、北美等地区。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>
              学习西亚石油，要抓住：
              <strong>波斯湾沿岸产油，霍尔木兹海峡外运，影响世界能源格局。</strong>
            </div>
          </div>
        </div>

        <div class="oil-card oil-card-02">
          <div class="oil-card-header"><i class="iconfont icon-fenbu"></i>石油分布规律</div>

          <div class="rule-item">
            <div class="rule-title">集中在波斯湾沿岸</div>
            <div class="rule-desc">西亚石油资源高度集中，波斯湾周边是世界重要油气富集区。</div>
          </div>

          <div class="rule-item">
            <div class="rule-title">产油国分布集中</div>
            <div class="rule-desc">沙特阿拉伯、伊朗、伊拉克、科威特、阿联酋和卡塔尔是典型产油国。</div>
          </div>

          <div class="rule-item">
            <div class="rule-title">资源与港口联系紧密</div>
            <div class="rule-desc">石油需要通过港口、油轮和管道外运，交通通道十分重要。</div>
          </div>

          <div class="rule-item">
            <div class="rule-title">能源经济特征明显</div>
            <div class="rule-desc">部分国家依托石油收入发展城市建设、金融、航空、旅游和服务业。</div>
          </div>
        </div>

        <div class="oil-card oil-card-03">
          <div class="oil-card-header"><i class="iconfont icon-gaosu"></i>石油输出路线</div>

          <div class="route-item">
            <div class="route-title">东运路线</div>
            <div class="route-desc">波斯湾 → 霍尔木兹海峡 → 阿拉伯海 → 印度洋 → 马六甲海峡 → 南海 → 东亚。</div>
          </div>

          <div class="route-item">
            <div class="route-title">西运欧洲路线</div>
            <div class="route-desc">波斯湾 → 霍尔木兹海峡 → 阿拉伯海 → 红海 → 苏伊士运河 → 地中海 → 欧洲。</div>
          </div>

          <div class="route-item">
            <div class="route-title">西运绕非路线</div>
            <div class="route-desc">波斯湾 → 霍尔木兹海峡 → 印度洋 → 好望角 → 大西洋 → 欧洲或北美。</div>
          </div>
        </div>

        <div class="oil-card oil-card-04">
          <div class="oil-card-header"><i class="iconfont icon-anchor-full"></i>重要海峡与港口</div>

          <div class="strait-grid">
            <div class="strait-card">
              <div class="strait-title">霍尔木兹海峡</div>
              <div class="strait-desc">波斯湾石油外运的咽喉，被称为“世界油阀”。</div>
            </div>

            <div class="strait-card">
              <div class="strait-title">苏伊士运河</div>
              <div class="strait-desc">连接红海和地中海，是西亚石油通往欧洲的重要通道。</div>
            </div>

            <div class="strait-card">
              <div class="strait-title">曼德海峡</div>
              <div class="strait-desc">连接红海和亚丁湾，是红海航线的重要节点。</div>
            </div>

            <div class="strait-card">
              <div class="strait-title">波斯湾港口</div>
              <div class="strait-desc">油轮、炼化、港口贸易和能源运输高度集中。</div>
            </div>
          </div>
        </div>

        <div class="oil-card oil-card-05">
          <div class="oil-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一记分布：</strong>西亚石油主要分布在波斯湾及其沿岸地区。</li>
            <li><strong>二记国家：</strong>沙特、伊朗、伊拉克、科威特、阿联酋、卡塔尔等是重要产油国。</li>
            <li><strong>三记通道：</strong>霍尔木兹海峡是波斯湾石油外运的咽喉。</li>
            <li><strong>四记路线：</strong>石油主要输往东亚、欧洲和北美。</li>
            <li><strong>五记影响：</strong>石油资源影响西亚经济发展和世界能源格局。</li>
          </ul>
        </div>
      </div>

      <div class="oil-content-right">
        <div id="oilMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看西亚石油分布与输出路线</div>

        <div class="map-control-panel">
          <div class="panel-title">地图控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showOilAreas" @change="refreshMapLayers" />
            石油资源集中区
          </label>

          <label>
            <input type="checkbox" v-model="showGasAreas" @change="refreshMapLayers" />
            天然气资源区
          </label>

          <label>
            <input type="checkbox" v-model="showOilCountries" @change="refreshMapLayers" />
            主要产油国
          </label>

          <label>
            <input type="checkbox" v-model="showOilRoutes" @change="refreshMapLayers" />
            石油输出路线
          </label>

          <label>
            <input type="checkbox" v-model="showStraits" @change="refreshMapLayers" />
            重要海峡与运河
          </label>

          <label>
            <input type="checkbox" v-model="showPorts" @change="refreshMapLayers" />
            重要港口城市
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-area oil-area"></span>
              <span>石油资源集中区</span>
            </div>

            <div class="legend-row">
              <span class="legend-area gas-area"></span>
              <span>天然气资源区</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot country-dot"></span>
              <span>主要产油国</span>
            </div>

            <div class="legend-row">
              <span class="legend-line route-line"></span>
              <span>石油输出路线</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot strait-dot"></span>
              <span>重要海峡 / 运河</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot port-dot"></span>
              <span>重要港口城市</span>
            </div>
          </div>

          <div class="map-note">
            <div class="map-note-title">读图提示</div>
            <div>先找波斯湾，再找霍尔木兹海峡，最后观察石油输出方向。</div>
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
import { TILE_MAP } from '@/resource'

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

type AreaItem = {
  name: string
  lat: number
  lng: number
  radius: number
  color: string
  fillColor: string
  desc: string
}

type PointItem = {
  name: string
  lat: number
  lng: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type RouteItem = {
  name: string
  path: [number, number][]
  desc: string
  color: string
  dashArray?: string
}

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

const centerLat = 27.5
const centerLng = 48.5
const zoomLevel = 5

const useGoogle = ref(false)
const showOilAreas = ref(true)
const showGasAreas = ref(true)
const showOilCountries = ref(true)
const showOilRoutes = ref(true)
const showStraits = ref(true)
const showPorts = ref(true)

const oilAreaLayer = L.layerGroup()
const gasAreaLayer = L.layerGroup()
const oilCountryLayer = L.layerGroup()
const oilRouteLayer = L.layerGroup()
const straitLayer = L.layerGroup()
const portLayer = L.layerGroup()

const oilAreaLabels: DomLabel[] = []
const gasAreaLabels: DomLabel[] = []
const oilCountryLabels: DomLabel[] = []
const oilRouteLabels: DomLabel[] = []
const straitLabels: DomLabel[] = []
const portLabels: DomLabel[] = []

const oilAreas: AreaItem[] = [
  {
    name: '波斯湾油田集中区',
    lat: 27.2,
    lng: 50.8,
    radius: 520000,
    color: '#b45309',
    fillColor: '#f59e0b',
    desc: '西亚石油资源最集中的地区，周边分布多个重要产油国。',
  },
  {
    name: '伊拉克南部油田区',
    lat: 31.0,
    lng: 47.3,
    radius: 230000,
    color: '#c2410c',
    fillColor: '#fb923c',
    desc: '靠近两河流域下游和波斯湾方向，是伊拉克重要石油产区。',
  },
  {
    name: '沙特东部油田区',
    lat: 25.7,
    lng: 49.6,
    radius: 300000,
    color: '#b45309',
    fillColor: '#fbbf24',
    desc: '沙特阿拉伯东部靠近波斯湾，是重要石油生产区域。',
  },
]

const gasAreas: AreaItem[] = [
  {
    name: '卡塔尔天然气资源区',
    lat: 25.6,
    lng: 51.2,
    radius: 190000,
    color: '#0369a1',
    fillColor: '#38bdf8',
    desc: '卡塔尔附近天然气资源丰富，是世界重要天然气出口地区之一。',
  },
  {
    name: '伊朗天然气资源区',
    lat: 27.5,
    lng: 53.0,
    radius: 260000,
    color: '#0369a1',
    fillColor: '#7dd3fc',
    desc: '伊朗南部靠近波斯湾，油气资源丰富。',
  },
]

const oilCountries: PointItem[] = [
  { name: '沙特阿拉伯', lat: 24.2, lng: 45.4, desc: '西亚重要产油国，石油资源和出口影响力突出。' },
  { name: '伊朗', lat: 32.4, lng: 53.6, desc: '油气资源丰富，位于波斯湾北岸和伊朗高原地区。' },
  { name: '伊拉克', lat: 33.1, lng: 44.3, desc: '两河流域国家，南部靠近波斯湾方向石油资源丰富。' },
  { name: '科威特', lat: 29.3, lng: 47.6, desc: '波斯湾沿岸重要产油国。' },
  { name: '阿联酋', lat: 24.4, lng: 54.4, desc: '油气资源丰富，迪拜、阿布扎比等城市发展较快。' },
  { name: '卡塔尔', lat: 25.3, lng: 51.2, desc: '天然气资源突出，能源出口地位重要。' },
]

const straits: PointItem[] = [
  {
    name: '霍尔木兹海峡',
    lat: 26.56,
    lng: 56.25,
    desc: '波斯湾石油外运咽喉，是世界重要能源通道。',
  },
  {
    name: '苏伊士运河',
    lat: 30.55,
    lng: 32.35,
    desc: '连接红海和地中海，是西亚石油通往欧洲的重要通道。',
  },
  {
    name: '曼德海峡',
    lat: 12.6,
    lng: 43.4,
    desc: '连接红海和亚丁湾，是红海航线上的重要海上通道。',
  },
]

const ports: PointItem[] = [
  {
    name: '拉斯坦努拉',
    lat: 26.64,
    lng: 50.16,
    desc: '沙特阿拉伯波斯湾沿岸重要石油港口。',
  },
  {
    name: '科威特城',
    lat: 29.38,
    lng: 47.98,
    desc: '波斯湾沿岸港口城市和石油城市。',
  },
  {
    name: '阿布扎比',
    lat: 24.45,
    lng: 54.38,
    desc: '阿联酋重要城市，油气、金融和现代服务业发达。',
  },
  {
    name: '多哈',
    lat: 25.29,
    lng: 51.53,
    desc: '卡塔尔首都，天然气和现代服务业发展突出。',
  },
  {
    name: '迪拜',
    lat: 25.2,
    lng: 55.27,
    desc: '波斯湾地区重要航空、港口、商业和旅游城市。',
  },
]

const oilRoutes: RouteItem[] = [
  {
    name: '东运东亚路线',
    path: [
      [26.5, 51.5],
      [26.55, 56.25],
      [24.2, 58.7],
      [20.5, 62.5],
      [15.0, 66.8],
      [10.0, 72.0],
      [6.0, 76.8],
      [5.3, 81.7],
      [5.8, 88.5],
      [6.2, 94.2],
      [5.1, 96.8],
      [4.0, 98.6],
      [3.0, 100.2],
      [2.1, 101.8],
      [1.35, 103.6],
      [1.25, 104.15],
      [3.2, 107.0],
      [7.0, 110.6],
      [12.5, 114.2],
      [18.5, 118.2],
      [24.5, 121.0],
      [30.5, 122.0],
    ],
    color: '#dc2626',
    desc: '波斯湾石油经霍尔木兹海峡、阿拉伯海、印度洋、马六甲海峡和南海输往东亚。',
  },
  {
    name: '西运欧洲路线',
    path: [
      [26.5, 51.5],
      [26.4, 56.2],
      [22.0, 58.2],
      [16.0, 55.0],
      [12.6, 43.4],
      [18.0, 39.5],
      [25.0, 36.0],
      [30.5, 32.35],
      [34.5, 26.0],
      [38.0, 16.0],
    ],
    color: '#f97316',
    desc: '石油经红海、苏伊士运河和地中海输往欧洲。',
  },
  {
    name: '绕非远洋路线',
    path: [
      [26.5, 51.5],
      [26.4, 56.2],
      [15.0, 62.0],
      [5.0, 66.0],
      [-10.0, 60.0],
      [-25.0, 45.0],
      [-35.0, 20.0],
      [-20.0, 5.0],
      [0.0, -10.0],
      [25.0, -20.0],
    ],
    color: '#7c3aed',
    dashArray: '8 6',
    desc: '大型油轮可绕过好望角，航程较远但通行限制较少。',
  },
]

function switchBaseLayer() {
  if (!map) return

  if (baseLayer) {
    baseLayer.removeFrom(map)
    baseLayer = null
  }

  const url = useGoogle.value ? TILE_MAP['google']! : TILE_MAP['osm']!

  baseLayer = L.tileLayer(url, {
    attribution: '',
    minZoom: 2,
    maxZoom: 6,
    maxNativeZoom: 6,
    zIndex: 1,
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

  if (showOilAreas.value) oilAreaLabels.forEach(updateOneLabelPosition)
  if (showGasAreas.value) gasAreaLabels.forEach(updateOneLabelPosition)
  if (showOilCountries.value) oilCountryLabels.forEach(updateOneLabelPosition)
  if (showOilRoutes.value) oilRouteLabels.forEach(updateOneLabelPosition)
  if (showStraits.value) straitLabels.forEach(updateOneLabelPosition)
  if (showPorts.value) portLabels.forEach(updateOneLabelPosition)
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
  labels.forEach(label => label.el.remove())
  labels.length = 0
}

function bindInfoPopup(layer: L.Layer, title: string, desc: string) {
  if ('bindPopup' in layer && typeof layer.bindPopup === 'function') {
    layer.bindPopup(`
      <div style="min-width: 170px; line-height: 1.5;">
        <div style="font-weight: bold; margin-bottom: 4px;">${escapeHtml(title)}</div>
        <div style="font-size: 12px; color: #444;">${escapeHtml(desc)}</div>
      </div>
    `)
  }
}

function addAreaLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], areas: AreaItem[], labelClassName: string, fillOpacity = 0.16) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  areas.forEach(item => {
    const circle = L.circle([item.lat, item.lng], {
      radius: item.radius,
      color: item.color,
      weight: 2,
      fillColor: item.fillColor,
      fillOpacity,
      opacity: 0.88,
    }).addTo(targetLayer)

    bindInfoPopup(circle, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: labelClassName,
    })

    if (label) targetLabels.push(label)
  })

  targetLayer.addTo(map)
}

function addPointLayer(
  targetLayer: L.LayerGroup,
  targetLabels: DomLabel[],
  points: PointItem[],
  style: {
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
      radius: style.radius,
      color: style.color,
      weight: 2,
      fillColor: style.fillColor,
      fillOpacity: 1,
    }).addTo(targetLayer)

    bindInfoPopup(marker, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: style.labelClassName,
      offsetX: item.offsetX ?? 10,
      offsetY: item.offsetY ?? -2,
    })

    if (label) targetLabels.push(label)
  })

  targetLayer.addTo(map)
}

function getArrowHeadPoints(path: [number, number][], size = 1.1): [number, number][] {
  const end = path[path.length - 1]
  const before = path[path.length - 2]

  if (!end || !before) return []

  const [endLat, endLng] = end
  const [beforeLat, beforeLng] = before
  const dx = endLng - beforeLng
  const dy = endLat - beforeLat
  const length = Math.sqrt(dx * dx + dy * dy)

  if (!length) return []

  const ux = dx / length
  const uy = dy / length
  const baseLat = endLat - uy * size
  const baseLng = endLng - ux * size
  const perpendicularX = -uy
  const perpendicularY = ux
  const width = size * 0.55

  return [
    [endLat, endLng],
    [baseLat + perpendicularY * width, baseLng + perpendicularX * width],
    [baseLat - perpendicularY * width, baseLng - perpendicularX * width],
  ]
}

function addRouteLayer() {
  if (!map) return

  oilRouteLayer.clearLayers()
  clearDomLabels(oilRouteLabels)

  oilRoutes.forEach(item => {
    const route = L.polyline(item.path, {
      color: item.color,
      weight: 3,
      opacity: 0.9,
      dashArray: item.dashArray || '',
      lineCap: 'round',
      lineJoin: 'round',
      smoothFactor: 0,
    }).addTo(oilRouteLayer)

    bindInfoPopup(route, item.name, item.desc)

    const arrowHead = getArrowHeadPoints(item.path, 1.3)
    if (arrowHead.length) {
      L.polygon(arrowHead, {
        color: item.color,
        fillColor: item.color,
        fillOpacity: 0.92,
        opacity: 0.92,
        weight: 1,
      }).addTo(oilRouteLayer)
    }

    const mid = item.path[Math.floor(item.path.length / 2)]
    if (mid) {
      const label = createDomLabel({
        lat: mid[0],
        lng: mid[1],
        content: item.name,
        className: 'route-label-dom',
        offsetX: 0,
        offsetY: -12,
      })

      if (label) oilRouteLabels.push(label)
    }
  })

  oilRouteLayer.addTo(map)
}

function refreshMapLayers() {
  if (!map) return

  if (showOilAreas.value) {
    addAreaLayer(oilAreaLayer, oilAreaLabels, oilAreas, 'oil-area-label-dom', 0.18)
  } else {
    oilAreaLayer.clearLayers()
    clearDomLabels(oilAreaLabels)
  }

  if (showGasAreas.value) {
    addAreaLayer(gasAreaLayer, gasAreaLabels, gasAreas, 'gas-area-label-dom', 0.15)
  } else {
    gasAreaLayer.clearLayers()
    clearDomLabels(gasAreaLabels)
  }

  if (showOilCountries.value) {
    addPointLayer(oilCountryLayer, oilCountryLabels, oilCountries, {
      color: '#92400e',
      fillColor: '#fef3c7',
      radius: 5.5,
      labelClassName: 'country-label-dom',
    })
  } else {
    oilCountryLayer.clearLayers()
    clearDomLabels(oilCountryLabels)
  }

  if (showOilRoutes.value) {
    addRouteLayer()
  } else {
    oilRouteLayer.clearLayers()
    clearDomLabels(oilRouteLabels)
  }

  if (showStraits.value) {
    addPointLayer(straitLayer, straitLabels, straits, {
      color: '#1d4ed8',
      fillColor: '#dbeafe',
      radius: 6,
      labelClassName: 'strait-label-dom',
    })
  } else {
    straitLayer.clearLayers()
    clearDomLabels(straitLabels)
  }

  if (showPorts.value) {
    addPointLayer(portLayer, portLabels, ports, {
      color: '#047857',
      fillColor: '#dcfce7',
      radius: 5.2,
      labelClassName: 'port-label-dom',
    })
  } else {
    portLayer.clearLayers()
    clearDomLabels(portLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  oilAreaLayer.clearLayers()
  gasAreaLayer.clearLayers()
  oilCountryLayer.clearLayers()
  oilRouteLayer.clearLayers()
  straitLayer.clearLayers()
  portLayer.clearLayers()

  if (map.hasLayer(oilAreaLayer)) oilAreaLayer.removeFrom(map)
  if (map.hasLayer(gasAreaLayer)) gasAreaLayer.removeFrom(map)
  if (map.hasLayer(oilCountryLayer)) oilCountryLayer.removeFrom(map)
  if (map.hasLayer(oilRouteLayer)) oilRouteLayer.removeFrom(map)
  if (map.hasLayer(straitLayer)) straitLayer.removeFrom(map)
  if (map.hasLayer(portLayer)) portLayer.removeFrom(map)

  clearDomLabels(oilAreaLabels)
  clearDomLabels(gasAreaLabels)
  clearDomLabels(oilCountryLabels)
  clearDomLabels(oilRouteLabels)
  clearDomLabels(straitLabels)
  clearDomLabels(portLabels)
}

onMounted(async () => {
  map = L.map('oilMap', {
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
.oil-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.oil-header {
  margin-bottom: 32px;
}

.oil-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.oil-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.oil-content-right {
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

.oil-card {
  border-radius: 8px;
  border: 1px solid #fed7aa;
  padding: 14px;
  background: #fff7ed;
}

.oil-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #9a3412;
}

.iconfont {
  margin-right: 8px;
  color: #9a3412;
}

.oil-card-01 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.oil-card-02 {
  background: #fefce8;
  border-color: #fde68a;
}

.oil-card-02 .oil-card-header,
.oil-card-02 .iconfont {
  color: #854d0e;
}

.oil-card-03 {
  background: #eff6ff;
  border-color: #bfdbfe;
}

.oil-card-03 .oil-card-header,
.oil-card-03 .iconfont {
  color: #1d4ed8;
}

.oil-card-04 {
  background: #f0fdfa;
  border-color: #99f6e4;
}

.oil-card-04 .oil-card-header,
.oil-card-04 .iconfont {
  color: #047857;
}

.oil-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.oil-card-05 .oil-card-header,
.oil-card-05 .iconfont {
  color: #854d0e;
}

.oil-card p {
  line-height: 1.65;
  color: #1f2937;
  margin-top: 0;
}

.feature-grid,
.strait-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 12px 0;
}

.feature-box,
.strait-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #fed7aa;
}

.feature-title {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 4px;
}

.feature-value {
  font-size: 17px;
  font-weight: bold;
  color: #9a3412;
  margin-bottom: 4px;
}

.feature-desc,
.strait-desc {
  font-size: 12px;
  color: #475569;
  line-height: 1.45;
}

.note-box {
  padding: 8px 10px;
  border-radius: 6px;
  background: #fff;
  border-left: 3px solid #f97316;
  font-size: 13px;
  color: #374151;
}

.note-title {
  font-weight: bold;
  color: #9a3412;
  margin-bottom: 4px;
}

.rule-item,
.route-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid #f59e0b;
  margin-bottom: 8px;
}

.rule-item:last-child,
.route-item:last-child {
  margin-bottom: 0;
}

.rule-title,
.route-title,
.strait-title {
  font-weight: bold;
  color: #9a3412;
  margin-bottom: 4px;
}

.route-title {
  color: #1d4ed8;
}

.strait-title {
  color: #047857;
}

.rule-desc,
.route-desc {
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
  width: 236px;
  max-height: calc(100% - 70px);
  overflow-y: auto;
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

.legend-area {
  width: 14px;
  height: 10px;
  border-radius: 999px;
  display: inline-block;
  flex-shrink: 0;
}

.oil-area {
  background: rgba(245, 158, 11, 0.35);
  border: 1px solid #b45309;
}

.gas-area {
  background: rgba(56, 189, 248, 0.3);
  border: 1px solid #0369a1;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.country-dot {
  background: #fef3c7;
  border: 2px solid #92400e;
  box-sizing: border-box;
}

.strait-dot {
  background: #dbeafe;
  border: 2px solid #1d4ed8;
  box-sizing: border-box;
}

.port-dot {
  background: #dcfce7;
  border: 2px solid #047857;
  box-sizing: border-box;
}

.legend-line {
  width: 26px;
  height: 0;
  display: inline-block;
  border-top: 3px solid #dc2626;
  flex-shrink: 0;
}

.map-note {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  color: #475569;
  line-height: 1.45;
}

.map-note-title {
  font-weight: bold;
  color: #9a3412;
  margin-bottom: 4px;
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

:deep(.oil-area-label-dom),
:deep(.gas-area-label-dom),
:deep(.route-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  border-radius: 999px;
  padding: 3px 8px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.oil-area-label-dom) {
  color: #9a3412;
  background: rgba(255, 247, 237, 0.96);
  border: 1px solid rgba(194, 65, 12, 0.65);
}

:deep(.gas-area-label-dom) {
  color: #0369a1;
  background: rgba(240, 249, 255, 0.96);
  border: 1px solid rgba(14, 165, 233, 0.65);
}

:deep(.route-label-dom) {
  color: #b91c1c;
  background: rgba(254, 242, 242, 0.96);
  border: 1px solid rgba(220, 38, 38, 0.65);
}

:deep(.country-label-dom),
:deep(.strait-label-dom),
:deep(.port-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  padding: 2px 5px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.country-label-dom) {
  color: #92400e;
  background: rgba(255, 251, 235, 0.96);
  border: 1px solid rgba(146, 64, 14, 0.55);
}

:deep(.strait-label-dom) {
  color: #1d4ed8;
  background: rgba(239, 246, 255, 0.96);
  border: 1px solid rgba(29, 78, 216, 0.55);
}

:deep(.port-label-dom) {
  color: #047857;
  background: rgba(240, 253, 244, 0.96);
  border: 1px solid rgba(4, 120, 87, 0.55);
}
</style>
