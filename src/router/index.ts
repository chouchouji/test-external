import { createWebHashHistory, createRouter } from 'vue-router'

const Home = () => import('@/views/home/home.vue')
const About = () => import('@/views/about/about.vue')

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
