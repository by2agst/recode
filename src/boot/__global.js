import Vue from 'vue'

const errorMessage = (e) => {
  let errMessage = ''
  if (e.response) {
    let { data } = e.response
    if (data.message) {
      errMessage = data.message[0].messages[0].message || ''
    } else {
      errMessage = e.message
    }
  } else if (e.message) {
    errMessage = e.message
  } else {
    errMessage = e
  }
  return errMessage
}

const getSrc = (url, timeStamp = false) => {
  return `${process.env.BASE_URL}${url.substring(1)}${timeStamp ? '?' + new Date().getTime() : ''}`
}

const initialName = (name) => {
  return name.split(' ').map(str => str[0].toUpperCase()).join('').substr(0, 2)
}

Vue.prototype.$g = {
  errorMessage,
  getSrc,
  initialName
}

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

export { errorMessage }
