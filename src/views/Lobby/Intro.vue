<script lang="ts" setup>
import { GetIntroList, IntroInfoItem } from '@/api/introlist';
import { onMounted, ref } from 'vue';
import IntroItem from './IntroItem.vue';

const intros = ref<IntroInfoItem[]>([]);

onMounted(async()=>{
    let result = await GetIntroList();
    intros.value.splice(0, intros.value.length,...result);
})
</script>

<template>
    <div class="intro-area">
        <h1>我们的足迹</h1>
        <IntroItem v-for="(intro, index) in intros" :key="index" :intro="intro" :right="index % 2 == 1"/>
    </div>
</template>

<style lang="css" scoped>
.intro-area{
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 2rem;
    
    box-sizing: content-box;
}
</style>