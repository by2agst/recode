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
      { path: 'profile', component: () => import('pages/members/user/Profile.vue') },
      { path: 'dashboard', component: () => import('pages/members/user/Dashboard.vue') },
      { path: 'chart', component: () => import('pages/members/user/Chart.vue') },
      { path: 'gallery', component: () => import('pages/members/user/Gallery.vue') }
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
