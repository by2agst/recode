<template>
  <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
    <q-card>
      <q-card-section>
        <div v-for="(p, i) in props.colsMap" :key="i">
          <div class="row q-my-sm" v-if="p.name === '#'">
            <div class="col-12 text-primary">{{ p.label }} {{ props.rowIndex + 1 }}</div>
          </div>
          <div class="row q-my-sm" v-else-if="p.name !== 'action'">
            <div class="col-12 text-primary">{{ p.label }}</div>
            <div class="col-12">{{ getLabelValue(props.row, p.name).value }}</div>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section class="flex flex-center">
        <div class="q-gutter-x-md">
          <q-btn flat no-caps color="primary" icon="far fa-edit" label="Edit" @click="edit(props.row._id)" />
          <q-btn flat no-caps color="negative" icon="far fa-trash-alt" label="Delete" @click="confirmDelete(props.row._id)" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { crud } from 'src/mixin/crud'

export default {
  name: 'ComponentTableMobile',
  props: {
    props: {
      type: Object
    },
    service: {
      type: String
    }
  },
  mixins: [
    crud()
  ],
  data () {
    return {
      serviceName: this.service
    }
  }
}
</script>
