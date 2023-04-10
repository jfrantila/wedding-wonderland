<template>
    <div class="blur-image"></div>
    <div class="wrapper">
        <div class="container home-div" id="home">
            <h1>WEDDING WONDERLAND</h1>
            <i>Wedding photography</i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
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
    height: 100vh;
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
    padding-top: 1.5rem;
    color: rgb(49, 40, 35);
}

h1 {
    font-size: 50px;
}
</style>