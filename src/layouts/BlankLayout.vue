<template>
  <q-layout view="hHh Lpr fFf">

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'BlankLayout',

  data () {
    return {
      leftDrawer: false
    }
  }
}
</script>
