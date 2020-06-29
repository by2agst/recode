<template>
  <div class="row q-col-gutter-md">
    <div class="col-12">
      <q-table
        title="Users"
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
              <div class="col-12 col-sm-6 q-mb-sm q-gutter-sm">
                <q-btn no-caps color="primary" label="Add" icon="fas fa-plus" to="/admin/users/edit"/>
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
              <div class="col-12 col-sm-6 q-mb-sm">
                <div class="row" :class="{ 'justify-end': $q.screen.gt.xs }">
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

        <template v-slot:body-cell-confirmed="props">
          <q-td :props="props">
            <div :class="{ 'text-primary': props.value, 'text-negative': !props.value }">
              <q-icon
                size="xs"
                :name="props.value ? 'fas fa-check' : 'fas fa-times'"
              />
            </div>
          </q-td>
        </template>

        <template v-slot:body-cell-blocked="props">
          <q-td :props="props">
            <q-chip
              size="sm"
              :class="{ 'bg-negative': props.row.blocked, 'bg-primary': !props.row.blocked }"
              text-color="white">
              {{props.value}}
            </q-chip>
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
import { crud } from 'src/components/mixin/crud'
import DialogIcon from 'src/components/DialogIcon.vue'

export default {
  name: 'Users',
  components: {
    DialogIcon
  },
  mixins: [
    crud()
  ],
  mounted () {
    this.$axios.get('users').then(({ data }) => {
      this.dataTable = data
    }).catch(e => {
      console.log('%c-e', 'color: yellow;', e)
    })
  },
  data () {
    return {
      fileName: 'Users',
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 10
      },
      visibleColumns: ['username', 'email', 'confirmed', 'blocked'],
      columns: [
        {
          name: 'username',
          required: true,
          label: 'Username',
          align: 'left',
          field: row => row.username,
          format: val => `${val}`,
          headerClasses: 'bg-blue-grey text-white',
          classes: 'bg-grey-2 ellipsis',
          sortable: true
        }, {
          name: 'email',
          label: 'Email',
          align: 'left',
          field: row => row.email,
          format: val => `${val}`,
          headerClasses: 'bg-grey-2',
          sortable: true
        }, {
          name: 'confirmed',
          label: 'Confirmed',
          align: 'left',
          field: row => row.confirmed,
          headerClasses: 'bg-grey-2',
          sortable: true
        }, {
          name: 'blocked',
          label: 'Blocked',
          align: 'left',
          field: row => row.blocked,
          format: val => val ? 'blocked' : 'active',
          headerClasses: 'bg-grey-2',
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
      dataTable: [],
      confirmToDelete: false
    }
  },
  methods: {
    updateDialogModel (val) {
      this.confirmToDelete = val
    },
    edit (id) {
      this.$router.push(`/admin/users/edit/${id}`)
    }
  }
}
</script>
