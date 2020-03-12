<template>
  <q-layout view="lHh Lpr lFf">
    <toolbar-top />

    <sidebar-left/>

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
