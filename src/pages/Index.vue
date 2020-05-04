<template>
  <q-page>
    <div class="row">
      <div class="col-12 bg-dark text-white">
        <div class="column window-height-header bg-2">
          <div class="col">
            <div class="column full-height justify-center">
              <div class="col-auto text-center">
                <div class="text-h3">
                  Re<div class="inline-block text-accent">:</div><div class="inline-block text-accent flip-horizontal">c</div>ode
                </div>
                <div class="text-h6 regular">Quasar v<div class="inline-block text-accent text-bold">{{ $q.version }}</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 bg-blue-grey-1">
        <div class="column window-height-header-footer bg-blue-grey-1">
          <div class="col q-pa-md">
            <div class="row full-height items-center">
              <div class="col">
                <div class="row q-col-gutter-md">
                  <div class="col-12 col-sm-6 col-md-4" v-for="i in 3" :key="i">
                    <q-card>
                      <q-img :src="`statics/space/s${i}.jpg`" />

                      <q-card-section>
                        <q-btn
                          fab
                          color="primary"
                          icon="place"
                          class="absolute"
                          style="top: 0; right: 12px; transform: translateY(-50%);"
                        />

                        <div class="row no-wrap items-center">
                          <div class="col text-h6 ellipsis">
                            Product {{i}}
                          </div>
                          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                            <q-icon name="place" />
                            250 ft
                          </div>
                        </div>

                        <q-rating v-model="stars" :max="5" size="16px" color="warning" />
                      </q-card-section>

                      <q-card-section class="q-pt-none">
                        <div class="text-subtitle1">
                          Quasar
                        </div>
                        <div class="text-caption text-grey">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                      </q-card-section>

                      <q-separator />

                      <q-card-actions>
                        <q-btn flat color="primary">
                          Read more ...
                        </q-btn>
                      </q-card-actions>
                    </q-card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'IndexPage',

  data () {
    return {
      stars: 3
    }
  },
  methods: {
  }
}
</script>
