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
        <h2 class="contact-me">Contact Me</h2>
        <p>Email: milla.sinitsyna@gmail.com</p>
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
    font-size: 1.2rem;
    padding-top: 1rem;
    height: max-content;
}

.contact-me {
    padding-top: 2rem;
}
</style>