import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import { Notify } from 'quasar'

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
    return qs.stringify(params, { arrayFormat: 'repeat' })
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

Vue.prototype.$axios = axiosInstance

export { axiosInstance, setErrorInterceptor, setBaseUrl }
