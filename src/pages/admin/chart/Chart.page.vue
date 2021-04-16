<template>
  <q-page class="bg-blue-grey-1 q-pa-md">
    <div class="full-width">
      <div class="row q-col-gutter-md" v-resize:debounce="onResize">
        <div class="col-sm-12 col-md-6">
          <div class="bg-white high-chart" ref="chart1">
            <div id="chart-1" />
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="bg-white high-chart" ref="chart2">
            <div id="chart-2" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import resize from 'vue-resize-directive'

export default {
  name: 'Chart',
  directives: {
    resize
  },
  data () {
    return {
      chart1: '',
      chart1Options: '',
      chart2: '',
      chart2Options: ''
    }
  },
  mounted () {
    this.renderHighchart()
  },
  methods: {
    renderHighchart () {
      this.chart1Options = {
        chart: {
          renderTo: 'chart-1',
          type: 'spline'
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

      this.chart1 = this.$highcharts.chart(this.chart1Options)

      this.chart2Options = {
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
            innerSize: this.$q.screen.lt.md ? 50 : 100,
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

      this.chart2 = this.$highcharts.chart(this.chart2Options)
    },
    onResize () {
      console.log('%c-reflow', 'color: yellow;')
      // this.chart1.reflow()
      // this.chart2.reflow()
    }
  }
}
</script>
