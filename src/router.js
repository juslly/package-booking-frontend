import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import PackageInStorage from './components/PackageInStorage.vue'
import Order from './components/Order.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'PackageInStorage',
      component: PackageInStorage
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    }
  ]
})
