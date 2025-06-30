<script lang="ts" setup>
import { computed, ref } from 'vue';


const navItems = ref<string[]>(["主页","列表","新闻","导航","关于"])
const activeIndex = ref<number>(0)

const setIndex = (index:number) => {
    activeIndex.value = index
}

const sliderStyle = computed(() => {
  return {
    width: `${100 / navItems.value.length}%`,
    transform: `translateX(${activeIndex.value * 100}%)`,
    transition: 'transform 0.5s ease'
  };
});
</script>

<template>
    <div class="nav-container">
        <nav class="nav-bar">
            <div v-for="(item,index) in navItems"
                :key="index"
                class="nav-item"
                @click="setIndex(index)"
            >
                {{ item }}
            </div>

            <div class="slider" :style="sliderStyle">
                <div class="slider-box"></div>
            </div>
        </nav>
    </div>
</template>

<style lang="css" scoped>
.nav-container {
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    justify-content: center;
}

.nav-bar {
    display: flex;
    border-radius: 0;
    background-color: rgba(red, green, blue, 0.8);
    border: 2px solid gray;
    position: relative;
}


.nav-item {
    position: relative;
    flex: 1;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    z-index: 1;
    transition: color 0.3s ease;
}

.slider {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.1); */
    z-index: 0;
    box-sizing: border-box;
    padding: 4px;
}
.slider-box{
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 0;
    /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); */
    border: 2px solid gray;
    height: 100%;
    width: 100%;
}
</style>