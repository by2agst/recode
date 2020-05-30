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
          <q-btn no-caps color="primary" label="Add" icon="fas fa-plus" class="q-mr-sm" to="/admin/users/edit"/>
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

          <q-space />

          <q-select
            v-model="visibleColumns"
            multiple
            outlined
            dense
            options-dense
            :display-value="$q.lang.table.columns"
            emit-value
            map-options
            :options="columns"
            option-value="name"
            options-cover
            style="min-width: 150px;"
          />
        </template>

        <template v-slot:body-cell-companyAgent="props">
          <q-td :props="props">
            <q-item dense class="q-px-none">
              <q-item-section avatar>
                <q-avatar>
                  <q-avatar color="blue-grey" text-color="white">{{props.value.substring(0,1)}}</q-avatar>
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>
                  {{props.value}}
                </q-item-label>
                <q-item-label caption>
                  {{jobName(props.row.type)}}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-td>
        </template>
        <template v-slot:body-cell-companyName="props">
          <q-td :props="props">
            <q-item dense class="q-px-none">
              <q-item-section>
                <q-item-label>
                  {{props.value}}
                </q-item-label>
                <q-item-label caption>
                  {{props.row.country}}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-td>
        </template>
        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <q-chip size="sm" :color="statusProps(props.row.status, 'color')" text-color="white">
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
  name: 'Users',
  components: {
    DialogIcon
  },
  mixins: [
    crud()
  ],
  data () {
    return {
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 10
      },
      visibleColumns: ['companyAgent', 'companyName', 'status'],
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
          name: 'companyName',
          label: 'Country',
          align: 'left',
          field: row => row.companyName,
          format: val => `${val}`,
          headerClasses: 'bg-grey-2',
          sortable: true
        }, {
          name: 'status',
          label: 'Status',
          align: 'left',
          field: row => row.status,
          format: val => `${this.statusProps(val)}`,
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
      dataTable: dataUser,
      confirmToDelete: false
    }
  },
  methods: {
    updateDialogModel (val) {
      this.confirmToDelete = val
    },
    edit (id) {
      this.$router.push(`/admin/users/edit/${id}`)
    },
    jobName (code) {
      let job = code
      switch (code) {
        case 1:
          job = 'CEO'
          break
        case 2:
          job = 'Manager'
          break
        case 3:
          job = 'Designer'
          break
        case 4:
          job = 'Developer'
          break
      }
      return job
    },
    statusProps (code, key = 'status') {
      let props = {
        status: '',
        color: ''
      }
      if (code === 1) {
        props = {
          status: 'Cheking',
          color: 'grey'
        }
      } else if (code === 2) {
        props = {
          status: 'Pending',
          color: 'warning'
        }
      } else if (code === 3) {
        props = {
          status: 'Success',
          color: 'positive'
        }
      } else if (code === 4) {
        props = {
          status: 'Danger',
          color: 'negative'
        }
      } else if (code === 5) {
        props = {
          status: 'Rejected',
          color: 'accent'
        }
      } else if (code === 6) {
        props = {
          status: 'Canceled',
          color: 'primary'
        }
      }
      return props[key]
    }
  }
}
</script>
