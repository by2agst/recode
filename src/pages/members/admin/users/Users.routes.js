export default {
  name: 'Users',
  path: 'users',
  component: () => import('./Users.page.vue'),
  children: [
    { name: 'UsersList', path: '', component: () => import('./Users.list.vue') },
    { name: 'UsersEdit', path: 'edit/:id?', component: () => import('./Users.edit.vue') }
  ]
}
