<script setup lang="ts">
import NavBar from '../components/NavBar.vue';

</script>

<template>
    <el-container class="page-area">
        <router-view />
        <NavBar />
    </el-container>
</template>

<style lang="css" scoped>
.page-area {
    position: relative;
}
</style>