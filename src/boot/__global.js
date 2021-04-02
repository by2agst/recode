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
  if (!url) return ''
  return `${process.env.BASE_URL}${url.substring(1)}${timeStamp ? '?' + new Date().getTime() : ''}`
}

const formatMoney = (amount, symbol = '', fractionCount = 2, thousandsSeparator = '.', fractionSeparator = ',') => {
  try {
    fractionCount = Math.abs(fractionCount)
    fractionCount = isNaN(fractionCount) ? 2 : fractionCount

    const negativeSign = amount < 0 ? '-' : ''

    const i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(fractionCount)).toString()
    const j = (i.length > 3) ? i.length % 3 : 0

    return negativeSign + symbol + (j ? i.substr(0, j) + thousandsSeparator : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousandsSeparator) + (fractionCount ? fractionSeparator + Math.abs(amount - i).toFixed(fractionCount).slice(2) : '')
  } catch (e) {
    console.log(e)
  }
}

const getSrcAuto = ({ formats, url }, timeStamp = false) => {
  if (!url) return ''
  if (formats) {
    if (formats.small) {
      url = formats.small.url
    } else {
      url = formats.thumbnail.url
    }
  }
  return getSrc(url, timeStamp)
}

const initialName = (name) => {
  if (!name) return ''
  return name.split(' ').map(str => str[0].toUpperCase()).join('').substr(0, 2)
}

const secureIdentity = (identity) => {
  if (identity) {
    return identity.replace(/(.{3})(.+)(.{3})/, ($0, $1, $2, $3) => {
      return $1 + $2.replace(/./g, '*') + $3
    })
  } else {
    return ''
  }
}

const shorten = (str, maxLen, separator = ' ') => {
  if (!str) return ''
  if (str.length <= maxLen) return str
  return str.substr(0, str.lastIndexOf(separator, maxLen)) + '...'
}

Vue.prototype.$g = {
  errorMessage,
  formatMoney,
  getSrc,
  getSrcAuto,
  initialName,
  secureIdentity,
  shorten
}

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

export { errorMessage }
