<template>
  <q-page class="q-pa-md" :class="$q.dark.isActive ? 'bg-blue-grey-10' : 'bg-blue-grey-1'">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-sm-4">
      \{{titleCase name}}
      </div>
    </div>
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
