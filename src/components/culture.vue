<template>
  <div class="culture-container">
    <div class="culture-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="culture-content">
      <!-- 左侧内容区 -->
      <div class="culture-content-left">
        <div class="culture-card culture-card-01">
          <div class="culture-card-header"><i class="iconfont icon-wenhuajiaoyu"></i>文明交汇之地</div>

          <p class="mb-8">西亚位于亚洲、欧洲和非洲的交会地带，自古以来就是人口迁徙、商业贸易、宗教传播和文明交流的重要区域。</p>

          <p class="mb-8">这里既有古代两河流域文明，也有地中海东岸、阿拉伯半岛和伊朗高原等多种文化区域，是世界文明发展史上的重要舞台。</p>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>西亚的文化特点可以概括为：<strong>历史悠久、宗教影响深、多民族多语言、东西方交流频繁</strong>。</div>
          </div>
        </div>

        <div class="culture-card culture-card-02">
          <div class="culture-card-header"><i class="iconfont icon-qiyuan"></i>三大宗教的重要发源地</div>

          <div class="religion-grid">
            <div class="religion-card islam">
              <div class="religion-icon">☪</div>
              <div class="religion-title">伊斯兰教</div>
              <div class="religion-desc">起源于阿拉伯半岛，麦加和麦地那是重要圣地，对西亚社会生活和文化景观影响深远。</div>
            </div>

            <div class="religion-card christian">
              <div class="religion-icon">✚</div>
              <div class="religion-title">基督教</div>
              <div class="religion-desc">与东地中海地区历史联系密切，耶路撒冷等地具有重要宗教与文化意义。</div>
            </div>

            <div class="religion-card judaism">
              <div class="religion-icon">✡</div>
              <div class="religion-title">犹太教</div>
              <div class="religion-desc">与古代西亚历史和耶路撒冷地区关系密切，是西亚多元宗教文化的重要组成部分。</div>
            </div>
          </div>

          <div class="religion-tip">注意：讲授宗教内容时，应突出其地理分布、历史文化意义和区域联系，避免价值判断。</div>
        </div>

        <div class="culture-card culture-card-06">
          <div class="culture-card-header"><i class="iconfont icon-chengshi"></i>文化城市图像识记</div>

          <div class="image-card-grid">
            <div class="culture-image-card" v-for="item in cultureCityImageList" :key="item.title">
              <div class="culture-img-wrap" @click="openImagePreview(item)">
                <img :src="item.img" :alt="item.title" loading="lazy" />
                <div class="culture-img-title">{{ item.title }}</div>
                <div class="culture-img-zoom">点击查看大图</div>
              </div>

              <div class="culture-img-desc">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </div>

        <div class="culture-card culture-card-07">
          <div class="culture-card-header"><i class="iconfont icon-chengshi"></i>宗教圣地图像识记</div>

          <div class="image-card-grid">
            <div class="culture-image-card holy-image-card" v-for="item in holySiteImageList" :key="item.title">
              <div class="culture-img-wrap" @click="openImagePreview(item)">
                <img :src="item.img" :alt="item.title" loading="lazy" />
                <div class="culture-img-title holy-title">{{ item.title }}</div>
                <div class="culture-img-zoom">点击查看大图</div>
              </div>

              <div class="culture-img-desc">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </div>

        <div class="culture-card culture-card-03">
          <div class="culture-card-header"><i class="iconfont icon-biangengminzu"></i>民族、语言与生活方式</div>

          <div class="culture-item">
            <div class="culture-item-title">民族构成多样</div>
            <div class="culture-item-desc">西亚有阿拉伯人、土耳其人、波斯人、库尔德人、犹太人等多个民族或族群，体现出明显的多元性。</div>
          </div>

          <div class="culture-item">
            <div class="culture-item-title">语言类型多样</div>
            <div class="culture-item-desc">阿拉伯语、土耳其语、波斯语、希伯来语等语言在区域内具有重要影响。</div>
          </div>

          <div class="culture-item">
            <div class="culture-item-title">传统与现代并存</div>
            <div class="culture-item-desc">游牧、绿洲聚落、传统集市与现代石油城市、港口城市共同存在，形成丰富的区域景观。</div>
          </div>
        </div>

        <div class="culture-card culture-card-04">
          <div class="culture-card-header"><i class="iconfont icon-gaosu"></i>交流通道与文化传播</div>

          <div class="route-item">
            <div class="route-title">陆上通道</div>
            <p>古代东西方商路经过小亚细亚、两河流域和伊朗高原，使西亚成为连接欧洲、亚洲内陆和南亚方向的重要通道。</p>
          </div>

          <div class="route-item">
            <div class="route-title">海上通道</div>
            <p>地中海、红海、波斯湾和阿拉伯海方向的海上联系，促进了商品、人口和文化的传播。</p>
          </div>

          <div class="route-item">
            <div class="route-title">城市节点</div>
            <p>伊斯坦布尔、耶路撒冷、巴格达、麦加、迪拜等城市在不同历史时期承担了政治、宗教、商业或交通中心功能。</p>
          </div>
        </div>

        <div class="culture-card culture-card-05">
          <div class="culture-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一看位置：</strong>西亚位于亚欧非交会地带，是文明交流通道。</li>
            <li><strong>二看宗教：</strong>西亚是伊斯兰教、基督教、犹太教的重要发源地或圣地所在区域。</li>
            <li><strong>三看城市：</strong>麦加、麦地那、耶路撒冷、伊斯坦布尔、巴格达等具有代表性。</li>
            <li><strong>四看文化：</strong>民族、语言、宗教和生活方式多元并存。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="culture-content-right">
        <div id="cultureMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看文化中心与交流通道</div>

        <div class="map-control-panel">
          <div class="panel-title">地图控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showCities" @change="refreshMapLayers" />
            文化城市
          </label>

          <label>
            <input type="checkbox" v-model="showHolySites" @change="refreshMapLayers" />
            宗教圣地
          </label>

          <label>
            <input type="checkbox" v-model="showRoutes" @change="refreshMapLayers" />
            交流通道
          </label>

          <label>
            <input type="checkbox" v-model="showRegions" @change="refreshMapLayers" />
            文化区域示意
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-dot city-dot"></span>
              <span>文化城市</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot holy-dot"></span>
              <span>宗教圣地</span>
            </div>

            <div class="legend-row">
              <span class="legend-line land-route-line"></span>
              <span>陆上东西交流通道</span>
            </div>

            <div class="legend-row">
              <span class="legend-line sea-route-line"></span>
              <span>红海—印度洋海上通道</span>
            </div>

            <div class="legend-row">
              <span class="legend-line gulf-route-line"></span>
              <span>波斯湾贸易通道</span>
            </div>

            <div class="legend-row">
              <span class="legend-area region-area"></span>
              <span>文化区域示意</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 图片大图预览 -->
    <div v-if="previewImage" class="image-preview-mask" @click="closeImagePreview">
      <div class="image-preview-box" @click.stop>
        <button class="image-preview-close" @click="closeImagePreview">×</button>

        <div class="image-preview-title">
          {{ previewImage.title }}
        </div>

        <img :src="previewImage.img" :alt="previewImage.title" class="image-preview-img" />

        <div class="image-preview-desc">
          {{ previewImage.desc }}
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

