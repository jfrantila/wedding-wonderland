<template>
    <div :class="['contact-info-div', isOnHome ? 'pt-2' : 'pt-5 mt-4 bottom',]" id="contact-info">
        <h2 class="heading">Bio</h2>
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
    }
}
</script>

<style scoped>
.contact-info-div {
    padding-left: 1rem;
    padding-right: 1rem;
}
</style>