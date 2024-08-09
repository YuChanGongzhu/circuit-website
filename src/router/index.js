import { createRouter, createWebHistory } from 'vue-router';
import LANDING_PAGE from '../pages/LANDING_PAGE/LANDING_PAGE.vue';

const routes = [
  {
    path: '/',
    name: 'LANDING_PAGE',
    component: LANDING_PAGE,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;