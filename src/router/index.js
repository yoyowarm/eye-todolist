import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import defaultLayout from '../layouts/default.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/lists',
    component: defaultLayout,
    children: [
      {
        name: 'Lists',
        path: '',
        component: () => import('../views/Lists.vue')
      }
    ]

  },
  {
    path: '/add-details',
    component: defaultLayout,
    children: [
      {
        name: 'Add',
        path: '',
        component: () => import('../views/Detail.vue')
      }
    ]
  },
  {
    path: '/edit-details/:id',
    component: defaultLayout,
    children: [
      {
        name: 'Edit',
        path: '',
        component: () => import('../views/Detail.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
