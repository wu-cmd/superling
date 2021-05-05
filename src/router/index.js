import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/cart/Cart.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue')
  },
  {
    path: '/catergory',
    name: 'Catergory',
    component: () => import(/* webpackChunkName: "about" */ '../views/catergory/Catergory.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/profile/Profile.vue')
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/detail/Detail.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
