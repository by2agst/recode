/* plop */
const ls = (layoutDir = '', type = '') => {
  const { lstatSync, readdirSync } = require('fs')
  const { join } = require('path')

  const isDirectory = source => lstatSync(source).isDirectory()

  const ls = readdirSync(layoutDir)
  if (String(type).toLowerCase() === 'd') {
    return ls.filter(name => {
      return isDirectory(join(layoutDir, name))
    })
  } else {
    return ls
  }
}

const validateDashCase = (string) => {
  return (/^[a-z]+([a-z\-]+)?$/).test(string) || 'Invalid Input'
}

const validatePascalCase = (string) => {
  return (/^[A-Z]{1}[A-Za-z]{1,}$/).test(string) || 'Invalid Input'
}

const toDashCase = (string) => {
  return `${string}`
    .replace(/(^[\w])/, ($1) => $1.toLowerCase())
    .replace(/([A-Z])/, ($1) => `-${$1.toLowerCase()}`)
}
const toPascalCase = (string) => {
  return `${string}`
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w+)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(new RegExp(/\s/, 'g'), '')
    .replace(new RegExp(/\w/), s => s.toUpperCase())
}

module.exports = {
  ls,
  validateDashCase,
  validatePascalCase,
  toDashCase,
  toPascalCase
}
