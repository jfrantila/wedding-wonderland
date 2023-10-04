<template>
    <div class="footer">
        <h4>Milla Sinitsyn Wedding Photography</h4>
        <p>Milla Sini wedding and family photographer from Finland. <br /> I am here to create sweet colorful memories of
            your special day.<br />millasini.foto@gmail.com</p>
        <ul class="nav">
            <li class="nav-item"><a href="https://www.facebook.com/millasini" class="nav-link pl-0"><i
                        class="fa fa-facebook fa-lg"></i></a></li>
            <li class="nav-item"><a href="https://www.instagram.com/millasini_wondermoments/" class="nav-link"><i
                        class="fa fa-instagram fa-lg"></i></a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
.nav {
    display: flex !important;
}

.footer {
    font-size: 15px;
    line-height: 1.5rem;
    padding-top: 2rem;
    color: grey;
    background: #292929;
    display: flex;
    flex-direction: column;
    align-items: center !important;
    bottom: 0;
    height: 14rem;
    width: 100vw;
}

h4 {
    font-size: 30px;
    font-family: romantic;
}

@media screen and (max-width: 32rem) {
    h4 {
        font-size: 25px;
    }

    .footer {
        font-size: 12px !important;
    }
}
</style>
