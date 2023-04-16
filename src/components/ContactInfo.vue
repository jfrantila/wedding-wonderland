<template>
    <div class="abstract-div contact-info-div" id="contact-info">
        <h2>Bio</h2>
        <p>
            Hello! I am Milla, a wedding and family photographer located in Helsinki, Finland. <br />
            I love real emotions and pure bright colours. <br />
            Helping happy couples document their special day since 2010. <br />
            Let’s make magic happen together. <br />
            My services are available in English, Finnish and Russian languages.</p>
        <InstagramLogo />
        <h2>Contact Me</h2>
        <p>TODO: Mailing service</p>
    </div>
</template>

<script>
import InstagramLogo from './InstagramLogo.vue'
export default {
    name: 'ContantInfo',
    components: { InstagramLogo }
}
</script>

<style scoped>
.contact-info-div {
    height: 100vh;
}

h2 {
    padding-bottom: 2rem;
    padding-top: 2rem;
}
</style>