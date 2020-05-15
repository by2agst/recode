export default {
  name: '{{ pascalCase name }}',
  path: '{{ lowerCase name }}',
  component: () => import('./{{ pascalCase name }}.page.vue')
}
