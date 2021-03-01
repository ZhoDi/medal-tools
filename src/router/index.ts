import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/views/layout/Layout.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Layout,
    meta:{
      title: ''
    },
    children:[
      {
        path: '/home',
        name: 'Home',
        component:Home,
        meta:{
          title: ''
        }
      },
      {
        path:'/about',
        name: 'About',
        component:About,
        meta:{
          title: ''
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
