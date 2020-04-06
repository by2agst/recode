<template>
  <q-layout view="lHh Lpr lFf">
    <toolbar-top @openMenu="openMenu"/>

    <sidebar-left :left-drawer-open="leftDrawerOpen" @updateLeftDrawer="updateLeftDrawer"/>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ToolbarTop from './ToolbarTop.vue'
import SidebarLeft from './SideBarLeft.vue'

export default {
  name: 'UserDefaultLayout',
  components: {
    ToolbarTop,
    SidebarLeft
  },
  data () {
    return {
      leftDrawerOpen: !this.$q.screen.lt.md
    }
  },
  methods: {
    openMenu () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    updateLeftDrawer () {
      this.leftDrawerOpen = false
    }
  }
}
</script>
