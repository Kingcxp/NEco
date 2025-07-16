<script lang="ts" setup>
import loadImageAsset from '@/util/loadimage'
import QQIcon from './icons/QQIcon.vue'
import BilibiliIcon from './icons/BilibiliIcon.vue'
import GithubIcon from './icons/GithubIcon.vue'

const slogans: Array<string> = [
  `煤炭 (Coal) 出自《Minecraft》，是可再生资源，收获来自 煤矿石 以及击杀凋灵骷髅有1/3的概率获得1个，可以使用任何 镐 来挖取煤矿石。`,
  `都找着对象了，还愁考不上南京大学？`,
  `都考上南京大学了还愁找不到女朋友？`,
  `哼哼哼，啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊`,
  `我是奶油泡芙 嘿嘿 —— lts098`,
  `爱他 就追随他的脚步 —— lts098`,
  `蒸馍，你不服气？ —— AintCecily`,
  `我是你爹 —— Aircraft`,
  `我觉得穿裙子跑步还挺有意思的 —— Cyber1024`,
  `可以 —— Aircraft（可以）`,
  `天天看个锤子学妹学姐，二次元老婆不香嘛 —— Aircraft`
]

const slogan = slogans[Math.floor(Math.random() * slogans.length)] ?? slogans[0]
</script>

<template>
  <div class="footer-area">
    <div class="footer-description">
      <img :src="loadImageAsset('nmo-logo-large.png')" alt="logo" style="width: 5rem;" />
      <p>南京大学Minecraft协会</p>
      <text style="margin-bottom: .5rem;">{{ slogan }}</text>
      <span id="copyright"> © 2025 - All rights reserved NMO </span>
      <span id="declaration">
        NOT AN OFFICIAL MINECRAFT ORGANIZATION <br />
        NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT
      </span>
    </div>

    <div class="footer-links">
      <div class="link-block">
        <p>外部链接</p>
        <a class="link-item" href="https://qm.qq.com/q/J9i2nFAFkS">
          <QQIcon class="link-icon" />
          QQ交流群
        </a>
        <a class="link-item" href="https://space.bilibili.com/646892894">
          <BilibiliIcon class="link-icon" />
          bilibili
        </a>
        <a class="link-item" href="https://github.com/EntropyGenerator/neco">
          <GithubIcon class="link-icon" />
          Github源码
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.footer-area {
  padding: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.footer-description {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  max-width: 30rem;
}

.footer-description p {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.footer-description #copyright {
  font-size: 0.8rem;
  color: gray;
}

.footer-description #declaration {
  font-size: 0.5rem;
  color: gray;
}

.footer-links {
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.footer-links p {
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.footer-links a {
  margin-bottom: 0.2rem;
}

.link-block {
  display: flex;
  flex-direction: column;
  justify-content: left;
}

.link-item {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.link-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 4px;
}
</style>
