<template>
  <q-drawer
    :content-class="$q.dark.isActive ? 'bg-2' : 'bg-3'"
    v-model="localLeftDrawerOpen"
    bordered
    show-if-above

    :mini="!localLeftDrawerOpen || miniState"
    @click.capture="drawerClick"
    @hide="hideSideBar"
    >
    <q-list dark class="text-grey">
      <q-item-label header :class="$q.dark.isActive ? 'text-white' : 'text-black'">
        re<div class="inline-block text-accent">:</div><div class="inline-block text-accent flip-horizontal">c</div>ode
        \{{ $q.version }}
      </q-item-label>
      <q-item v-if="miniState" clickable @click="miniState = !miniState">
        <q-item-section avatar>
          <q-icon name="chevron_right"/>
        </q-item-section>
      </q-item>
      <q-item clickable to="/{{ dashCase roleName }}/dashboard" active-class="side-menu-left-active">
        <q-item-section avatar>
          <q-icon name="fas fa-home"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>\{{ $t('menu.dashboard') }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

  </q-drawer>
</template>

<script>
export default {
  name: '{{ pascalCase roleName }}SidebarLeft',

  props: {
    leftDrawerOpen: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  data () {
    return {
      miniState: false,
      localLeftDrawerOpen: true
    }
  },
  watch: {
    leftDrawerOpen: function (newVal) {
      this.localLeftDrawerOpen = newVal
    }
  },
  mounted: function () {
    this.localLeftDrawerOpen = this.leftDrawerOpen
  },
  methods: {
    drawerClick (e) {
      if (this.miniState) {
        this.miniState = false
        e.stopPropagation()
      }
    },
    hideSideBar () {
      this.$emit('updateLeftDrawer')
    }
  }
}
</script>
