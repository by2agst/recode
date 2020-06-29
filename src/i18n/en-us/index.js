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
    users: 'Users',
    chart: 'Chart',
    gallery: 'Gallery'
  },

  auth: {
    submit: 'Submit',
    myAccount: 'My account',
    navigation: 'Navigation',
    fields: {
      email: 'Email',
      username: 'Username',
      password: 'Password',
      repeatPassword: 'Repeat password'
    },
    login: {
      login: 'Login',
      passwordForgot: 'Forgot your password?',
      verificationRequired:
        'Please check your email and verify your account first.',
      invalidCredentials: 'Email address or password is incorrect.',
      rememberMe: 'Remember me',
      registerMessage: 'You have not created an account yet?',
      register: 'Register here.'
    },
    register: {
      register: 'Register',
      invalidData: 'Server could not process the request. Please correct the sent data.',
      alreadyRegistered: 'Email address is already registered. Please check your email for verification.',
      accountCreated: 'Please check your email to verify your registration. This sometimes can take up to 10 minutes. Please check the spam folder if the email has not been received.',
      checkEmail: `You want to register with the email address {email}, is this correct?`,
      error: 'Something went wrong.'
    },
    verification: {
      success: 'Your account has been verified. You can now login.',
      failed: 'Verification has failed or the account has already been verified. Please try to login.'
    },
    logout: {
      confirmation: 'Are you sure you want to log out?',
      confirm: 'Confirm',
      logout: 'Logout',
      cancel: 'Cancel'
    },
    password: {
      forgot: {
        header: 'Request a new password',
        checkEmail: 'Please check your email to reset your password. If you do not receive an email, make sure your email adres is registered.',
        unknownEmail: 'Email address is not registered.'
      },
      reset: {
        header: 'Reset your password',
        success:
          'Your password has been reset. You can now login with the new password.'
      }
    }
  }
}
