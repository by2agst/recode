const routes = [
  {
    path: '/',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: 'login', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/members/user/Default.vue'),
    children: [
      { path: 'dashboard', component: () => import('pages/members/user/Dashboard.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
