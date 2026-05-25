<template>
  <div class="oil-container">
    <div class="oil-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="oil-content">
      <!-- 左侧内容区 -->
      <div class="oil-content-left">
        <div class="oil-card oil-card-01">
          <div class="oil-card-header">
            <i class="iconfont icon-qiankuwang_shiyoukaicaiketouji_yuansubianhao12893869_05"></i>世界石油宝库：黑色金子
          </div>

          <p class="mb-8">
            西亚，特别是<strong>波斯湾及其沿岸地区</strong>，是世界重要的石油储藏、生产和出口区。
            石油出口是沙特阿拉伯、伊拉克、伊朗、科威特、阿联酋、卡塔尔等国的重要经济支柱。
          </p>

          <div class="oil-ratio-panel">
            <div class="ratio-title">西亚石油在世界中的地位</div>

            <div class="pie-chart-row">
              <div class="pie-card">
                <div class="pie reserve-pie">
                  <div class="pie-inner">
                    <div>西亚</div>
                    <strong>48%</strong>
                  </div>
                </div>
                <div class="pie-label">储量</div>
                <div class="pie-desc">其他地区 52%</div>
              </div>

              <div class="pie-card">
                <div class="pie output-pie">
                  <div class="pie-inner">
                    <div>西亚</div>
                    <strong>31%</strong>
                  </div>
                </div>
                <div class="pie-label">产量</div>
                <div class="pie-desc">其他地区 69%</div>
              </div>

              <div class="pie-card">
                <div class="pie export-pie">
                  <div class="pie-inner">
                    <div>西亚</div>
                    <strong>34%</strong>
                  </div>
                </div>
                <div class="pie-label">出口量</div>
                <div class="pie-desc">其他地区 66%</div>
              </div>
            </div>
          </div>

          <div class="feature-grid">
            <div class="feature-card">
              <div class="feature-icon reserve-icon">◕</div>
              <div class="feature-title">储量丰富</div>
              <div class="feature-desc">油气资源集中在波斯湾沿岸</div>
            </div>

            <div class="feature-card">
              <div class="feature-icon bury-icon">◆</div>
              <div class="feature-title">埋藏较浅</div>
              <div class="feature-desc">部分油田规模大、开采条件较好</div>
            </div>

            <div class="feature-card">
              <div class="feature-icon output-icon">⛽</div>
              <div class="feature-title">出口量大</div>
              <div class="feature-desc">大量原油供应国际市场</div>
            </div>

            <div class="feature-card">
              <div class="feature-icon route-icon">➜</div>
              <div class="feature-title">运输关键</div>
              <div class="feature-desc">海运航线和输油管道共同外运</div>
            </div>
          </div>
        </div>

        <div class="oil-card oil-card-02">
          <div class="oil-card-header"><i class="iconfont icon-fenbu"></i>石油分布中心</div>

          <p class="mb-8">
            西亚石油主要集中在<strong>波斯湾及其沿岸地区</strong>，呈现“沿海湾两侧密集分布”的特点。 点击下方国家名称，可查看提示并定位到地图。
          </p>

          <div class="country-tags">
            <button v-for="item in productionAreas" :key="item.name" :class="{ active: activeName === item.name }" @click="focusPoint(item)">
              {{ item.name }}
            </button>
          </div>

          <div class="production-tip" v-if="activeProduction">
            <div class="tip-title">
              {{ activeProduction.name }}
            </div>
            <div class="tip-desc">
              {{ activeProduction.desc }}
            </div>
            <div class="tip-key"><strong>识记关键词：</strong>{{ activeProduction.keyword }}</div>
          </div>

          <div class="production-tip empty-tip" v-else>点击上方国家，查看该国石油分布与运输特点。</div>
        </div>

        <div class="oil-card oil-card-03">
          <div class="oil-card-header"><i class="iconfont icon-anchor-full"></i>三大主要海上外运路线</div>

          <div class="route-item route-east">
            <div class="route-title">
              <span>航线 A</span>
              东行路线：运往东亚
            </div>
            <p>波斯湾 → 霍尔木兹海峡 → 阿拉伯海 → 印度洋 → 马六甲海峡 → 中国、日本、韩国等东亚地区。</p>
          </div>

          <div class="route-item route-suez">
            <div class="route-title">
              <span>航线 B</span>
              西行路线：经苏伊士运河运往欧洲
            </div>
            <p>波斯湾 → 霍尔木兹海峡 → 阿拉伯海 → 曼德海峡 → 红海 → 苏伊士运河 → 地中海 → 欧洲。</p>
          </div>

          <div class="route-item route-cape">
            <div class="route-title">
              <span>航线 C</span>
              绕行路线：经好望角
            </div>
            <p>波斯湾 → 霍尔木兹海峡 → 阿拉伯海 → 印度洋 → 好望角 → 大西洋 → 欧洲或北美。</p>
          </div>
        </div>

        <div class="oil-card oil-card-05">
          <div class="oil-card-header"><i class="iconfont icon-guandao"></i>陆上输油管道补充</div>

          <p class="mb-8">除海运外，西亚部分产油国还通过陆上管道把石油输往红海、地中海或阿曼湾方向，以分散运输风险。</p>

          <ul class="pipeline-list">
            <li><strong>沙特东西输油管道：</strong>从波斯湾附近油区通往红海沿岸。</li>
            <li><strong>伊拉克—土耳其管道：</strong>连接伊拉克北部油区与土耳其地中海沿岸。</li>
            <li><strong>阿布扎比—富查伊拉管道：</strong>连接阿联酋内陆油区与阿曼湾方向。</li>
          </ul>
        </div>

        <div class="oil-card oil-card-04">
          <div class="oil-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一看分布：</strong>波斯湾及其沿岸地区。</li>
            <li><strong>二看国家：</strong>沙特阿拉伯、伊拉克、伊朗、科威特、阿联酋、卡塔尔等。</li>
            <li><strong>三看通道：</strong>霍尔木兹海峡是波斯湾石油外运的关键咽喉。</li>
            <li><strong>四看路线：</strong>海运为主，陆上输油管道是重要补充。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="oil-content-right">
        <div id="oilMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看石油产区、外运路线与管道</div>

        <div class="map-layer-panel">
          <div class="panel-title">地图标注</div>

          <label>
            <input type="checkbox" v-model="showProduction" @change="refreshMapLayers" />
            石油主要生产地
          </label>

          <label>
            <input type="checkbox" v-model="showRoutes" @change="refreshMapLayers" />
            石油外运海上路线
          </label>

          <label>
            <input type="checkbox" v-model="showPipelines" @change="refreshMapLayers" />
            西亚石油管道
          </label>

          <label>
            <input type="checkbox" v-model="showChokepoints" @change="refreshMapLayers" />
            咽喉要道
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-dot oil-dot"></span>
              <span>主要石油生产地</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot choke-dot"></span>
              <span>海峡 / 运河</span>
            </div>

            <div class="legend-row">
              <span class="legend-line east-line"></span>
              <span>东行海运路线</span>
            </div>

            <div class="legend-row">
              <span class="legend-line suez-line"></span>
              <span>经苏伊士路线</span>
            </div>

            <div class="legend-row">
              <span class="legend-line cape-line"></span>
              <span>绕好望角路线</span>
            </div>

            <div class="legend-row">
              <span class="legend-line pipeline-line"></span>
              <span>石油管道示意</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

