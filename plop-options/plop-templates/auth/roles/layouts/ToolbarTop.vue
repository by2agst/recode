<template>
  <q-header class="bg-grey-1 text-black">
    <q-toolbar>
      <div class="row full-width justify-between">
        <div class="col-auto col-sm-6">
          <div class="full-width">
            <q-btn
              flat
              dense
              round
              @click="openMenu"
              aria-label="Menu"
              v-if="$q.screen.lt.md">
              <i class="fas fa-bars"></i>
            </q-btn>
          </div>
        </div>
        <div class="col-auto col-sm-6">
          <div class="full-width text-right">
            <q-btn
              flat
              round
              aria-label="search"
              color="primary"
              icon="far fa-circle"
              size="sm"
            />
            <q-btn
              flat
              round
              aria-label="search"
              color="primary"
              icon="far fa-chart-bar"
              size="sm"
            />
            <languages />
            <auth-button />
          </div>
        </div>
      </div>
    </q-toolbar>

    <q-toolbar>
      <div class="row full-width">
        <div class="col-12 col-sm-6">
          <div class="row q-gutter-x-md" :class="{ 'justify-center': $q.screen.lt.sm }">
            <div>\{{ activeMenu }}</div>
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <div class="row" :class="{ 'justify-end': $q.screen.gt.xs, 'justify-center': $q.screen.lt.sm }">
            <div class="col-auto">
              <div class="hundin text-uppercase" style="width: 160px">\{{ timeStamp }}</div>
            </div>
          </div>
        </div>
      </div>

    </q-toolbar>
  </q-header>
</template>

<script>
import AuthButton from 'src/components/AuthButton.vue'
import Languages from 'src/components/Languages.vue'

export default {
  name: '{{ pascalCase roleName }}ToolbarTop',
  components: {
    AuthButton,
    Languages
  },
  data () {
    return {
      timeStamp: this.$moment().format('DD MMM YYYY HH:mm:ss'),
      interval: null
    }
  },
  created () {
    this.interval = setInterval(() => {
      this.timeStamp = this.$moment().format('DD MMM YYYY HH:mm:ss')
    }, 1000)
  },
  computed: {
    activeMenu: function () {
      return this.$route.name.replace(/([-_])/g, ' $1 ').replace(/([A-Z])/g, ' $1') || ''
    }
  },
  methods: {
    openMenu () {
      this.$emit('openMenu')
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>
