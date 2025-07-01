<script setup lang="ts">
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';

</script>

<template>
    <div class="page-area">
        <router-view />
        <NavBar />
        <Footer />
    </div>
</template>

<style lang="css" scoped>
.page-area {
    position: relative;

}
</style>