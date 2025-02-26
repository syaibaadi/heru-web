import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterPage from '../views/RegisterView.vue'; 

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
    path: '/kendaraan',
    name: 'kendaraan',
    component: () => import(/* webpackChunkName: "about" */ '../views/KendaraanView.vue')
  },
  {
    path: '/checkout/:id',
    name: 'checkout',
    component: () => import(/* webpackChunkName: "checkout" */ '../views/CheckoutView.vue'),
    props: true,
    beforeEnter: (to, from, next) => {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (!loggedInUser) {
        // Jika user belum login, arahkan ke halaman login
        next({ name: 'login' });
      } else {
        next();
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
