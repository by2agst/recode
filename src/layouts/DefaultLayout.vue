<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-grey-1 text-black">
      <q-toolbar>
        <q-btn
          flat
          no-caps
          class=""
          color="primary"
          label="Pages"
        />
        <q-btn
          flat
          no-caps
          class=""
          color="primary"
          label="Features"
          >
          <q-menu>
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

              <q-separator vertical inset class="q-mx-lg" />

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

              <q-separator vertical inset class="q-mx-lg" />

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

              <q-separator vertical inset class="q-mx-lg" />

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

        <q-btn
          flat
          no-caps
          class=""
          color="primary"
          label="Apps"
        />

        <q-toolbar-title>
        </q-toolbar-title>

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
        <q-btn
          flat
          round>
          <q-avatar size="15px">
            <img src="~assets/flags/012-uk.svg">
          </q-avatar>
          <q-menu anchor="bottom right" self="top right">
            <q-list>
              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label>
                    <q-avatar size="15px" class="q-mr-sm">
                      <img src="~assets/flags/012-uk.svg">
                    </q-avatar>
                    <span class="vertical-middle">English</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label class="items-center">
                    <q-avatar size="15px" class="q-mr-sm">
                      <img src="~assets/flags/004-indonesia.svg">
                    </q-avatar>
                    <span class="vertical-middle">Indonesia</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn
          flat
          no-caps
          class=""
          color="primary"
          >
          Hi,<b class="q-ml-sm">Re</b>
          <q-menu anchor="bottom right" self="top right" :content-style="{ minWidth: '370px' }">
            <q-card class="my-card">
              <q-card-section class="bg-primary text-white">
                <div class="row q-col-gutter-sm items-center">
                  <div class="col-auto">
                    <q-avatar rounded color="indigo-4" text-color="white">R</q-avatar>
                  </div>
                  <div class="col">
                    <span class="text-h5  q-mt-xs">Re:code</span>
                  </div>
                  <div class="col text-center">
                    <q-btn color="positive">10 Messages</q-btn>
                  </div>
                </div>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <q-list>
                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon color="positive" name="far fa-id-badge" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>My Profile</q-item-label>
                      <q-item-label caption>Account settings and more</q-item-label>
                    </q-item-section>
                    <q-item-section avatar>
                      <q-icon color="grey" name="fas fa-angle-right" />
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon color="warning" name="far fa-envelope" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>My Messages</q-item-label>
                      <q-item-label caption>Inbox and tasks</q-item-label>
                    </q-item-section>
                    <q-item-section avatar>
                      <q-icon color="grey" name="fas fa-angle-right" />
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon color="negative" name="fas fa-hiking" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>My Activities</q-item-label>
                      <q-item-label caption>Logs and notifications</q-item-label>
                    </q-item-section>
                    <q-item-section avatar>
                      <q-icon color="grey" name="fas fa-angle-right" />
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon color="grey" name="fas fa-tasks" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>My Tasks</q-item-label>
                      <q-item-label caption>latest tasks and projects</q-item-label>
                    </q-item-section>
                    <q-item-section avatar>
                      <q-icon color="grey" name="fas fa-angle-right" />
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>

              <q-separator />

              <q-card-actions align="around">
                <q-btn flat color="primary">Sign Out</q-btn>
                <q-btn flat color="primary">Upgrade Pro</q-btn>
              </q-card-actions>
            </q-card>
          </q-menu>
        </q-btn>
      </q-toolbar>

      <q-toolbar class="q-gutter-x-md">
        <div class="">Dashboard</div>

        <q-separator vertical inset />

        <div class="poppins-r">{{ new Date }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-dark"

      :mini="!leftDrawerOpen || miniState"
      @click.capture="drawerClick"

      >
      <q-list dark>
        <q-item-label header>Quasar v{{ $q.version }}</q-item-label>
        <q-item v-if="miniState" clickable @click="miniState = !miniState">
          <q-item-section avatar>
            <q-icon name="chevron_right"/>
          </q-item-section>
        </q-item>
        <q-item clickable to="/user/dashboard">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
            <q-item-label caption>home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/login">
          <q-item-section avatar>
            <q-icon name="fas fa-sign-in-alt" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Sign In</q-item-label>
            <q-item-label caption>login</q-item-label>
          </q-item-section>
        </q-item>
        <q-item-label header class="t-r">Default</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev" >
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.quasar.dev">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>@QuasarFramework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <div class="q-mini-drawer-hide absolute" style="top: 10px; right: 17px">
        <q-btn
          dense
          round
          unelevated
          color="transparent"
          icon="chevron_left"
          @click="miniState = true"
        />
      </div>
    </q-drawer>

    <q-page-container class="">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'DefaultLayout',

  data () {
    return {
      leftDrawerOpen: false,
      miniState: false
    }
  },
  methods: {
    drawerClick (e) {
      // if in "mini" state and user
      // click on drawer, we switch it to "normal" mode
      if (this.miniState) {
        this.miniState = false

        // notice we have registered an event with capture flag;
        // we need to stop further propagation as this click is
        // intended for switching drawer to "normal" mode only
        e.stopPropagation()
      }
    },
    onItemClick () {
      // console.log('Clicked on an Item')
    }
  }
}
</script>
