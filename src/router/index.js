import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ContactInfo from '../components/ContactInfo.vue'
import Services from '../components/Services.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact-info',
      name: 'ContactInfo',
      component: ContactInfo
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    }
  ]
})

export default router