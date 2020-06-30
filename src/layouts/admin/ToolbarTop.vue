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
            <q-btn
              flat
              no-caps
              color="primary"
              label="Home"
              @click="$router.push('/')"
            />
            <q-btn
              flat
              no-caps
              color="primary"
              label="Strapi"
              type="a"
              href="https://strapi.io/documentation/v3.x/getting-started/quick-start.html"
              target="_blank"
            />
            <q-btn
              flat
              no-caps
              color="primary"
              label="Mega Menu"
              >
              <q-menu :offset="[0, 10]">
                <div class="row no-wrap q-pa-md">
                  <div class="column">
                    <q-list dense>
                      <q-item>
                        <q-item-section>
                          <q-item-label class="text-bold">Task Reports</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Alert</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Badge</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Breadcrumb</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Button</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Button Group</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Button Toolbar</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Card</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Carousel</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </div>

                  <q-separator vertical inset class="q-mx-md" />

                  <div class="column">
                    <q-list dense>
                      <q-item>
                        <q-item-section>
                          <q-item-label class="text-bold">Task Reports</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Alert</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Badge</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Breadcrumb</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Button</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Button Group</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Button Toolbar</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Card</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Carousel</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </div>

                  <q-separator vertical inset class="q-mx-md" />

                  <div class="column">
                    <q-list dense>
                      <q-item>
                        <q-item-section>
                          <q-item-label class="text-bold">Task Reports</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Alert</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Badge</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Breadcrumb</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Button</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Button Group</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Button Toolbar</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Card</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Carousel</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </div>

                  <q-separator vertical inset class="q-mx-md" />

                  <div class="column">
                    <q-list dense>
                      <q-item>
                        <q-item-section>
                          <q-item-label class="text-bold">Task Reports</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Alert</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Badge</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Breadcrumb</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Button</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Button Group</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Button Toolbar</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Card</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Carousel</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </div>

                </div>
              </q-menu>
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
              >
              <q-menu :offset="[0, 10]">
                <div class="row no-wrap q-pa-none">
                  <q-input outlined v-model="search" label="search">
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </div>
              </q-menu>
            </q-btn>
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
            <div>{{ activeMenu }}</div>
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <div class="row" :class="{ 'justify-end': $q.screen.gt.xs, 'justify-center': $q.screen.lt.sm }">
            <div class="col-auto">
              <div class="poppins-r" style="width: 160px">{{ timeStamp }}</div>
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
  name: 'UserToolbarTop',
  components: {
    AuthButton,
    Languages
  },
  data () {
    return {
      timeStamp: this.$moment().format('DD MMM YYYY HH:mm:ss'),
      interval: null,
      search: ''
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
    },
    me () {
      return this.$auth.user()
    }
  },
  methods: {
    openMenu () {
      this.$emit('openMenu')
    },
    onItemClick () {
      console.log('%c-test', 'color: yellow;')
    },
    logout () {
      this.$auth.logout()
      this.$router.push('/')
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>
