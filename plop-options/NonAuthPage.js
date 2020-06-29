const { ls, validateDashCase, validatePascalCase, toDashCase } = require('./__helper.js')

const layouts = ls('./src/layouts').filter(name => {
  return (/([A-Z]{1}[\w\d]{1,})Layout.vue$/).test(name)
})

let optionLayouts = layouts.map(val => {
  let name = val.replace(/(^[\w\d]+)(Layout.vue)$/, '$1')
  return {
    name: name,
    value: name
  }
})
optionLayouts.push({
  name: 'Create New Layout',
  value: 'new'
})

const actions = answer => {
  // console.log('\x1b[36m%s\x1b[0m', '>>> answer :', answer)
  let addType = []
  let modifyType = []

  let pattern = null
  let regex = null

  addType.push({
    type: 'add',
    path: 'src/pages/{{ pascalCase name }}.vue',
    templateFile: './plop-options/plop-templates/non-auth/page.vue'
  })

  if (answer.layoutName) {
    addType.push({
      type: 'add',
      path: `src/layouts/{{ pascalCase layoutName }}Layout.vue`,
      templateFile: `plop-options/plop-templates/non-auth/layout.vue`
    })
    pattern = `(\\/\\* plop-modify-route-import-layout \\*\\/)`
    regex = new RegExp(pattern)
    modifyType.push({
      type: 'modify',
      path: `src/router/routes.js`,
      pattern: regex,
      template: `import {{ pascalCase layoutName }}Layout from 'layouts/{{ pascalCase layoutName }}Layout.vue'\n$1`
    })
    pattern = `(\\/\\* plop-modify-route-parent \\*\\/)`
    regex = new RegExp(pattern)
    modifyType.push({
      type: 'modify',
      path: `src/router/routes.js`,
      pattern: regex,
      template: `, {\n    path: '/{{ dashCase pathParrent }}',\n    component: {{ pascalCase layoutName }}Layout,\n    children: [\n      { path: '{{ dashCase name }}', component: () => import('pages/{{ pascalCase name }}.vue') }/* plop-modify-route-{{ dashCase layoutName }} */\n    ]\n  }$1`
    })
  } else {
    pattern = `(\\/\\* plop-modify-route-${toDashCase(answer.type)} \\*\\/)`
    regex = new RegExp(pattern)

    modifyType.push({
      type: 'modify',
      path: `src/router/routes.js`,
      pattern: regex,
      template: `,\n      { path: '{{ dashCase name }}', component: () => import('pages/{{ pascalCase name }}.vue') }$1`
    })
  }

  return [...addType, ...modifyType]
}

module.exports = {
  description: 'Create Non Auth Page',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'What is your layout type?',
    choices: optionLayouts
  }, {
    type: 'input',
    name: 'layoutName',
    message: 'input layout name* (use PascalCase)',
    when: function (answers) {
      return answers.type === 'new'
    },
    validate: function (value) {
      return validatePascalCase(value) || 'Invalid Input'
    }
  }, {
    type: 'input',
    name: 'pathParrent',
    message: 'input path name (use dash-case)',
    when: function (answers) {
      return answers.layoutName
    },
    validate: function (value) {
      if (!value) {
        return true
      } else {
        return validateDashCase(value) || 'Invalid Input'
      }
    }
  }, {
    type: 'input',
    name: 'name',
    message: 'input page name* (use PascalCase)',
    validate: function (value) {
      return validatePascalCase(value) || 'Invalid Input'
    }
  }],
  actions
}
