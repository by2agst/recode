// This is just an example,
// so you can safely delete all default props below

export default {
  failed: 'Action failed',
  success: 'Action was successful',

  rules: {
    required: '{name} wajib diisi',
    minLength: '{name} harus mengandung setidaknya {length} karakter',
    maxLength: '{name} tidak boleh melebihi {length} karakter',
    minValue: '{name} harus minimum {value}',
    maxValue: '{name} harus maksimum {value}',
    between: '{name} harus bernilai antara {min} dan {max}',
    alpha: '{name} hanya bisa mengandung alfabet',
    alphaNum: '{name} hanya dapat berisi alfabet dan angka',
    numeric: '{name} hanya dapat berisi angka',
    integer: '{name} hanya dapat berisi integer',
    decimal: '{name} hanya dapat mengandung desimal',
    email: '{name} harus mengandung email yang valid',
    ipAddress: '{name} harus mengandung alamat IP yang valid',
    macAddress: '{name} harus mengandung alamat MAC yang valid',
    sameAs: '{name} harus sama dengan {field}',
    url: '{name} harus mengandung url yang valid'
  },

  menu: {
    dashboard: 'Beranda',
    users: 'Pengguna',
    chart: 'Grafik',
    gallery: 'Galeri'
  },

  auth: {
    signIn: 'Sign In',
    signUp: 'Sign Up',
    forgotPassword: 'Lupa Password',
    resetPassword: 'Reset Password',
    login: {
      dontHaveAccount: 'Belum punya akun?',
      forgotPassword: 'Lupa password?',
      form: {
        identifier: 'Username / Email',
        password: 'Password',
        rememberMe: 'Ingatkan saya'
      },
      button: {
        login: 'Login'
      },
      congratulations: 'Selamat',
      accountActive: 'Akun Anda aktif',
      loginFailed: 'Gagal masuk'
    },
    register: {
      form: {
        email: 'Email',
        username: 'Username',
        password: 'Password',
        passwordConfirmation: 'Konfirmasi Password'
      },
      button: {
        register: 'Daftar'
      },
      registerSuccess: 'Daftar berhasil',
      registerFailed: 'Pendaftaran gagal',
      checkEmail: 'Email konfirmasi sudah terkirim silahkan cek email anda'
    },
    forgot: {
      form: {
        email: 'Email'
      },
      button: {
        send: 'Kirim'
      },
      sendSuccess: 'Mengirim email berhasil ',
      sendFailed: 'Pengiriman email gagal ',
      checkEmail: 'Tautan telah dikirim, silakan periksa email Anda'
    },
    reset: {
      form: {
        password: 'Password',
        passwordConfirmation: 'Konfirmasi Password'
      },
      button: {
        save: 'Simpan'
      }
    }
  }
}
