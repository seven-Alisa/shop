import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Cart from '../pages/cart'
import Member from '../pages/member'
import Search from '../pages/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
