import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from "@/layouts/default/DefaultLayout.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routes = [
  {
    path: '/checkout/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: NotFoundView,
      },
      {
        path: ':id/',
        component: CheckoutView,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
