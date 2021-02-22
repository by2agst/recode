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
                <router-link to="/login" class="text-primary">{{$t('auth.signIn')}}</router-link>
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
                    <q-form class="q-gutter-y-md" ref="myForm" @submit="send">
                      <h5>{{$t('auth.forgotPassword')}}</h5>
                      <q-input
                        dense
                        lazy-rules
                        reactive-rules
                        ref="email"
                        v-model="form.email"
                        type="email"
                        :label="$t('auth.forgot.form.email')"
                        :rules="[
                          val => !!val || $t('rules.required', { name: $t('auth.forgot.form.email') }),
                          val => val.length > 6 || $t('rules.minLength', { name: $t('auth.forgot.form.email'), length: 6 })
                        ]"
                      />
                      <div class="row items-center justify-end">
                        <div class="col-auto">
                          <q-btn
                            no-caps
                            color="primary"
                            @click="send"
                            :label="$t('auth.forgot.button.send')"
                            :loading="loading"
                            :disabled="loading"
                          />
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
        email: ''
      },
      loading: false,
      isPwd: true,
      isPwdCnf: true
    }
  },
  methods: {
    send () {
      this.$refs.myForm.validate().then(success => {
        if (success) {
          this.loading = true
          this.$auth.passwordForgot(this.form).then(({ data }) => {
            this.loading = false
            this.$q.notify({
              color: 'primary',
              type: 'axios-notify',
              message: this.$t('auth.forgot.sendSuccess'),
              caption: this.$t('auth.forgot.checkEmail')
            })
            this.$router.push('/login')
          }).catch(e => {
            this.loading = false
            const errMessage = this.$g.errorMessage(e)
            this.$q.notify({
              type: 'axios-notify',
              message: this.$t('auth.forgot.sendFailed'),
              caption: errMessage
            })
          })
        }
      })
    }
  }
}
</script>
