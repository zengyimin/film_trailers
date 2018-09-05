import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Login/home'
import homePage from '@/components/home/homePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: home
    },
    {
      path: '/home',
      name: 'homePage',
      component: homePage
    }
  ]
})
