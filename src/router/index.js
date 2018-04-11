import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routes = [
  // {
  //   path: '/',
  //   component: resolve => require(['../components/home'],resolve),
  //   meta: {
  //     title:'home'
  //   }
  // }
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

export default new Router({
  routes
})