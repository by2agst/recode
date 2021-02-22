<template>
  <q-btn
    flat
    no-caps
    round
    color="primary square"
    icon="far fa-user"
    >
    <q-menu anchor="bottom right" self="top right" :offset="[0, 10]" :content-style="{ minWidth: '370px' }">
      <q-card class="my-card">
        <q-card-section class="bg-8 text-white q-py-lg">
          <div class="row q-col-gutter-sm items-center">
            <div class="col-auto">
              <q-avatar rounded color="indigo-4" text-color="white">
                <q-img
                  v-if="me.avatar"
                  :src="$g.getSrc(me.avatar.formats.thumbnail.url, true)"
                  :ratio="1"
                />
                <div v-else>
                  {{$g.initialName(me.username)}}
                </div>
              </q-avatar>
            </div>
            <div class="col">
              <div class="text-h5 q-mt-xs">
                {{me.username | capitalize}}
              </div>
              <div class="q-mt-xs">
                {{me.email}}
              </div>
            </div>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section class="q-pa-none">
          <q-list>
            <q-item clickable v-ripple :to="`/${me.role.type}/profile`">
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
          <q-btn flat color="primary">Upgrade Pro</q-btn>
          <q-btn flat color="primary" @click="logout()" >Sign Out</q-btn>
        </q-card-actions>
      </q-card>
    </q-menu>
  </q-btn>
</template>

<script>
export default {
  name: 'ComponentAuthButton',

  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
    me () {
      return this.$auth.user()
    }
  },
  methods: {
    logout () {
      this.$auth.logout()
      if (this.$route.path !== '/') {
        this.$router.replace('/')
      }
    }
  }
}
</script>
