<template>
  <q-page class="bg-blue-grey-1 q-pa-md">
    <div class="bg-white q-py-md">
      <div class="row justify-center q-col-gutter-md">
        <div class="col-12 col-sm-8">
          <div class="full-width">
            <div class="row justify-center">
              <div class="col-sm-12 col-md-8">
                <div class="row q-col-gutter-sm items-center">
                  <div class="col-4 text-right">
                    <div class="q-pt-xs q-pb-lg">
                      Name
                    </div>
                  </div>
                  <div class="col-8">
                    <q-input
                      dense
                      lazy-rules
                      outlined
                      ref="name"
                      v-model="form.name"
                      placeholder="Name"
                      :rules="[
                        val => !!val || $t('rules.required', { name: 'name' })
                      ]"
                    />
                  </div>
                </div>
                <div class="row q-col-gutter-sm items-center">
                  <div class="col-8 offset-4">
                    <div class="q-gutter-sm">
                      <q-btn no-caps color="negative" label="Cancel" @click="$router.replace('/admin/{{ dashCase name }}')" />
                      <q-btn no-caps color="primary" label="Save" @click="save" />
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
  data () {
    return {
      form: {
        name: ''
      }
    }
  },
  methods: {
    save () {
      console.log('%c-save', 'color: cyan;', this.form)
      this.$refs.name.validate()

      if (this.$refs.name) {
        this.$q.notify({
          type: 'negative',
          message: `Save failed`
        })
      } else {
        this.$q.notify({
          type: 'positive',
          message: `Save successful`
        })
      }
    }
  }
}
</script>
