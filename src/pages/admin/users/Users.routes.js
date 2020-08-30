export default {
  name: 'Users',
  path: 'users',
  component: () => import('./Users.page.vue'),
  children: [
    { name: 'Users-List', path: '', component: () => import('./Users.list.vue') },
    { name: 'Users-Add', path: 'add', component: () => import('./Users.add.vue') },
    { name: 'Users-Edit', path: 'edit/:id', component: () => import('./Users.edit.vue') }
  ]
}
