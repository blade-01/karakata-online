// views for Admin layout

const adminRoutes = [
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: () => import('@/layouts/Admin.vue'),
    children: [
      {
        path: '/admin/auto-config',
        component: () => import('@/views/admin/AutomaticConfiguration.vue')
      }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default adminRoutes
