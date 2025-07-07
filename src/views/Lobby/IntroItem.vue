<script lang="ts" setup>
import { IntroInfoItem } from '@/api/introlist';

const props = defineProps({
    intro: {
        type: Object as () => IntroInfoItem,
        required: true
    },
    right: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="intro-box">
        <div :class="!right?'intro-right':'intro-left'">
            <img :src="props.intro.image" alt="image" class="intro-image">
            <div class="intro-text">
                <p>{{ props.intro.title }}</p>
                <span>{{ props.intro.description }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.intro-box {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 3rem;
}

.intro-right {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: space-around;
}

.intro-left {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

.intro-text {
    max-width: 30rem;
    padding: 1rem;
}

.intro-text p {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

.intro-image {
    max-height: 20rem;
    box-shadow: 4px 4px rgba(0, 0, 0, 0.7);
}
</style>