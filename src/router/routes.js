import DefaultLayout from 'layouts/DefaultLayout.vue'
import BlankLayout from 'layouts/BlankLayout.vue'
/* plop-modify-route-import-layout */

import admin from './Admin.routes.js'
/* plop-modify-route-import-role-routes */

let routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', component: () => import('pages/Index.vue') }/* plop-modify-route-default */
    ]
  }, {
    path: '/',
    component: BlankLayout,
    children: [
      { path: 'register', component: () => import('pages/Register.vue'), meta: { nonAuth: true } },
      { path: 'login/:params?', component: () => import('pages/Login.vue'), meta: { nonAuth: true } }/* plop-modify-route-blank */
    ]
  }/* plop-modify-route-parent */
]

routes = [
  ...routes,
  ...admin/* plop-modify-route-roles */
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
