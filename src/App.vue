<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { LocalStorage } from 'quasar'
export default {
  name: 'App',
  mounted () {
    this.$q.dark.set(LocalStorage.getItem('dark') || false)
    this.$i18n.locale = LocalStorage.getItem('lang') || this.$i18n.locale
  }
}
</script>
