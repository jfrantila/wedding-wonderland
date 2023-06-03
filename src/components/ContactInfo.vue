<template>
    <div :class="['abstract-div', 'contact-info-div', isFooter ? 'footer' : null, isOnHome ? 'mt-2' : 'mt-4',]"
        id="contact-info">
        <h2>Bio</h2>
        <p>
            Hello! I am Milla, a wedding and family photographer located in Helsinki, Finland. <br />
            I love real emotions and pure bright colours. <br />
            Helping happy couples document their special day since 2010. <br />
            Let’s make magic happen together. <br />
            My services are available in English, Finnish and Russian languages.</p>
        <h2 class="contact-me">Contact Me</h2>
        <p>Email: millasini.foto@gmail.com</p>
    </div>
</template>

<script>
export default {
    name: 'ContantInfo',
    props: {
        isOnHome: Boolean
    },
    methods: {
        isFooter() {
            return this.$store.state.background
        }
    }
}
</script>

<style scoped>
.contact-info-div {
    font-size: 1.2rem;
}

.contact-me {
    padding-top: 1rem;
}
</style>