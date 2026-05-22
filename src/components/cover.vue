<template>
  <div class="cover-container">
    <p class="cover-category">初中地理 · 人文地理</p>
    <h1 class="cover-title">西亚</h1>
    <p class="cover-desc">从区域位置、地形气候到人口城市、能源交通，完整认识这片世界关注的关键区域</p>
    <div class="cover-tag">
      <span>区域位置</span><span>城市转型</span><span>地形气候</span><span>民族宗教</span><span>石油经济</span><span>水资源</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.cover-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(https://course-code.oss-cn-shanghai.aliyuncs.com/image/%E8%A5%BF%E4%BA%9A%E5%B0%81%E9%9D%A2.png);

  .cover-category {
    font-size: clamp(11px, 0.9vw, 14px);
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 32px;
    color: #fff;
  }

  .cover-title {
    font-size: clamp(42px, 5.4vw, 74px);
    line-height: 0.96;
    letter-spacing: 0;
    max-width: 820px;
    color: #fff;
    margin-bottom: 16px;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .cover-desc {
    font-size: clamp(17px, 1.55vw, 24px);
    line-height: 1.42;
    color: #fff;
    max-width: 920px;
    margin-bottom: 16px;
  }

  .cover-tag {
    display: inline-flex;
    gap: 10px;
    flex-wrap: wrap;
    > span {
      border: 1px solid rgba(255, 255, 255, 0.24);
      border-radius: 999px;
      padding: 8px 12px;
      font-size: 15px;
      font-weight: 800;
      color: #fff;
      background: rgba(255, 255, 255, 0.08);
    }
  }
}
</style>
