import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    //{
      //path: '/about',
      //name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     // component: () => import('../views/About.vue'),
    //},
    {
      path: '/veille-technologique',
      name: 'veille-technologique',
      component: () => import('@/views/VeilleTechnologique.vue')
    },
    {
      path: '/formation-sio',
      name: '/formation-sio',
      component: () => import('@/views/Sio.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@/views/Portfolio.vue')
    },
        {
      path: '/tp-td',
      name: 'tp-td',
      component: () => import('@/views/tp-td.vue')
    }
  ],
})

export default router
