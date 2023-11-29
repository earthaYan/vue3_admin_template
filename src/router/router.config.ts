export const constantRoutes = [
  {
    path: '/login',
    name: 'login', //命名路由
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'default',
  },
]
