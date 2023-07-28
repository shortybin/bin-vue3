import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=>import('@/components/SearchSelect/index.vue')
    }
  ]
})

export default router
