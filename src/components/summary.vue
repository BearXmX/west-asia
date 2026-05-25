<template>
  <div class="summary-container">
    <div class="summary-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="summary-content">
      <!-- 左侧内容区 -->
      <div class="summary-content-left">
        <div class="summary-card summary-card-01">
          <div class="summary-card-header"><i class="iconfont icon-hexin"></i>本课核心线索</div>

          <p class="mb-8">
            学习西亚，要把它看成一个由
            <strong>位置、自然环境、资源、农业、文化、发展与热点问题</strong>
            共同构成的区域整体。
          </p>

          <div class="note-box">
            <div class="note-title">一句话概括</div>
            <div>
              西亚是<strong>两洋三洲五海之地</strong>，也是
              <strong>石油丰富、水源紧张、文化多元、世界关注度高</strong>
              的重要区域。
            </div>
          </div>
        </div>

        <div class="summary-card summary-card-02">
          <div class="summary-card-header"><i class="iconfont icon-zuzhijiegou"></i>知识结构总览</div>

          <div class="summary-chain">
            <div
              class="chain-item"
              v-for="item in summaryList"
              :key="item.key"
              :class="{ active: activeKey === item.key }"
              @click="activeKey = item.key"
            >
              <div class="chain-index">{{ item.index }}</div>
              <div class="chain-main">
                <div class="chain-title">{{ item.title }}</div>
                <div class="chain-desc">{{ item.short }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="summary-card summary-card-03">
          <div class="summary-card-header"><i class="iconfont icon-quyuxinxi"></i>区域认知方法</div>

          <div class="method-item">
            <div class="method-title">第一步：看位置</div>
            <div class="method-desc">分析纬度位置、海陆位置和交通位置，判断区域联系和战略意义。</div>
          </div>

          <div class="method-item">
            <div class="method-title">第二步：看自然环境</div>
            <div class="method-desc">结合地形、气候、水资源，判断农业、人口和城市分布条件。</div>
          </div>

          <div class="method-item">
            <div class="method-title">第三步：看资源与产业</div>
            <div class="method-desc">关注石油资源、交通运输、农业类型和经济转型方向。</div>
          </div>

          <div class="method-item">
            <div class="method-title">第四步：看人文与问题</div>
            <div class="method-desc">分析民族、宗教、文化、可持续发展和长期热点原因。</div>
          </div>
        </div>

        <div class="summary-card summary-card-04">
          <div class="summary-card-header"><i class="iconfont icon-kaoshi"></i>综合答题模板</div>

          <div class="answer-box">
            <div class="answer-title">如何综合分析西亚的区域特征？</div>

            <ul class="exam-list">
              <li><strong>位置：</strong>西亚位于亚洲西南部，联系亚洲、欧洲和非洲，沟通印度洋与大西洋方向。</li>
              <li><strong>自然：</strong>以高原、山地和荒漠为主，气候干旱，水资源短缺。</li>
              <li><strong>资源：</strong>波斯湾及其沿岸石油资源丰富，是世界重要能源供应区。</li>
              <li><strong>农业：</strong>农业受水资源制约，主要有灌溉农业、绿洲农业、地中海农业和畜牧业。</li>
              <li><strong>文化：</strong>民族、语言和宗教多元，是文明交汇和三大宗教重要发源地或圣地所在区域。</li>
              <li><strong>发展：</strong>面临石油依赖、水资源短缺和生态脆弱等问题，需要走多元化和可持续发展道路。</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 右侧总结图示区 -->
      <div class="summary-content-right">
        <div class="summary-board">
          <div class="board-title">西亚区域特征综合归纳</div>

          <div class="core-diagram">
            <div class="center-core">
              <div class="core-title">西亚</div>
              <div class="core-subtitle">区域认知</div>
            </div>

            <div class="diagram-node node-position" :class="{ active: activeKey === 'position' }" @click="activeKey = 'position'">
              <div class="node-icon">🌍</div>
              <div class="node-title">位置</div>
              <div class="node-text">两洋三洲五海</div>
            </div>

            <div class="diagram-node node-nature" :class="{ active: activeKey === 'terrain' }" @click="activeKey = 'terrain'">
              <div class="node-icon">🏜</div>
              <div class="node-title">自然</div>
              <div class="node-text">干旱高原大陆</div>
            </div>

            <div class="diagram-node node-oil" :class="{ active: activeKey === 'oil' }" @click="activeKey = 'oil'">
              <div class="node-icon">⛽</div>
              <div class="node-title">石油</div>
              <div class="node-text">波斯湾沿岸</div>
            </div>

            <div class="diagram-node node-water" :class="{ active: activeKey === 'water' }" @click="activeKey = 'water'">
              <div class="node-icon">💧</div>
              <div class="node-title">水源</div>
              <div class="node-text">短缺与利用</div>
            </div>

            <div class="diagram-node node-agri" :class="{ active: activeKey === 'agriculture' }" @click="activeKey = 'agriculture'">
              <div class="node-icon">🌾</div>
              <div class="node-title">农业</div>
              <div class="node-text">依水而生</div>
            </div>

            <div class="diagram-node node-culture" :class="{ active: activeKey === 'culture' }" @click="activeKey = 'culture'">
              <div class="node-icon">🕌</div>
              <div class="node-title">文化</div>
              <div class="node-text">多元交汇</div>
            </div>

            <div class="diagram-node node-sustain" :class="{ active: activeKey === 'sustainable' }" @click="activeKey = 'sustainable'">
              <div class="node-icon">🌿</div>
              <div class="node-title">发展</div>
              <div class="node-text">多元转型</div>
            </div>

            <div class="diagram-node node-hotspot" :class="{ active: activeKey === 'hotspot' }" @click="activeKey = 'hotspot'">
              <div class="node-icon">⚠</div>
              <div class="node-title">热点</div>
              <div class="node-text">世界焦点</div>
            </div>
          </div>

          <div class="active-detail">
            <div class="active-detail-title">
              {{ activeSummary?.title }}
            </div>
            <div class="active-detail-desc">
              {{ activeSummary?.detail }}
            </div>
            <div class="active-detail-key"><strong>关键词：</strong>{{ activeSummary?.keywords }}</div>
          </div>

          <div class="final-conclusion">
            <div class="final-title">最终归纳</div>

            <div class="final-grid">
              <div class="final-item">
                <div class="final-label">自然基础</div>
                <div class="final-value">干旱</div>
              </div>

              <div class="final-item">
                <div class="final-label">资源优势</div>
                <div class="final-value">石油</div>
              </div>

              <div class="final-item">
                <div class="final-label">发展限制</div>
                <div class="final-value">水源</div>
              </div>

              <div class="final-item">
                <div class="final-label">区域特色</div>
                <div class="final-value">多元</div>
              </div>

              <div class="final-item">
                <div class="final-label">世界影响</div>
                <div class="final-value">热点</div>
              </div>

              <div class="final-item">
                <div class="final-label">未来方向</div>
                <div class="final-value">可持续</div>
              </div>
            </div>
          </div>

          <div class="map-tip">点击右侧节点，可切换对应章节总结</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

defineProps<{
  current: {
    title: string
    desc: string
    index: number
  }
}>()

type SummaryItem = {
  key: string
  index: string
  title: string
  short: string
  detail: string
  keywords: string
}

const activeKey = ref('position')

const summaryList: SummaryItem[] = [
  {
    key: 'position',
    index: '01',
    title: '地理位置',
    short: '两洋三洲五海之地',
    detail: '西亚地处亚洲西南部，是亚洲、欧洲和非洲的交会地带，通过红海、苏伊士运河、地中海等方向联系印度洋和大西洋。',
    keywords: '两洋、三洲、五海、霍尔木兹海峡、苏伊士运河',
  },
  {
    key: 'compose',
    index: '02',
    title: '区域组成',
    short: '多国交汇的区域',
    detail: '西亚由小亚细亚、东地中海、两河流域、波斯湾沿岸、阿拉伯半岛、伊朗高原等多个板块组成，国家和地区众多。',
    keywords: '土耳其、伊朗、阿拉伯半岛、波斯湾沿岸、黎凡特',
  },
  {
    key: 'terrain',
    index: '03',
    title: '地形与自然环境',
    short: '干旱的高原大陆',
    detail: '西亚以高原、山地和荒漠为主，气候干旱、降水稀少，河流有限，水资源空间分布不均。',
    keywords: '高原、山地、荒漠、干旱、两河流域',
  },
  {
    key: 'oil',
    index: '04',
    title: '世界石油宝库',
    short: '黑色金子集中分布',
    detail: '波斯湾及其沿岸地区是世界重要石油产区，石油储量大、出口量大，对全球能源供应具有重要影响。',
    keywords: '波斯湾、石油、沙特、伊朗、伊拉克、霍尔木兹海峡',
  },
  {
    key: 'water',
    index: '05',
    title: '水资源危机',
    short: '比石油更珍贵的水',
    detail: '西亚大部分地区干旱少雨，水资源短缺明显，主要依靠河流、地下水、绿洲和海水淡化等方式缓解用水压力。',
    keywords: '水资源短缺、海水淡化、地下水、绿洲、节水',
  },
  {
    key: 'agriculture',
    index: '06',
    title: '农业类型',
    short: '沙漠中的生计',
    detail: '西亚农业受水源制约明显，主要分布在河谷、绿洲和沿海较湿润地区，形成灌溉农业、绿洲农业、地中海农业和畜牧业。',
    keywords: '灌溉农业、绿洲农业、地中海农业、高原畜牧业',
  },
  {
    key: 'culture',
    index: '07',
    title: '多元文化与宗教',
    short: '文明交汇之地',
    detail: '西亚民族、语言和宗教多元，是伊斯兰教、基督教、犹太教的重要发源地或圣地所在区域，历史文化影响深远。',
    keywords: '伊斯兰教、基督教、犹太教、耶路撒冷、麦加',
  },
  {
    key: 'sustainable',
    index: '08',
    title: '可持续发展',
    short: '从石油依赖到多元转型',
    detail: '西亚需要在石油经济基础上发展多元产业，同时推进节水农业、海水淡化、新能源开发和生态环境保护。',
    keywords: '多元经济、节水农业、太阳能、海水淡化、生态保护',
  },
  {
    key: 'hotspot',
    index: '09',
    title: '长期热点原因',
    short: '世界关注的焦点地区',
    detail: '西亚长期受世界关注，是因为战略位置重要、石油资源丰富、交通咽喉集中、水资源短缺、民族宗教复杂和外部力量关注。',
    keywords: '战略位置、石油、交通咽喉、水源、宗教民族、外部关注',
  },
]

const activeSummary = computed(() => {
  return summaryList.find(item => item.key === activeKey.value) || summaryList[0]
})
</script>

<style scoped lang="scss">
.summary-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.summary-header {
  margin-bottom: 32px;
}

.summary-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.summary-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.summary-content-right {
  width: 61%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  position: relative;
}

.summary-card {
  border-radius: 8px;
  border: 1px solid #dbeafe;
  padding: 14px;
  background: #eff6ff;
}

.summary-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #1e3a8a;
}

