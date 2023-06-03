<template>
    <div class="blur-image"></div>
    <div class="wrapper">
        <div class="container home-div" id="home">
            <h1>WEDDING WONDERLAND</h1>
            <i>Wedding photography</i>
        </div>
    </div>
    <Services :isOnHome="true" />
    <ContactInfo :isOnHome="true" />
    <PictureWall />
</template>

<script>
import Services from './Services.vue';
import ContactInfo from './ContactInfo.vue';
import PictureWall from './PictureWall.vue'

export default {
    name: 'Home',
    components: { Services, ContactInfo, PictureWall }
}
</script>

<style scoped>
.blur-image {
    background-image: url('../assets/7.jpg');
    filter: blur(100px);
    /* Safari 6.0 - 9.0 */
    -webkit-filter: blur(5px);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
}

.wrapper {
    background-image: url('../assets/7.jpg');
    position: absolute;
    height: 85%;
    width: 90%;
    top: 8%;
    left: 5%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.home-div {
    padding-top: 2rem;
    color: rgba(49, 40, 35, 0.71);

}

@media screen and (min-width: 42rem) {
    i {
        font-size: 20px !important;
    }
}

@media screen and (max-width: 32rem) {
    h1 {
        font-size: 30px !important;
        padding-top: 1.2rem;
    }

    .wrapper {
        height: 95%;
        width: 90%;
        top: 2.5%;
        left: 5%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

}

h1 {
    font-size: 50px;
}
</style>