<script lang="ts" setup>
import loadImageAsset from '@/util/loadimage'
import Intro from './IntroView.vue'
</script>

<template>
  <div>
    <div class="main-area">
      <div class="right-area">
        <div class="right-content">
          <div>
            <img :src="loadImageAsset('nmo-logo-large.png')" alt="LOGO" style="height: 5rem" />
          </div>
          <p class="description">南京大学Minecraft协会</p>
          <span
            >在Minecraft基础上，发展建筑，计算机，软件，电路，建模等方面的知识水平，充分利用同学们的兴趣，形成具有南大特色的mc社区文化，进一步提升学校影响力。</span
          >
        </div>
      </div>
    </div>
    <Intro />
  </div>
</template>

<style lang="css" scoped>
.main-area {
  width: 100%;
  height: 40rem;
  display: flex;
  background-image: url('/background/main-background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
}

.main-area::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5rem;
  background: linear-gradient(to bottom, transparent 0%, var(--background-color) 100%);
}

.right-area {
  width: 50%;
  height: 100%;
  margin-left: auto;
  min-width: 25rem;
  display: flex;
  align-items: center;
}

.right-content {
  display: flex;
  flex-direction: column;
  /* border-left: 4px solid #fff; */
  padding-left: 10%;
  max-width: 25rem;
  padding-right: 1rem;
  animation: fade-in-right 1s ease-out forwards;
}

.right-content p {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
