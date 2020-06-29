import { axiosInstance } from 'boot/axios'
import { LocalStorage } from 'quasar'

const REGISTER_ROUTE = '/auth/local/register'
const VERIFICATION_ROUTE = '/auth/verification'
const LOGIN_ROUTE = '/auth/local'
const FETCH_USER_ROUTE = '/users/me'
const PASSWORD_FORGOT_ROUTE = '/auth/passwordForgot'
const PASSWORD_RESET_ROUTE = '/auth/passwordReset'

export function register (state, data) {
  return axiosInstance.post(REGISTER_ROUTE, data)
}

export function login (state, data) {
  const p = new Promise(function (resolve, reject) {
    return axiosInstance
      .post(LOGIN_ROUTE, data.body)
      .then(({ data }) => {
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
  axiosInstance.defaults.headers.common.Authorization = 'Bearer ' + data.jwt
  LocalStorage.set('authorization_token', data.jwt)
}

export async function fetch (state) {
  var token = LocalStorage.getItem('authorization_token')
  if (token) {
    axiosInstance.defaults.headers.common.Authorization = 'Bearer ' + token
    return axiosInstance.get(FETCH_USER_ROUTE).then(response => {
      state.commit('setUser', response.data)
      return response.data
    }).catch(error => {
      return error
    })
  } else {
    return new Promise((resolve, reject) => {
      reject('No authorization token found')
    })
  }
}

export function logout (state) {
  if (LocalStorage.has('authorization_token')) {
    LocalStorage.remove('authorization_token')
  }
  state.commit('setUser', {})
}

export function verify (state, token) {
  return axiosInstance.get(VERIFICATION_ROUTE + '?token=' + token)
}
export function passwordForgot (state, data) {
  return axiosInstance.post(PASSWORD_FORGOT_ROUTE, data)
}

export function passwordReset (state, { token, data }) {
  return axiosInstance.post(PASSWORD_RESET_ROUTE + '?token=' + token, data)
}
