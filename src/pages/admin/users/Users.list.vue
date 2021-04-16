<template>
  <div class="row q-col-gutter-md">
    <div class="col-12">
      <q-table
        :columns="columns"
        :data="dataTable"
        :filter="filter"
        :grid="$q.screen.xs"
        :loading="loading"
        :pagination.sync="pagination"
        :visible-columns="visibleColumns"
        @request="onRequest"
        binary-state-sort
        row-key="id"
        ref="crudTable"
        title="Users"
        >

        <template v-slot:loading>
          <q-inner-loading showing color="primary" />
        </template>

        <template v-slot:top>
          <div class="full-width">
            <div class="row justify-between">
              <div class="col-12 col-sm-auto q-mb-sm q-gutter-sm">
                <q-btn no-caps color="primary" label="Add" icon="fas fa-plus" to="/admin/users/add"/>
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

        <template v-slot:body-cell-#="props">
          <q-td :class="props.col.classes">{{props.rowIndex + 1}}</q-td>
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
            <q-btn flat round class="square" color="primary" icon="far fa-eye" @click="view(props.row)" >
              <q-tooltip anchor="top middle" self="center middle">
                View
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
          <Mobile :props="props" :service="serviceName" />
        </template>
        <!-- end of mobile -->
      </q-table>
    </div>

    <q-dialog v-model="viewModal">
      <q-card style="width: 600px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none">
          <q-space />
          <div class="text-h6">{{$t('table.detail')}}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section v-if="dataModal" class="q-gutter-y-sm">
          <div class="row justify-between" v-for="(value, key) in dataModal" :key="key">
            <div class="col-auto text-bold">{{getLabelValue(dataModal, key).label}}</div>
            <div class="col-auto text-right" :name="value">{{getLabelValue(dataModal, key).value}}</div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { crud } from 'src/mixin/crud'
import Mobile from 'src/components/table/Mobile'

export default {
  name: 'Users',
  mixins: [
    crud()
  ],
  components: {
    Mobile
  },
  data () {
    return {
      serviceName: 'users',
      fileName: 'Users',
      visibleColumns: ['#', 'username', 'email', 'confirmed', 'status']
    }
  },
  computed: {
    columns () {
      return [
        {
          name: '#',
          label: '#',
          align: 'right',
          field: '_id',
          headerClasses: 'bg-blue-grey text-white',
          classes: 'bg-grey-2 ellipsis text-right',
          sortable: false,
          required: true
        },
        {
          name: 'username',
          required: true,
          label: 'Username',
          align: 'left',
          field: row => row.username,
          format: val => `${val}`,
          headerClasses: 'bg-grey-2',
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
      ]
    }
  }
}
</script>
