import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'index',
        component: () => import('../components/Index.vue')
      },
      {
        path: '/first',
        name: 'first',
        component: () => import('../components/First.vue')
      }
    ]
  })
}