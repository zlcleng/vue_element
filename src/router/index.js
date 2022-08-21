import { createRouter, createWebHistory } from "vue-router"
import Layout from '../layout/index.vue'

const router = createRouter({
  history: createWebHistory(), //import.meta.env.BASE_URL
  routes: [
    {
      path: "/",
      redirect: '/home',
      component: Layout,
      children: [{
        path: "/home",
        name: "Home",
        component: () => import ( /* webpackChunkName: "Home" */ "../views/home/index.vue")
      }]
    }, {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import ( /* webpackChunkName: "Dashboard" */ "../views/dashboard/index.vue")
    }
  ]
})

export default router
