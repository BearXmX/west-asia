<template>
  <div class="compose-container">
    <div class="compose-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="compose-content">
      <div class="compose-content-left">
        <div class="compose-card compose-card-01">
          <div class="compose-card-header"><i class="iconfont icon-diqiu"></i>西亚组成概况</div>
          <p class="mb-8">西亚位于亚洲西南部，共包含<strong>20个国家</strong>，地处“两洋三洲五海”之地，是全球石油核心产区与交通枢纽。</p>
          <p class="mb-8" style="color: #78350f; font-weight: bold">
            📍 特殊地理说明：<br />
            • 土耳其：跨亚欧两洲<br />
            • 埃及：跨亚非两洲（西奈半岛不属西亚）
          </p>
        </div>

        <div class="compose-card compose-card-02">
          <div class="compose-card-header"><i class="iconfont icon-anchor-full"></i>全部国家（点击定位）</div>
          <div class="country-buttons">
            <button v-for="item in countryList" :key="item.name" @click="flyToCountry(item)" :class="{ active: activeCountry === item.name }">
              {{ item.name }}
            </button>
          </div>
        </div>
      </div>

      <div class="compose-content-right">
        <div id="westAsiaMap" class="leaflet-map"></div>
        <div class="map-tip">支持拖拽 / 滚轮缩放查看细节</div>
        <div class="map-switch">
          <label><input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" /> 切换谷歌地图</label>
        </div>
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
let geoJsonLayer: L.GeoJSON | null = null
let baseLayer: L.TileLayer | null = null
const activeCountry = ref('')
const useGoogle = ref(false)
const centerLat = 33.5
const centerLng = 43.5
const zoomLevel = 5

const countryList = [
  { name: '伊朗', lat: 32.4279, lng: 53.688, zoom: 7 },
  { name: '伊拉克', lat: 33.2232, lng: 43.6793, zoom: 7 },
  { name: '沙特阿拉伯', lat: 23.8859, lng: 45.0792, zoom: 7 },
  { name: '土耳其', lat: 38.9637, lng: 35.2433, zoom: 7 },
  { name: '阿联酋', lat: 23.4241, lng: 53.8478, zoom: 7 },
  { name: '以色列', lat: 31.0461, lng: 34.8516, zoom: 7 },
  { name: '叙利亚', lat: 34.8021, lng: 38.9988, zoom: 7 },
  { name: '也门', lat: 15.5527, lng: 48.5164, zoom: 7 },
  { name: '科威特', lat: 29.3117, lng: 47.4818, zoom: 7 },
  { name: '阿曼', lat: 21.5126, lng: 55.9233, zoom: 7 },
  { name: '卡塔尔', lat: 25.3548, lng: 51.1839, zoom: 7 },
  { name: '巴林', lat: 26.0667, lng: 50.5577, zoom: 7 },
  { name: '约旦', lat: 30.5852, lng: 36.2384, zoom: 7 },
  { name: '黎巴嫩', lat: 33.8547, lng: 35.8623, zoom: 7 },
  { name: '巴勒斯坦', lat: 31.9522, lng: 35.2332, zoom: 7 },
  { name: '塞浦路斯', lat: 35.1264, lng: 33.4299, zoom: 7 },
  { name: '格鲁吉亚', lat: 42.3154, lng: 43.3569, zoom: 7 },
  { name: '亚美尼亚', lat: 40.0691, lng: 45.0382, zoom: 7 },
  { name: '阿塞拜疆', lat: 40.1431, lng: 47.5769, zoom: 7 },
  { name: '阿富汗', lat: 33.9391, lng: 67.71, zoom: 7 },
]

const flyToCountry = (item: (typeof countryList)[number]) => {
  activeCountry.value = item.name
  map.flyTo([item.lat, item.lng], item.zoom, { duration: 1 })
}

const switchBaseLayer = () => {
  if (baseLayer) map.removeLayer(baseLayer)
  const url = useGoogle.value
    ? 'https://course-code.oss-cn-shanghai.aliyuncs.com/tiles/google-tiles/{z}/{x}/{y}.png'
    : 'https://course-code.oss-cn-shanghai.aliyuncs.com/tiles/osm-tiles/{z}/{x}/{y}.png'
  baseLayer = L.tileLayer(url, { attribution: '' }).addTo(map)
}

onMounted(() => {
  const dotIcon = L.divIcon({
    html: '<div style="width:8px;height:8px;border-radius:50%;background:#222;"></div>',
    iconSize: [8, 8],
    iconAnchor: [4, 4],
  })

  map = L.map('westAsiaMap', {
    zoomControl: true,
    attributionControl: false,
    minZoom: 2,
    maxZoom: 7,
    zoom: zoomLevel,
    dragging: true,
    scrollWheelZoom: true,
  }).setView([centerLat, centerLng], zoomLevel)

  switchBaseLayer()

  fetch('https://course-code.oss-cn-shanghai.aliyuncs.com/geojson/%E8%A5%BF%E4%BA%9A%E5%9B%BD%E5%AE%B6%E8%BD%AE%E5%BB%93%E7%BA%BF.geojson')
    .then(res => res.json())
    .then(data => {
      geoJsonLayer = L.geoJSON(data, {
        style: { color: '#1e3a8a', weight: 2, fillColor: '#dbeafe', fillOpacity: 0.3 },
      }).addTo(map)

      countryList.forEach(country => {
        L.marker([country.lat, country.lng], { icon: dotIcon }).addTo(map)
        L.tooltip({
          permanent: true,
          direction: 'right',
          className: 'strait-tip',
        })
          .setContent(country.name)
          .setLatLng([country.lat, country.lng])
          .addTo(map)
      })
    })
})

onUnmounted(() => {
  if (map) map.remove()
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
  width: 30%;
}
.compose-content-right {
  width: 69%;
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
.map-switch {
  position: absolute;
  top: 45px;
  right: 10px;
  background: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  z-index: 10;
}
.compose-card {
  background-color: #eff6ff;
  border-radius: 8px;
  border: 1px solid #dbeafe;
  padding: 16px;
  margin-bottom: 16px;
}
.iconfont {
  margin-right: 8px;
  color: #1e3a8a;
}
.compose-card-header {
  color: #1e3a8a;
  margin-bottom: 16px;
  font-weight: bold;
}
.compose-card-02 {
  background-color: #ffefd6;
  border: 1px solid #ffce80;
}
.compose-card-02 .iconfont {
  color: #78350f;
}
.compose-card-02 .compose-card-header {
  color: #78350f;
}
.country-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.country-buttons button {
  padding: 6px 12px;
  border: 1px solid #ffb43c;
  border-radius: 6px;
  background: #fff;
  color: #78350f;
  cursor: pointer;
  font-size: 14px;
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

/* 纯文字样式，无任何边框背景箭头 */
:deep(.text-only-tip) {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}
:deep(.text-only-tip .leaflet-tooltip-content) {
  padding: 0 !important;
}
:deep(.country-text) {
  font-size: 13px;
  font-weight: bold;
  color: #111;
  text-shadow: 0 0 2px #fff;
}
:deep(.leaflet-tooltip-tip) {
  display: none !important;
}

:deep(.leaflet-tooltip) {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding: 2px 4px !important;
}

:deep(.leaflet-marker-icon) {
  display: none !important;
}

:deep(.leaflet-marker-shadow) {
  display: none !important;
}

:deep(.strait-tip) {
  font-size: 26px;
  color: #222;
  font-weight: bold;
  text-shadow: 0 0 2px #fff;
  padding: 4px 16px;
}
</style>
