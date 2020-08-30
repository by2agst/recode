import { LocalStorage } from 'quasar'
import jwtDecode from 'jwt-decode'

export function user (state) {
  return state.user
}

export function role (state) {
  return state.user.role ? state.user.role.type : ''
}

export function loggedIn (state) {
  let currentTime = Date.now() / 1000
  let token = LocalStorage.getItem('authorization_token') || ''
  let checkToken = false
  if (token) {
    let jwtExtracted = jwtDecode(token)
    let exp = jwtExtracted.exp
    checkToken = exp > currentTime
  }
  return state.user && state.user.role && checkToken
}

export const check = state => roles => {
  const user = state.user
  if (user) {
    let userRoles = user.role ? user.role.type : ''
    return userRoles.includes(roles)
  }
  return false
}