defineProps<{
  current: {
    title: string
    desc: string
    index: number
  }
}>()

type PointItem = {
  name: string
  lat: number
  lng: number
  zoom?: number
  offsetX?: number
  offsetY?: number
  desc: string
  keyword: string
}

type LineRouteItem = {
  name: string
  color: string
  points: [number, number][]
  label: {
    text: string
    lat: number
    lng: number
  }
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

const activeName = ref('')
const showProduction = ref(true)
const showRoutes = ref(true)
const showPipelines = ref(true)
const showChokepoints = ref(true)

const productionLayer = L.layerGroup()
const chokepointLayer = L.layerGroup()
const routeLayer = L.layerGroup()
const pipelineLayer = L.layerGroup()

const productionLabels: DomLabel[] = []
const chokepointLabels: DomLabel[] = []
const routeLabels: DomLabel[] = []
const pipelineLabels: DomLabel[] = []

const productionAreas: PointItem[] = [
  {
    name: '沙特阿拉伯',
    lat: 24.2,
    lng: 44.5,
    zoom: 6,
    offsetX: 10,
    offsetY: -2,
    desc: '西亚最重要的产油国之一，油田主要分布在东部靠近波斯湾一带，是世界石油市场的重要供应方。',
    keyword: '东部油区、波斯湾沿岸、出口大国',
  },
  {
    name: '伊拉克',
    lat: 33.1,
    lng: 44.2,
    zoom: 7,
    offsetX: 10,
    offsetY: -2,
    desc: '石油资源主要分布在北部和南部地区，南部靠近波斯湾，便于通过海上通道外运。',
    keyword: '北部油区、南部油区、波斯湾出口',
  },
  {
    name: '伊朗',
    lat: 31.5,
    lng: 51.5,
    zoom: 6,
    offsetX: 10,
    offsetY: -2,
    desc: '油气资源集中在西南部和波斯湾沿岸，是西亚重要油气生产国，也扼守霍尔木兹海峡北侧。',
    keyword: '西南油区、波斯湾北岸、霍尔木兹海峡',
  },
  {
    name: '科威特',
    lat: 29.3,
    lng: 47.6,
    zoom: 8,
    offsetX: 10,
    offsetY: -2,
    desc: '国土面积较小，但油气资源丰富，靠近波斯湾，石油出口条件便利。',
    keyword: '小国大油田、波斯湾沿岸',
  },
  {
    name: '阿联酋',
    lat: 24.2,
    lng: 54.4,
    zoom: 7,
    offsetX: 10,
    offsetY: -2,
    desc: '石油主要集中在阿布扎比等地，通过海运和通往富查伊拉方向的管道外运。',
    keyword: '阿布扎比、富查伊拉、绕开霍尔木兹风险',
  },
  {
    name: '卡塔尔',
    lat: 25.3,
    lng: 51.2,
    zoom: 8,
    offsetX: 10,
    offsetY: -2,
    desc: '位于波斯湾西岸，油气资源丰富，尤其以天然气资源突出，能源出口地位重要。',
    keyword: '波斯湾西岸、天然气资源突出',
  },
]

const activeProduction = computed(() => {
  return productionAreas.find(item => item.name === activeName.value) || null
})

const chokepoints = [
  { name: '霍尔木兹海峡', lat: 26.5, lng: 56.2, zoom: 7, offsetX: 10, offsetY: -2 },
  { name: '曼德海峡', lat: 12.6, lng: 43.3, zoom: 7, offsetX: 10, offsetY: -2 },
  { name: '苏伊士运河', lat: 30.4, lng: 32.3, zoom: 7, offsetX: 10, offsetY: -2 },
  { name: '马六甲海峡', lat: 2.8, lng: 101.0, zoom: 6, offsetX: 10, offsetY: -2 },
  { name: '好望角', lat: -34.3, lng: 18.5, zoom: 6, offsetX: 10, offsetY: -2 },
]

const oilRoutes: LineRouteItem[] = [
  {
    name: '东行路线',
    color: '#2563eb',
    points: [
      [27.2, 50.5],
      [26.5, 56.2],
      [22.0, 61.8],
      [14.0, 68.5],
      [8.0, 79.0],
      [4.0, 91.0],
      [2.8, 101.0],
      [12.5, 111.0],
      [23.0, 119.0],
      [31.2, 121.5],
      [35.7, 139.7],
    ],
    label: {
      text: '东行：运往东亚',
      lat: 12.5,
      lng: 91,
    },
  },
  {
    name: '经苏伊士路线',
    color: '#22c55e',
    points: [
      [27.2, 50.5],
      [26.5, 56.2],
      [21.0, 58.0],
      [15.0, 51.0],
      [12.6, 43.3],
      [18.0, 39.5],
      [24.0, 36.5],
      [30.4, 32.3],
      [34.5, 24.0],
      [39.0, 15.0],
      [45.0, 5.0],
      [51.0, 0.0],
    ],
    label: {
      text: '西行：经苏伊士运河',
      lat: 28,
      lng: 35,
    },
  },
  {
    name: '绕好望角路线',
    color: '#a855f7',
    points: [
      [27.2, 50.5],
      [26.5, 56.2],
      [18.0, 60.0],
      [8.0, 60.0],
      [-5.0, 55.0],
      [-18.0, 45.0],
      [-29.0, 30.0],
      [-34.3, 18.5],
      [-20.0, 0.0],
      [5.0, -15.0],
      [25.0, -25.0],
      [45.0, -10.0],
    ],
    label: {
      text: '绕行：经好望角',
      lat: -23,
      lng: 31,
    },
  },
]

const oilPipelines: LineRouteItem[] = [
  {
    name: '沙特东西输油管道',
    color: '#b45309',
    points: [
      [26.3, 49.9],
      [25.7, 47.0],
      [25.3, 44.0],
      [24.9, 41.0],
      [24.2, 38.1],
    ],
    label: {
      text: '沙特东西输油管道',
      lat: 25.4,
      lng: 43.3,
    },
  },
  {
    name: '伊拉克—土耳其管道',
    color: '#92400e',
    points: [
      [35.5, 44.4],
      [36.2, 42.0],
      [37.0, 39.0],
      [37.2, 36.8],
      [36.8, 35.9],
    ],
    label: {
      text: '伊拉克—土耳其管道',
      lat: 36.7,
      lng: 39.4,
    },
  },
  {
    name: '阿布扎比—富查伊拉管道',
    color: '#d97706',
    points: [
      [24.3, 54.5],
      [24.5, 55.2],
      [24.7, 55.8],
      [25.1, 56.3],
    ],
    label: {
      text: '阿布扎比—富查伊拉管道',
      lat: 24.8,
      lng: 55.4,
    },
  },
  {
    name: '伊朗西南部外输管道示意',
    color: '#78350f',
    points: [
      [30.2, 49.1],
      [31.0, 50.0],
      [32.0, 51.2],
      [33.2, 52.0],
      [35.0, 51.4],
    ],
    label: {
      text: '伊朗西南油区管道示意',
      lat: 32.1,
      lng: 50.9,
    },
  },
]

function focusPoint(item: PointItem) {
  activeName.value = item.name

  if (!map) return

  map.setView([item.lat, item.lng], item.zoom || 6, {
    animate: false,
  })

  updateActiveLabels()
  scheduleUpdateLabels()
}

function initBaseMap() {
  if (!map) return

  if (baseLayer) {
    baseLayer.removeFrom(map)
    baseLayer = null
  }

  baseLayer = L.tileLayer('https://zdys.szjx.ai-study.net/geo-resources-folder/tiles/osm-tiles/{z}/{x}/{y}.png', {
    attribution: '',
    minZoom: 2,
    maxZoom: 7,
  }).addTo(map)
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

  if (showProduction.value) {
    productionLabels.forEach(updateOneLabelPosition)
  }

  if (showChokepoints.value) {
    chokepointLabels.forEach(updateOneLabelPosition)
  }

  if (showRoutes.value) {
    routeLabels.forEach(updateOneLabelPosition)
  }

  if (showPipelines.value) {
    pipelineLabels.forEach(updateOneLabelPosition)
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

function smoothLinePoints(points: [number, number][], segments = 18): [number, number][] {
  if (points.length <= 2) return points

  const result: [number, number][] = []

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(i - 1, 0)]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[Math.min(i + 2, points.length - 1)]

    for (let j = 0; j < segments; j++) {
      const t = j / segments
      const t2 = t * t
      const t3 = t2 * t

      const lat =
        // @ts-ignore
        0.5 * (2 * p1[0] + (-p0[0] + p2[0]) * t + (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 + (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3)

      const lng =
        // @ts-ignore
        0.5 * (2 * p1[1] + (-p0[1] + p2[1]) * t + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3)

      result.push([lat, lng])
    }
  }

  result.push(points[points.length - 1]!)
  return result
}

function addStyledLine(
  targetLayer: L.LayerGroup,
  points: [number, number][],
  options: {
    color: string
    weight?: number
    dashArray?: string
    haloWeight?: number
    opacity?: number
  },
) {
  const smoothPoints = smoothLinePoints(points)

  L.polyline(smoothPoints, {
    color: '#ffffff',
    weight: options.haloWeight ?? 5,
    opacity: 0.8,
    lineCap: 'round',
    lineJoin: 'round',
    interactive: false,
  }).addTo(targetLayer)

  L.polyline(smoothPoints, {
    color: options.color,
    weight: options.weight ?? 2.2,
    opacity: options.opacity ?? 0.95,
    dashArray: options.dashArray,
    lineCap: 'round',
    lineJoin: 'round',
    smoothFactor: 1.2,
    interactive: false,
  }).addTo(targetLayer)
}

function addProductionLayer() {
  if (!map) return

  productionLayer.clearLayers()
  clearDomLabels(productionLabels)

  productionAreas.forEach(item => {
    L.circleMarker([item.lat, item.lng], {
      radius: 5.5,
      color: '#111827',
      weight: 1.5,
      fillColor: '#f59e0b',
      fillOpacity: 1,
      interactive: false,
    }).addTo(productionLayer)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: 'production-label-dom',
      offsetX: item.offsetX ?? 10,
      offsetY: item.offsetY ?? -2,
      datasetName: item.name,
    })

    if (label) productionLabels.push(label)
  })

  productionLayer.addTo(map)
}

function addChokepointLayer() {
  if (!map) return

  chokepointLayer.clearLayers()
  clearDomLabels(chokepointLabels)

  chokepoints.forEach(item => {
    L.circleMarker([item.lat, item.lng], {
      radius: 4.5,
      color: '#dc2626',
      weight: 1.8,
      fillColor: '#fff',
      fillOpacity: 1,
      interactive: false,
    }).addTo(chokepointLayer)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: 'chokepoint-label-dom',
      offsetX: item.offsetX ?? 10,
      offsetY: item.offsetY ?? -2,
      datasetName: item.name,
    })

    if (label) chokepointLabels.push(label)
  })

  chokepointLayer.addTo(map)
}

