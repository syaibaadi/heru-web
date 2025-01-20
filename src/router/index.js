import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
// import WisataView from '@/views/WisataView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/wisata',
    name: 'wisata',
    component: () => import(/* webpackChunkName: "about" */ '../views/WisataView.vue')
  },
  {
    path: '/checkout/:id',
    name: 'checkout',
    component: () => import(/* webpackChunkName: "about" */ '../views/CheckoutView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
