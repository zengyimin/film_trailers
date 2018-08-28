import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Login/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: home
    }
  ]
})
