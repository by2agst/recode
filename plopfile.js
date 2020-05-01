module.exports = function (plop) {
  // controller generator
  plop.setGenerator('Create Auth Page', {
    description: 'application controller logic',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'controller name please'
    }],
    actions: [{
      type: 'add',
      path: 'src/{{name}}.js',
      templateFile: 'plop-templates/controller.hbs'
    }]
  })
  plop.setGenerator('Create No-Auth Page', {
    description: 'application controller logic',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'controller name please'
    }],
    actions: [{
      type: 'add',
      path: 'src/{{name}}.js',
      templateFile: 'plop-templates/controller.hbs'
    }]
  })
}
