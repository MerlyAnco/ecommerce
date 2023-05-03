import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../pages/LoginView.vue'
import HomeView from '../pages/HomeView.vue'
import CartView from '../pages/CartView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    beforeEnter: requireAuth
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    beforeEnter: requireAuth
  },
]

function requireAuth(to, from, next) {
  if (localStorage.getItem('user')) {
    next()
  } else {
    next({
      name: 'login'
    })
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
