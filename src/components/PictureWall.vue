<template>
    <div class="container-fluid pb-4">
        <div class="row picturerow">
            <div class="col-4 pt-5">
                <img src="../assets/3.jpg" />
            </div>
            <div class="col-8">
                <img src="../assets/14.jpg" />
            </div>
        </div>
        <div class="row picturerow">
            <div class="col-6">
                <img src="../assets/6.jpg" />
            </div>
            <div class="col-6">
                <img class="pb-1 pt-3" src="../assets/11.jpg" />
                <img src="../assets/4.jpg" />
            </div>
        </div>
        <div class="row picturerow">
            <div class="col-5">
                <img class="pt-4" src="../assets/8.jpg" />
            </div>
            <div class="col">
                <img src="../assets/7.jpg" />
            </div>
        </div>
        <div class="row picturerow">
            <div class="col pe-0">
                <img src="../assets/15.jpg" />
            </div>
            <div class="col">
                <img src="../assets/17.jpg" />
            </div>
            <div class="col ps-0">
                <img src="../assets/16.jpg" />
            </div>
        </div>
        <div class="row picturerow">
            <div class="col">
                <img src="../assets/18.jpg" />
            </div>
            <div class="col">
                <img src="../assets/21.jpg" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PictureWall',
}
</script>

<style scoped>
.picturerow {
    min-height: min-content;
    padding-bottom: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;

}

@media screen and (max-width: 32rem) {
    .picturerow {
        margin-left: 0;
        margin-right: 0;
    }
}

img {
    width: 100%;
    overflow: hidden;
}
</style>