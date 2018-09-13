import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Login/home'
import homePage from '@/components/home/homePage'
import film from '@/components/home/film/film'
import picture from '@/components/home/picture/picture'

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
      component: homePage,
      children:[
        {
          path:'film',
          name:'film',
          component: film,
        },
        {
          path:'pic',
          name:'pic',
          component: picture,
        }
      ]
    }
  ]
})
