import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Reactivity from '../views/Reactivity.vue'
import Plugins from '../views/Plugins.vue'
import Nuxt from '../views/Nuxt.vue'
import Github from '../views/Github.vue'
import VueLeren from '../views/VueLeren.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reactivity',
    name: 'Reactivity',
    component: Reactivity
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: Plugins
  },
  {
    path: '/nuxt',
    name: 'Nuxt',
    component: Nuxt
  },
  {
    path: '/github',
    name: 'Github',
    component: Github
  },
  {
    path: '/vue-leren',
    name: 'VueLeren',
    component: VueLeren
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
