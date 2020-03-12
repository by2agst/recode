<template>
  <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    bordered
    content-class="bg-2"

    :mini="!leftDrawerOpen || miniState"
    @click.capture="drawerClick"

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
      <q-item clickable to="/user/dashboard" active-class="side-menu-left-active">
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Dashboard</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable to="/login">
        <q-item-section avatar>
          <q-icon name="fas fa-sign-in-alt" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Sign In</q-item-label>
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
</template>

<script>
export default {
  name: 'UserSidebarLeft',

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
    }
  }
}
</script>
