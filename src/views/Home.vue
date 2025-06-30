<script setup lang="ts">
import NavBar from '../components/NavBar.vue';

</script>

<template>
    <div class="page-area">
        <router-view />
        <NavBar />
    </div>
</template>

<style lang="css" scoped>
.page-area {
    position: relative;

}
</style>