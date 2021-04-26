<template>
  <q-toggle
    v-model="dark"
    checked-icon="far fa-moon"
    color="dark"
    unchecked-icon="far fa-sun"
    @input="changeMode"
  />
</template>

<script>
import { LocalStorage } from 'quasar'

export default {
  name: 'ComponentDark',

  data () {
    return {
      dark: LocalStorage.getItem('dark') || false
    }
  },
  methods: {
    changeMode () {
      const dark = this.dark
      this.$q.dark.set(dark)
      LocalStorage.set('dark', dark)
    }
  }
}
</script>
