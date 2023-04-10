<script>
import Navigation from './components/Navigation.vue'
import { useBackgroundImage } from './stores/background'
import Footer from './components/Footer.vue'
import Services from './components/Services.vue'
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: { Home, Navigation, Footer, Services },
  data() {
    return { blurBackground: true }
  },
  methods: {
    scrollTo(endpointId) {
      window.document.querySelector(`#${endpointId}`).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' })
    }
  },
}
</script>

<template>
  <Navigation @scroll-to="(endpointId) => scrollTo(endpointId)" />
  <Home />
  <Services />
  <Footer />
</template>

<style>
.wrapper {
  background-image: url('./assets/7.jpg');
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
  background-image: url('./assets/vintage-wallpaper-background.jpg');
  width: 100%;
  height: 100%;
  padding: 2rem;
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
