<script lang="ts" setup>
const slogan = `煤炭 (Coal) 出自《Minecraft》，是可再生资源，收获来自 煤矿石 以及击杀凋灵骷髅有1/3的概率获得1个，可以使用任何 镐 来挖取煤矿石。`
</script>

<template>
    <div class="footer-area">
        <div class="footer-description">
            <img src="@/assets/nmo.png" alt="logo" style="width: 5rem;">
            <p>南京大学Minecraft协会</p>
            <span>{{ slogan }}</span>
            <span id="copyright">
                © 2025 - All rights reserved NMO
            </span>
            <span id="declaration">
                NOT AN OFFICIAL MINECRAFT ORGANIZATION <br>
                NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT 
            </span>
        </div>

        <div class="footer-links">
            <div class="link-block">
                <p>外部链接</p>
                <a href="https://qm.qq.com/q/J9i2nFAFkS">QQ交流群</a>
                <a href="https://space.bilibili.com/646892894">bilibili</a>
                <a href="https://github.com/EntropyGenerator/neco">Github源码</a>
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
</style>