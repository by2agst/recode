import axios from 'axios'
import { LocalStorage } from 'quasar'

const REGISTER_ROUTE = '/auth/local/register'
const VERIFICATION_ROUTE = '/auth/email-confirmation'
const LOGIN_ROUTE = '/auth/local'
const FETCH_USER_ROUTE = '/users/me'
const PASSWORD_FORGOT_ROUTE = '/auth/forgot-password'
const PASSWORD_RESET_ROUTE = '/auth/reset-password'

export function register (state, formData) {
  return axios.post(REGISTER_ROUTE, formData)
}

export function login (state, formData) {
  const p = new Promise(function (resolve, reject) {
    return axios
      .post(LOGIN_ROUTE, formData)
      .then(({ data }) => {
        if (formData.rememberMe) {
          LocalStorage.set('remember_me', true)
        } else {
          LocalStorage.remove('remember_me')
        }
        console.log('%c-data.user ', 'color: yellow;', data.user)
        if (data.user) {
          if (data.user.confirmed && !data.user.blocked) {
            state.dispatch('setHeader', data)
            state.commit('setUser', data.user)
            resolve(data)
          } else if (!data.user.confirmed) {
            reject(new Error('Your account has not been verified'))
          } else {
            reject(new Error('Invalid login'))
          }
        } else {
          reject(new Error('Invalid login'))
        }
      })
      .catch(error => {
        reject(error)
      })
  })
  return p
}

export function setHeader (state, data) {
  axios.defaults.headers.common.Authorization = 'Bearer ' + data.jwt
  LocalStorage.set('authorization_token', data.jwt)
}

export async function fetch (state) {
  const token = LocalStorage.getItem('authorization_token')
  if (token) {
    axios.defaults.headers.common.Authorization = 'Bearer ' + token
    return axios.get(FETCH_USER_ROUTE).then(response => {
      state.commit('setUser', response.data)
      return response.data
    }).catch(error => {
      state.dispatch('logout')
      return error
    })
  } else {
    return new Promise((resolve, reject) => {
      reject('No authorization token found')
    })
  }
}

export async function logout (state) {
  delete axios.defaults.headers.common.Authorization
  if (LocalStorage.has('authorization_token')) {
    LocalStorage.remove('authorization_token')
  }
  await state.commit('setUser', {})
  return true
}

export function verify (state, token) {
  return axios.get(VERIFICATION_ROUTE + '?confirmation=' + token)
}

export function passwordForgot (state, formData) {
  return axios.post(PASSWORD_FORGOT_ROUTE, formData)
}

export function passwordReset (state, formData) {
  return axios.post(PASSWORD_RESET_ROUTE, formData)
}
