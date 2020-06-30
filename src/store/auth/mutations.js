export function setUser (state, data) {
  state.user = state.userData(data)
}
