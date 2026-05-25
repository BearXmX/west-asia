<template>
  <div class="cover-container">
    <div class="cover-overlay"></div>

    <div class="cover-content">
      <div class="cover-kicker">
        <span class="kicker-dot"></span>
        初中地理 · 区域地理专题
      </div>

      <div class="cover-main">
        <div class="title-line"></div>

        <div>
          <h1 class="cover-title">西亚</h1>
          <p class="cover-subtitle">West Asia</p>
        </div>
      </div>

      <p class="cover-desc">从区域位置、地形气候到石油经济、水资源、农业生产、民族宗教与可持续发展， 完整认识这片世界关注的关键区域。</p>

      <div class="cover-tag">
        <span>区域位置</span>
        <span>地形气候</span>
        <span>石油经济</span>
        <span>水资源</span>
        <span>农业类型</span>
        <span>人口城市</span>
        <span>民族宗教</span>
        <span>可持续发展</span>
        <span>长期热点</span>
      </div>

      <div class="cover-info">
        <div class="info-card">
          <div class="info-value">两洋</div>
          <div class="info-label">沟通印度洋与大西洋方向</div>
        </div>

        <div class="info-card">
          <div class="info-value">三洲</div>
          <div class="info-label">联系亚洲、欧洲、非洲</div>
        </div>

        <div class="info-card">
          <div class="info-value">五海</div>
          <div class="info-label">海陆交通位置突出</div>
        </div>

        <div class="info-card">
          <div class="info-value">石油</div>
          <div class="info-label">波斯湾沿岸资源集中</div>
        </div>
      </div>
    </div>

    <div class="cover-bottom">
      <span>区域认知 · 综合思维 · 人地协调观</span>
      <span>Geography Courseware</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.cover-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 56px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url('https://course-code.oss-cn-shanghai.aliyuncs.com/image/%E8%A5%BF%E4%BA%9A%E5%B0%81%E9%9D%A2.png');
}

.cover-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 72% 42%, rgba(245, 158, 11, 0.18), transparent 28%),
    linear-gradient(90deg, rgba(5, 15, 32, 0.9) 0%, rgba(15, 39, 72, 0.78) 38%, rgba(15, 39, 72, 0.42) 68%, rgba(15, 39, 72, 0.18) 100%);
  z-index: 1;
}

.cover-content {
  position: relative;
  z-index: 2;
  max-width: 980px;
}

.cover-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  margin-bottom: 28px;
  border-radius: 999px;
  color: #dbeafe;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(219, 234, 254, 0.28);
  font-size: clamp(12px, 0.9vw, 15px);
  font-weight: 800;
  letter-spacing: 0.08em;
  backdrop-filter: blur(8px);
}

.kicker-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fbbf24;
  box-shadow: 0 0 12px rgba(251, 191, 36, 0.9);
}

.cover-main {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 16px;
}

.title-line {
  width: 7px;
  height: clamp(74px, 8vw, 108px);
  border-radius: 999px;
  background: linear-gradient(to bottom, #fbbf24, #f97316);
  box-shadow: 0 0 18px rgba(251, 191, 36, 0.45);
}

.cover-title {
  margin: 0;
  color: #fff;
  font-size: clamp(58px, 7vw, 104px);
  line-height: 0.92;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow:
    0 4px 18px rgba(0, 0, 0, 0.55),
    0 0 2px rgba(255, 255, 255, 0.45);
}

.cover-subtitle {
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(16px, 1.4vw, 22px);
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.cover-desc {
  max-width: 900px;
  margin: 0 0 22px;
  color: rgba(255, 255, 255, 0.92);
  font-size: clamp(17px, 1.55vw, 25px);
  line-height: 1.55;
  font-weight: 600;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
}

.cover-tag {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 860px;
  margin-bottom: 26px;

  > span {
    display: inline-flex;
    align-items: center;
    height: 34px;
    padding: 0 13px;
    border-radius: 999px;
    color: #fff;
    background: rgba(255, 255, 255, 0.13);
    border: 1px solid rgba(255, 255, 255, 0.26);
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 0.02em;
    backdrop-filter: blur(8px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  }
}

.cover-info {
  display: grid;
  grid-template-columns: repeat(4, minmax(120px, 1fr));
  gap: 12px;
  max-width: 860px;
}

.info-card {
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.13);
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
}

.info-value {
  color: #fbbf24;
  font-size: clamp(20px, 2vw, 28px);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 6px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
}

.info-label {
  color: rgba(255, 255, 255, 0.86);
  font-size: 12px;
  line-height: 1.45;
  font-weight: 600;
}

.cover-bottom {
  position: absolute;
  left: 56px;
  right: 56px;
  bottom: 28px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

@media (max-width: 980px) {
  .cover-container {
    padding: 36px;
  }

  .cover-info {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }

  .cover-bottom {
    left: 36px;
    right: 36px;
  }
}
</style>
