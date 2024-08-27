import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import BouclesTestExo from '../components/Boucles-test-exo.vue'
import BouclesTest from '../components/Boucles-test.vue'


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