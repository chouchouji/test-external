import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('@/views/home/home.vue') },
  { path: '/about', component: () => import('@/views/about/about.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
