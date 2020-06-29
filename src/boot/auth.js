import { LoadingBar } from 'quasar'

export default ({ app, router, store, Vue }) => {
  router.beforeEach(async (to, from, next) => {
    LoadingBar.start()
    const record = to.matched.find(record => record.meta.auth)
    if (record) {
      let loggedIn = await store.getters['auth/loggedIn']
      if (loggedIn === undefined) {
        console.log('%c-HARD RELOAD', 'color: yellow;')
        try {
          await store.dispatch('auth/fetch')
        } catch (e) {
          store.dispatch('auth/logout')
        }
        loggedIn = await store.getters['auth/loggedIn']
      }
      if (!loggedIn) {
        LoadingBar.stop()
        next('/')
      } else {
        let checkRole = await store.getters['auth/check'](record.meta.auth)
        LoadingBar.stop()
        if (checkRole) {
          next()
        } else {
          next('/')
        }
      }
    } else {
      LoadingBar.stop()
      next()
    }
  })

  let auth = {}
  auth.register = (data) => store.dispatch('auth/register', data)
  auth.login = async (data) => store.dispatch('auth/login', data)
  auth.logout = () => store.dispatch('auth/logout')
  auth.verify = (token) => store.dispatch('auth/verify', token)
  auth.passwordForgot = (data) => store.dispatch('auth/passwordForgot', data)
  auth.passwordReset = (data) => store.dispatch('auth/passwordReset', data)
  auth.loggedIn = () => store.getters['auth/loggedIn']
  auth.check = (roles) => store.getters['auth/check'](roles)
  auth.setHeader = (data) => store.dispatch('auth/setHeader', data)
  auth.fetch = () => store.dispatch('auth/fetch')
  auth.user = () => store.getters['auth/user']
  Vue.prototype.$auth = auth
}
