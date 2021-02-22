import { LoadingBar } from 'quasar'

export default ({ app, router, store, Vue }) => {
  router.beforeEach(async (to, from, next) => {
    LoadingBar.start()
    const authRouter = to.matched.find(router => router.meta.auth)
    const nonAuthRouter = to.matched.find(router => router.meta.nonAuth)
    if (authRouter) {
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
        const checkRole = await store.getters['auth/check'](authRouter.meta.auth)
        LoadingBar.stop()
        if (checkRole) {
          next()
        } else {
          next('/')
        }
      }
    } else if (nonAuthRouter) {
      let loggedIn = await store.getters['auth/loggedIn']
      if (loggedIn === undefined) {
        try {
          await store.dispatch('auth/fetch')
        } catch (e) {
          // store.dispatch('auth/logout')
        }
        loggedIn = await store.getters['auth/loggedIn']
      }
      if (loggedIn) {
        let user = await store.getters['auth/user']
        LoadingBar.stop()
        next(`/${user.role.type}/dashboard`)
      } else {
        LoadingBar.stop()
        next()
      }
    } else {
      const loggedIn = await store.getters['auth/loggedIn']
      if (loggedIn === undefined) {
        try {
          await store.dispatch('auth/fetch')
        } catch (e) {
          // store.dispatch('auth/logout')
        }
      }
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
  auth.role = () => store.getters['auth/role']
  Vue.prototype.$auth = auth
}
