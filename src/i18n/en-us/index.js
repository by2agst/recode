// This is just an example,
// so you can safely delete all default props below

export default {
  failed: 'Action failed',
  success: 'Action was successful',

  rules: {
    required: '{name} is required',
    minLength: '{name} must be at least {length} characters in length',
    maxLength: '{name} cannot exceed {length} characters in length',
    minValue: '{name} should be minimum {value}',
    maxValue: '{name} should be maximum {value}',
    between: '{name} must be valued between {min} and {max}',
    alpha: '{name} can only contain alphabet',
    alphaNum: '{name} can only contain alphabet and number',
    numeric: '{name} can only contain numeric',
    integer: '{name} can only contain integer',
    decimal: '{name} can only contain decimal',
    email: '{name} must contain a valid email',
    ipAddress: '{name} must contain a valid IP address',
    macAddress: '{name} must contain a valid MAC address',
    sameAs: '{name} must be the same as {field}',
    url: '{name} must contain a valid url'
  },

  menu: {
    dashboard: 'Dashboard',
    chart: 'Chart',
    gallery: 'Gallery'
  }
}
