import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Home1 from '@/views/Home1.vue'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Browse from '@/components/Browse.vue'
import ChooseInterests from '@/components/ChooseInterests.vue'



Vue.use(VueRouter)

Vue.use(Buefy)
Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    name: 'Home1',
    component: Home1
  },
  {
    path: '/ChooseInterests',
    name: 'ChooseInterests',
    component: ChooseInterests
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Browse',
    name: 'Browse',
    component: Browse
  },
  
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


