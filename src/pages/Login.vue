<template>
  <q-page>
    <div class="row">
      <div class="col-12 col-sm-5 bg-dark text-white">
        <div class="column window-height" :class="$q.dark.isActive ? 'bg-0' : 'bg-1 text-black'">
          <div class="col">
            <div class="column full-height justify-center">
              <div class="col-auto text-center">
                <div class="text-h3">
                  re<div class="inline-block text-accent">:</div><div class="inline-block text-accent flip-horizontal">c</div>ode
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
        <div class="column window-height" :class="$q.dark.isActive ? 'bg-dark' : 'bg-white text-black'">
          <div class="col-auto q-pa-sm">
            <div class="row justify-between items-center">
              <div class="col-auto">
                {{$t('auth.login.dontHaveAccount')}} <router-link to="/register" class="text-primary">{{$t('auth.signUp')}}</router-link>
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
                    <q-form class="q-gutter-y-md" ref="myForm" @submit="login">
                      <h5>{{$t('auth.signIn')}}</h5>
                      <q-input
                        dense
                        lazy-rules
                        reactive-rules
                        ref="identifier"
                        v-model="form.identifier"
                        :label="$t('auth.login.form.identifier')"
                        :rules="[
                          val => !!val || $t('rules.required', { name: $t('auth.login.form.identifier') }),
                          val => val.length > 6 || $t('rules.minLength', { name: $t('auth.login.form.identifier'), length: 6 })
                        ]"
                      />
                      <q-input
                        dense
                        lazy-rules
                        reactive-rules
                        ref="password"
                        v-model="form.password"
                        v-on:keyup.enter="login"
                        :label="$t('auth.login.form.password')"
                        :type="isPwd ? 'password' : 'text'"
                        :rules="[
                          val => !!val || $t('rules.required', { name: $t('auth.login.form.password') }),
                          val => val.length > 6 || $t('rules.minLength', { name: $t('auth.login.form.password'), length: 6 })
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
                          <q-checkbox
                            v-model="form.rememberMe"
                            :label="$t('auth.login.form.rememberMe')"
                            size="xs"
                            color="secondary" class="text-secondary"
                          />
                        </div>
                      </div>
                      <div class="row items-center justify-between">
                        <div class="col-auto">
                          <router-link to="/forgot-password" class="text-primary">
                            {{$t('auth.login.forgotPassword')}}
                          </router-link>
                        </div>
                        <div class="col-auto">
                          <q-btn
                            no-caps
                            color="primary"
                            @click="login"
                            :label="$t('auth.login.button.login')"
                            :loading="loading"
                            :disabled="loading"
                          />
                        </div>
                      </div>
                      <!-- <div class="column items-center justify-between q-my-xl">
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
                      </div> -->
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
import dialogIcon from 'src/components/dialog/Icon.vue'
import languages from 'src/components/Languages.vue'

export default {
  name: 'LoginPage',

  components: {
    languages
  },
  data () {
    return {
      form: {
        identifier: '',
        password: '',
        rememberMe: true
      },
      loading: false,
      isPwd: true
    }
  },
  mounted () {
    const { params } = this.$route.params
    if (params === 'confirmed') {
      this.$q.dialog({
        component: dialogIcon,
        parent: this,
        persistent: true,
        title: this.$t('auth.login.congratulations'),
        text: this.$t('auth.login.accountActive')
      }).onOk(() => {
        this.$router.replace('/login')
      })
    }
  },
  methods: {
    login () {
      this.$refs.myForm.validate().then(success => {
        if (success) {
          this.loading = true
          this.$auth.login(this.form).then(({ user }) => {
            this.loading = false
            this.$router.replace(`/${user.role.type}/dashboard`)
          }).catch(e => {
            this.loading = false
            const errMessage = this.$g.errorMessage(e)
            this.$q.notify({
              type: 'axios-notify',
              message: this.$t('auth.login.loginFailed'),
              caption: errMessage
            })
          })
        }
      })
    }
  }
}
</script>
