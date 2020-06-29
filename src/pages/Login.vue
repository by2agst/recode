<template>
  <q-page>
    <div class="row">
      <div class="col-12 col-sm-5 bg-dark text-white">
        <div class="column window-height bg-0">
          <div class="full-width window-height absolute overflow-hidden">
            <div class="landing__space" />
          </div>
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
                Don't have an account yet? <router-link to="/" class="text-primary">Sign Up</router-link>
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
                  <div class="col-10 col-md-8 col-lg-6 q-gutter-md">
                    <h5>Sign In</h5>
                    <q-input
                      dense
                      lazy-rules
                      ref="identifier"
                      v-model="form.identifier"
                      label="username / email"
                      :rules="[
                        val => !!val || $t('rules.required', { name: 'identifier' }),
                        val => val.length > 6 || $t('rules.minLength', { name: 'identifier', length: 6 })
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
                    <div class="row items-center justify-between">
                      <div class="col-auto">
                        <router-link to="/" class="text-primary">forgot password?</router-link>
                      </div>
                      <div class="col-auto">
                        <q-btn no-caps color="primary" label="login" @click="login" :loading="loading" :disabled="loading" />
                      </div>
                    </div>
                    <div class="row items-center justify-between q-my-xl">
                      <q-separator />
                      <div class="col-auto q-px-sm text-grey">OR</div>
                      <q-separator />
                    </div>
                    <div class="row items-center justify-between">
                      <div class="col-xs-12 col-md-4">
                        <q-btn flat no-caps dense color="primary" label="facebook" icon="fab fa-facebook-square"/>
                      </div>
                      <div class="col-xs-12 col-md-4">
                        <q-btn flat no-caps dense color="info" label="twitter" icon="fab fa-twitter-square"/>
                      </div>
                      <div class="col-xs-12 col-md-4">
                        <q-btn flat no-caps dense color="negative" label="google" icon="fab fa-google-plus-square"/>
                      </div>
                    </div>
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
        identifier: 'admin@recode.com',
        password: '12345678',
        rememberMe: true
      },
      loading: false,
      isPwd: true
    }
  },
  methods: {
    login () {
      this.$refs.identifier.validate()
      this.$refs.password.validate()

      if (this.$refs.identifier.hasError || this.$refs.password.hasError) {
        // this.formHasError = true
        return true
      } else {
        this.loading = true
        this.$auth.login({ body: this.form }).then(({ user }) => {
          console.log('%c-user', 'color: cyan;', user)
          this.loading = false
          this.$router.replace(`/${user.role.type}/dashboard`)
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
    }
  }
}
</script>
