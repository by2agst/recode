import DefaultLayout from 'layouts/DefaultLayout.vue'
import BlankLayout from 'layouts/BlankLayout.vue'

import admin from './Admin.routes.js'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }, {
    path: '/login',
    component: BlankLayout,
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  admin
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
