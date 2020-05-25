export default {
  name: '{{ pascalCase name }}',
  path: '{{ dashCase name }}',
  component: () => import('./{{ pascalCase name }}.page.vue'),
  children: [
    { name: '{{ pascalCase name }}', path: '', component: () => import('./{{ pascalCase name }}.default.vue') }
  ]
}
