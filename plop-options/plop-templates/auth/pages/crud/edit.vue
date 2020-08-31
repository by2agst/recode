<template>
  <q-page class="bg-blue-grey-1 q-pa-md">
    <div class="bg-white q-py-md">
      <div class="row justify-center q-col-gutter-md">
        <div class="col-12 col-sm-8">
          <div class="full-width">
            <q-form class="q-gutter-y-md" ref="myForm" @submit="save">
              <div class="row justify-center">
                <div class="col-sm-12 col-md-8">
                  <div class="row q-col-gutter-sm items-center">
                    <div class="col-4 text-right">
                      <div class="q-pt-xs q-pb-lg">
                        Text
                      </div>
                    </div>
                    <div class="col-8">
                      <q-input
                        dense
                        lazy-rules
                        outlined
                        ref="text"
                        v-model="form.text"
                        placeholder="Text"
                        :rules="[
                          val => !!val || $t('rules.required', { name: 'text' })
                        ]"
                      />
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
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      serviceName: '{{ lowerCase name }}',
      data: {
        createdAt: ''
      },
      form: {
        text: ''
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    back () {
      this.$router.replace(`/${this.$auth.role()}/${this.serviceName}`)
    },
    getData () {
      this.$axios.get(`${this.serviceName}/${this.id}`).then(({ data }) => {
        this.data = data
        this.form = this.$_.pick(data, ['text'])
      })
    },
    save () {
      this.$refs.myForm.validate().then(success => {
        if (success) {
          this.$axios.patch(`${this.serviceName}/${this.id}`, this.form).then(({ data }) => {
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
