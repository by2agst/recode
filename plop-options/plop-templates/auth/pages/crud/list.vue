<template>
  <div class="row q-col-gutter-md">
    <div class="col-12">
      <q-table
        title="{{titleCase name}}"
        @request="onRequest"
        :data="dataTable"
        :columns="columns"
        :filter="filter"
        :grid="$q.screen.xs"
        :loading="loading"
        :pagination.sync="pagination"
        :visible-columns="visibleColumns"
        row-key="id"
        binary-state-sort
        >

        <template v-slot:loading>
          <q-inner-loading showing color="primary" />
        </template>

        <template v-slot:top>
          <div class="full-width">
            <div class="row justify-between">
              <div class="col-12 col-sm-auto q-mb-sm q-gutter-sm">
                <q-btn no-caps color="primary" label="Add" icon="fas fa-plus" to="/{{dashCase role}}/{{dashCase name}}/add"/>
                <q-btn-dropdown no-caps color="positive" label="Export">
                  <q-list>
                    <q-item clickable v-close-popup @click="exportExcel">
                      <q-item-section>
                        <q-item-label>Excel</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup @click="exportPdf">
                      <q-item-section>
                        <q-item-label>PDF</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
              <div class="col-12 col-sm-auto q-mb-sm">
                <div class="row q-col-gutter-sm" :class="{ 'justify-end': $q.screen.gt.xs }">
                  <div class="col-auto">
                    <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
                      <template v-slot:append>
                        <q-icon name="search" />
                      </template>
                    </q-input>
                  </div>
                  <div class="col-auto">
                    <q-select
                      v-model="visibleColumns"
                      multiple
                      outlined
                      dense
                      options-dense
                      :display-value="$q.lang.table.columns"
                      emit-value
                      map-options
                      :options="optionsColumns"
                      option-value="name"
                      options-cover
                      style="min-width: 150px;"
                    />
                  </div>
                  <div class="col-auto">
                    <q-btn
                      padding="12px"
                      icon="fas fa-sync"
                      @click="refresh"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <q-btn flat round class="square" color="warning" icon="far fa-edit" @click="edit(props.value)">
              <q-tooltip anchor="top middle" self="center middle">
                \{{$t('table.edit')}}
              </q-tooltip>
            </q-btn>
            <q-btn flat round class="square" color="info" icon="far fa-eye" @click="view(props.row)" >
              <q-tooltip anchor="top middle" self="center middle">
                \{{$t('table.view')}}
              </q-tooltip>
            </q-btn>
            <q-btn flat round class="square" color="negative" icon="far fa-trash-alt" @click="confirmDelete(props.value)">
              <q-tooltip anchor="top middle" self="center middle">
                \{{$t('table.delete')}}
              </q-tooltip>
            </q-btn>
          </q-td>
        </template>

        <!-- mobile -->
        <template v-slot:item="props">
          <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
            <q-card>
              <q-card-section>
                <div v-for="(p, i) in props.colsMap" :key="i">
                  <div class="row q-my-sm" v-if="p.name !== 'action'">
                    <div class="col-12 text-primary">\{{ p.label }}</div>
                    <div class="col-12">\{{ getValue(props.cols, p.name) }}</div>
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
        <!-- end of mobile -->
      </q-table>
    </div>

    <q-dialog v-model="viewModal">
      <q-card style="width: 600px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none">
          <q-space />
          <div class="text-h6">\{{$t('table.detail')}}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section v-if="dataModal" class="q-gutter-y-sm">
          <div class="row justify-between" v-for="(value, key) in dataModal" :key="key">
            <div class="col-auto text-bold">\{{getLabelValue(dataModal, key).label}}</div>
            <div class="col-auto text-right" :name="value">\{{getLabelValue(dataModal, key).value}}</div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { crud } from 'src/mixin/crud'

export default {
  name: '{{ pascalCase name }}',
  mixins: [
    crud()
  ],
  data () {
    return {
      serviceName: '{{ lowerCase name }}',
      fileName: '{{ pascalCase name }}',
      visibleColumns: []
    }
  },
  computed: {
    columns () {
      const classes = this.$q.dark.isActive ? 'bg-grey-9' : 'bg-blue-grey-1'
      return [
        {
          name: 'action',
          required: true,
          label: this.$t('table.action'),
          align: 'center',
          field: row => row._id,
          format: val => `${val}`,
          headerClasses: classes,
          sortable: true
        }
      ]
    }
  }
}
</script>
