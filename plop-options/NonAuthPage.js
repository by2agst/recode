module.exports = {
  description: 'Create Non Auth Page',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'input page name (use PascalCase)'
  }],
  actions: [{
    type: 'add',
    path: 'src/pages/{{name}}.js',
    templateFile: './plop-options/plop-templates/non-auth/SimplePage.js'
  }]
}
