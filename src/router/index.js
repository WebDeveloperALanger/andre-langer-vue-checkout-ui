// Composables
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from "@/layouts/default/DefaultLayout.vue";
import InitView from "@/views/InitView.vue";
import WorkflowView from "@/views/WorkflowView.vue";

const routes = [
  {
    path: '/home/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
    ],
  },
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: 'init/:id',
        name: 'Init',
        component: InitView,
      },
      {
        path: 'workflow/:id',
        name: 'Workflow',
        component: WorkflowView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
