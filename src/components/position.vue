<template>
  <div class="position-container">
    <div class="position-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>
    <div class="position-content">
      <div class="position-content-left">
        <div class="position-card position-card-01">
          <div class="position-card-header"><i class="iconfont icon-diqiu"></i>位置解析</div>
          <p class="mb-8" style="color: var(--text-color)">
            西亚地处亚、非、欧三大洲的交界地带，自古以来就是东西方交通的要道（古代“丝绸之路”必经之地）。
          </p>
          <p class="mb-8"><i class="iconfont icon-duihao"></i> <strong>联系三大洲</strong>：亚洲、欧洲、非洲</p>
          <p class="mb-8"><i class="iconfont icon-duihao"></i><strong>沟通两大洋</strong>：印度洋、大西洋。</p>
          <p class="mb-8">
            <i class="iconfont icon-duihao"></i><strong>濒临五大水域</strong>：阿拉伯海、红海、地中海、黑海、里海（里海是世界最大的内陆湖）
          </p>
        </div>
        <div class="position-card position-card-02">
          <div class="position-card-header"><i class="iconfont icon-anchor-full"></i>咽喉要道（考点重点）</div>
          <div class="position-card-module mb-8">
            <div class="mb-8"><strong>霍尔木兹海峡</strong></div>
            <p class="text">波斯湾通往阿拉伯海的唯一出口，被称为<span style="color: red">“世界油阀”</span>。</p>
          </div>
          <div class="position-card-module mb-8">
            <div class="mb-8"><strong>苏伊士运河</strong></div>
            <p class="text">沟通红海与地中海，是亚洲与非洲的分界线，大大缩短了印度洋到大西洋的航程。</p>
          </div>
          <div class="position-card-module mb-8">
            <div class="mb-8"><strong>土耳其海峡</strong></div>
            <p class="text">黑海出入地中海的门户，亚欧分界线之一。</p>
          </div>
        </div>
      </div>

      <div class="position-content-right">
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
const centerLat = 33.5
const centerLng = 43.5
const zoomLevel = 5
const useGoogle = ref(false)
let baseLayer: L.TileLayer | null = null

// 统一圆点标记
const dotIcon = L.divIcon({
  html: '<div style="width:8px;height:8px;border-radius:50%;background:#222;"></div>',
  iconSize: [8, 8],
  iconAnchor: [4, 4],
})

const switchBaseLayer = () => {
  if (baseLayer) map.removeLayer(baseLayer)
  const url = useGoogle.value
    ? 'https://course-code.oss-cn-shanghai.aliyuncs.com/tiles/google-tiles/{z}/{x}/{y}.png'
    : 'https://course-code.oss-cn-shanghai.aliyuncs.com/tiles/osm-tiles/{z}/{x}/{y}.png'
  baseLayer = L.tileLayer(url, { attribution: '' }).addTo(map)
}

onMounted(() => {
  map = L.map('westAsiaMap', {
    zoomControl: true,
    attributionControl: false,
    minZoom: 2,
    maxZoom: 7,
  }).setView([centerLat, centerLng], zoomLevel)

  L.tileLayer('https://course-code.oss-cn-shanghai.aliyuncs.com/tiles/osm-tiles/{z}/{x}/{y}.png', {
    attribution: 'openStreetMap',
  }).addTo(map)

  // 大洲 红色大字白边
  const addContinent = (lat: number, lng: number, name: string) => {
    L.marker([lat, lng], { icon: dotIcon }).addTo(map)
    L.tooltip({
      permanent: true,
      direction: 'right',
      className: 'continent-tip',
    })
      .setContent(name)
      .setLatLng([lat, lng])
      .addTo(map)
  }

  // 大洋水域 蓝色字体白边
  const addOcean = (lat: number, lng: number, name: string) => {
    L.marker([lat, lng], { icon: dotIcon }).addTo(map)
    L.tooltip({
      permanent: true,
      direction: 'right',
      className: 'ocean-tip',
    })
      .setContent(name)
      .setLatLng([lat, lng])
      .addTo(map)
  }

  // 海峡运河 常规字体
  const addStrait = (lat: number, lng: number, name: string) => {
    L.marker([lat, lng], { icon: dotIcon }).addTo(map)
    L.tooltip({
      permanent: true,
      direction: 'right',
      className: 'strait-tip',
    })
      .setContent(name)
      .setLatLng([lat, lng])
      .addTo(map)
  }

  // 大洲
  addContinent(38, 55, '亚洲')
  addContinent(42, 22, '欧洲')
  addContinent(15, 30, '非洲')

  // 大洋水域
  addOcean(2, 73, '印度洋')
  addOcean(30, -30, '大西洋')
  addOcean(42, 49, '里海')
  addOcean(34, 30, '地中海')
  addOcean(43, 36, '黑海')
  addOcean(20, 39, '红海')
  addOcean(14, 55, '阿拉伯海')
  addOcean(27, 50, '波斯湾')

  // 海峡运河
  addStrait(26.5, 56, '霍尔木兹海峡')
  addStrait(41, 29, '土耳其海峡')
  addStrait(30, 32, '苏伊士运河')
})

onUnmounted(() => {
  if (map) {
    map.remove()
    map = null!
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
      width: 30%;
    }

    &-right {
      width: 69%;
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
    padding: 16px;
    margin-bottom: 16px;

    .iconfont {
      margin-right: 8px;
      color: #1e3a8a;
    }

    .position-card-header {
      color: #1e3a8a;
      margin-bottom: 16px;
      font-weight: bold;
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
      padding: 16px;
      border: 1px solid #ffb43c;
      border-radius: 8px;
    }
  }
}

:deep(.leaflet-tooltip) {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding: 2px 4px !important;
  &::before {
    display: none !important;
  }
}

:deep(.leaflet-marker-icon) {
  display: none !important;
}

:deep(.continent-tip) {
  font-size: 30px;
  font-weight: bold;
  color: #e53e3e;
  text-shadow:
    0 0 2px #fff,
    0 0 4px #fff;
}
:deep(.ocean-tip) {
  font-size: 26px;
  color: #3182ce;
  font-weight: bold;
  text-shadow:
    0 0 2px #fff,
    0 0 4px #fff;
}
:deep(.strait-tip) {
  font-size: 20px;
  color: #222;
  font-weight: bold;
  text-shadow: 0 0 2px #fff;
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
</style>
