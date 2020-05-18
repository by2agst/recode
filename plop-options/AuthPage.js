const { ls, validatePascalCase, toPascalCase } = require('../src/boot/global.js')

const roles = ls('./src/layouts', 'd')

const optionRoles = roles.map(name => {
  if (roles.length === 1) {
    return {
      name: name,
      checked: true
    }
  } else {
    return { name }
  }
})

const files = {
  single: [
    'page.vue',
    'routes.js'
  ],
  multiple: [
    'default.vue',
    'page.vue',
    'routes.js'
  ],
  crud: [
    'edit.vue',
    'list.vue',
    'page.vue',
    'routes.js'
  ]
}

const actions = answer => {
  // console.log('\x1b[36m%s\x1b[0m', '>>> answer :', answer)
  let addType = []
  let modifyType = []
  answer.role.forEach(r => {
    // console.log('\x1b[36m%s\x1b[0m', '\nROLES :', r)
    files[answer.type].forEach(file => {
      // console.log('\n', {
      //   type: 'add',
      //   path: `src/pages/${r.toLowerCase()}/${answer.name.toLowerCase()}/${answer.name}.${file}`,
      //   templateFile: `plop-options/plop-templates/auth/${answer.type.toLowerCase()}/${file}`
      // })
      addType.push({
        type: 'add',
        path: `src/pages/${r.toLowerCase()}/{{dashCase name}}/{{pascalCase name}}.${file}`,
        templateFile: `plop-options/plop-templates/auth/{{lowerCase type}}/${file}`
      })
    })

    modifyType = [...modifyType, ...[
      {
        type: 'modify',
        path: `src/router/${toPascalCase(r)}.routes.js`,
        pattern: /(\/\* plop-modify-route-import \*\/)/,
        template: `\nimport {{pascalCase name}} from 'pages/${r.toLowerCase()}/{{dashCase name}}/{{pascalCase name}}.routes'$1`
      }, {
        type: 'modify',
        path: `src/router/${toPascalCase(r)}.routes.js`,
        pattern: /(\/\* plop-modify-route \*\/)/,
        template: `,\n    {{pascalCase name}}$1`
      }
    ]]

    console.log('\x1b[36m%s\x1b[0m', '>>> modifyType :', modifyType)
  })

  return [...addType, ...modifyType]
}

module.exports = {
  description: 'Create Auth Page',
  prompts: [{
    type: 'confirm',
    name: 'createRole',
    message: 'Create new role? (default: no)',
    default: false
  }, {
    type: 'input',
    name: 'roleName',
    message: 'Input role name* (use PascalCase)',
    when: function (answers) {
      return answers.createRole
    },
    validate: function (value) {
      return validatePascalCase(value)
    }
  }, {
    type: 'checkbox',
    name: 'role',
    message: 'What role it will be rendered?',
    choices: optionRoles,
    when: function (answers) {
      return !answers.createRole
    }
  }, {
    type: 'list',
    name: 'type',
    message: 'What is your page type?',
    choices: [{
      name: 'Single Page',
      value: 'single'
    }, {
      name: 'Multiple Page',
      value: 'multiple'
    }, {
      name: 'CRUD Page',
      value: 'crud'
    }],
    when: function (answers) {
      return !answers.createRole
    }
  }, {
    type: 'input',
    name: 'name',
    message: 'input page name (use PascalCase)',
    validate: function (value) {
      return validatePascalCase(value)
    }
  }],
  actions
}