function addRouteLayer() {
  if (!map) return

  routeLayer.clearLayers()
  clearDomLabels(routeLabels)

  oilRoutes.forEach(route => {
    addStyledLine(routeLayer, route.points, {
      color: route.color,
      weight: 2.1,
      haloWeight: 4.6,
      dashArray: '8 7',
      opacity: 0.9,
    })

    const label = createDomLabel({
      lat: route.label.lat,
      lng: route.label.lng,
      content: route.label.text,
      className: 'route-label-dom',
      offsetX: 0,
      offsetY: 0,
    })

    if (label) {
      label.el.style.borderColor = route.color
      routeLabels.push(label)
    }

    addRouteDirectionDots(route)
  })

  routeLayer.addTo(map)
}

function addPipelineLayer() {
  if (!map) return

  pipelineLayer.clearLayers()
  clearDomLabels(pipelineLabels)

  oilPipelines.forEach(route => {
    addStyledLine(pipelineLayer, route.points, {
      color: route.color,
      weight: 2.4,
      haloWeight: 5,
      dashArray: '3 5',
      opacity: 0.96,
    })

    const label = createDomLabel({
      lat: route.label.lat,
      lng: route.label.lng,
      content: route.label.text,
      className: 'pipeline-label-dom',
      offsetX: 0,
      offsetY: 0,
    })

    if (label) {
      label.el.style.borderColor = route.color
      pipelineLabels.push(label)
    }
  })

  pipelineLayer.addTo(map)
}

