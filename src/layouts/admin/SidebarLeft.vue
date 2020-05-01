<template>
  <q-drawer
    content-class="bg-2"
    v-model="localLeftDrawerOpen"
    bordered
    show-if-above

    :mini="!localLeftDrawerOpen || miniState"
    @click.capture="drawerClick"
    @hide="hideSideBar"
    >
    <q-list dark class="text-grey">
      <q-item-label header class="text-white">
        Re<div class="inline-block text-accent">:</div><div class="inline-block text-accent flip-horizontal">c</div>ode
        {{ $q.version }}
      </q-item-label>
      <q-item v-if="miniState" clickable @click="miniState = !miniState">
        <q-item-section avatar>
          <q-icon name="chevron_right"/>
        </q-item-section>
      </q-item>
      <q-item clickable to="/admin/dashboard" active-class="side-menu-left-active">
        <q-item-section avatar>
          <q-icon name="fas fa-home"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{$t('menu.dashboard')}}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable to="/admin/users" active-class="side-menu-left-active">
        <q-item-section avatar>
          <q-icon name="fas fa-users"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{$t('menu.users')}}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable to="/admin/chart" active-class="side-menu-left-active">
        <q-item-section avatar>
          <q-icon name="fas fa-chart-bar"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{$t('menu.chart')}}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable to="/admin/gallery" active-class="side-menu-left-active">
        <q-item-section avatar>
          <q-icon name="fas fa-images"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{$t('menu.gallery')}}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item-label header class="regular">Default</q-item-label>
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

    <!-- <div class="q-mini-drawer-hide absolute" style="top: 7px; right: 17px">
      <q-btn
        dense
        round
        unelevated
        color="clear"
        icon="chevron_left"
        @click="miniState = true"
      />
    </div> -->
  </q-drawer>
</template>

<script>
export default {
  name: 'UserSidebarLeft',

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
