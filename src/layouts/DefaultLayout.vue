<template>
  <q-layout view="hHh Lpr fff"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header :class="$q.dark.isActive ? 'bg-dark text-white' : 'bg-grey-1 text-black'">
      <q-toolbar>
        <!-- <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        /> -->
        <q-toolbar-title>
          re:<div class="inline-block flip-horizontal">c</div>ode
        </q-toolbar-title>
        <dark />
        <languages />
        <auth-button v-if="user.role && user.role.type" />
        <router-link v-else to="/login" class="text-primary">Sign In</router-link>
      </q-toolbar>

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
    </q-header>

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

    <!-- (Optional) The Footer -->
    <!--
    <q-footer elevated class="bg-white text-black">
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
    -->

  </q-layout>
</template>

<script>
import { mapState } from 'vuex'
import AuthButton from 'src/components/AuthButton.vue'
import Dark from 'src/components/Dark.vue'
import Languages from 'src/components/Languages.vue'

export default {
  name: 'BlankLayout',

  components: {
    AuthButton,
    Dark,
    Languages
  },
  data () {
    return {
      leftDrawer: false
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  }
}
</script>
