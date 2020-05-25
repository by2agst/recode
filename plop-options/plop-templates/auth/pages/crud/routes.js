export default {
  name: '{{ pascalCase name }}',
  path: '{{ dashCase name }}',
  component: () => import('./{{ pascalCase name }}.page.vue'),
  children: [
    { name: '{{ pascalCase name }}-List', path: '', component: () => import('./{{ pascalCase name }}.list.vue') },
    { name: '{{ pascalCase name }}-Add', path: 'edit', component: () => import('./{{ pascalCase name }}.edit.vue') },
    { name: '{{ pascalCase name }}-Edit', path: 'edit/:id', component: () => import('./{{ pascalCase name }}.edit.vue') }
  ]
}