.iconfont {
  margin-right: 8px;
  color: #1e3a8a;
}

.summary-card-01 {
  background: #eff6ff;
  border-color: #dbeafe;
}

.summary-card-02 {
  background: #f0fdf4;
  border-color: #bbf7d0;
}

.summary-card-02 .summary-card-header,
.summary-card-02 .iconfont {
  color: #047857;
}

.summary-card-03 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.summary-card-03 .summary-card-header,
.summary-card-03 .iconfont {
  color: #9a3412;
}

.summary-card-04 {
  background: #fefce8;
  border-color: #fde68a;
}

.summary-card-04 .summary-card-header,
.summary-card-04 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.summary-card p {
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

.summary-chain {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.chain-item {
  display: flex;
  gap: 10px;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 8px 10px;
  border: 1px solid #bbf7d0;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
}

.chain-item:hover {
  transform: translateX(3px);
  box-shadow: 0 2px 8px rgba(15, 39, 72, 0.12);
}

.chain-item.active {
  border-color: #10b981;
  background: #ecfdf5;
}

.chain-index {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #10b981;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.chain-title {
  font-weight: bold;
  color: #065f46;
  margin-bottom: 2px;
}

.chain-desc {
  font-size: 12px;
  color: #475569;
}

.method-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid #f97316;
  margin-bottom: 8px;
}

.method-item:last-child {
  margin-bottom: 0;
}

.method-title {
  font-weight: bold;
  color: #9a3412;
  margin-bottom: 4px;
}

.method-desc {
  font-size: 13px;
  color: #444;
  line-height: 1.45;
}

.answer-box {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border-left: 4px solid #f59e0b;
}

.answer-title {
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

.summary-board {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 18px;
  background:
    radial-gradient(circle at 50% 45%, rgba(59, 130, 246, 0.12), transparent 28%), linear-gradient(135deg, #eef6ff 0%, #f8fafc 48%, #fff7ed 100%);
  overflow: hidden;
  overflow-y: auto;
  overflow-x: hidden;
}

.board-title {
  position: relative;
  z-index: 2;
  font-weight: bold;
  font-size: 18px;
  color: #0f2748;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.86);
  border-radius: 8px;
  border-left: 4px solid #2563eb;
  box-shadow: 0 2px 8px rgba(15, 39, 72, 0.12);
}

.core-diagram {
  position: relative;
  height: 54%;
  min-height: 340px;
  margin-top: 16px;
  border-radius: 12px;
  background:
    linear-gradient(rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.78)),
    repeating-linear-gradient(45deg, rgba(30, 58, 138, 0.04) 0, rgba(30, 58, 138, 0.04) 8px, transparent 8px, transparent 16px);
  border: 1px solid rgba(15, 39, 72, 0.08);
  overflow: hidden;
}

.center-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 132px;
  height: 132px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: linear-gradient(135deg, #1e3a8a, #2563eb);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 10px 24px rgba(37, 99, 235, 0.28),
    inset 0 -10px 18px rgba(0, 0, 0, 0.12);
  z-index: 3;
}

.core-title {
  font-size: 28px;
  font-weight: bold;
}

.core-subtitle {
  font-size: 13px;
  opacity: 0.9;
  margin-top: 4px;
}

.diagram-node {
  position: absolute;
  width: 130px;
  min-height: 78px;
  padding: 8px 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.94);
  border: 2px solid rgba(148, 163, 184, 0.45);
  box-shadow: 0 2px 8px rgba(15, 39, 72, 0.12);
  cursor: pointer;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
  z-index: 4;
}

.diagram-node:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 18px rgba(15, 39, 72, 0.18);
}

