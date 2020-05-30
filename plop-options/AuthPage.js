const { ls, validatePascalCase, toDashCase, toPascalCase } = require('../src/boot/global.js')

const roles = ls('./src/layouts', 'd')

let optionRoles = roles.map(name => {
  if (roles.length === 1) {
    return {
      name: name,
      checked: true
    }
  } else {
    return { name }
  }
})

const pages = {
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

const roleLayouts = {
  layout: [
    'DefaultLayout.vue',
    'SidebarLeft.vue',
    'ToolbarTop.vue'
  ],
  router: 'routes.js',
  pages: [
    'Dashboard',
    'Profile'
  ]
}

const actions = answer => {
  // console.log('\x1b[36m%s\x1b[0m', '>>> answer :', answer)
  let addType = []
  let modifyType = []

  if (answer.createRole) {
    roleLayouts.layout.forEach(layout => {
      addType.push({
        type: 'add',
        path: `src/layouts/{{ dashCase roleName }}/${layout}`,
        templateFile: `plop-options/plop-templates/auth/roles/layouts/${layout}`
      })
    })

    addType.push({
      type: 'add',
      path: `src/router/{{ pascalCase roleName }}.routes.js`,
      templateFile: `plop-options/plop-templates/auth/roles/router/${roleLayouts.router}`
    })

    roleLayouts.pages.forEach(folderName => {
      addType.push({
        type: 'add',
        path: `src/pages/{{ dashCase roleName }}/${toDashCase(folderName)}/${toPascalCase(folderName)}.page.vue`,
        templateFile: `plop-options/plop-templates/auth/roles/pages/${folderName.toLowerCase()}/${toPascalCase(folderName)}.page.vue`
      })

      addType.push({
        type: 'add',
        path: `src/pages/{{ dashCase roleName }}/${toDashCase(folderName)}/${toPascalCase(folderName)}.routes.js`,
        templateFile: `plop-options/plop-templates/auth/roles/pages/${folderName.toLowerCase()}/${toPascalCase(folderName)}.routes.js`
      })
    })

    modifyType.push({
      type: 'modify',
      path: `src/router/routes.js`,
      pattern: /(\/\* plop-modify-route-import-role-routes \*\/)/,
      template: `import {{ camelCase roleName }} from './{{ pascalCase roleName }}.routes.js'\n$1`
    })

    modifyType.push({
      type: 'modify',
      path: `src/router/routes.js`,
      pattern: /(\/\* plop-modify-route-roles \*\/)/,
      template: `,\n  ...{{ camelCase roleName }}$1`
    })
  }

  answer.role.forEach(r => {
    // console.log('\x1b[36m%s\x1b[0m', '\nROLES :', r)
    pages[answer.type].forEach(page => {
      // console.log('\n', {
      //   type: 'add',
      //   path: `src/pages/${r.toLowerCase()}/${answer.name.toLowerCase()}/${answer.name}.${page}`,
      //   templateFile: `plop-options/plop-templates/auth/${answer.type.toLowerCase()}/${page}`
      // })
      addType.push({
        type: 'add',
        path: `src/pages/${toDashCase(r)}/{{ dashCase name }}/{{ pascalCase name }}.${page}`,
        templateFile: `plop-options/plop-templates/auth/pages/{{lowerCase type}}/${page}`
      })
    })

    modifyType.push({
      type: 'modify',
      path: `src/router/${toPascalCase(r)}.routes.js`,
      pattern: /(\/\* plop-modify-route-import \*\/)/,
      template: `\nimport {{ pascalCase name }} from 'pages/${toDashCase(r)}/{{ dashCase name }}/{{ pascalCase name }}.routes.js'$1`
    })

    modifyType.push({
      type: 'modify',
      path: `src/router/${toPascalCase(r)}.routes.js`,
      pattern: /(\/\* plop-modify-route-default \*\/)/,
      template: `,\n      {{ pascalCase name }}$1`
    })

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
      let v = validatePascalCase(value)
      if (v) {
        optionRoles[0].checked = false
        optionRoles.push({
          name: toDashCase(value),
          checked: true
        })
      }
      return v || 'Invalid Input'
    }
  }, {
    type: 'checkbox',
    name: 'role',
    message: 'What roles it will be rendered?',
    choices: optionRoles
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
    }]
  }, {
    type: 'input',
    name: 'name',
    message: 'input page name (use PascalCase)',
    validate: function (value) {
      return validatePascalCase(value) || 'Invalid Input'
    }
  }],
  actions
}
