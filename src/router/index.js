import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Capitals from '../views/Capitals.vue'
import Pays from '../views/Pays.vue'
import Count from '../components/Count.vue'
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
    },
    {
      path: '/about',
      component: About,
      name: "test"
    },
    {
      path: '/count/:number',
      component: Count
    },{
      path: '/pays',
      component: Pays
    }
  ]
})

export default router