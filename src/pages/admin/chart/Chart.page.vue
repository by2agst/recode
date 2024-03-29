<template>
  <q-page class="q-pa-md" :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-blue-grey-1'">
    <div class="full-width">
      <div class="row q-col-gutter-md">
        <div class="col-sm-12 col-xl-6">
          <q-card class="rounded-borders overflow-hidden no-shadow">
            <high-chart name="chart-1" :options="chart1Options" />
          </q-card>
        </div>
        <div class="col-sm-7">
          <q-card class="rounded-borders overflow-hidden no-shadow">
            <high-chart name="chart-2" :options="chart2Options" />
          </q-card>
        </div>
        <div class="col-sm-5">
          <q-card class="rounded-borders overflow-hidden no-shadow">
            <div class="">
              <div class="absolute z-top q-pa-md text-white text-h6">Widget</div>
              <high-chart name="chart-3" :options="chart3Options" />
            </div>
            <q-card-section class="half-color-primary" style="height: 130px">
              <div class="full-height row items-center justify-around">
                <div class="col-5">
                  <div class="bg-info text-white rounded-borders q-pa-md">
                    <q-icon size="30px" name="fas fa-chart-line" />
                    <div class="text-subtitle1">Weekly Sales</div>
                  </div>
                </div>
                <div class="col-5">
                  <div class="bg-warning text-white rounded-borders q-pa-md">
                    <q-icon size="30px" name="fas fa-users" />
                    <div class="text-subtitle1">New User</div>
                  </div>
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="full-height row items-center justify-around">
                <div class="col-5">
                  <div class="bg-accent text-white rounded-borders q-pa-md">
                    <q-icon size="30px" name="far fa-envelope" />
                    <div class="text-subtitle1">Email</div>
                  </div>
                </div>
                <div class="col-5">
                  <div class="bg-positive text-white rounded-borders q-pa-md">
                    <q-icon size="30px" name="far fa-comments" />
                    <div class="text-subtitle1">Chat</div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { colors, LocalStorage } from 'quasar'
import HighChart from 'src/components/chart/HighChart'

export default {
  name: 'Chart',
  components: {
    HighChart
  },
  data () {
    return {
      colorsSet: {},
      chart1Options: {},
      chart2Options: {},
      chart3Options: {}
    }
  },
  mounted () {
    this.colorsSet = this.darkLightColor(LocalStorage.getItem('dark') || false)
    this.renderHighchart()
  },
  watch: {
    '$q.dark.isActive': function (value) {
      this.colorsSet = this.darkLightColor(value)
      this.renderHighchart()
    }
  },
  methods: {
    darkLightColor (darkMode = false) {
      const dark = colors.getBrand('dark')
      if (darkMode) {
        return {
          background: dark,
          color: '#FFFFFF'
        }
      } else {
        return {
          background: '#FFFFFF',
          color: dark
        }
      }
    },
    renderHighchart () {
      this.chart1Options = {
        chart: {
          renderTo: 'chart-1',
          backgroundColor: this.colorsSet.background,
          type: 'spline',
          style: {
            color: this.colorsSet.color
          }
        },
        title: {
          text: 'Area chart with negative values',
          style: {
            color: this.colorsSet.color
          }
        },
        xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
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

      this.chart2Options = {
        chart: {
          renderTo: 'chart-2',
          backgroundColor: this.colorsSet.background,
          style: {
            color: this.colorsSet.color
          },
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 45
          }
        },
        title: {
          text: 'Contents of Highsofts weekly fruit delivery',
          style: {
            color: this.colorsSet.color
          }
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
          ],
          dataLabels: {
            enabled: true,
            color: this.colorsSet.color
          }
        }]
      }

      this.chart3Options = {
        colors: ['rgba(255, 255, 255, 0.3)'],
        chart: {
          renderTo: 'chart-3',
          type: 'spline',
          backgroundColor: 'rgba(88, 103, 221, 1)',
          height: '150',
          marginLeft: 0,
          marginRight: 0,
          spacingLeft: 0,
          spacingRight: 0
        },
        exporting: {
          enabled: false
        },
        title: {
          text: ''
        },
        subTitle: {
          text: ''
        },
        xAxis: {
          title: {
            text: null
          },
          visible: false,
          minPadding: 0,
          maxPadding: 0
        },
        yAxis: {
          visible: false,
          title: {
            text: null
          },
          labels: {
            enabled: false
          },
          minPadding: 0,
          maxPadding: 0,
          tickWidth: 0,
          minRange: 0.001,
          min: 0
        },
        series: [{
          showInLegend: false,
          name: 'user',
          data: [0, 0, 0, 15, 20, 30, 15, 10, 0, 0, 0]
        }]
      }
    }
  }
}
</script>
