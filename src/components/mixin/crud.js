import XLSX from 'xlsx'
import JsPDF from 'jspdf'
import 'jspdf-autotable'

export const crud = () => {
  return {
    data () {
      return {
        fileName: '',
        pagination: {
          descending: false,
          page: 1,
          rowsPerPage: 10
        },
        visibleColumns: [],
        columns: [],
        data: [],
        confirmToDelete: false
      }
    },
    computed: {
      optionsColumns () {
        return [...this.columns].filter(c => !c.required)
      }
    },
    methods: {
      convertData (type = 'excel') {
        let visibleColumns = [...this.visibleColumns]
        this.$_.remove(visibleColumns, col => col === 'action')
        let body = [...this.dataTable].map(r => {
          return visibleColumns.map(col => {
            let { format } = this.columns.find(c => c.name === col)
            return (format(r[col]) || '')
          })
        })

        let head = visibleColumns.map(col => {
          let { label } = this.columns.find(c => c.name === col)
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
        XLSX.writeFile(wb, `${this.fileName}-${this.$moment().format('YYMMDD-hhmmss')}.xlsx`)
      },
      async exportPdf () {
        let doc = new JsPDF({})
        doc.autoTable(this.convertData('pdf'))
        doc.save(`${this.fileName}-${this.$moment().format('YYMMDD-hhmmss')}.pdf`)
      }
    }
  }
}
