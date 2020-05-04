const AuthOptions = require('./plop-options/AuthPage.js')
const NoAuthOptions = require('./plop-options/NonAuthPage.js')

module.exports = function (plop) {
  plop.setGenerator('Create Auth Page', AuthOptions)
  plop.setGenerator('Create No-Auth Page', NoAuthOptions)
}
