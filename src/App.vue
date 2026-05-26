<template>
  <div class="ppt-container">
    <!-- 左侧侧边栏 -->
    <div class="ppt-left" :class="{ hideLeft: isSmallScreen }">
      <div class="ppt-left-header">
        <h4>西亚地理课件</h4>
        <p class="text">左侧选择页面，右侧播放内容</p>
      </div>
      <div class="ppt-left-thumb">
        <div
          v-for="item in pptPages"
          :key="item.key"
          class="ppt-thumb-item"
          :class="{ 'ppt-thumb-item-active': currentKey === item.key }"
          @click="currentKey = item.key"
        >
          <div class="ppt-thumb-item-left">
            <span class="index">{{ item.index }}</span>
          </div>
          <div class="ppt-thumb-item-right">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
        </div>
      </div>
      <div class="ppt-left-footer">
        <div class="page-info">第 {{ getIndex + 1 }} 页 / 共 {{ pptPages.length }} 页</div>
      </div>
    </div>

    <!-- 右侧主内容区 -->
    <div class="ppt-right">
      <div class="ppt-progress">
        <div :style="{ width: `${((getIndex + 1) / pptPages.length) * 100}%` }"></div>
      </div>
      <div class="ppt-content animate__animated animate__fadeIn" :key="currentKey">
        <component :is="components[currentKey as keyof typeof components]" :current="current" :isEnhance="isEnhance" />
      </div>

      <!-- 小屏底部控制栏 -->
      <div class="mobile-control" v-if="isSmallScreen">
        <span class="icon-thumb" @click="showThumbPopup = !showThumbPopup">📑</span>
        <span class="arrow left" @click="prevPage">←</span>
        <span class="page-num">{{ getIndex + 1 }}</span>
        <span class="arrow right" @click="nextPage">→</span>
      </div>

      <!-- 横向缩略弹窗 -->
      <div class="thumb-popup" v-if="isSmallScreen && showThumbPopup">
        <div class="thumb-scroll">
          <div
            v-for="item in pptPages"
            :key="item.key"
            class="mini-thumb"
            :class="{ active: currentKey === item.key }"
            @click="
              () => {
                currentKey = item.key
                showThumbPopup = false
              }
            "
          >
            <div class="num">{{ item.index }}</div>
            <div class="name">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Cover from './components/cover.vue'
import Position from './components/position.vue'
import compose from './components/compose.vue'
import Terrain from './components/terrain.vue'
import Oil from './components/oil.vue'
import Water from './components/water.vue'
import Agriculture from './components/agriculture.vue'
import Culture from './components/culture.vue'
import Sustainable from './components/sustainable.vue'
import Hotspot from './components/hotspot.vue'
import Summary from './components/summary.vue'
import Population from './components/population.vue'

// 组件映射
const components = {
  cover: Cover,
  compose: compose,
  position: Position,
  terrain: Terrain,
  oil: Oil,
  water: Water,
  agriculture: Agriculture,
  culture: Culture,
  sustainable: Sustainable,
  population: Population,
  hotspot: Hotspot,
  summary: Summary,
}

const pptPages = [
  { key: 'cover', index: 1, title: '课程封面', desc: '走进西亚' },
  { key: 'position', index: 2, title: '西亚地理位置', desc: '两洋三洲五海之地' },
  { key: 'compose', index: 3, title: '西亚的组成', desc: '多国交汇枢纽之域' },
  { key: 'terrain', index: 4, title: '地形与自然环境', desc: '干旱的高原大陆' },
  { key: 'oil', index: 5, title: '世界石油宝库', desc: '黑色金子' },
  { key: 'water', index: 6, title: '水资源危机', desc: '比石油更珍贵的水' },
  { key: 'agriculture', index: 7, title: '绿洲农业与灌溉农业', desc: '沙漠中的生计' },
  { key: 'population', index: 8, title: '人口与城市', desc: '沙漠中的聚落与现代都市' },
  { key: 'culture', index: 9, title: '多元文化与宗教', desc: '文明交汇之地' },
  { key: 'sustainable', index: 10, title: '可持续发展', desc: '从石油依赖到多元转型' },
  { key: 'hotspot', index: 11, title: '长期热点原因', desc: '世界关注的焦点地区' },
  { key: 'summary', index: 12, title: '课堂小结', desc: '区域特征综合归纳' },
]

const currentKey = ref('cover')
const showThumbPopup = ref(false)
const screenWidth = ref(window.innerWidth)

// 控制加强版
const isEnhance = ref(false)

const current = computed(() => {
  const index = pptPages.findIndex(item => item.key === currentKey.value)
  return pptPages[index]
})

// 判断是否小屏
const isSmallScreen = computed(() => screenWidth.value < 992)
const getIndex = computed(() => pptPages.findIndex(item => item.key === currentKey.value))

