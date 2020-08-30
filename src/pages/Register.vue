<template>
  <q-page>
    <div class="row">
      <div class="col-12 col-sm-5 bg-dark text-white">
        <div class="column window-height bg-1">
          <div class="col">
            <div class="column full-height justify-center">
              <div class="col-auto text-center">
                <div class="text-h3">
                  Re<div class="inline-block text-accent">:</div><div class="inline-block text-accent flip-horizontal">c</div>ode
                </div>
                <div class="text-h6 regular">Quasar v<div class="inline-block text-accent text-bold">{{ $q.version }}</div></div>
              </div>
            </div>
          </div>
          <div class="col-auto q-pa-sm">
            <div class="row justify-between">
              <div class="col-auto">
                <i class="far fa-copyright q-mr-xs"/>
                {{new Date().getFullYear()}}
              </div>
              <div class="col-auto text-right">
                Create with
                <i class="far fa-heart q-ml-xs text-accent"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-7">
        <div class="column window-height bg-3">
          <div class="col-auto q-pa-sm">
            <div class="row justify-between items-center">
              <div class="col-auto">
                <router-link to="/login" class="text-primary">Sign In</router-link>
              </div>
              <div class="col-auto text-right">
                <languages/>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="column full-height justify-center">
              <div class="col-auto text-center">
                <div class="row justify-center">
                  <div class="col-10 col-md-8 col-lg-6">
                    <q-form class="q-gutter-y-md" ref="myForm" @submit="register">
                      <h5>Sign Up</h5>
                      <q-input
                        dense
                        lazy-rules
                        ref="email"
                        v-model="form.email"
                        label="email"
                        type="email"
                        :rules="[
                          val => !!val || $t('rules.required', { name: 'email' }),
                          val => val.length > 6 || $t('rules.minLength', { name: 'email', length: 6 })
                        ]"
                      />
                      <q-input
                        dense
                        lazy-rules
                        ref="username"
                        v-model="form.username"
                        label="username"
                        :rules="[
                          val => !!val || $t('rules.required', { name: 'username' }),
                          val => val.length > 6 || $t('rules.minLength', { name: 'username', length: 6 })
                        ]"
                      />
                      <q-input
                        dense
                        lazy-rules
                        ref="password"
                        v-model="form.password"
                        label="password"
                        :type="isPwd ? 'password' : 'text'"
                        :rules="[
                          val => !!val || $t('rules.required', { name: 'password' }),
                          val => val.length > 6 || $t('rules.minLength', { name: 'password', length: 6 })
                        ]"
                        >
                        <template v-slot:append>
                          <q-icon
                            :name="isPwd ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwd = !isPwd"
                          />
                        </template>
                      </q-input>
                      <q-input
                        dense
                        lazy-rules
                        ref="passwordConfirmation"
                        v-model="form.passwordConfirmation"
                        label="password confirmation"
                        :type="isPwdCnf ? 'password' : 'text'"
                        :rules="[
                          val => !!val || $t('rules.required', { name: 'passwordConfirmation' }),
                          val => val.length > 6 || $t('rules.minLength', { name: 'passwordConfirmation', length: 6 }),
                          val => val === form.password || $t('rules.sameAs', { name: 'passwordConfirmation', field: 'password' })
                        ]"
                        >
                        <template v-slot:append>
                          <q-icon
                            :name="isPwdCnf ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwdCnf = !isPwdCnf"
                          />
                        </template>
                      </q-input>
                      <div class="row items-center justify-end">
                        <div class="col-auto">
                          <q-btn no-caps color="primary" label="register" @click="register" :loading="loading" :disabled="loading" />
                        </div>
                      </div>
                    </q-form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-auto q-pa-sm text-right">

          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Languages from 'src/components/Languages.vue'

export default {
  name: 'LoginPage',

  components: {
    Languages
  },
  data () {
    return {
      form: {
        email: '',
        username: '',
        password: '',
        passwordConfirmation: ''
      },
      loading: false,
      isPwd: true,
      isPwdCnf: true
    }
  },
  methods: {
    register () {
      this.$refs.myForm.validate().then(success => {
        if (success) {
          this.loading = true
          this.$auth.register(this.form).then(({ data }) => {
            this.loading = false
            this.$q.notify({
              color: 'primary',
              type: 'axios-notify',
              message: 'Register is successfull',
              caption: 'Confirmation email has been sent please check your email'
            })
            this.$router.push('/login')
          }).catch(e => {
            this.loading = false
            let errMessage = this.$g.errorMessage(e)
            this.$q.notify({
              type: 'axios-notify',
              message: 'Login Failed',
              caption: errMessage
            })
          })
        }
      })
    }
  }
}
</script>
