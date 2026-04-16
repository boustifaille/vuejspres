import AgeDeathCalc from '@/views/AgeDeathCalc.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AgeDeathCalc,
    },
  ],
})

export default router
