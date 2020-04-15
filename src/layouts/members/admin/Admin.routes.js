import Profile from 'pages/members/admin/profile/Profile.routes.js'
import Dashboard from 'pages/members/admin/dashboard/Dashboard.routes.js'
import Users from 'pages/members/admin/users/Users.routes.js'
import Chart from 'pages/members/admin/chart/Chart.routes.js'
import Gallery from 'pages/members/admin/gallery/Gallery.routes.js'

export default {
  path: '/admin',
  component: () => import('layouts/members/admin/Default.vue'),
  children: [
    Profile,
    Dashboard,
    Users,
    Chart,
    Gallery
  ]
}
