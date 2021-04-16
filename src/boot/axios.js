import axios from 'axios'
import qs from 'qs'
import { LocalStorage, Notify } from 'quasar'

Notify.registerType('axios-notify', {
  actions: [{ icon: 'close', color: 'white' }],
  color: 'accent',
  icon: 'fas fa-exclamation-triangle',
  progress: true,
  textColor: 'white',
  timeout: 3000,
  position: 'bottom-right'
})

axios.defaults.baseURL = process.env.BASE_URL
axios.defaults.paramsSerializer = function (params) {
  return qs.stringify(params, {
    arrayFormat: 'indices'
  })
}

axios.interceptors.response.use((response) => {
  return response
}, async (error) => {
  const rememberMe = LocalStorage.getItem('remember_me') || false
  if (error.response && error.response.status === 401 && rememberMe) {
    const originalRequest = error.config
    const token = LocalStorage.getItem('authorization_token')

    delete axios.defaults.headers.common.Authorization
    return axios.post('/auth/refresh-token', { jwt: token }).then(({ data: { jwt } }) => {
      LocalStorage.set('authorization_token', jwt)
      axios.defaults.headers.common.Authorization = `Bearer ${jwt}`
      const retryOriginalRequest = new Promise((resolve) => {
        originalRequest.headers.Authorization = `Bearer ${jwt}`
        resolve(axios(originalRequest))
      })

      return retryOriginalRequest
    })
  }
  return Promise.reject(error)
})

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios
}
