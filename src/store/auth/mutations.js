export function setUser (state, data) {
  if (data) {
    state.user = state.userData(data)
  } else {
    state.user = {}
  }
}

export function setUserData (state, data) {
  state.userData = data
}
