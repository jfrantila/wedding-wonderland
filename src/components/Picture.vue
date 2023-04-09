<template>
    <img @mouseenter="$emit('mouse-enter')" @mouseleave="$emit('mouse-leave')" class="photo-album-img" :src="getpictureUrl"
        data-bs-toggle="modal" data-bs-target="#pig-picture" />
</template>

<script>
export default {
    name: 'Picture',
    props: {
        pictureUrl: String
    },
    methods: {
        getpictureUrl() {
            return require(this.pictureUrl)
        }
    }
}
</script>

<style>
.photo-album-img {
    position: absolute;
}
</style>