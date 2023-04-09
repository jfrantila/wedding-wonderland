<script>
import Navigation from './components/Navigation.vue'
import { useBackgroundImage } from './stores/background'
import Footer from './components/Footer.vue'
import Services from './views/Services.vue'

export default {
  name: 'App',
  components: { Navigation, Footer, Services },
  data() {
    return { blurBackground: true }
  },
  methods: {
    scrollToServices() {
      window.document.querySelector('#services').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
    }
  },
  computed: {
    background() {
      this.blurBackground = useBackgroundImage().$state.backgroundImg
      return useBackgroundImage().$state.backgroundImg ? 'wrapper' : 'beige-wrapper'
    },
    blurredBackground() {
      return useBackgroundImage().$state.backgroundImg ? 'blur-image' : undefined
    }
  }
}
</script>

<template>
  <div v-if="blurBackground" class="blur-image"></div>
  <div :class="background">
    <Navigation @to-services="scrollToServices" />
    <!-- Views -->
    <div :class="blurBackground ? 'abstract-div' : null">
      <router-view />
    </div>
  </div>
  <Services />
  <Footer />
</template>

<style>
.wrapper {
  background-image: url('./images/7.jpg');
  position: absolute;
  height: 85%;
  width: 90%;
  top: 8%;
  left: 5%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.beige-wrapper {
  background-image: url('./images/vintage-wallpaper-background.jpg');
  width: 100%;
  height: 100%;
  padding: 2rem;
}

.blur-image {
  background-image: url('./images/7.jpg');
  filter: blur(100px);
  /* Safari 6.0 - 9.0 */
  -webkit-filter: blur(5px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.abstract-div {
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 0;
}

.basic-div {
  padding-top: 2rem;
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>
