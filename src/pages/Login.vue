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
                  Re<div class="inline-block text-accent">:</div><div class="inline-block text-accent flip-horizontal">c</div>ode</div>
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
                      ref="username"
                      v-model="form.username"
                      label="username / email / phone number"
                      :rules="[
                        val => !!val || $t('rules.required', { name: 'usename' }),
                        val => val.length > 6 || $t('rules.minLength', { name: 'usename', length: 6 })
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
                        <q-btn no-caps color="primary" label="login" @click="login" />
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
        username: 'username',
        password: 'password'
      },
      isPwd: true
    }
  },
  methods: {
    login () {
      this.$refs.username.validate()
      this.$refs.password.validate()

      if (this.$refs.username.hasError || this.$refs.password.hasError) {
        // this.formHasError = true
      } else {
        this.$router.replace('/admin/dashboard')
      }
    }
  }
}
</script>