function addRouteDirectionDots(route: LineRouteItem) {
  const points = route.points

  if (points.length < 2) return

  const dotIndexes = [1, Math.floor(points.length / 2), points.length - 2]

  dotIndexes.forEach(index => {
    const point = points[index]
    if (!point) return

    L.circleMarker(point, {
      radius: 2.4,
      color: route.color,
      weight: 1,
      fillColor: '#fff',
      fillOpacity: 1,
      interactive: false,
    }).addTo(routeLayer)
  })
}

function updateActiveLabels() {
  productionLabels.forEach(label => {
    const name = label.el.dataset.name

    if (name && name === activeName.value) {
      label.el.classList.add('active')
    } else {
      label.el.classList.remove('active')
    }
  })

  chokepointLabels.forEach(label => {
    const name = label.el.dataset.name

    if (name && name === activeName.value) {
      label.el.classList.add('active')
    } else {
      label.el.classList.remove('active')
    }
  })
}

function refreshMapLayers() {
  if (!map) return

  if (showProduction.value) {
    addProductionLayer()
  } else {
    productionLayer.clearLayers()
    clearDomLabels(productionLabels)
  }

  if (showChokepoints.value) {
    addChokepointLayer()
  } else {
    chokepointLayer.clearLayers()
    clearDomLabels(chokepointLabels)
  }

  if (showRoutes.value) {
    addRouteLayer()
  } else {
    routeLayer.clearLayers()
    clearDomLabels(routeLabels)
  }

  if (showPipelines.value) {
    addPipelineLayer()
  } else {
    pipelineLayer.clearLayers()
    clearDomLabels(pipelineLabels)
  }

  updateActiveLabels()
  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  productionLayer.clearLayers()
  chokepointLayer.clearLayers()
  routeLayer.clearLayers()
  pipelineLayer.clearLayers()

  if (map.hasLayer(productionLayer)) {
    productionLayer.removeFrom(map)
  }

  if (map.hasLayer(chokepointLayer)) {
    chokepointLayer.removeFrom(map)
  }

  if (map.hasLayer(routeLayer)) {
    routeLayer.removeFrom(map)
  }

  if (map.hasLayer(pipelineLayer)) {
    pipelineLayer.removeFrom(map)
  }

  clearDomLabels(productionLabels)
  clearDomLabels(chokepointLabels)
  clearDomLabels(routeLabels)
  clearDomLabels(pipelineLabels)
}

