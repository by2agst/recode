<template>
  <div class="q-py-md" :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'">
    <div class="row justify-center q-col-gutter-md">
      <div class="col-12 col-sm-8">
        <div class="full-width">
          <q-form class="q-gutter-y-md" ref="myForm" @submit="save">
            <div class="row justify-center">
              <div class="col-sm-12 col-md-8">
                <div class="row q-col-gutter-sm items-center">
                  <div class="col-4 text-right">
                    <div class="q-pt-xs q-pb-lg">
                      Email
                    </div>
                  </div>
                  <div class="col-8">
                    <q-input
                      dense
                      lazy-rules
                      outlined
                      ref="email"
                      v-model="form.email"
                      placeholder="email"
                      :rules="[
                        val => !!val || $t('rules.required', { name: 'email' })
                      ]"
                    />
                  </div>
                </div>
                <div class="row q-col-gutter-sm items-center">
                  <div class="col-4 text-right">
                    <div class="q-pt-xs q-pb-lg">
                      Username
                    </div>
                  </div>
                  <div class="col-8">
                    <q-input
                      dense
                      lazy-rules
                      outlined
                      ref="email"
                      v-model="form.username"
                      placeholder="username"
                      :rules="[
                        val => !!val || $t('rules.required', { name: 'username' })
                      ]"
                    />
                  </div>
                </div>
                <div class="row q-col-gutter-sm items-center">
                  <div class="col-4 text-right">
                    <div class="q-pt-xs q-pb-lg">
                      Password
                    </div>
                  </div>
                  <div class="col-8">
                    <q-input
                      dense
                      lazy-rules
                      outlined
                      ref="email"
                      v-model="form.password"
                      placeholder="password"
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
                  </div>
                </div>
                <div class="row q-col-gutter-sm items-center">
                  <div class="col-4 text-right">
                    <div class="q-pt-xs q-pb-lg">
                      Full Name
                    </div>
                  </div>
                  <div class="col-8">
                    <q-input
                      dense
                      lazy-rules
                      outlined
                      ref="fullName"
                      v-model="form.fullName"
                      placeholder="full name"
                      :rules="[
                        val => !!val || $t('rules.required', { name: 'fullName' })
                      ]"
                    />
                  </div>
                </div>
                <div class="row q-col-gutter-sm items-center">
                  <div class="col-4 text-right">
                    <div class="q-pt-xs q-pb-lg">
                      Confirmed
                    </div>
                  </div>
                  <div class="col-8">
                    <div class="q-pb-lg">
                      <q-toggle
                        v-model="form.confirmed"
                        checked-icon="check"
                        color="positive"
                        :label="form.confirmed ? 'yes' : 'no'"
                        unchecked-icon="clear"
                      />
                    </div>
                  </div>
                </div>
                <div class="row q-col-gutter-sm items-center">
                  <div class="col-4 text-right">
                    <div class="q-pt-xs q-pb-lg">
                      Blocked
                    </div>
                  </div>
                  <div class="col-8">
                    <div class="q-pb-lg">
                      <q-toggle
                        v-model="form.blocked"
                        checked-icon="check"
                        color="negative"
                        :label="form.blocked ? 'yes' : 'no'"
                        unchecked-icon="clear"
                      />
                    </div>
                  </div>
                </div>
                <div class="row q-col-gutter-sm items-center">
                  <div class="col-8 offset-4">
                    <div class="q-gutter-sm">
                      <q-btn no-caps color="negative" label="Cancel" @click="back" />
                      <q-btn no-caps color="primary" label="Save" @click="save" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      serviceName: 'users',
      isPwd: false,
      form: {
        email: '',
        username: '',
        password: '',
        fullName: '',
        confirmed: true,
        blocked: false
      }
    }
  },
  mounted () {
  },
  methods: {
    back () {
      this.$router.replace(`/${this.$auth.role()}/${this.serviceName}`)
    },
    save () {
      this.$refs.myForm.validate().then(success => {
        if (success) {
          this.$axios.post(`${this.serviceName}`, this.form).then(({ data }) => {
            this.$q.notify({
              type: 'axios-notify',
              color: 'positive',
              icon: 'far fa-check-circle',
              message: 'Success',
              caption: 'Data updated'
            })
          }).catch(e => {
            const errMessage = this.$g.errorMessage(e)
            this.$q.notify({
              type: 'axios-notify',
              message: 'Update failed',
              caption: errMessage
            })
          })
        }
      })
    }
  }
}
</script>
