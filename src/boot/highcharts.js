import Vue from 'vue'
import Highcharts from 'highcharts'
import highcharts3D from 'highcharts/highcharts-3d'
import Drilldown from 'highcharts/modules/drilldown'
import Data from 'highcharts/modules/data'
import Exporting from 'highcharts/modules/exporting'
import { colors } from 'quasar'

highcharts3D(Highcharts)
Drilldown(Highcharts)
Data(Highcharts)
Exporting(Highcharts)

const primary = colors.getBrand('primary')
const secondary = colors.getBrand('secondary')
const accent = colors.getBrand('accent')
const positive = colors.getBrand('positive')
const negative = colors.getBrand('negative')
const info = colors.getBrand('info')
const warning = colors.getBrand('warning')
const dark = colors.getBrand('dark')

Highcharts.customTheme = {
  colors: [primary, accent, secondary, positive, negative, info, warning],

  chart: {
    backgroundColor: '#fffff',
    style: {
      fontFamily: 'poppins',
      color: dark
    }
  },
  title: {
    style: {
      color: '#ffffff',
      fontSize: '21px'
    }
  },
  subtitle: {
    style: {
      fontSize: '16px'
    }
  },
  xAxis: {
    lineWidth: 0,
    lineColor: '#cccccc',
    tickWidth: 0,
    tickColor: '#cccccc',
    labels: {
      style: {
        fontSize: '12px'
      }
    }
  },
  yAxis: {
    gridLineWidth: 0,
    gridLineColor: '#d9d9d9',
    labels: {
      style: {
        fontSize: '12px'
      }
    }
  },
  legend: {
    itemStyle: {
      color: '#666',
      fontSize: '9px'
    },
    itemHoverStyle: {
      color: '#1a1a27'
    }
  }
}

Highcharts.setOptions(Highcharts.customTheme)

Vue.prototype.$highcharts = Highcharts
