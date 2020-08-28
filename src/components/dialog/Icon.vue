<template>
  <q-dialog ref="dialog" @hide="onDialogHide" persistent>
    <q-card class="q-pa-md" style="width: 370px; max-width: 80vw; border-radius: 7px">
      <q-card-section class="text-center" :class="headerClass || 'text-positive'" >
        <q-icon :name="icon || 'far fa-check-circle'" class="q-mb-md" style="font-size: 100px;"/>
        <div class="text-h6">{{ title }}</div>
      </q-card-section>

      <q-card-section class="q-py-sm text-center">
        <p>{{ text }}</p>
      </q-card-section>

      <q-card-actions align="around">
        <q-btn :color="buttonColor || 'positive'" flat no-caps label="Cancel" v-close-popup v-if="cancelButton || false" />
        <q-btn :color="buttonColor || 'positive'" flat no-caps label="Ok" @click="onOKClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'ComponentDialogIcon',
  props: ['headerClass', 'title', 'text', 'icon', 'cancelButton', 'buttonColor'],

  methods: {
    show () {
      this.$refs.dialog.show()
    },

    hide () {
      this.$refs.dialog.hide()
    },

    onDialogHide () {
      this.$emit('hide')
    },

    onOKClick () {
      this.$emit('ok')
      this.hide()
    },

    onCancelClick () {
      this.hide()
    }
  }
}
</script>
