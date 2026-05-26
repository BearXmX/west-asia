<template>
  <div class="population-container">
    <div class="population-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="population-content">
      <!-- 左侧内容区 -->
      <div class="population-content-left">
        <div class="population-card population-card-01">
          <div class="population-card-header"><i class="iconfont icon-mti-shiyourenkou"></i>人口分布总体特征</div>

          <p class="mb-8">
            西亚大部分地区气候干旱，沙漠和高原面积广，人口分布总体上
            <strong>不均衡</strong>，主要集中在有水源、交通便利、经济发达或宗教文化地位突出的地区。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">人口较集中</div>
              <div class="feature-value">沿海、河谷、绿洲</div>
              <div class="feature-desc">水源和交通条件较好，适合聚落和城市发展。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">人口较稀疏</div>
              <div class="feature-value">沙漠、高原内部</div>
              <div class="feature-desc">降水少、蒸发强，生产生活条件较严酷。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>
              西亚人口和城市分布，本质上受
              <strong>水源、交通、石油、宗教、贸易</strong>
              等因素共同影响。
            </div>
          </div>
        </div>

        <div class="population-card population-card-02">
          <div class="population-card-header"><i class="iconfont icon-fenbu"></i>人口与城市分布规律</div>

          <div class="rule-item">
            <div class="rule-title">沿河谷分布</div>
            <div class="rule-desc">两河流域和约旦河谷水源相对稳定，农业、聚落和城市发展条件较好。</div>
          </div>

          <div class="rule-item">
            <div class="rule-title">沿海湾分布</div>
            <div class="rule-desc">波斯湾沿岸因石油资源、港口贸易和现代服务业发展，形成许多现代化城市。</div>
          </div>

          <div class="rule-item">
            <div class="rule-title">沿绿洲分布</div>
            <div class="rule-desc">沙漠中的绿洲依靠地下水或泉水形成聚落，是干旱区重要生活空间。</div>
          </div>

          <div class="rule-item">
            <div class="rule-title">沿交通节点分布</div>
            <div class="rule-desc">海峡、港口、商路和宗教朝觐路线附近，容易形成重要城市节点。</div>
          </div>
        </div>

        <div class="population-card population-card-03">
          <div class="population-card-header"><i class="iconfont icon-chengshi"></i>城市类型识记</div>

          <div class="city-type-grid">
            <div class="city-type-card traditional">
              <div class="city-type-icon">🏛</div>
              <div class="city-type-title">历史文化城市</div>
              <div class="city-type-desc">耶路撒冷、巴格达、大马士革、伊斯坦布尔等，历史悠久，文化积淀深厚。</div>
            </div>

            <div class="city-type-card religious">
              <div class="city-type-icon">🕌</div>
              <div class="city-type-title">宗教圣城</div>
              <div class="city-type-desc">麦加、麦地那、耶路撒冷等，宗教地位突出，具有重要文化影响。</div>
            </div>

            <div class="city-type-card oil">
              <div class="city-type-icon">⛽</div>
              <div class="city-type-title">石油城市</div>
              <div class="city-type-desc">科威特城、阿布扎比、多哈等，依托油气资源和港口发展。</div>
            </div>

            <div class="city-type-card modern">
              <div class="city-type-icon">🏙</div>
              <div class="city-type-title">现代都市</div>
              <div class="city-type-desc">迪拜、多哈、阿布扎比等，航空、金融、贸易和旅游功能突出。</div>
            </div>
          </div>
        </div>

        <div class="population-card population-card-04">
          <div class="population-card-header"><i class="iconfont icon-wuliyinsu"></i>人口城市形成因素</div>

          <div class="factor-row">
            <div class="factor-label">水源</div>
            <div class="factor-bar">
              <div class="factor-fill water-fill"></div>
            </div>
            <div class="factor-text">河流、绿洲、地下水决定干旱区聚落基础。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">石油</div>
            <div class="factor-bar">
              <div class="factor-fill oil-fill"></div>
            </div>
            <div class="factor-text">波斯湾沿岸形成能源型城市和港口城市。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">交通</div>
            <div class="factor-bar">
              <div class="factor-fill traffic-fill"></div>
            </div>
            <div class="factor-text">海峡、港口、商路加强城市联系。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">宗教</div>
            <div class="factor-bar">
              <div class="factor-fill religion-fill"></div>
            </div>
            <div class="factor-text">圣城和朝觐活动增强城市影响力。</div>
          </div>

          <div class="chart-tip">注：上图为课堂示意，用于理解影响因素强弱关系，不表示严格统计比例。</div>
        </div>

        <div class="population-card population-card-05">
          <div class="population-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一看自然：</strong>气候干旱，沙漠高原人口稀少。</li>
            <li><strong>二看水源：</strong>河谷、绿洲、沿海地区人口较集中。</li>
            <li><strong>三看资源：</strong>波斯湾沿岸因石油和港口形成现代城市群。</li>
            <li><strong>四看文化：</strong>麦加、麦地那、耶路撒冷等宗教城市影响突出。</li>
            <li><strong>五看转型：</strong>迪拜、多哈、阿布扎比等城市体现经济多元化发展。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="population-content-right">
        <div id="populationMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看人口与城市分布</div>

        <div class="map-control-panel">
          <div class="panel-title">地图控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showPopulationTiles" @change="togglePopulationTiles" />
            人口密度影像
          </label>

          <label>
            <input type="checkbox" v-model="showNightLightTiles" @change="toggleNightLightTiles" />
            夜间灯光影像
          </label>

          <label>
            <input type="checkbox" v-model="showDenseAreas" @change="refreshMapLayers" />
            人口较集中区
          </label>

          <label>
            <input type="checkbox" v-model="showSparseAreas" @change="refreshMapLayers" />
            人口稀疏区
          </label>

          <label>
            <input type="checkbox" v-model="showTraditionalCities" @change="refreshMapLayers" />
            历史文化城市
          </label>

          <label>
            <input type="checkbox" v-model="showModernCities" @change="refreshMapLayers" />
            现代都市 / 石油城市
          </label>

          <label>
            <input type="checkbox" v-model="showHolyCities" @change="refreshMapLayers" />
            宗教圣城
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-area population-tile-area"></span>
              <span>人口密度影像</span>
            </div>

            <div class="legend-row">
              <span class="legend-area night-light-area"></span>
              <span>夜间灯光影像</span>
            </div>

            <div class="legend-row">
              <span class="legend-area dense-area"></span>
              <span>人口较集中区</span>
            </div>

            <div class="legend-row">
              <span class="legend-area sparse-area"></span>
              <span>人口稀疏区</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot traditional-dot"></span>
              <span>历史文化城市</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot modern-dot"></span>
              <span>现代都市 / 石油城市</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot holy-dot"></span>
              <span>宗教圣城</span>
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