type CulturePoint = {
  name: string
  lat: number
  lng: number
  desc: string
  type: 'city' | 'holy'
  offsetX?: number
  offsetY?: number
}

type CultureRegion = {
  name: string
  lat: number
  lng: number
  radius: number
  desc: string
  color: string
}

type CultureRoute = {
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

type CultureImageItem = {
  title: string
  img: string
  desc: string
}

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

const centerLat = 25.5
const centerLng = 45.5
const zoomLevel = 5

const useGoogle = ref(false)
const showCities = ref(true)
const showHolySites = ref(true)
const showRoutes = ref(true)
const showRegions = ref(true)

const previewImage = ref<CultureImageItem | null>(null)

const cityLayer = L.layerGroup()
const holyLayer = L.layerGroup()
const routeLayer = L.layerGroup()
const regionLayer = L.layerGroup()

const cityLabels: DomLabel[] = []
const holyLabels: DomLabel[] = []
const routeLabels: DomLabel[] = []
const regionLabels: DomLabel[] = []

const cultureImageBaseUrl = 'https://course-code.oss-cn-shanghai.aliyuncs.com/image/'

const cultureCityImageList: CultureImageItem[] = [
  {
    title: '伊斯坦布尔',
    img: cultureImageBaseUrl + '西亚伊斯坦布尔.png',
    desc: '位于欧亚交会附近，连接黑海与地中海方向，是西亚与欧洲联系的重要文化城市。',
  },
  {
    title: '巴格达',
    img: cultureImageBaseUrl + '西亚巴格达.png',
    desc: '位于两河流域，是西亚历史文化、商业交通和区域联系中的重要城市。',
  },
  {
    title: '大马士革',
    img: cultureImageBaseUrl + '西亚大马士革.png',
    desc: '位于东地中海内陆通道附近，历史悠久，是西亚古城和传统文化的重要代表。',
  },
  {
    title: '德黑兰',
    img: cultureImageBaseUrl + '西亚德黑兰.png',
    desc: '位于伊朗高原北部，是波斯文化区域的重要城市，也是现代伊朗的核心城市。',
  },
  {
    title: '迪拜',
    img: cultureImageBaseUrl + '西亚迪拜.png',
    desc: '位于波斯湾沿岸，是现代化港口、贸易和航空交通中心，体现西亚传统与现代并存的城市景观。',
  },
]

const holySiteImageList: CultureImageItem[] = [
  {
    title: '麦加',
    img: cultureImageBaseUrl + '西亚麦加.png',
    desc: '位于阿拉伯半岛西部，是伊斯兰教最重要的圣地，具有突出的宗教地理意义。',
  },
  {
    title: '麦地那',
    img: cultureImageBaseUrl + '西亚麦地那.png',
    desc: '位于阿拉伯半岛西部，是伊斯兰教重要圣地之一，与伊斯兰教早期历史联系密切。',
  },
  {
    title: '耶路撒冷',
    img: cultureImageBaseUrl + '西亚耶路撒冷.png',
    desc: '对犹太教、基督教和伊斯兰教都具有重要宗教与历史意义，常被称为三教圣城。',
  },
]

const cultureCities: CulturePoint[] = [
  {
    name: '伊斯坦布尔',
    lat: 41.0082,
    lng: 28.9784,
    type: 'city',
    desc: '横跨欧亚附近的重要城市，连接黑海和地中海方向，历史上长期是东西方交流中心。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '巴格达',
    lat: 33.3152,
    lng: 44.3661,
    type: 'city',
    desc: '位于两河流域，是西亚历史文化和交通联系中的重要城市。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '大马士革',
    lat: 33.5138,
    lng: 36.2765,
    type: 'city',
    desc: '位于东地中海内陆通道附近，是历史悠久的城市之一。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '德黑兰',
    lat: 35.6892,
    lng: 51.389,
    type: 'city',
    desc: '伊朗高原北部的重要城市，是波斯文化区域的重要节点。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '迪拜',
    lat: 25.2048,
    lng: 55.2708,
    type: 'city',
    desc: '波斯湾沿岸现代化城市和国际交通、贸易中心之一。',
    offsetX: 10,
    offsetY: -2,
  },
]

const holySites: CulturePoint[] = [
  {
    name: '麦加',
    lat: 21.3891,
    lng: 39.8579,
    type: 'holy',
    desc: '位于阿拉伯半岛西部，是伊斯兰教最重要的圣地。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '麦地那',
    lat: 24.5247,
    lng: 39.5692,
    type: 'holy',
    desc: '位于阿拉伯半岛西部，是伊斯兰教重要圣地之一。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '耶路撒冷',
    lat: 31.7683,
    lng: 35.2137,
    type: 'holy',
    desc: '对犹太教、基督教和伊斯兰教都具有重要宗教与历史意义。',
    offsetX: 10,
    offsetY: -2,
  },
]

const cultureRegions: CultureRegion[] = [
  {
    name: '阿拉伯文化区',
    lat: 25.5,
    lng: 43.8,
    radius: 650000,
    color: '#f59e0b',
    desc: '以阿拉伯半岛和两河流域部分地区为代表，阿拉伯语和伊斯兰文化影响深远。',
  },
  {
    name: '波斯文化区',
    lat: 32.5,
    lng: 53.5,
    radius: 520000,
    color: '#8b5cf6',
    desc: '以伊朗高原为核心，波斯语和波斯文化传统影响显著。',
  },
  {
    name: '安纳托利亚文化区',
    lat: 39.0,
    lng: 35.0,
    radius: 430000,
    color: '#06b6d4',
    desc: '位于小亚细亚半岛，是亚欧交流和多种文化交汇的重要区域。',
  },
  {
    name: '东地中海文化区',
    lat: 33.3,
    lng: 35.6,
    radius: 260000,
    color: '#22c55e',
    desc: '地中海东岸城市密集，宗教、商业和海陆交通联系突出。',
  },
]

const cultureRoutes: CultureRoute[] = [
  {
    name: '陆上东西交流通道',
    color: '#dc2626',
    points: [
      [39.8, 29.0],
      [38.8, 34.5],
      [36.8, 39.0],
      [34.5, 43.5],
      [33.5, 48.0],
      [34.0, 53.5],
      [34.3, 60.0],
    ],
    label: {
      text: '陆上东西交流通道',
      lat: 36.2,
      lng: 43.5,
    },
  },
  {
    name: '红海—印度洋海上通道',
    color: '#2563eb',
    points: [
      [34.0, 30.0],
      [31.2, 32.3],
      [27.0, 34.0],
      [21.0, 38.5],
      [12.6, 43.3],
      [16.0, 50.0],
      [20.0, 58.0],
    ],
    label: {
      text: '红海—印度洋海上通道',
      lat: 24,
      lng: 39.5,
    },
  },
  {
    name: '波斯湾贸易通道',
    color: '#16a34a',
    points: [
      [30.5, 48.0],
      [27.0, 50.5],
      [25.5, 52.0],
      [25.0, 55.0],
      [24.0, 58.0],
    ],
    label: {
      text: '波斯湾贸易通道',
      lat: 26.2,
      lng: 53.2,
    },
  },
]

function openImagePreview(item: CultureImageItem) {
  previewImage.value = item
}

function closeImagePreview() {
  previewImage.value = null
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

  if (showCities.value) {
    cityLabels.forEach(updateOneLabelPosition)
  }

  if (showHolySites.value) {
    holyLabels.forEach(updateOneLabelPosition)
  }

  if (showRoutes.value) {
    routeLabels.forEach(updateOneLabelPosition)
  }

  if (showRegions.value) {
    regionLabels.forEach(updateOneLabelPosition)
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

function addCityLayer() {
  if (!map) return

  cityLayer.clearLayers()
  clearDomLabels(cityLabels)

  cultureCities.forEach(item => {
    const marker = L.circleMarker([item.lat, item.lng], {
      radius: 5,
      color: '#1e3a8a',
      weight: 2,
      fillColor: '#bfdbfe',
      fillOpacity: 1,
    }).addTo(cityLayer)

    bindInfoPopup(marker, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: 'city-label-dom',
      offsetX: item.offsetX ?? 10,
      offsetY: item.offsetY ?? -2,
    })

    if (label) {
      cityLabels.push(label)
    }
  })

  cityLayer.addTo(map)
}

function addHolyLayer() {
  if (!map) return

  holyLayer.clearLayers()
  clearDomLabels(holyLabels)

  holySites.forEach(item => {
    const marker = L.circleMarker([item.lat, item.lng], {
      radius: 6,
      color: '#b91c1c',
      weight: 2,
      fillColor: '#fee2e2',
      fillOpacity: 1,
    }).addTo(holyLayer)

    bindInfoPopup(marker, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: 'holy-label-dom',
      offsetX: item.offsetX ?? 10,
      offsetY: item.offsetY ?? -2,
    })

    if (label) {
      holyLabels.push(label)
    }
  })

  holyLayer.addTo(map)
}

function addRegionLayer() {
  if (!map) return

  regionLayer.clearLayers()
  clearDomLabels(regionLabels)

  cultureRegions.forEach(item => {
    const circle = L.circle([item.lat, item.lng], {
      radius: item.radius,
      color: item.color,
      weight: 2,
      fillColor: item.color,
      fillOpacity: 0.13,
      opacity: 0.8,
    }).addTo(regionLayer)

    bindInfoPopup(circle, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: 'region-label-dom',
      offsetX: 0,
      offsetY: 0,
    })

    if (label) {
      label.el.style.borderColor = item.color
      label.el.style.color = item.color
      regionLabels.push(label)
    }
  })

  regionLayer.addTo(map)
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
    opacity: 0.85,
    lineCap: 'round',
    lineJoin: 'round',
    interactive: false,
  }).addTo(targetLayer)

  L.polyline(smoothPoints, {
    color: options.color,
    weight: options.weight ?? 2.3,
    opacity: options.opacity ?? 0.95,
    dashArray: options.dashArray,
    lineCap: 'round',
    lineJoin: 'round',
    smoothFactor: 1.2,
    interactive: false,
  }).addTo(targetLayer)
}

