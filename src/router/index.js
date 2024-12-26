import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WorkExperience from '../views/WorkExperience.vue'
import Projects from '../views/Projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/workExperience',
      name: 'workExperience',
      component: WorkExperience
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    }
  ]
})

export default router
