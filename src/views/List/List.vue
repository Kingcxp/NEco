<script lang="ts" setup>
// TODO: add server list
import { onMounted, ref } from 'vue';
import { getServerList, type ServerItem } from '../../api/serverlist';
import ListItem from './ListItem.vue';

const serverList = ref<ServerItem[]>([]);

onMounted(() => {
    getServerList().then((res) => {
        serverList.value.splice(0, serverList.value.length, ...res)
    })
})
</script>

<template>
    <div class="main-area">
        <div class="list-area">
            <ListItem v-for="server in serverList" :key="server.name" :server="server"/>
        </div>
    </div>
</template>

<style lang="css" scoped>
.list-area {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    box-sizing: border-box;
}
</style>