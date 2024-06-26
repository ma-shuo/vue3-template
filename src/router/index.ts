import { createRouter, createWebHistory } from 'vue-router'
import type {RouteRecordRaw} from "vue-router"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/RealEstate',
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/dashboard',
    component: () => import('@/layout/home/index.vue'),
    children:[
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
      },
      {
        path: 'table',
        name: 'table',
        component: () => import('@/views/table/index.vue'),
      }
    ]
  },
  {
    path: '/RealEstate',
    name: 'RealEstate',
    redirect: '/RealEstate/RealEstateIndex',
    component: () => import('@/layout/RealEstate/index.vue'),
    children:[
      {
        path: 'RealEstateIndex',
        name: 'RealEstateIndex',
        component: () => import('@/views/RealEstateIndex/index.vue'),
      }
    ]
  },
]
const router = createRouter({
  history: createWebHistory("/base"),
  routes,
})

router.beforeEach((to, from, next) => {
  next();
})

export default router
