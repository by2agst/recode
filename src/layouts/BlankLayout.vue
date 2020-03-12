<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <!-- <q-header class="bg-grey-1 text-black">
      <q-toolbar> -->
        <!-- <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        /> -->
        <!-- <q-toolbar-title>
          Re:<div class="inline-block flip-horizontal">c</div>ode
        </q-toolbar-title>
        <q-btn no-caps flat icon="fas fa-home" to="/user/dashboard" class="text-primary" label="User Dashboard" />
      </q-toolbar> -->

      <!-- <q-tabs>
        <q-route-tab
          icon="map"
          to="/your/route"
          replace
          label="One Tab"
        />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs> -->
    <!-- </q-header> -->

    <!-- (Optional) The Footer -->
    <!-- <q-footer>
      <q-tabs switch-indicator>
        <q-route-tab
          icon="map"
          to="/your/route"
          replace
          label="One Tab"
        />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs>

      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title>
          Footer
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      v-model="leftDrawer"
      side="left"
      bordered
      content-class="bg-grey-2"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'BlankLayout',

  data () {
    return {
      leftDrawer: false
    }
  }
}
</script>
