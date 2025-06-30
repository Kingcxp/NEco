<script lang="ts" setup>
import nmoLogo from "../../assets/nmo.png";
// TODO: add lobby display
</script>

<template>
    <div class="main-area">
        <div class="left-area">
            
        </div>
        <div class="right-area">
            <div class="right-content">
                <img :src="nmoLogo" alt="LOGO" style="height: 5rem; width: auto;"/>
                <p class="description">Ecosystem</p>
            </div>
        </div>
    </div>
</template>

<style lang="css">
.main-area {
    width: 100%;
    height: 100%;
    display: flex;
}

.left-area {
    width: 50%;
}

.right-area {
    width: 50%;
    height: 95vh;
    display: flex;
    align-items: center;
}

.right-content {
    display: flex;
    flex-direction: column;
    border-left: 4px solid #fff;
    padding-left: 2rem;
}

.description {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    margin-top: 0;
    margin-bottom: 0;
}
</style>