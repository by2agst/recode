import Profile from 'pages/{{ dashCase roleName }}/profile/Profile.routes.js'
import Dashboard from 'pages/{{ dashCase roleName }}/dashboard/Dashboard.routes.js'/* plop-modify-route-import */

export default [
  {
    path: '/{{ dashCase roleName }}',
    component: () => import('layouts/{{ dashCase roleName }}/DefaultLayout.vue'),
    children: [
      Profile,
      Dashboard/* plop-modify-route-default */
    ]
  }/* plop-modify-route-parent */
]
