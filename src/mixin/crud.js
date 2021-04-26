import { remove } from 'lodash'
import moment from 'moment'
import XLSX from 'xlsx'
import JsPDF from 'jspdf'
import 'jspdf-autotable'
import dialogIcon from 'src/components/dialog/Icon.vue'

export const crud = () => {
  return {
    data () {
      return {
        serviceName: '',
        fileName: '',
        dateFormat: 'DD-MMM-YYYY',
        filter: null,
        loading: false,
        pagination: {
          sortBy: '',
          descending: false,
          page: 1,
          rowsPerPage: 10,
          rowsNumber: 10
        },
        visibleColumns: [],
        dataTable: [],
        dataModal: {},
        viewModal: false,
        hideField: []
      }
    },
    computed: {
      columns () {
        return []
      },
      optionsColumns () {
        return [...this.columns].filter(c => !c.required)
      }
    },
    mounted () {
      this.onRequest({
        pagination: this.pagination,
        filter: null
      })
    },
    methods: {
      getValue (cols, name) {
        const { value } = cols.find(r => r.name === name)
        return value
      },
      getLabelValue (data, col) {
        const column = this.columns.find(c => c.name === col)
        if (column) {
          const { label, format, field } = column
          let value
          if (typeof field === 'function') {
            value = field(data)
          } else {
            value = data[field]
          }
          if (format) {
            return {
              label: label || '',
              value: (format(value, data) || '')
            }
          } else {
            return {
              label: label || '',
              value: value || ''
            }
          }
        } else {
          return {
            label: col,
            value: data[col] || ''
          }
        }
      },
      convertData (type = 'excel') {
        const visibleColumns = [...this.visibleColumns]
        remove(visibleColumns, col => col === '#' || col === 'action')
        const body = [...this.dataTable].map(r => {
          return visibleColumns.map(col => {
            return this.getLabelValue(r, col).value
          })
        })

        const head = visibleColumns.map(col => {
          const { label } = this.columns.find(c => c.name === col)
          return label || ''
        })

        let result
        if (type === 'excel') {
          body.unshift(head)
          result = body
        } else if (type === 'pdf') {
          result = {
            headStyles: { fillColor: [88, 103, 221] },
            head: [head],
            body
          }
        }
        return result
      },
      exportExcel () {
        const ws = XLSX.utils.aoa_to_sheet(this.convertData('excel'))
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, `${this.fileName}`)
        XLSX.writeFile(wb, `${this.fileName}-${moment().format('YYMMDD-hhmmss')}.xlsx`)
      },
      async exportPdf () {
        const doc = new JsPDF({})
        doc.autoTable(this.convertData('pdf'))
        doc.save(`${this.fileName}-${moment().format('YYMMDD-hhmmss')}.pdf`)
      },

      view (data) {
        const columns = [...this.columns]
        const cols = columns.map(col => col.name).filter(r => !(r === '#' || r === 'action'))
        const result = {}
        cols.forEach(f => {
          const { label, field, format } = columns.find(c => c.name === f)
          if (!this.hideField.includes(field)) {
            let value
            if (typeof field === 'function') {
              value = field(data)
            } else {
              value = data[field]
            }
            result[label] = format ? format(value, data) : value
          }
        })

        this.dataModal = result
        this.viewModal = true
      },
      edit (id) {
        this.$router.push(`/${this.$auth.role()}/${this.serviceName}/edit/${id}`)
      },
      refresh () {
        this.$refs.crudTable.requestServerInteraction()
      },

      async onRequest (props) {
        const { page, rowsPerPage, sortBy, descending } = props.pagination
        const filter = props.filter

        this.loading = true
        const params = {}
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
        this.$axios.get(this.serviceName, { params: { ...params, _start: start, _limit: rowsPerPage } }).then(({ data }) => {
          this.dataTable = data
        }).catch(e => {
          console.log('%c-e', 'color: yellow;', e)
        })
        this.$axios.get(`${this.serviceName}/count`, { params }).then(({ data }) => {
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
          this.$axios.delete(`${this.serviceName}/${id}`).then(({ data }) => {
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
}
