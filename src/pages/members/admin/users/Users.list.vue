<template>
  <div class="row q-col-gutter-md">
    <div class="col-12">
      <q-table
        title="Users"
        :data="data"
        :columns="columns"
        :grid="$q.screen.xs"
        :pagination.sync="pagination"
        :visible-columns="visibleColumns"
        row-key="recordID"
        >
        <template v-slot:top>
          <q-btn no-caps color="primary" label="Add" icon="fas fa-plus" class="q-mr-sm"/>
          <q-btn-dropdown no-caps color="positive" label="Export">
            <q-list>
              <q-item clickable v-close-popup @click="exportExcel">
                <q-item-section>
                  <q-item-label>Excel</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
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
            <q-btn flat round class="square" color="primary" icon="far fa-edit">
              <q-tooltip anchor="top middle" self="center middle">
                Edit
              </q-tooltip>
            </q-btn>
            <q-btn flat round class="square" color="negative" icon="far fa-trash-alt" @click="confirm = true">
              <q-tooltip anchor="top middle" self="center middle">
                Delete
              </q-tooltip>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
    <q-dialog v-model="confirm" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-white text-negative" style="width: 400px; max-width: 80vw;">
        <q-card-section class="text-center">
          <q-icon name="far fa-times-circle q-mb-md" style="font-size: 100px;"/>
          <div class="text-h6">Are you Sure?</div>
        </q-card-section>

        <q-card-section class="q-py-sm text-center">
          <p>Do you realy want to delete these record?<br>
          This process can't be undone</p>
        </q-card-section>

        <q-card-actions align="right" class="bg-negative text-white">
          <q-btn no-caps flat label="Cancel" v-close-popup />
          <q-btn no-caps flat label="Ok" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import datauser from 'src/assets/dummy/users'
import XLSX from 'xlsx'

export default {
  name: 'Users',
  data () {
    return {
      pagination: {
        // sortBy: 'action',
        descending: false,
        page: 1,
        rowsPerPage: 10
        // rowsNumber: xx if getting data from a server
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
          field: row => row.recordID,
          format: val => `${val}`,
          headerClasses: 'bg-grey-2',
          sortable: true
        }
      ],
      data: datauser,
      confirm: false
    }
  },
  methods: {
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
    },
    convertData () {
      let newData = this.data.map(r => {
        return this.visibleColumns.map(col => {
          return (r[col] || '')
        })
      })

      newData.unshift(this.visibleColumns)
      return newData
    },
    exportExcel () {
      console.log('\x1b[36m%s\x1b[0m', '>>> this.data :', this.data)
      const ws = XLSX.utils.aoa_to_sheet(this.convertData(this.data))
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, 'users')
      XLSX.writeFile(wb, `users-${this.$moment().format('YYMMDD-hhmmss')}.xlsx`)
    }
  }
}
</script>