// 上一页
const prevPage = () => {
  let idx = getIndex.value
  if (idx > 0) {
    currentKey.value = pptPages[idx - 1]!.key
  }
}
// 下一页
const nextPage = () => {
  let idx = getIndex.value
  if (idx < pptPages.length - 1) {
    currentKey.value = pptPages[idx + 1]!.key
  }
}

// 监听窗口大小
const handleResize = () => {
  screenWidth.value = window.innerWidth
}
onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<style lang="scss" scoped>
.ppt-container {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #e8ece7;
}

.ppt-left {
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 100%;
  background-color: #f9faf5;
  border-right: 1px solid rgba(20, 33, 31, 0.16);
  padding: 16px;
  transition: all 0.3s ease;

  &.hideLeft {
    width: 0;
    padding: 0;
    border: none;
    overflow: hidden;
  }

  .ppt-left-header {
    padding-bottom: 16px;
    h4 {
      font-size: 16px;
      font-weight: bold;
      margin: 0 0 4px 0;
      color: #2c3e50;
    }
    .text {
      font-size: 12px;
      color: #999;
      margin: 0;
    }
  }

  .ppt-left-thumb {
    flex: 1;
    padding: 16px 0;
    overflow-y: auto;
    border-top: 1px solid rgba(20, 33, 31, 0.16);
    border-bottom: 1px solid rgba(20, 33, 31, 0.16);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .ppt-thumb-item {
    width: 100%;
    min-height: 78px;
    border: 1px solid rgba(20, 33, 31, 0.12);
    border-radius: 8px;
    background: #fffdf7;
    padding: 12px;
    cursor: pointer;
    box-shadow: 0 8px 18px rgba(31, 43, 39, 0.05);
    transition: all 0.2s ease;
    display: flex;
    align-items: flex-start;

    &-left {
      .index {
        display: inline-block;
        width: 28px;
        height: 28px;
        line-height: 28px;
        border-radius: 50%;
        background: rgba(30, 107, 92, 0.1);
        color: var(--primary-color);
        font-weight: 900;
        font-size: 12px;
        text-align: center;
      }
    }

    &-right {
      padding-left: 12px;
      .title {
        display: inline-block;
        font-size: 14px;
        color: #333;
        font-weight: bold;
      }
      .desc {
        font-size: 12px;
        color: var(--text-color);
      }
    }
  }

  .ppt-thumb-item-active {
    border-color: var(--primary-color, #27ae60);
    background: #eaf4ef;
    box-shadow:
      inset 4px 0 0 var(--primary-color, #27ae60),
      0 10px 20px rgba(31, 43, 39, 0.08);
    .index {
      background: var(--primary-color, #27ae60);
      color: #fff;
    }
  }

  .ppt-left-footer {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #999;
  }
}

.ppt-right {
  position: relative;
  flex: 1;
  height: 100%;
  padding: 24px;
  overflow: auto;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.58), rgba(232, 236, 231, 0.55)), #e8ece7;
  display: flex;
  flex-direction: column;

  .ppt-progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    width: 100%;
    background-color: #ccc;
    > div {
      height: 100%;
      background-color: var(--primary-color);
      transition: width 0.3s;
    }
  }

  .ppt-content {
    width: 96%;
    height: auto;
    aspect-ratio: 16 / 9;
    background-color: #fbfaf8;
    border-radius: 8px;
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  /* 移动端底部控制栏 */
  .mobile-control {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 10px 20px;
    background: #fff;
    border-radius: 30px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
    z-index: 10;

    .icon-thumb,
    .arrow {
      font-size: 18px;
      cursor: pointer;
      padding: 4px 8px;
      user-select: none;
    }
    .page-num {
      font-size: 14px;
      color: #333;
    }
  }

  /* 横向缩略弹窗 */
  .thumb-popup {
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    background: #fff;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
    z-index: 10;

    .thumb-scroll {
      display: flex;
      gap: 10px;
      overflow-x: auto;
      padding-bottom: 6px;
    }

    .mini-thumb {
      min-width: 90px;
      height: 70px;
      padding: 8px;
      border: 1px solid #eee;
      border-radius: 6px;
      cursor: pointer;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .num {
        font-size: 12px;
        color: #666;
        margin-bottom: 4px;
      }

      .name {
        font-size: 12px;
        color: #333;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &.active {
        border-color: var(--primary-color);
        background: #eaf4ef;
        color: var(--primary-color);
        .num {
          color: var(--primary-color);
          font-weight: bold;
        }
        .name {
          color: var(--primary-color);
          font-weight: bold;
        }
      }
    }
  }
}

/* 大屏恢复样式 */
@media (min-width: 992px) {
  .mobile-control,
  .thumb-popup {
    display: none !important;
  }
  .ppt-left {
    width: 260px !important;
    padding: 16px !important;
    overflow: visible !important;
  }
}
</style>
