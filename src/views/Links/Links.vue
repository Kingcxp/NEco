<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getLinkList, LinkInfoItem } from '../../api/linklist';
import LinkItem from './LinkItem.vue';

const linkList = ref<LinkInfoItem[]>([])
onMounted(async () => {
    getLinkList().then((res) => {
        linkList.value.splice(0, linkList.value.length, ...res)
    })
})
</script>

<template>
    <div class="main-area">
        <div class="links-area">
            <LinkItem v-for="item in linkList" :key="item.name" :link="item"/>
        </div>
    </div>

</template>

<style lang="css" scoped>
.links-area {
    padding-top: 5rem;
    padding-bottom: 5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    background-image: url('/background/links-background.png');
    background-size: cover;

    position: relative;
}

.links-area::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5rem;
    background: linear-gradient(to bottom, transparent 0%, var(--background-color) 100%);
}
</style>