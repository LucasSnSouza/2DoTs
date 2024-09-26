import { createRouter, createWebHistory } from 'vue-router'

import ViewGameRuntime from "@/views/ViewGameRuntime.vue";
import ViewGameEditor from "@/views/ViewGameEditor.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Runtime',
      component: ViewGameRuntime
    },
    {
      path: '/editor',
      name: 'Editor',
      component: ViewGameEditor
    },
  ]
})

export default router
