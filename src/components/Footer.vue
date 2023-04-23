<template>
    <div class="footer">
        <p>Milla Sini wedding and family photographer from Finland. I am here to create sweet colorful memories of your
            special day.</p>
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
.footer {
    font-family: romantic;
    font-size: 25px;
    line-height: 1.5rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    margin-top: 3rem;
    width: 100%;
    color: rgb(49, 40, 35);
}

@media screen and (max-width: 32rem) {
    .footer {
        font-size: 15px !important;
    }
}
</style>
