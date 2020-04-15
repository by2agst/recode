<template>
  <div class="row q-col-gutter-md">
    <div class="col-12">
      <q-table
        title="Users"
        :data="data"
        :columns="columns"
        row-key="recordID"
        >
        <template v-slot:body-cell-companyAgent="props">
          <q-td :props="props">
            <q-item dense class="q-px-none">
              <q-item-section avatar>
                <q-avatar>
                  <q-avatar color="primary" text-color="white">{{props.value.substring(0,1)}}</q-avatar>
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>
                  {{props.value}}
                </q-item-label>
                <q-item-label caption>
                  {{job(props.row.type)}}
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
      </q-table>
    </div>
  </div>
</template>

<script>
import datauser from 'src/assets/dummy/users'

export default {
  name: 'Users',
  data () {
    return {
      stars: 3,
      columns: [
        {
          name: 'companyAgent',
          required: true,
          label: 'User',
          align: 'left',
          field: row => row.companyAgent,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'companyName',
          required: true,
          label: 'Country',
          align: 'left',
          field: row => row.companyName,
          format: val => `${val}`,
          sortable: true
        }
      ],
      data: datauser
    }
  },
  methods: {
    job (code) {
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
    }
  }
}
</script>
