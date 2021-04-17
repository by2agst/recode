import Vue from 'vue'
import Highcharts from 'highcharts'
import highcharts3D from 'highcharts/highcharts-3d'
import Drilldown from 'highcharts/modules/drilldown'
import Data from 'highcharts/modules/data'
import Exporting from 'highcharts/modules/exporting'

highcharts3D(Highcharts)
Drilldown(Highcharts)
Data(Highcharts)
Exporting(Highcharts)

Highcharts.customTheme = {
  colors: ['#5867dd', '#fd397a', '#646c9a', '#34bfa3', '#f4516c', '#36a3f7', '#ffb822', '#1a1a27'],

  chart: {
    backgroundColor: '#ffffff',
    style: {
      fontFamily: 'poppins',
      color: '#1a1a27'
    }
  },
  title: {
    style: {
      color: '#1a1a27',
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