onMounted(async () => {
  map = L.map('oilMap', {
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

  initBaseMap()
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
  border: 1px solid #dbeafe;
  padding: 14px;
  background: #eff6ff;
}

.oil-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #1e3a8a;
}

.iconfont {
  margin-right: 8px;
  color: #1e3a8a;
}

.oil-card-01 {
  background: #eff6ff;
  border-color: #dbeafe;
}

.oil-card-02 {
  background: #fff1f2;
  border-color: #fecdd3;
}

.oil-card-02 .oil-card-header,
.oil-card-02 .iconfont {
  color: #991b1b;
}

.oil-card-03 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.oil-card-03 .oil-card-header,
.oil-card-03 .iconfont {
  color: #9a3412;
}

.oil-card-04 {
  background: #fefce8;
  border-color: #fde68a;
}

.oil-card-04 .oil-card-header,
.oil-card-04 .iconfont {
  color: #854d0e;
}

.oil-card-05 {
  background: #f5f3ff;
  border-color: #ddd6fe;
}

.oil-card-05 .oil-card-header,
.oil-card-05 .iconfont {
  color: #6d28d9;
}

.mb-8 {
  margin-bottom: 8px;
}

.oil-card p {
  line-height: 1.65;
  color: #1f2937;
  margin-top: 0;
}

.oil-ratio-panel {
  margin: 12px 0;
  padding: 12px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #dbe3ef;
}

.ratio-title {
  font-weight: bold;
  color: #0f2748;
  margin-bottom: 10px;
}

/* 这里已改：三个图表空间不够会自动换行 */
.pie-chart-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 10px;
}

.pie-card {
  text-align: center;
  min-width: 0;
}

.pie {
  --percent: 50%;
  width: 82px;
  height: 82px;
  margin: 0 auto 6px;
  border-radius: 50%;
  background: conic-gradient(#38bdf8 0 var(--percent), #c7edf2 var(--percent) 100%);
  position: relative;
  box-shadow:
    inset 0 -8px 0 rgba(0, 0, 0, 0.08),
    0 2px 5px rgba(15, 39, 72, 0.15);
}

.reserve-pie {
  --percent: 48%;
}

.output-pie {
  --percent: 31%;
}

.export-pie {
  --percent: 34%;
}

.pie::after {
  content: '';
  position: absolute;
  left: 8px;
  right: 8px;
  top: 8px;
  bottom: 8px;
  background: rgba(255, 255, 255, 0.82);
  border-radius: 50%;
}

.pie-inner {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(1px);
  color: #0f2748;
  font-size: 11px;
}

.pie-inner strong {
  font-size: 16px;
}

.pie-label {
  font-weight: bold;
  color: #0f2748;
  margin-bottom: 2px;
}

.pie-desc {
  font-size: 11px;
  color: #64748b;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 12px;
}

.feature-card {
  background: #fff;
  border: 1px solid #dbe3ef;
  border-radius: 8px;
  padding: 12px 10px;
  text-align: center;
}

.feature-icon {
  font-size: 28px;
  font-weight: bold;
  line-height: 30px;
  margin-bottom: 6px;
}

.reserve-icon {
  color: #2563eb;
}

.bury-icon {
  color: #d97706;
}

.output-icon {
  color: #0f2748;
}

.route-icon {
  color: #059669;
}

.feature-title {
  font-weight: bold;
  color: #0f2748;
  margin-bottom: 4px;
}

.feature-desc {
  font-size: 12px;
  color: #475569;
  line-height: 1.4;
}

.country-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.country-tags button {
  padding: 6px 10px;
  border: 1px solid #fca5a5;
  background: #fff;
  border-radius: 999px;
  color: #991b1b;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
}

.country-tags button:hover,
.country-tags button.active {
  background: #ef4444;
  color: #fff;
}

.production-tip {
  margin-top: 12px;
  padding: 10px 12px;
  background: #fff;
  border-left: 4px solid #dc2626;
  border-radius: 8px;
  color: #374151;
  line-height: 1.55;
  font-size: 13px;
}

.empty-tip {
  border-left-color: #fca5a5;
  color: #6b7280;
}

.tip-title {
  color: #991b1b;
  font-weight: bold;
  margin-bottom: 4px;
  font-size: 14px;
}

.tip-desc {
  margin-bottom: 4px;
}

.tip-key strong {
  color: #991b1b;
}

.route-item {
  background: #fff;
  border-radius: 8px;
  padding: 10px 12px;
  margin-bottom: 10px;
  border-left: 5px solid #2563eb;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.route-item:last-child {
  margin-bottom: 0;
}

.route-east {
  border-left-color: #2563eb;
}

.route-suez {
  border-left-color: #22c55e;
}

.route-cape {
  border-left-color: #a855f7;
}

.route-title {
  font-weight: bold;
  color: #0f2748;
  margin-bottom: 6px;
}

.route-title span {
  display: inline-block;
  padding: 2px 6px;
  margin-right: 6px;
  border-radius: 4px;
  background: #0f2748;
  color: #fff;
  font-size: 12px;
}

.route-item p {
  margin: 0;
  font-size: 13px;
  line-height: 1.55;
}

.pipeline-list {
  margin: 0;
  padding-left: 18px;
  color: #3f2f12;
  line-height: 1.6;
}

.pipeline-list li {
  margin-bottom: 6px;
}

.pipeline-list li:last-child {
  margin-bottom: 0;
}

.pipeline-list strong {
  color: #6d28d9;
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

.map-layer-panel {
  position: absolute;
  top: 48px;
  right: 10px;
  width: 190px;
  background: rgba(255, 255, 255, 0.95);
  padding: 10px;
  border-radius: 6px;
  font-size: 12px;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}

.panel-title {
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

.map-layer-panel label {
  display: block;
  margin-bottom: 6px;
  color: #333;
}

.map-layer-panel label:last-of-type {
  margin-bottom: 0;
}

.map-legend {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  color: #333;
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

.oil-dot {
  background: #f59e0b;
  border: 2px solid #111827;
  box-sizing: border-box;
}

.choke-dot {
  background: #fff;
  border: 2px solid #dc2626;
  box-sizing: border-box;
}

.legend-line {
  width: 24px;
  height: 0;
  border-top: 2px dashed #2563eb;
  flex-shrink: 0;
}

.east-line {
  border-color: #2563eb;
}

.suez-line {
  border-color: #22c55e;
}

.cape-line {
  border-color: #a855f7;
}

.pipeline-line {
  border-color: #b45309;
  border-top-style: dotted;
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

:deep(.production-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 13px;
  font-weight: bold;
  color: #111827;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(245, 158, 11, 0.65);
  border-radius: 4px;
  padding: 2px 5px;
  text-shadow: 0 0 2px #fff;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.production-label-dom.active) {
  color: #dc2626;
  border-color: #dc2626;
  font-size: 15px;
}

:deep(.chokepoint-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 13px;
  font-weight: bold;
  color: #dc2626;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(220, 38, 38, 0.55);
  border-radius: 4px;
  padding: 2px 5px;
  text-shadow: 0 0 2px #fff;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.chokepoint-label-dom.active) {
  color: #991b1b;
  font-size: 15px;
}

:deep(.route-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 13px;
  font-weight: bold;
  color: #0f172a;
  background: rgba(255, 255, 255, 0.88);
  border: 2px solid #2563eb;
  border-radius: 999px;
  padding: 3px 8px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
}

:deep(.pipeline-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #7c2d12;
  background: rgba(255, 247, 237, 0.92);
  border: 2px solid #b45309;
  border-radius: 999px;
  padding: 3px 8px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
}
</style>
