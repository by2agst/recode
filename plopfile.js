const AuthOptions = require('./plop-options/AuthPage.js')
const NonAuthOptions = require('./plop-options/NonAuthPage.js')

module.exports = function (plop) {
  plop.setGenerator('Create Auth Page', AuthOptions)
  plop.setGenerator('Create Non-Auth Page', NonAuthOptions)
}
