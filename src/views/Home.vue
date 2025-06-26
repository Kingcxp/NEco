<script lang="ts" setup>
import Header from './Header.vue';
</script>

<template>
    <el-container direction="vertical" class="main-page">
        <Header />
        <router-view />
    </el-container>
</template>

<style lang="css" scoped>
.main-page{
    height: 100%;
    width: 100%;
}
</style>