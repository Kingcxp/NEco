<script lang="ts" setup>
import { LinkInfoItem } from '../../api/linklist';


const props = defineProps({
    link: {
        type: LinkInfoItem,
        required: true
    }
}
)
</script>

<template>
    <div class="link-card" :style="{ backgroundImage: `url(${props.link.image})`}">
        <div class="link-content">
            <p>{{ link.name }}</p>
            <span>{{ link.description }}</span>
        </div>
    </div>
</template>

<style lang="css" scoped>
.link-card {
    margin: 1rem;
    width: 15rem;
    height: 15rem;
    border-top: 2px solid var(--minecraft-green-light);
    border-left: 2px solid var(--minecraft-green);
    border-right: 2px solid var(--minecraft-green);
    border-bottom: 2px solid var(--minecraft-green-dark);
    display: flex;
    flex-direction: column;
}
.link-content {
    margin-top: auto;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
}
.link-content p {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0.5rem;

}
</style>