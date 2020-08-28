<template>
  <div class="row q-col-gutter-md">
    <div class="col-12">
      <q-table
        title="Users"
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
                      multiple
                      icon="fas fa-sync"
                      @click="refresh"
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
            <q-btn flat round class="square" color="negative" icon="far fa-trash-alt" @click="confirmDelete(props.value)">
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
                    <div class="col-12">{{getValue(props.cols, p.name)}}</div>
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
  </div>
</template>

<script>
import { crud } from 'src/components/mixin/crud'
import dialogIcon from 'src/components/dialog/Icon.vue'

export default {
  name: 'Users',
  mixins: [
    crud()
  ],
  mounted () {
    this.onRequest({
      pagination: this.pagination,
      filter: null
    })
  },
  data () {
    return {
      serviceName: 'users',
      fileName: 'Users',
      filter: null,
      loading: false,
      pagination: {
        sortBy: '',
        descending: false,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 10
      },
      visibleColumns: ['username', 'email', 'confirmed', 'status'],
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
          name: 'status',
          label: 'Status',
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
      dataTable: []
    }
  },
  methods: {
    updateDialogModel (val) {
      this.confirmToDelete = val
    },
    edit (id) {
      this.$router.push(`/admin/users/edit/${id}`)
    },
    refresh () {
      this.onRequest({
        pagination: this.pagination,
        filter: this.filter || null
      })
    },
    async onRequest (props) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination
      const filter = props.filter

      this.loading = true
      let params = {}
      if (filter) {
        params._q = filter
      }
      if (sortBy) {
        params._sort = `${sortBy}:${descending ? 'DESC' : 'ASC'}`
      }
      await this.getData(params, props)

      this.pagination.page = page
      this.pagination.rowsPerPage = rowsPerPage
      this.pagination.sortBy = sortBy
      this.pagination.descending = descending

      this.loading = false
    },
    getData (params = {}, props) {
      const { page, rowsPerPage } = props.pagination
      const start = (page - 1) * rowsPerPage
      this.$axios.get('users', { params: { ...params, _start: start, _limit: rowsPerPage } }).then(({ data }) => {
        this.dataTable = data
      }).catch(e => {
        console.log('%c-e', 'color: yellow;', e)
      })
      this.$axios.get('users/count', { params }).then(({ data }) => {
        this.pagination.rowsNumber = data
      }).catch(e => {
        console.log('%c-e', 'color: yellow;', e)
      })
    },
    confirmDelete (id) {
      this.$q.dialog({
        component: dialogIcon,
        parent: this,
        persistent: true,
        icon: 'far fa-trash-alt',
        title: 'Are you Sure?',
        text: 'Do you realy want to delete these record? This process can\'t be undone',
        cancelButton: true,
        headerClass: 'text-accent',
        buttonColor: 'accent'
      }).onOk(() => {
        console.log('delete')
        this.$axios.delete(`users/${id}`).then(({ data }) => {
          this.$q.notify({
            type: 'axios-notify',
            color: 'positive',
            icon: 'far fa-check-circle',
            message: 'Success',
            caption: 'Data deleted'
          })
          this.refresh()
        }).catch(e => {
          console.log('%c-e', 'color: yellow;', e)
        })
      })
    }
  }
}
</script>
