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
          <div class="terrain-card-header"><i class="iconfont icon-diqiu"></i>地形与海拔特征</div>
          <p class="mb-8">西亚整体以高原地形为主，山地、平原面积狭小，区域整体海拔偏高，地势起伏差异明显。</p>
          <ul class="list-disc pl-5 mb-8">
            <li class="mb-2"><strong>安纳托利亚高原</strong>：西北部核心地形，山脉交错，地势起伏大</li>
            <li class="mb-2"><strong>伊朗高原</strong>：东北部广袤高地，平均海拔较高</li>
            <li class="mb-2"><strong>阿拉伯高原</strong>：盘踞阿拉伯半岛，整体西高东低</li>
          </ul>
          <p class="mb-8">死海湖面海拔约-415米，为全球陆地最低点；仅两河沿岸形成狭窄冲积平原。</p>
        </div>

        <div class="terrain-card terrain-card-02">
          <div class="terrain-card-header"><i class="iconfont icon-river"></i>主要河流与山地</div>
          <div class="geo-item mb-6">
            <div class="item-title">幼发拉底河、底格里斯河</div>
            <div class="item-desc">区域核心外流河，冲积形成美索不达米亚平原，孕育古老文明</div>
          </div>
          <div class="geo-item">
            <div class="item-title">大高加索山脉、扎格罗斯山脉</div>
            <div class="item-desc">区域重要分界山地，地势高耸，阻挡水汽输送，加剧内陆干旱</div>
          </div>
        </div>

        <div class="terrain-card terrain-card-03">
          <div class="terrain-card-header"><i class="iconfont icon-rain"></i>降水分布特点</div>
          <p class="mb-8">整体降水稀缺，空间分布极度不均，内陆荒漠几乎无有效降水。</p>
          <ul class="list-disc pl-5 mb-4">
            <li>地中海沿岸：冬季降水集中，区域湿润度最高</li>
            <li>高原山地迎风坡：少量地形雨，局部水源充足</li>
            <li>半岛内陆、高原腹地：全年干旱少雨，荒漠广布</li>
          </ul>
        </div>

        <div class="terrain-card terrain-card-04">
          <div class="terrain-card-header"><i class="iconfont icon-weather"></i>气候类型概况</div>
          <p class="mb-8">受副热带高压与干燥信风控制，区域整体气候炎热干旱。</p>
          <div class="climate-item mb-6">
            <div class="item-title">热带沙漠气候</div>
            <div class="item-desc">分布最广，全年高温少雨，荒漠地貌连片分布</div>
          </div>
          <div class="climate-item mb-6">
            <div class="item-title">温带大陆性气候</div>
            <div class="item-desc">高原内陆区，昼夜温差悬殊，全年降水匮乏</div>
          </div>
          <div class="climate-item">
            <div class="item-title">地中海气候</div>
            <div class="item-desc">沿岸狭长区域，夏干冬雨，气候条件相对宜居</div>
          </div>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="terrain-content-right">
        <!-- GeoJSON 图层切换面板 -->
        <div class="layer-control-panel">
          <div class="panel-title">图层控制</div>
          <div class="layer-item" v-for="layer in layerList" :key="layer.id">
            <label>
              <input type="checkbox" :checked="layer.visible" @change="(e: any) => toggleGeoJsonLayer(layer.id, e.target!.checked!)" />
              {{ layer.name }}
            </label>
          </div>
        </div>

        <div id="westAsiaMap" class="leaflet-map"></div>
        <div class="map-tip">支持拖拽 / 滚轮缩放查看细节</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const props = defineProps<{
  current: {
    title: string
    desc: string
    index: number
  }
}>()

let map: L.Map = null!
let baseLayer: L.TileLayer | null = null
const centerLat = 33.5
const centerLng = 43.5
const zoomLevel = 5

// GeoJSON 图层配置
const baseGeoUrl = 'https://course-code.oss-cn-shanghai.aliyuncs.com/geojson/'
const layerList = ref([
  {
    id: 'asia-july-temp',
    name: '亚洲七月气温',
    url: baseGeoUrl + '亚洲七月气温.geojson',
    visible: false,
    layer: null as L.GeoJSON | null,
  },
  {
    id: 'asia-jan-temp',
    name: '亚洲一月气温',
    url: baseGeoUrl + '亚洲一月气温.geojson',
    visible: false,
    layer: null as L.GeoJSON | null,
  },
  {
    id: 'asia-climate',
    name: '亚洲气候类型',
    url: baseGeoUrl + '亚洲气候类型.geojson',
    visible: false,
    layer: null as L.GeoJSON | null,
  },
  {
    id: 'westasia-rain',
    name: '西亚年降水量分布',
    url: baseGeoUrl + '西亚年降水量分布.geojson',
    visible: false,
    layer: null as L.GeoJSON | null,
  },
  {
    id: 'westasia-river',
    name: '西亚主要河流分布',
    url: baseGeoUrl + '西亚主要河流分布.geojson',
    visible: false,
    layer: null as L.GeoJSON | null,
  },
])

