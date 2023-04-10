<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import Services from './components/Services.vue'
import Home from './components/Home.vue'
import ContactInfo from './components/ContactInfo.vue'

export default {
  name: 'App',
  components: { Home, Navigation, Footer, Services, ContactInfo },
  data() {
    return { darkNavMenu: false }
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
  <ContactInfo />
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
