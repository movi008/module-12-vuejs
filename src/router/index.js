import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import('../views/HomeView.vue')
    },    
    {
      path: "/stock",
      name: "stock",
      component: () => import('../views/StockView.vue')
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import('../views/ShopcartView.vue')
    },
    {
      path: "/products/:productId",
      name: "Product",
      component: () => import('../views/ProductView.vue')
    },
    // {
    //   path: '/',
    //   components: {
    //     default: Home,
    //     sidebar: Sidebar,
    //     topbar: Topbar,
    //   },
    // },
  ]
})


export default router
