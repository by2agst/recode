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
    signIn: 'Sign In',
    signUp: 'Sign Up',
    forgotPassword: 'Forgot Password',
    resetPassword: 'Reset Password',
    login: {
      dontHaveAccount: 'Don\'t have an account yet?',
      forgotPassword: 'Forgot password?',
      form: {
        identifier: 'Username / Email',
        password: 'Password',
        rememberMe: 'Remember me'
      },
      button: {
        login: 'Login'
      },
      congratulations: 'Congratulations',
      accountActive: 'Your account is active',
      loginFailed: 'Login Failed'
    },
    register: {
      form: {
        email: 'Email',
        username: 'Username',
        password: 'Password',
        passwordConfirmation: 'Password Confirmation'
      },
      button: {
        register: 'Register'
      },
      registerSuccess: 'Register is successfull',
      registerFailed: 'Register failed',
      checkEmail: 'Confirmation email has been sent please check your email'
    },
    forgot: {
      form: {
        email: 'Email'
      },
      button: {
        send: 'Send'
      },
      sendSuccess: 'Send email is successfull',
      sendFailed: 'Send email failed',
      checkEmail: 'Link has been sent please check your email'
    },
    reset: {
      form: {
        password: 'Password',
        passwordConfirmation: 'Password Confirmation'
      },
      button: {
        save: 'Save'
      }
    }
  }
}