.diagram-node.active {
  border-color: var(--primary-color);
  box-shadow: 0 8px 18px rgba(239, 68, 68, 0.22);
  z-index: 999;
}

.node-icon {
  font-size: 22px;
  margin-bottom: 3px;
}

.node-title {
  font-weight: bold;
  color: #0f2748;
  margin-bottom: 2px;
}

.node-text {
  font-size: 12px;
  color: #475569;
}

.node-position {
  left: 8%;
  top: 10%;
}

.node-nature {
  left: 42%;
  top: 5%;
}

.node-oil {
  right: 8%;
  top: 10%;
}

.node-water {
  right: 5%;
  top: 42%;
}

.node-agri {
  right: 12%;
  bottom: 10%;
}

.node-culture {
  left: 42%;
  bottom: 5%;
}

.node-sustain {
  left: 8%;
  bottom: 10%;
}

.node-hotspot {
  left: 5%;
  top: 42%;
}

.active-detail {
  margin-top: 14px;
  padding: 12px 14px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.92);
  border-left: 5px solid #ef4444;
  box-shadow: 0 2px 8px rgba(15, 39, 72, 0.12);
}

.active-detail-title {
  font-weight: bold;
  font-size: 16px;
  color: #991b1b;
  margin-bottom: 6px;
}

.active-detail-desc {
  color: #374151;
  line-height: 1.6;
  font-size: 13px;
  margin-bottom: 6px;
}

.active-detail-key {
  color: #0f2748;
  font-size: 13px;
  background: #f8fafc;
  padding: 6px 8px;
  border-radius: 6px;
}

.active-detail-key strong {
  color: #b45309;
}

.final-conclusion {
  margin-top: 14px;
  padding: 12px;
  background: rgba(15, 39, 72, 0.88);
  border-radius: 10px;
  color: #fff;
}

.final-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.final-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.final-item {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 8px;
  text-align: center;
}

.final-label {
  font-size: 12px;
  opacity: 0.82;
  margin-bottom: 4px;
}

.final-value {
  font-size: 16px;
  font-weight: bold;
}

.map-tip {
  display: inline-flex;
  margin-top: 12px;
  background: rgba(255, 255, 255, 0.92);
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  color: #666;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}
</style>
