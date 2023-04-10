<template>
    <div :class="footerClass">
        <p>Milla Sini wedding and family photographer from Finland</p>
        <p>I am here to create sweet colorful memories of your special day.</p>
    </div>
</template>

<script>
import { useBackgroundImage } from '../stores/background';
export default {
    name: 'Footer',
    computed: {
        footerClass() {
            return useBackgroundImage().$state.backgroundImg ? 'footer' : 'footer-other'
        }
    }
}
</script>

<style scoped>
div {
    font-family: romantic;
    font-size: 30px;
    line-height: 0.8;
    padding-bottom: 1rem;
    padding-top: 4rem;
    margin-top: 3rem;
    width: 100%;
    color: rgb(49, 40, 35);
}

.footer {
    position: relative;
    bottom: 0;
}

.footer-other {
    bottom: 0;
    position: relative;
}
</style>
