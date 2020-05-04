module.exports = {
  description: 'Create Auth Page',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'input page name (use PascalCase)'
  }],
  actions: [{
    type: 'add',
    path: 'src/{{name}}.js',
    templateFile: 'plop-templates/controller.js'
  }]
}
