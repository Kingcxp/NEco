<script lang="ts" setup>
import { ServerItem } from '../../api/serverlist';

const props = defineProps({
    server: {
        type: ServerItem,
        required: true
    }
})
</script>

<template>
    <div class="item-border">
        <img :src="props.server.icon" alt="icon" width="64" height="64" style="border: 1px solid grey;">
        <div class="item-info">
            <span style="font-weight: bolder;">{{props.server.name}}</span>
            <span>{{props.server.description}}</span>
        </div>
        <div>
            
        </div>
        
    </div>
</template>

<style lang="css" scoped>
.item-border {
    width: 60%;
    border: 2px solid gray;
    padding: 4px;
    display: flex;
    flex-direction: row;
}

.item-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin-left: 1rem;
}
</style>