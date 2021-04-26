<template>
  <q-page class="q-pa-md" :class="$q.dark.isActive ? 'bg-blue-grey-10' : 'bg-blue-grey-1'">
    <router-view />
  </q-page>
</template>

<script>
export default {
  name: '{{pascalCase name}}',
  data () {
    return {
    }
  }
}
</script>
