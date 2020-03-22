<template>
  <q-page>
    <div class="row">
      <div class="col-12 col-sm-5 bg-dark text-white">
        <div class="column window-height bg-0">
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
          <div class="col-auto q-pa-sm text-right">
            Don't have an account yet? <router-link to="/" class="text-primary">Sign Up</router-link>
          </div>
          <div class="col">
            <div class="column full-height justify-center">
              <div class="col-auto text-center">
                <div class="row justify-center">
                  <div class="col-10 col-md-8 col-lg-6 q-gutter-md">
                    <h5>Sign In</h5>
                    <q-input dense v-model="username" label="username / email / phone number" />
                    <q-input dense v-model="password" label="password" type="password" />
                    <div class="row items-center justify-between">
                      <div class="col-auto">
                        <router-link to="/" class="text-primary">forgot password?</router-link>
                      </div>
                      <div class="col-auto">
                        <q-btn no-caps color="primary" label="login" to="/user/dashboard" />
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
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  // name: 'PageName',
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>
