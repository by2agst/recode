import Profile from 'pages/admin/profile/Profile.routes.js'
import Dashboard from 'pages/admin/dashboard/Dashboard.routes.js'
import Users from 'pages/admin/users/Users.routes.js'
import Chart from 'pages/admin/chart/Chart.routes.js'
import Gallery from 'pages/admin/gallery/Gallery.routes.js'/* plop-modify-route-import */

export default [{
  path: '/admin',
  component: () => import('layouts/admin/DefaultLayout.vue'),
  children: [
    Profile,
    Dashboard,
    Users,
    Chart,
    Gallery/* plop-modify-route */
  ]
}]
