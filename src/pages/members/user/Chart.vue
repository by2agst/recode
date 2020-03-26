<template>
  <q-page class="bg-blue-grey-1 q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-sm-12 col-md-6">
        <div class="bg-white">
          <div id="chart-1" style="height: 400px" />
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="bg-white">
          <div id="chart-2" style="height: 400px" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Chart',
  data () {
    return {
      chart1: '',
      chart2: ''
    }
  },
  mounted () {
    this.renderHighchart()
  },
  methods: {
    renderHighchart () {
      let options = {}
      let HighChart

      options = {
        chart: {
          renderTo: 'chart-1',
          type: 'area'
        },
        title: {
          text: 'Area chart with negative values'
        },
        xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'John',
          data: [5, 3, 4, 7, 2]
        }, {
          name: 'Jane',
          data: [2, -2, -3, 2, 1]
        }, {
          name: 'Joe',
          data: [3, 4, 4, -2, 5]
        }]
      }
      HighChart = () => {
        this.$highcharts.chart(options)
      }
      this.chart1 = new HighChart()

      options = {
        chart: {
          renderTo: 'chart-2',
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 45
          }
        },
        title: {
          text: 'Contents of Highsoft\'s weekly fruit delivery'
        },
        subtitle: {
          text: '3D donut in Highcharts'
        },
        plotOptions: {
          pie: {
            innerSize: 100,
            depth: 45
          }
        },
        series: [{
          name: 'Delivered amount',
          data: [
            ['Bananas', 8],
            ['Kiwi', 3],
            ['Mixed nuts', 1],
            ['Oranges', 6],
            ['Apples', 8],
            ['Pears', 4],
            ['Clementines', 4],
            ['Reddish (bag)', 1]
          ]
        }]
      }

      HighChart = () => {
        this.$highcharts.chart(options)
      }
      this.chart2 = new HighChart()
    }

  }
}
</script>
