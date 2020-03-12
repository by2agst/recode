<template>
  <q-header class="bg-grey-1 text-black">
    <q-toolbar>
      <q-btn
        flat
        no-caps
        color="primary"
        label="Pages"
      />
      <q-btn
        flat
        no-caps
        color="primary"
        label="Features"
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
        <q-menu anchor="bottom right" self="top right" :offset="[0, 10]">
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
        color="primary"
        >
        Hi,<b class="q-ml-sm">Re</b>
        <q-menu anchor="bottom right" self="top right" :offset="[0, 10]" :content-style="{ minWidth: '370px' }">
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

            <q-card-section class="q-pa-none">
              <q-list>
                <q-item clickable v-ripple>
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
              <q-btn flat color="primary">Sign Out</q-btn>
              <q-btn flat color="primary">Upgrade Pro</q-btn>
            </q-card-actions>
          </q-card>
        </q-menu>
      </q-btn>
    </q-toolbar>

    <q-toolbar class="q-gutter-x-md">
      <div>Dashboard</div>

      <q-separator vertical inset />

      <div class="poppins-r">{{ new Date }}</div>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: 'UserToolbarTop',

  data () {
    return {
    }
  },
  methods: {
    onItemClick () {
      // console.log('Clicked on an Item')
    }
  }
}
</script>
