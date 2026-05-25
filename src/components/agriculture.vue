<template>
  <div class="agriculture-container">
    <div class="agriculture-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="agriculture-content">
      <!-- 左侧内容区 -->
      <div class="agriculture-content-left">
        <div class="agriculture-card agriculture-card-01">
          <div class="agriculture-card-header"><i class="iconfont icon-nongye"></i>农业总体特征</div>

          <p class="mb-8">
            西亚大部分地区气候干旱，降水稀少，耕地有限，农业发展受到水资源条件的明显制约。
            因此，西亚农业具有<strong>“依水而生、因地制宜”</strong>的典型特点。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">自然条件</div>
              <div class="feature-value">干旱为主</div>
              <div class="feature-desc">降水少，蒸发强，耕地分布不均</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">农业布局</div>
              <div class="feature-value">沿河沿绿洲</div>
              <div class="feature-desc">农业集中在河谷、绿洲和沿海较湿润地区</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>西亚农业最关键的限制因素不是热量，而是<strong>水源</strong>。</div>
          </div>
        </div>

        <div class="agriculture-card agriculture-card-02">
          <div class="agriculture-card-header"><i class="iconfont icon-leixing"></i>主要农业类型</div>

          <div class="agri-type-grid">
            <div class="agri-type-image-card" v-for="item in agriTypeList" :key="item.title">
              <div class="agri-img-wrap" @click="openImagePreview(item)">
                <img :src="item.img" :alt="item.title" loading="lazy" />
                <div class="agri-img-title">{{ item.title }}</div>
                <div class="agri-img-zoom">点击查看大图</div>
              </div>

              <div class="agri-type-desc">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </div>

        <div class="agriculture-card agriculture-card-03">
          <div class="agriculture-card-header"><i class="iconfont icon-zuowu"></i>代表作物与产品</div>

          <div class="crop-grid">
            <div class="crop-chip wheat">小麦</div>
            <div class="crop-chip barley">大麦</div>
            <div class="crop-chip cotton">棉花</div>
            <div class="crop-chip date">椰枣</div>
            <div class="crop-chip olive">橄榄</div>
            <div class="crop-chip grape">葡萄</div>
            <div class="crop-chip citrus">柑橘</div>
            <div class="crop-chip sheep">羊毛 / 畜产品</div>
          </div>
        </div>

        <div class="agriculture-card agriculture-card-04">
          <div class="agriculture-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一记限制因素：</strong>西亚农业受水资源制约显著。</li>
            <li><strong>二记空间分布：</strong>沿河流、沿绿洲、沿海较湿润区分布较集中。</li>
            <li><strong>三记典型类型：</strong>灌溉农业、绿洲农业、地中海农业、高原畜牧业。</li>
            <li><strong>四记典型地区：</strong>两河流域是西亚重要农业区。</li>
            <li><strong>五记突出特征：</strong>不少国家石油丰富，但粮食和农产品仍较依赖外部输入。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="agriculture-content-right">
        <div id="agricultureMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看农业空间分布</div>

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
            <input type="checkbox" v-model="showIrrigation" @change="refreshMapLayers" />
            灌溉农业区
          </label>

          <label>
            <input type="checkbox" v-model="showOasis" @change="refreshMapLayers" />
            绿洲农业
          </label>

          <label>
            <input type="checkbox" v-model="showMediterranean" @change="refreshMapLayers" />
            地中海农业
          </label>

          <label>
            <input type="checkbox" v-model="showPastoral" @change="refreshMapLayers" />
            高原畜牧区
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-line river-line"></span>
              <span>主要河流</span>
            </div>

            <div class="legend-row">
              <span class="legend-area irrigation-area"></span>
              <span>灌溉农业区</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot oasis-dot"></span>
              <span>绿洲农业</span>
            </div>

            <div class="legend-row">
              <span class="legend-area med-area"></span>
              <span>地中海农业</span>
            </div>

            <div class="legend-row">
              <span class="legend-area pastoral-area"></span>
              <span>高原畜牧区</span>
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

