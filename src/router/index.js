import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import BouclesTestExo from '../components/Boucles-test-exo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/boucles',
      component: BouclesTest
    },
    {
      path: '/boucles-exos',
      component: BouclesTestExo
    }
  ]
})

export default router