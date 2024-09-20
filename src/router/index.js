import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Capitals from '../views/Capitals.vue'
import Pays from '../views/Pays.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/pays',
      component: Pays
    },
    {
      path: '/pays/:pays',
      component: Pays
    }
  ]
})

export default router