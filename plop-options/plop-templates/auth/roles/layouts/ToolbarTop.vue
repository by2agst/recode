<template>
  <q-header class="bg-grey-1 text-black">
    <q-toolbar>
      <div class="row full-width">
        <div class="col-12 col-sm-6">
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
        <div class="col-12 col-sm-6">
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
            <q-btn
              flat
              no-caps
              color="primary"
              >
              Hi,<b class="q-ml-sm">Re</b>
              <q-menu anchor="bottom right" self="top right" :offset="[0, 10]" :content-style="{ minWidth: '370px' }">
                <q-card class="my-card">
                  <q-card-section class="bg-8 text-white q-py-lg">
                    <div class="row q-col-gutter-sm items-center">
                      <div class="col-auto">
                        <q-avatar rounded color="indigo-4" text-color="white">
                          <!-- <img src="/statics/users/rc19.jpg"> -->R
                        </q-avatar>
                      </div>
                      <div class="col">
                        <span class="text-h5  q-mt-xs">
                          Re<div class="inline-block text-accent">:</div><div class="inline-block text-accent flip-horizontal">c</div>ode
                        </span>
                      </div>
                      <div class="col text-center">
                        <q-btn color="accent">10 Messages</q-btn>
                      </div>
                    </div>
                  </q-card-section>

                  <q-separator />

                  <q-card-section class="q-pa-none">
                    <q-list>
                      <q-item clickable v-ripple to="/{{ dashCase roleName }}/profile">
                        <q-item-section avatar>
                          <q-avatar icon="fas fa-id-badge" color="clear" text-color="positive" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>My Profile</q-item-label>
                          <q-item-label caption>Account settings and more</q-item-label>
                        </q-item-section>
                        <q-item-section avatar>
                          <q-icon color="grey" name="chevron_right" />
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-ripple>
                        <q-item-section avatar>
                          <q-avatar icon="fas fa-envelope" color="clear" text-color="warning" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>My Messages</q-item-label>
                          <q-item-label caption>Inbox and tasks</q-item-label>
                        </q-item-section>
                        <q-item-section avatar>
                          <q-icon color="grey" name="chevron_right" />
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-ripple>
                        <q-item-section avatar>
                          <q-avatar icon="fas fa-hiking" color="clear" text-color="negative" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>My Activities</q-item-label>
                          <q-item-label caption>Logs and notifications</q-item-label>
                        </q-item-section>
                        <q-item-section avatar>
                          <q-icon color="grey" name="chevron_right" />
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-ripple>
                        <q-item-section avatar>
                          <q-avatar icon="fas fa-tasks" color="clear" text-color="grey" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>My Tasks</q-item-label>
                          <q-item-label caption>latest tasks and projects</q-item-label>
                        </q-item-section>
                        <q-item-section avatar>
                          <q-icon color="grey" name="chevron_right" />
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-card-section>

                  <q-separator />

                  <q-card-actions align="around">
                    <q-btn flat color="primary">Upgrade Pro</q-btn>
                    <q-btn flat color="primary" to="/login" >Sign Out</q-btn>
                  </q-card-actions>
                </q-card>
              </q-menu>
            </q-btn>
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
              <div class="poppins-r" style="width: 160px">\{{ timeStamp }}</div>
            </div>
          </div>
        </div>
      </div>

    </q-toolbar>
  </q-header>
</template>

<script>
import Languages from 'src/components/Languages.vue'

export default {
  name: '{{ pascalCase roleName }}ToolbarTop',

  components: {
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
