<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: { Home, Navigation, Footer },
  data() {
    return { darkNavMenu: false }
  },
}
</script>

<template>
  <Navigation />
  <div class="pages">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<style>
.abstract-div {
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 0;
}

.pages {
  min-height: calc(100vh - 14rem);
}
</style>
