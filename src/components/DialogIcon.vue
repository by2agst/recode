<template>
  <q-dialog v-model="dialogIcon.model" persistent transition-show="scale" transition-hide="scale" @hide="hide">
    <q-card class="bg-white text-negative" style="width: 400px; max-width: 80vw;">
      <q-card-section class="text-center">
        <q-icon name="far fa-times-circle q-mb-md" style="font-size: 100px;"/>
        <div class="text-h6">{{ dialogIcon.title }}</div>
      </q-card-section>

      <q-card-section class="q-py-sm text-center">
        <p>{{ dialogIcon.text }}</p>
      </q-card-section>

      <q-card-actions align="right" class="bg-negative text-white">
        <q-btn no-caps flat label="Cancel" v-close-popup />
        <q-btn no-caps flat label="Ok" @click="dialogIcon.model = false" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'ComponentDialogIcon',
  props: {
    dialogIconModel: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  watch: {
    dialogIconModel: function (newVal) {
      this.dialogIcon.model = newVal
    }
  },
  data () {
    return {
      dialogIcon: {
        model: false,
        title: 'Are you Sure?',
        text: 'Do you realy want to delete these record?\nThis process can\'t be undone',
        button: {

        }
      }
    }
  },
  mounted () {
  },
  methods: {
    hide () {
      this.$emit('updateDialogModel', false)
    }
  }
}
</script>
