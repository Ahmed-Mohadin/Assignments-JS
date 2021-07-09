import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Checkout from '../views/Checkout.vue'
import About from '../views/About.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import ProductInfo from '../views/ProductInfo.vue'
import UserSettings from '../views/UserSettings.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/user',
    name: 'UserSettings',
    component: UserSettings,
    meta: { authorize: true }
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/ProductInfo',
    name: 'ProductInfo',
    component: ProductInfo
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  const { authorize } = to.meta
  const loggedIn = store.getters.loggedIn
  // console.log(store.getters.loggedIn)

  if(authorize) {
    if(!loggedIn) {
      next({ path: '/login', query: { redirect: to.fullPath } })
    } else {
      next()
    }
  }
  next()
})

export default router