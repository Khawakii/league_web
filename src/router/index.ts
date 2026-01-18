import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/summoners',
      name: 'summoners',
      component: () => import('@/views/SummonerView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/ProductsView.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('@/views/FAQView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue'),
    },
    {
  path: '/under-development',
  component: () => import('@/views/UnderDevelopmentView.vue')
},
/* "404" route - keep this as the last route */
 {
    path: '/:pathMatch(.*)*',  // mindent elkap, ami nem létezik
    redirect: '/'              // visszadob a Home-ra
  },
  ],
})

export default router
