<template>
  <q-page class="bg-blue-grey-1 q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-12">
        <div class="text-h5 text-center">{{titleCase name}}</div>
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
