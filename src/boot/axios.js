import Vue from 'vue'
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

const axiosInstance = axios.create({
  paramsSerializer: params => {
    return qs.stringify(params, { arrayFormat: 'indices' })
  },
  baseURL: process.env.BASE_URL
})

const setErrorInterceptor = (errorFunction) => {
  axiosInstance.interceptors.response.use((response) => {
    return response
  }, (error) => {
    if (!error.response) {
      errorFunction()
    }
    return Promise.reject(error)
  })
}

const setBaseUrl = (baseURL) => {
  axiosInstance.defaults.baseURL = baseURL
}

axiosInstance.interceptors.response.use((response) => {
  return response
}, async (error) => {
  const rememberMe = LocalStorage.getItem('remember_me') || false
  if (error.response && error.response.status === 401 && rememberMe) {
    const originalRequest = error.config
    const token = LocalStorage.getItem('authorization_token')

    delete axiosInstance.defaults.headers.common['Authorization']
    return axiosInstance.post('/auth/refresh-token', { jwt: token }).then(({ data: { jwt } }) => {
      LocalStorage.set('authorization_token', jwt)
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${jwt}`
      const retryOriginalRequest = new Promise((resolve) => {
        originalRequest.headers['Authorization'] = `Bearer ${jwt}`
        resolve(axiosInstance(originalRequest))
      })

      return retryOriginalRequest
    })
  }
  return Promise.reject(error)
})

Vue.prototype.$axios = axiosInstance

export { axiosInstance, setErrorInterceptor, setBaseUrl }
