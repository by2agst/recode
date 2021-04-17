<template>
  <div v-resize:debounce="onResize">
    <div class="bg-white high-chart" :ref="name">
      <div :id="name" />
    </div>
  </div>
</template>

<script>
import resize from 'vue-resize-directive'

export default {
  name: 'ComponentHighChart',
  directives: {
    resize
  },
  props: {
    name: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    options () {
      const options = {
        chart: {
          ...this.options.chart,
          renderTo: this.name
        },
        credits: {
          enabled: false
        },
        ...this.options
      }
      this.chart = this.$highcharts.chart(options)
    }
  },
  methods: {
    onResize () {
      if (this.chart) {
        this.chart.reflow()
      }
    }
  }
}
</script>