function addRouteLayer() {
  if (!map) return

  routeLayer.clearLayers()
  clearDomLabels(routeLabels)

  cultureRoutes.forEach(route => {
    addStyledLine(routeLayer, route.points, {
      color: route.color,
      weight: 2.4,
      haloWeight: 5.2,
      dashArray: '8 6',
      opacity: 0.95,
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
  })

  routeLayer.addTo(map)
}

function refreshMapLayers() {
  if (!map) return

  if (showRegions.value) {
    addRegionLayer()
  } else {
    regionLayer.clearLayers()
    clearDomLabels(regionLabels)
  }

  if (showRoutes.value) {
    addRouteLayer()
  } else {
    routeLayer.clearLayers()
    clearDomLabels(routeLabels)
  }

  if (showCities.value) {
    addCityLayer()
  } else {
    cityLayer.clearLayers()
    clearDomLabels(cityLabels)
  }

  if (showHolySites.value) {
    addHolyLayer()
  } else {
    holyLayer.clearLayers()
    clearDomLabels(holyLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  cityLayer.clearLayers()
  holyLayer.clearLayers()
  routeLayer.clearLayers()
  regionLayer.clearLayers()

  if (map.hasLayer(cityLayer)) cityLayer.removeFrom(map)
  if (map.hasLayer(holyLayer)) holyLayer.removeFrom(map)
  if (map.hasLayer(routeLayer)) routeLayer.removeFrom(map)
  if (map.hasLayer(regionLayer)) regionLayer.removeFrom(map)

  clearDomLabels(cityLabels)
  clearDomLabels(holyLabels)
  clearDomLabels(routeLabels)
  clearDomLabels(regionLabels)
}

onMounted(async () => {
  map = L.map('cultureMap', {
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
.culture-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.culture-header {
  margin-bottom: 32px;
}

.culture-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.culture-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.culture-content-right {
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

.culture-card {
  border-radius: 8px;
  border: 1px solid #dbeafe;
  padding: 14px;
  background: #eff6ff;
}

.culture-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #1e3a8a;
}

.iconfont {
  margin-right: 8px;
  color: #1e3a8a;
}

.culture-card-01 {
  background: #eff6ff;
  border-color: #dbeafe;
}

.culture-card-02 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.culture-card-02 .culture-card-header,
.culture-card-02 .iconfont {
  color: #9a3412;
}

.culture-card-03 {
  background: #f0fdf4;
  border-color: #bbf7d0;
}

.culture-card-03 .culture-card-header,
.culture-card-03 .iconfont {
  color: #047857;
}

.culture-card-04 {
  background: #f5f3ff;
  border-color: #ddd6fe;
}

.culture-card-04 .culture-card-header,
.culture-card-04 .iconfont {
  color: #6d28d9;
}

.culture-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.culture-card-05 .culture-card-header,
.culture-card-05 .iconfont {
  color: #854d0e;
}

.culture-card-06 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.culture-card-06 .culture-card-header,
.culture-card-06 .iconfont {
  color: #0369a1;
}

.culture-card-07 {
  background: #fff1f2;
  border-color: #fecdd3;
}

.culture-card-07 .culture-card-header,
.culture-card-07 .iconfont {
  color: #991b1b;
}

.mb-8 {
  margin-bottom: 8px;
}

.culture-card p {
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

.religion-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}

.religion-card {
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 8px;
  background: #fff;
  border-radius: 8px;
  padding: 9px 10px;
  border-left: 4px solid #f59e0b;
}

.religion-icon {
  grid-row: span 2;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff7ed;
  font-size: 22px;
  color: #9a3412;
}

.religion-title {
  font-weight: bold;
  color: #7c2d12;
}

.religion-desc {
  font-size: 12px;
  color: #444;
  line-height: 1.45;
}

.religion-tip {
  margin-top: 10px;
  padding: 8px 10px;
  border-radius: 6px;
  background: #fff;
  border-left: 3px solid #f97316;
  font-size: 12px;
  color: #7c2d12;
  line-height: 1.45;
}

.image-card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.culture-image-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #bae6fd;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.holy-image-card {
  border-color: #fecdd3;
}

.culture-img-wrap {
  position: relative;
  height: 104px;
  overflow: hidden;
  cursor: zoom-in;
  background: #eef6ff;
}

.culture-img-wrap img {
  width: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.25s ease;
}

.culture-img-wrap:hover img {
  transform: scale(1.05);
}

.culture-img-title {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 5px 8px;
  background: linear-gradient(to top, rgba(3, 105, 161, 0.95), rgba(3, 105, 161, 0.18));
  color: #fff;
  font-weight: bold;
  font-size: 13px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
}

.culture-img-title.holy-title {
  background: linear-gradient(to top, rgba(153, 27, 27, 0.95), rgba(153, 27, 27, 0.18));
}

.culture-img-zoom {
  position: absolute;
  top: 6px;
  right: 6px;
  padding: 2px 6px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 11px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.culture-img-wrap:hover .culture-img-zoom {
  opacity: 1;
}

.culture-img-desc {
  padding: 8px 10px;
  font-size: 12px;
  color: #374151;
  line-height: 1.5;
}

.culture-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid #10b981;
  margin-bottom: 8px;
}

.culture-item:last-child {
  margin-bottom: 0;
}

.culture-item-title {
  font-weight: bold;
  color: #065f46;
  margin-bottom: 4px;
}

.culture-item-desc {
  font-size: 13px;
  color: #444;
  line-height: 1.45;
}

.route-item {
  background: #fff;
  border-radius: 8px;
  padding: 10px 12px;
  margin-bottom: 10px;
  border-left: 5px solid #8b5cf6;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.route-item:last-child {
  margin-bottom: 0;
}

.route-title {
  font-weight: bold;
  color: #4c1d95;
  margin-bottom: 6px;
}

.route-item p {
  margin: 0;
  font-size: 13px;
  line-height: 1.55;
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

.holy-dot {
  background: #fee2e2;
  border: 2px solid #b91c1c;
  box-sizing: border-box;
}

.legend-line {
  width: 24px;
  height: 0;
  border-top: 2px dashed #dc2626;
  display: inline-block;
  flex-shrink: 0;
}

.land-route-line {
  border-color: #dc2626;
}

.sea-route-line {
  border-color: #2563eb;
}

.gulf-route-line {
  border-color: #16a34a;
}

.legend-area {
  width: 14px;
  height: 10px;
  border-radius: 999px;
  display: inline-block;
  flex-shrink: 0;
}

.region-area {
  background: rgba(139, 92, 246, 0.2);
  border: 1px solid #8b5cf6;
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

:deep(.city-label-dom) {
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

:deep(.holy-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #b91c1c;
  background: rgba(254, 242, 242, 0.94);
  border: 1px solid rgba(185, 28, 28, 0.6);
  border-radius: 4px;
  padding: 2px 5px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  text-shadow: 0 0 2px #fff;
}

:deep(.route-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #0f172a;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #dc2626;
  border-radius: 999px;
  padding: 3px 8px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
}

:deep(.region-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #8b5cf6;
  border-radius: 999px;
  padding: 3px 8px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
}

.image-preview-mask {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(15, 23, 42, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
}

.image-preview-box {
  position: relative;
  width: min(980px, 88vw);
  max-height: 90vh;
  background: #fff;
  border-radius: 12px;
  padding: 14px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
  overflow: auto;
}

.image-preview-close {
  position: absolute;
  top: 8px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.82);
  color: #fff;
  font-size: 22px;
  line-height: 28px;
  cursor: pointer;
  z-index: 2;
}

.image-preview-title {
  font-weight: bold;
  color: #0f2748;
  font-size: 17px;
  margin-bottom: 10px;
  padding-right: 40px;
}

.image-preview-img {
  width: 100%;
  max-height: 68vh;
  object-fit: contain;
  display: block;
  border-radius: 8px;
  background: #f8fafc;
}

.image-preview-desc {
  margin-top: 10px;
  padding: 9px 10px;
  border-left: 4px solid #2563eb;
  background: #eff6ff;
  border-radius: 6px;
  color: #374151;
  font-size: 13px;
  line-height: 1.55;
}
</style>
