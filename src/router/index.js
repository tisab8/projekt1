import Vue from 'vue'
import VueRouter from 'vue-router'
import Home1 from '../views/Home1.vue'
import Browse from '@/components/Browse.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home1',
    component: Home1
  },
  {
    path: '/Browse',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})


export default router