type DomLabel = {
  latlng: L.LatLng
  el: HTMLDivElement
  offsetX: number
  offsetY: number
}

type GeoRiverLayerConfig = {
  id: string
  name: string
  url: string
  layer: L.GeoJSON | null
  labels: DomLabel[]
  abortController: AbortController | null
}

type AgriArea = {
  name: string
  lat: number
  lng: number
  radius: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type AgriPoint = {
  name: string
  lat: number
  lng: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type AgriTypeItem = {
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
const showRivers = ref(true)
const showIrrigation = ref(true)
const showOasis = ref(true)
const showMediterranean = ref(true)
const showPastoral = ref(true)

const previewImage = ref<AgriTypeItem | null>(null)

const baseGeoUrl = 'https://course-code.oss-cn-shanghai.aliyuncs.com/geojson/'
const agriImageBaseUrl = 'https://course-code.oss-cn-shanghai.aliyuncs.com/image/'

const agriTypeList: AgriTypeItem[] = [
  {
    title: '灌溉农业',
    img: agriImageBaseUrl + '西亚灌溉农业.png',
    desc: '分布在两河流域、约旦河谷等有稳定水源的地区，依靠河流灌溉发展粮食和经济作物生产。',
  },
  {
    title: '绿洲农业',
    img: agriImageBaseUrl + '西亚绿洲农业.png',
    desc: '分布在沙漠边缘和地下水较丰富的地区，常见椰枣、蔬菜、果树等，是典型的“点状农业”。',
  },
  {
    title: '地中海农业',
    img: agriImageBaseUrl + '西亚地中海农业.png',
    desc: '分布在地中海沿岸和土耳其部分沿海地区，适宜种植橄榄、葡萄、柑橘等园艺作物。',
  },
  {
    title: '高原畜牧业',
    img: agriImageBaseUrl + '西亚高原畜牧业.png',
    desc: '分布在安纳托利亚高原、伊朗高原等半干旱地区，以羊、山羊等畜牧业较为常见。',
  },
]

const riverGeoLayer: GeoRiverLayerConfig = {
  id: 'westasia-river',
  name: '西亚主要河流分布',
  url: baseGeoUrl + '西亚主要河流分布.geojson',
  layer: null,
  labels: [],
  abortController: null,
}

const irrigationLayer = L.layerGroup()
const oasisLayer = L.layerGroup()
const mediterraneanLayer = L.layerGroup()
const pastoralLayer = L.layerGroup()

const irrigationLabels: DomLabel[] = []
const oasisLabels: DomLabel[] = []
const mediterraneanLabels: DomLabel[] = []
const pastoralLabels: DomLabel[] = []

const irrigationAreas: AgriArea[] = [
  {
    name: '两河流域灌溉农业区',
    lat: 32.7,
    lng: 44.5,
    radius: 280000,
    desc: '依靠底格里斯河和幼发拉底河灌溉，是西亚重要农业区。',
  },
  {
    name: '约旦河谷灌溉农业区',
    lat: 31.9,
    lng: 35.5,
    radius: 110000,
    desc: '依靠约旦河及相关灌溉工程发展农业。',
  },
  {
    name: '土耳其东南灌溉农业区',
    lat: 37.3,
    lng: 39.2,
    radius: 150000,
    desc: '上游河谷与水利工程推动灌溉农业发展。',
  },
]

const oasisPoints: AgriPoint[] = [
  {
    name: '海萨绿洲',
    lat: 25.4,
    lng: 49.6,
    desc: '阿拉伯半岛东部重要绿洲农业区，椰枣种植较有代表性。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '利雅得附近绿洲',
    lat: 24.7,
    lng: 46.7,
    desc: '依靠地下水和灌溉形成的绿洲农业点。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '伊朗高原绿洲',
    lat: 31.9,
    lng: 54.4,
    desc: '高原内部依靠地下水发展绿洲农业。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '阿曼绿洲',
    lat: 23.3,
    lng: 57.0,
    desc: '依靠山前水源和灌溉渠道发展绿洲农业。',
    offsetX: 10,
    offsetY: -2,
  },
]

const mediterraneanAreas: AgriArea[] = [
  {
    name: '土耳其沿海地中海农业区',
    lat: 36.6,
    lng: 30.7,
    radius: 220000,
    desc: '气候较湿润，适宜橄榄、葡萄、柑橘等园艺作物。',
  },
  {
    name: '黎凡特沿海农业区',
    lat: 33.8,
    lng: 35.6,
    radius: 150000,
    desc: '地中海沿岸较适宜发展果树和园艺农业。',
  },
]

const pastoralAreas: AgriArea[] = [
  {
    name: '安纳托利亚高原畜牧区',
    lat: 39.1,
    lng: 34.4,
    radius: 260000,
    desc: '高原半干旱草地较多，畜牧业较常见。',
  },
  {
    name: '伊朗高原畜牧区',
    lat: 32.8,
    lng: 53.0,
    radius: 320000,
    desc: '高原地区广，羊、山羊等畜牧业较有代表性。',
  },
  {
    name: '阿拉伯高原游牧区',
    lat: 24.7,
    lng: 44.8,
    radius: 260000,
    desc: '干旱区以游牧和半游牧畜牧活动较为典型。',
  },
]

function openImagePreview(item: AgriTypeItem) {
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

  if (showRivers.value) {
    riverGeoLayer.labels.forEach(updateOneLabelPosition)
  }

  if (showIrrigation.value) {
    irrigationLabels.forEach(updateOneLabelPosition)
  }

  if (showOasis.value) {
    oasisLabels.forEach(updateOneLabelPosition)
  }

  if (showMediterranean.value) {
    mediterraneanLabels.forEach(updateOneLabelPosition)
  }

  if (showPastoral.value) {
    pastoralLabels.forEach(updateOneLabelPosition)
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
          fillOpacity: 0.2,
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

function addIrrigationLayer() {
  if (!map) return

  irrigationLayer.clearLayers()
  clearDomLabels(irrigationLabels)

  irrigationAreas.forEach(item => {
    const circle = L.circle([item.lat, item.lng], {
      radius: item.radius,
      color: '#16a34a',
      weight: 2,
      fillColor: '#22c55e',
      fillOpacity: 0.2,
      opacity: 0.85,
    }).addTo(irrigationLayer)

    bindInfoPopup(circle, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: 'irrigation-label-dom',
      offsetX: item.offsetX ?? 0,
      offsetY: item.offsetY ?? 0,
    })

    if (label) {
      irrigationLabels.push(label)
    }
  })

  irrigationLayer.addTo(map)
}

function addOasisLayer() {
  if (!map) return

  oasisLayer.clearLayers()
  clearDomLabels(oasisLabels)

  oasisPoints.forEach(item => {
    const marker = L.circleMarker([item.lat, item.lng], {
      radius: 5,
      color: '#047857',
      weight: 2,
      fillColor: '#bbf7d0',
      fillOpacity: 1,
    }).addTo(oasisLayer)

    bindInfoPopup(marker, item.name, item.desc)

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

function addMediterraneanLayer() {
  if (!map) return

  mediterraneanLayer.clearLayers()
  clearDomLabels(mediterraneanLabels)

  mediterraneanAreas.forEach(item => {
    const circle = L.circle([item.lat, item.lng], {
      radius: item.radius,
      color: '#f59e0b',
      weight: 2,
      fillColor: '#fbbf24',
      fillOpacity: 0.2,
      opacity: 0.85,
    }).addTo(mediterraneanLayer)

    bindInfoPopup(circle, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: 'mediterranean-label-dom',
      offsetX: item.offsetX ?? 0,
      offsetY: item.offsetY ?? 0,
    })

    if (label) {
      mediterraneanLabels.push(label)
    }
  })

  mediterraneanLayer.addTo(map)
}

function addPastoralLayer() {
  if (!map) return

  pastoralLayer.clearLayers()
  clearDomLabels(pastoralLabels)

  pastoralAreas.forEach(item => {
    const circle = L.circle([item.lat, item.lng], {
      radius: item.radius,
      color: '#92400e',
      weight: 2,
      fillColor: '#d97706',
      fillOpacity: 0.16,
      opacity: 0.85,
    }).addTo(pastoralLayer)

    bindInfoPopup(circle, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: 'pastoral-label-dom',
      offsetX: item.offsetX ?? 0,
      offsetY: item.offsetY ?? 0,
    })

    if (label) {
      pastoralLabels.push(label)
    }
  })

  pastoralLayer.addTo(map)
}

function refreshMapLayers() {
  if (!map) return

  if (showRivers.value) {
    addRiverLayer()
  } else {
    clearRiverLayer()
  }

  if (showIrrigation.value) {
    addIrrigationLayer()
  } else {
    irrigationLayer.clearLayers()
    clearDomLabels(irrigationLabels)
  }

  if (showOasis.value) {
    addOasisLayer()
  } else {
    oasisLayer.clearLayers()
    clearDomLabels(oasisLabels)
  }

  if (showMediterranean.value) {
    addMediterraneanLayer()
  } else {
    mediterraneanLayer.clearLayers()
    clearDomLabels(mediterraneanLabels)
  }

  if (showPastoral.value) {
    addPastoralLayer()
  } else {
    pastoralLayer.clearLayers()
    clearDomLabels(pastoralLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  clearRiverLayer()

  if (!map) return

  irrigationLayer.clearLayers()
  oasisLayer.clearLayers()
  mediterraneanLayer.clearLayers()
  pastoralLayer.clearLayers()

  if (map.hasLayer(irrigationLayer)) irrigationLayer.removeFrom(map)
  if (map.hasLayer(oasisLayer)) oasisLayer.removeFrom(map)
  if (map.hasLayer(mediterraneanLayer)) mediterraneanLayer.removeFrom(map)
  if (map.hasLayer(pastoralLayer)) pastoralLayer.removeFrom(map)

  clearDomLabels(irrigationLabels)
  clearDomLabels(oasisLabels)
  clearDomLabels(mediterraneanLabels)
  clearDomLabels(pastoralLabels)
}

onMounted(async () => {
  map = L.map('agricultureMap', {
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
.agriculture-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.agriculture-header {
  margin-bottom: 32px;
}

.agriculture-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.agriculture-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.agriculture-content-right {
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

.agriculture-card {
  border-radius: 8px;
  border: 1px solid #dbeafe;
  padding: 14px;
  background: #eff6ff;
}

.agriculture-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #1e3a8a;
}

.iconfont {
  margin-right: 8px;
  color: #1e3a8a;
}

.agriculture-card-01 {
  background: #eff6ff;
  border-color: #dbeafe;
}

.agriculture-card-02 {
  background: #f0fdf4;
  border-color: #bbf7d0;
}

.agriculture-card-02 .agriculture-card-header,
.agriculture-card-02 .iconfont {
  color: #047857;
}

.agriculture-card-03 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.agriculture-card-03 .agriculture-card-header,
.agriculture-card-03 .iconfont {
  color: #9a3412;
}

.agriculture-card-04 {
  background: #fefce8;
  border-color: #fde68a;
}

.agriculture-card-04 .agriculture-card-header,
.agriculture-card-04 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.agriculture-card p {
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
  font-size: 18px;
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

.agri-type-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.agri-type-image-card {
  background: #fff;
  border-radius: 8px;
  border: 1px solid #bbf7d0;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.agri-img-wrap {
  position: relative;
  width: 100%;
  height: 104px;
  overflow: hidden;
  background: #ecfdf5;
  cursor: zoom-in;
}

.agri-img-wrap img {
  width: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.25s ease;
}

.agri-img-wrap:hover img {
  transform: scale(1.05);
}

.agri-img-title {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 5px 8px;
  background: linear-gradient(to top, rgba(6, 95, 70, 0.92), rgba(6, 95, 70, 0.2));
  color: #fff;
  font-weight: bold;
  font-size: 13px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
}

.agri-img-zoom {
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

.agri-img-wrap:hover .agri-img-zoom {
  opacity: 1;
}

.agri-type-desc {
  padding: 8px 10px;
  font-size: 12px;
  color: #374151;
  line-height: 1.5;
}

.crop-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.crop-chip {
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  background: #fff;
  border: 1px solid #e5e7eb;
  color: #374151;
}

.crop-chip.wheat {
  background: #fef3c7;
  border-color: #f59e0b;
  color: #92400e;
}

.crop-chip.barley {
  background: #fff7ed;
  border-color: #fb923c;
  color: #9a3412;
}

.crop-chip.cotton {
  background: #f8fafc;
  border-color: #cbd5e1;
  color: #475569;
}

.crop-chip.date {
  background: #fce7f3;
  border-color: #f472b6;
  color: #9d174d;
}

.crop-chip.olive {
  background: #ecfccb;
  border-color: #84cc16;
  color: #3f6212;
}

.crop-chip.grape {
  background: #ede9fe;
  border-color: #8b5cf6;
  color: #5b21b6;
}

.crop-chip.citrus {
  background: #ffedd5;
  border-color: #f97316;
  color: #9a3412;
}

.crop-chip.sheep {
  background: #f3f4f6;
  border-color: #9ca3af;
  color: #374151;
}

.mini-chart {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #fed7aa;
}

.mini-chart-title {
  font-weight: bold;
  font-size: 13px;
  color: #9a3412;
  margin-bottom: 8px;
}

.mini-bar-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.mini-bar-row:last-child {
  margin-bottom: 0;
}

.mini-bar-label {
  width: 72px;
  flex-shrink: 0;
  font-size: 12px;
  color: #444;
}

.mini-bar-track {
  flex: 1;
  height: 10px;
  border-radius: 999px;
  background: #f1f5f9;
  overflow: hidden;
}

.mini-bar-fill {
  height: 100%;
  border-radius: 999px;
}

.bar-irrigation {
  width: 88%;
  background: #22c55e;
}

.bar-oasis {
  width: 55%;
  background: #10b981;
}

.bar-med {
  width: 48%;
  background: #f59e0b;
}

.bar-pastoral {
  width: 70%;
  background: #a16207;
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
  width: 200px;
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

.irrigation-area {
  background: rgba(34, 197, 94, 0.25);
  border: 1px solid #16a34a;
}

.med-area {
  background: rgba(251, 191, 36, 0.25);
  border: 1px solid #f59e0b;
}

.pastoral-area {
  background: rgba(217, 119, 6, 0.2);
  border: 1px solid #92400e;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
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

:deep(.irrigation-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #15803d;
  background: rgba(240, 253, 244, 0.92);
  border: 1px solid rgba(22, 163, 74, 0.6);
  border-radius: 999px;
  padding: 2px 7px;
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

:deep(.mediterranean-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #b45309;
  background: rgba(255, 251, 235, 0.95);
  border: 1px solid rgba(245, 158, 11, 0.6);
  border-radius: 999px;
  padding: 2px 7px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.pastoral-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #92400e;
  background: rgba(255, 247, 237, 0.95);
  border: 1px solid rgba(146, 64, 14, 0.55);
  border-radius: 999px;
  padding: 2px 7px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
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
  color: #064e3b;
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
  border-left: 4px solid #10b981;
  background: #f0fdf4;
  border-radius: 6px;
  color: #374151;
  font-size: 13px;
  line-height: 1.55;
}
</style>
