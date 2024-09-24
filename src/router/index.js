import { createRouter, createWebHistory } from 'vue-router'

import ViewGameRuntime from "@/views/ViewGameRuntime.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Runtime',
      component: ViewGameRuntime
    },
  ]
})

export default router