type PopulationPoint = {
  name: string
  lat: number
  lng: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type PopulationArea = {
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
let populationTileLayer: L.TileLayer | null = null
let nightLightTileLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

const centerLat = 25.5
const centerLng = 45.5
const zoomLevel = 5

const useGoogle = ref(false)
const showPopulationTiles = ref(false)
const showNightLightTiles = ref(false)
const showDenseAreas = ref(true)
const showSparseAreas = ref(true)
const showTraditionalCities = ref(true)
const showModernCities = ref(true)
const showHolyCities = ref(true)

const denseLayer = L.layerGroup()
const sparseLayer = L.layerGroup()
const traditionalCityLayer = L.layerGroup()
const modernCityLayer = L.layerGroup()
const holyCityLayer = L.layerGroup()

const denseLabels: DomLabel[] = []
const sparseLabels: DomLabel[] = []
const traditionalCityLabels: DomLabel[] = []
const modernCityLabels: DomLabel[] = []
const holyCityLabels: DomLabel[] = []

const denseAreas: PopulationArea[] = [
  {
    name: '两河流域人口集中区',
    lat: 33.0,
    lng: 44.2,
    radius: 280000,
    color: '#22c55e',
    desc: '底格里斯河和幼发拉底河提供水源，是西亚重要农业、城市和人口集中区域。',
  },
  {
    name: '东地中海沿岸人口集中区',
    lat: 33.5,
    lng: 35.6,
    radius: 210000,
    color: '#0ea5e9',
    desc: '沿海和山前地带相对湿润，城市历史悠久，人口较集中。',
  },
  {
    name: '波斯湾沿岸城市带',
    lat: 26.0,
    lng: 51.8,
    radius: 430000,
    color: '#f59e0b',
    desc: '依托石油资源、港口贸易和现代服务业发展，形成多个现代城市节点。',
  },
  {
    name: '土耳其西部与海峡城市区',
    lat: 40.5,
    lng: 29.5,
    radius: 230000,
    color: '#3b82f6',
    desc: '靠近土耳其海峡和地中海方向，交通条件突出，城市发展较早。',
  },
]

const sparseAreas: PopulationArea[] = [
  {
    name: '阿拉伯半岛内陆稀疏区',
    lat: 22.8,
    lng: 45.5,
    radius: 580000,
    color: '#f97316',
    desc: '沙漠广布，降水稀少，水源条件较差，人口总体稀疏。',
  },
  {
    name: '叙利亚沙漠稀疏区',
    lat: 34.3,
    lng: 39.0,
    radius: 230000,
    color: '#fb923c',
    desc: '内陆干旱区，绿洲和交通线附近才有较明显聚落。',
  },
  {
    name: '伊朗高原内部稀疏区',
    lat: 31.5,
    lng: 55.0,
    radius: 370000,
    color: '#ea580c',
    desc: '高原内部干旱半干旱范围广，人口多集中在山麓、绿洲和城市节点。',
  },
]

const traditionalCities: PopulationPoint[] = [
  {
    name: '伊斯坦布尔',
    lat: 41.0082,
    lng: 28.9784,
    desc: '位于欧亚联系的重要节点，历史上长期是东西方交流中心。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '巴格达',
    lat: 33.3152,
    lng: 44.3661,
    desc: '位于两河流域，是西亚历史文化和交通联系中的重要城市。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '大马士革',
    lat: 33.5138,
    lng: 36.2765,
    desc: '位于东地中海内陆通道附近，是历史悠久的城市之一。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '德黑兰',
    lat: 35.6892,
    lng: 51.389,
    desc: '位于伊朗高原北部，是伊朗重要城市和波斯文化区域的重要节点。',
    offsetX: 10,
    offsetY: -2,
  },
]

const modernCities: PopulationPoint[] = [
  {
    name: '迪拜',
    lat: 25.2048,
    lng: 55.2708,
    desc: '波斯湾沿岸现代化城市，航空、港口、金融、旅游和商业服务功能突出。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '阿布扎比',
    lat: 24.4539,
    lng: 54.3773,
    desc: '阿联酋重要城市，依托油气资源发展金融、文化、航空和新能源产业。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '多哈',
    lat: 25.2854,
    lng: 51.531,
    desc: '卡塔尔首都，依托能源收入发展航空、会展、体育和服务业。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '科威特城',
    lat: 29.3759,
    lng: 47.9774,
    desc: '波斯湾沿岸石油城市和港口城市，能源经济特征明显。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '利雅得',
    lat: 24.7136,
    lng: 46.6753,
    desc: '阿拉伯半岛内陆重要城市，是行政、金融和现代服务业中心。',
    offsetX: 10,
    offsetY: -2,
  },
]

const holyCities: PopulationPoint[] = [
  {
    name: '麦加',
    lat: 21.3891,
    lng: 39.8579,
    desc: '伊斯兰教最重要的圣地，宗教地位突出。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '麦地那',
    lat: 24.5247,
    lng: 39.5692,
    desc: '伊斯兰教重要圣地之一，与伊斯兰教早期历史联系密切。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '耶路撒冷',
    lat: 31.7683,
    lng: 35.2137,
    desc: '对犹太教、基督教和伊斯兰教都具有重要宗教与历史意义。',
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
    maxNativeZoom: 7,
    zIndex: 1,
  }).addTo(map)

  scheduleUpdateLabels()
}

function togglePopulationTiles() {
  if (!map) return

  if (showPopulationTiles.value) {
    if (populationTileLayer) {
      populationTileLayer.removeFrom(map)
      populationTileLayer = null
    }

    populationTileLayer = L.tileLayer('https://zdys.szjx.ai-study.net/geo-resources-folder/tiles/population-tiles/{z}/{x}/{y}.png', {
      attribution: '',
      minZoom: 0,
      maxZoom: 7,
      maxNativeZoom: 7,
      opacity: 0.76,
      zIndex: 10,
    }).addTo(map)
  } else if (populationTileLayer) {
    populationTileLayer.removeFrom(map)
    populationTileLayer = null
  }

  scheduleUpdateLabels()
}

function toggleNightLightTiles() {
  if (!map) return

  if (showNightLightTiles.value) {
    if (nightLightTileLayer) {
      nightLightTileLayer.removeFrom(map)
      nightLightTileLayer = null
    }

    nightLightTileLayer = L.tileLayer('https://zdys.szjx.ai-study.net/geo-resources-folder/tiles/night-light-tiles/{z}/{x}/{y}.png', {
      attribution: '',
      minZoom: 0,
      maxZoom: 7,
      maxNativeZoom: 7,
      opacity: 0.72,
      zIndex: 11,
    }).addTo(map)
  } else if (nightLightTileLayer) {
    nightLightTileLayer.removeFrom(map)
    nightLightTileLayer = null
  }

  scheduleUpdateLabels()
}

function clearImageLayers() {
  if (!map) return

  if (populationTileLayer) {
    populationTileLayer.removeFrom(map)
    populationTileLayer = null
  }

  if (nightLightTileLayer) {
    nightLightTileLayer.removeFrom(map)
    nightLightTileLayer = null
  }
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

  if (showDenseAreas.value) {
    denseLabels.forEach(updateOneLabelPosition)
  }

  if (showSparseAreas.value) {
    sparseLabels.forEach(updateOneLabelPosition)
  }

  if (showTraditionalCities.value) {
    traditionalCityLabels.forEach(updateOneLabelPosition)
  }

  if (showModernCities.value) {
    modernCityLabels.forEach(updateOneLabelPosition)
  }

  if (showHolyCities.value) {
    holyCityLabels.forEach(updateOneLabelPosition)
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

function addAreaLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], areas: PopulationArea[], labelClassName: string, fillOpacity = 0.16) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  areas.forEach(item => {
    const circle = L.circle([item.lat, item.lng], {
      radius: item.radius,
      color: item.color,
      weight: 2,
      fillColor: item.color,
      fillOpacity,
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

function addCityPointLayer(
  targetLayer: L.LayerGroup,
  targetLabels: DomLabel[],
  points: PopulationPoint[],
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

  if (showSparseAreas.value) {
    addAreaLayer(sparseLayer, sparseLabels, sparseAreas, 'sparse-label-dom', 0.14)
  } else {
    sparseLayer.clearLayers()
    clearDomLabels(sparseLabels)
  }

  if (showDenseAreas.value) {
    addAreaLayer(denseLayer, denseLabels, denseAreas, 'dense-label-dom', 0.18)
  } else {
    denseLayer.clearLayers()
    clearDomLabels(denseLabels)
  }

  if (showTraditionalCities.value) {
    addCityPointLayer(traditionalCityLayer, traditionalCityLabels, traditionalCities, {
      color: '#1e3a8a',
      fillColor: '#bfdbfe',
      radius: 5.3,
      labelClassName: 'traditional-city-label-dom',
    })
  } else {
    traditionalCityLayer.clearLayers()
    clearDomLabels(traditionalCityLabels)
  }

  if (showModernCities.value) {
    addCityPointLayer(modernCityLayer, modernCityLabels, modernCities, {
      color: '#b45309',
      fillColor: '#fef3c7',
      radius: 5.5,
      labelClassName: 'modern-city-label-dom',
    })
  } else {
    modernCityLayer.clearLayers()
    clearDomLabels(modernCityLabels)
  }

  if (showHolyCities.value) {
    addCityPointLayer(holyCityLayer, holyCityLabels, holyCities, {
      color: '#b91c1c',
      fillColor: '#fee2e2',
      radius: 5.8,
      labelClassName: 'holy-city-label-dom',
    })
  } else {
    holyCityLayer.clearLayers()
    clearDomLabels(holyCityLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  clearImageLayers()

  denseLayer.clearLayers()
  sparseLayer.clearLayers()
  traditionalCityLayer.clearLayers()
  modernCityLayer.clearLayers()
  holyCityLayer.clearLayers()

  if (map.hasLayer(denseLayer)) denseLayer.removeFrom(map)
  if (map.hasLayer(sparseLayer)) sparseLayer.removeFrom(map)
  if (map.hasLayer(traditionalCityLayer)) traditionalCityLayer.removeFrom(map)
  if (map.hasLayer(modernCityLayer)) modernCityLayer.removeFrom(map)
  if (map.hasLayer(holyCityLayer)) holyCityLayer.removeFrom(map)

  clearDomLabels(denseLabels)
  clearDomLabels(sparseLabels)
  clearDomLabels(traditionalCityLabels)
  clearDomLabels(modernCityLabels)
  clearDomLabels(holyCityLabels)
}

onMounted(async () => {
  map = L.map('populationMap', {
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

  if (showPopulationTiles.value) {
    togglePopulationTiles()
  }

  if (showNightLightTiles.value) {
    toggleNightLightTiles()
  }

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
.population-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.population-header {
  margin-bottom: 32px;
}

.population-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.population-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.population-content-right {
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

.population-card {
  border-radius: 8px;
  border: 1px solid #dbeafe;
  padding: 14px;
  background: #eff6ff;
}

.population-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #1e3a8a;
}

.iconfont {
  margin-right: 8px;
  color: #1e3a8a;
}

.population-card-01 {
  background: #eff6ff;
  border-color: #dbeafe;
}

.population-card-02 {
  background: #f0fdf4;
  border-color: #bbf7d0;
}

.population-card-02 .population-card-header,
.population-card-02 .iconfont {
  color: #047857;
}

.population-card-03 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.population-card-03 .population-card-header,
.population-card-03 .iconfont {
  color: #9a3412;
}

.population-card-04 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.population-card-04 .population-card-header,
.population-card-04 .iconfont {
  color: #0369a1;
}

.population-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.population-card-05 .population-card-header,
.population-card-05 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.population-card p {
  line-height: 1.65;
  color: #1f2937;
  margin-top: 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 12px 0;
}

.feature-box {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #dbeafe;
}

.feature-title {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 4px;
}

.feature-value {
  font-size: 17px;
  font-weight: bold;
  color: #0f2748;
  margin-bottom: 4px;
}

.feature-desc {
  font-size: 12px;
  color: #475569;
  line-height: 1.45;
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

.rule-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid #10b981;
  margin-bottom: 8px;
}

.rule-item:last-child {
  margin-bottom: 0;
}

.rule-title {
  font-weight: bold;
  color: #065f46;
  margin-bottom: 4px;
}

.rule-desc {
  font-size: 13px;
  color: #444;
  line-height: 1.45;
}

.city-type-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.city-type-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #fed7aa;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.city-type-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.city-type-title {
  font-weight: bold;
  color: #9a3412;
  margin-bottom: 4px;
}

.city-type-desc {
  font-size: 12px;
  color: #374151;
  line-height: 1.45;
}

.traditional {
  border-color: #bfdbfe;
}

.traditional .city-type-title {
  color: #1e3a8a;
}

.religious {
  border-color: #fecdd3;
}

.religious .city-type-title {
  color: #991b1b;
}

.oil {
  border-color: #fed7aa;
}

.oil .city-type-title {
  color: #b45309;
}

.modern {
  border-color: #ddd6fe;
}

.modern .city-type-title {
  color: #6d28d9;
}

.factor-row {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 8px;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 8px 10px;
  margin-bottom: 8px;
}

.factor-row:last-of-type {
  margin-bottom: 0;
}

.factor-label {
  font-weight: bold;
  color: #075985;
}

.factor-bar {
  height: 10px;
  background: #e2e8f0;
  border-radius: 999px;
  overflow: hidden;
}

.factor-fill {
  height: 100%;
  border-radius: 999px;
}

.water-fill {
  width: 92%;
  background: #0ea5e9;
}

.oil-fill {
  width: 78%;
  background: #f59e0b;
}

.traffic-fill {
  width: 70%;
  background: #6366f1;
}

.religion-fill {
  width: 64%;
  background: #ef4444;
}

.factor-text {
  grid-column: 1 / -1;
  color: #475569;
  font-size: 12px;
  line-height: 1.45;
}

.chart-tip {
  margin-top: 8px;
  font-size: 12px;
  color: #6b7280;
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
  width: 220px;
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

.legend-area {
  width: 14px;
  height: 10px;
  border-radius: 999px;
  display: inline-block;
  flex-shrink: 0;
}

.population-tile-area {
  background: linear-gradient(to right, rgba(254, 240, 138, 0.9), rgba(249, 115, 22, 0.9), rgba(185, 28, 28, 0.9));
  border: 1px solid rgba(185, 28, 28, 0.75);
}

.night-light-area {
  background: linear-gradient(to right, #111827, #facc15, #ffffff);
  border: 1px solid rgba(15, 23, 42, 0.75);
}

.dense-area {
  background: rgba(34, 197, 94, 0.25);
  border: 1px solid #16a34a;
}

.sparse-area {
  background: rgba(249, 115, 22, 0.22);
  border: 1px solid #f97316;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.traditional-dot {
  background: #bfdbfe;
  border: 2px solid #1e3a8a;
  box-sizing: border-box;
}

.modern-dot {
  background: #fef3c7;
  border: 2px solid #b45309;
  box-sizing: border-box;
}

.holy-dot {
  background: #fee2e2;
  border: 2px solid #b91c1c;
  box-sizing: border-box;
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

:deep(.dense-label-dom) {
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

:deep(.sparse-label-dom) {
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

:deep(.traditional-city-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #1e3a8a;
  background: rgba(239, 246, 255, 0.94);
  border: 1px solid rgba(30, 58, 138, 0.55);
  border-radius: 4px;
  padding: 2px 5px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.modern-city-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #b45309;
  background: rgba(255, 251, 235, 0.94);
  border: 1px solid rgba(245, 158, 11, 0.65);
  border-radius: 4px;
  padding: 2px 5px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.holy-city-label-dom) {
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
}
</style>