// 文字路径点位，单字依次排布
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
  { path: [[31.3, 35.4]], text: '死海' },
  {
    path: [
      [37.8, 38.2],
      [36.2, 42.5],
    ],
    text: '幼发拉底河',
  },
  {
    path: [
      [37.2, 43.2],
      [34.8, 45.8],
    ],
    text: '底格里斯河',
  },
  {
    path: [
      [41.8, 44.5],
      [40.2, 47.2],
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
      [34.8, 42.8],
      [33.2, 44.8],
    ],
    text: '美索不达米亚平原',
  },
]

// 均分路径点位
function getPointsOnPath(path: number[][], count: number): [number, number][] {
  const pts: [number, number][] = []
  if (path.length === 1) {
    // @ts-ignore
    for (let i = 0; i < count; i++) pts.push([path[0][0], path[0][1]])
    return pts
  }
  const start = path[0]

  const end = path[path.length - 1]
  // @ts-ignore
  const latStep = (end[0] - start[0]) / (count - 1 || 1)
  // @ts-ignore
  const lngStep = (end[1] - start[1]) / (count - 1 || 1)
  for (let i = 0; i < count; i++) {
    // @ts-ignore
    pts.push([start[0] + latStep * i, start[1] + lngStep * i])
  }
  return pts
}

// 逐个单字标注
function addSingleCharLabel() {
  charPathList.forEach(item => {
    const chars = item.text.split('')
    const points = getPointsOnPath(item.path, chars.length)
    chars.forEach((char, idx) => {
      L.tooltip({
        permanent: true,
        direction: 'center',
        className: 'single-char-label',
        interactive: false,
      })
        .setLatLng(points[idx]!)
        .setContent(char)
        .addTo(map)
    })
  })
}

// 切换 GeoJSON 图层，读取内部fillColor
const toggleGeoJsonLayer = (id: string, visible: boolean) => {
  const layerConfig = layerList.value.find(l => l.id === id)
  if (!layerConfig) return

  if (visible) {
    fetch(layerConfig.url)
      .then(res => res.json())
      .then(data => {
        layerConfig.layer = L.geoJSON(data, {
          style: feature => {
            const props = feature?.properties || {}
            return {
              color: feature?.geometry.type === 'MultiLineString' ? props.fillColor : 'rgba(255, 255, 255, 0)',
              weight: 2,
              fillColor: props.fillColor || '#cccccc',
              fillOpacity: 1,
            }
          },
        }).addTo(map)
        layerConfig.visible = true
      })
  } else {
    if (layerConfig.layer) {
      map.removeLayer(layerConfig.layer as any)

      layerConfig.layer = null
    }
    layerConfig.visible = false
  }
}

// 加载OTM地形底图
const initBaseMap = () => {
  if (baseLayer) map.removeLayer(baseLayer)
  const url = 'https://course-code.oss-cn-shanghai.aliyuncs.com/tiles/otm-tiles/{z}/{x}/{y}.png'
  baseLayer = L.tileLayer(url, {
    attribution: '',
    minZoom: 2,
    maxZoom: 7,
  }).addTo(map)
}

onMounted(() => {
  map = L.map('westAsiaMap', {
    zoomControl: true,
    attributionControl: false,
    minZoom: 2,
    maxZoom: 7,
    dragging: true,
    scrollWheelZoom: true,
  }).setView([centerLat, centerLng], zoomLevel)

  initBaseMap()
  addSingleCharLabel()
})

onUnmounted(() => {
  if (map) map.remove()
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
  z-index: 10;
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

/* 图层控制面板 */
.layer-control-panel {
  position: absolute;
  top: 100px;
  left: 10px;
  background: rgba(255, 255, 255, 0.95);
  padding: 10px;
  border-radius: 6px;
  font-size: 12px;
  z-index: 10;
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
.layer-item:last-child {
  margin-bottom: 0;
}

/* 单字标注样式 */
:deep(.single-char-label) {
  font-size: 14px;
  font-weight: bold;
  color: #d92525;
  text-shadow: 0 0 2px #fff;
  padding: 4px;
  background-color: #fff;
}

:deep(.single-char-label .leaflet-tooltip-content) {
}
:deep(.leaflet-tooltip-tip) {
  display: none !important;
}
:deep(.leaflet-marker-icon),
:deep(.leaflet-marker-shadow) {
  display: none !important;
}
</style>
