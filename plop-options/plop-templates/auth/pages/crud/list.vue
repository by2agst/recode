<template>
  <div class="row q-col-gutter-md">
    <div class="col-12">
      <q-table
        title="{{titleCase name}}"
        :data="dataTable"
        :columns="columns"
        :grid="$q.screen.xs"
        :pagination.sync="pagination"
        :visible-columns="visibleColumns"
        row-key="_id"
        >
        <template v-slot:top>
          <div class="full-width">
            <div class="row">
              <div class="col-12 col-md-6 q-mb-sm q-gutter-sm">
                <q-btn no-caps color="primary" label="Add" icon="fas fa-plus" to="/{{dashCase role}}/{{dashCase name}}/edit"/>
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
              <div class="col-12 col-md-6 q-mb-sm">
                <div class="row" :class="{ 'justify-end': $q.screen.md }">
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
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-slot:body-cell-companyAgent="props">
          <q-td :props="props">
            <q-item dense class="q-px-none">
              <q-item-section avatar>
                <q-avatar>
                  <q-avatar color="blue-grey" text-color="white">\{{props.value.substring(0,1)}}</q-avatar>
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>
                  \{{props.value}}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-td>
        </template>
        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <q-btn flat round class="square" color="primary" icon="far fa-edit" @click="edit(props.value)">
              <q-tooltip anchor="top middle" self="center middle">
                Edit
              </q-tooltip>
            </q-btn>
            <q-btn flat round class="square" color="negative" icon="far fa-trash-alt" @click="confirmToDelete = true">
              <q-tooltip anchor="top middle" self="center middle">
                Delete
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
                    <div class="col-12 text-primary">{{ p.label }}</div>
                    <div class="col-12">{{ props.row[p.name] }}</div>
                  </div>
                </div>
              </q-card-section>
              <q-separator />
              <q-card-section class="flex flex-center">
                <div class="q-gutter-md">
                  <q-btn flat color="primary" icon="far fa-edit" label="Edit" @click="edit(props.row._id)" />
                  <q-btn flat color="negative" icon="far fa-trash-alt" label="Delete" @click="confirmToDelete = true" />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </template>
        <!-- end of mobile -->
      </q-table>
    </div>
    <dialog-icon :dialog-icon-model="confirmToDelete" @updateDialogModel="updateDialogModel" />
  </div>
</template>

<script>
import dataUser from 'src/assets/dummy/users'
import { crud } from 'src/components/mixin/crud'
import DialogIcon from 'src/components/DialogIcon.vue'

export default {
  name: '{{ pascalCase name }}',
  components: {
    DialogIcon
  },
  mixins: [
    crud()
  ],
  data () {
    return {
      fileName: '{{ pascalCase name }}',
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 10
      },
      visibleColumns: ['companyAgent'],
      columns: [
        {
          name: 'companyAgent',
          required: true,
          label: 'User',
          align: 'left',
          field: row => row.companyAgent,
          format: val => `${val}`,
          headerClasses: 'bg-blue-grey text-white',
          classes: 'bg-grey-2 ellipsis',
          sortable: true
        }, {
          name: 'action',
          required: true,
          label: 'Action',
          align: 'center',
          field: row => row._id,
          format: val => `${val}`,
          headerClasses: 'bg-grey-2',
          sortable: true
        }
      ],
      dataTable: dataUser,
      confirmToDelete: false
    }
  },
  methods: {
    updateDialogModel (val) {
      this.confirmToDelete = val
    },
    edit (id) {
      this.$router.push(`/{{dashCase role}}/{{dashCase name}}/edit/${id}`)
    }
  }
}
</script>
