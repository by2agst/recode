<template>
  <q-page>
    <div class="row">
      <div class="col-12 bg-dark text-white">
        <div class="column window-height-header bg-2">
          <div class="col">
            <div class="column full-height justify-center">
              <div class="col-auto text-center">
                <div class="logo-container">
                  <div class="quasar" />
                  <div class="orbit">
                    <div class="strapi" />
                  </div>
                </div>
                <div class="text-h3">
                  Re<div class="inline-block text-accent">:</div><div class="inline-block text-accent flip-horizontal">c</div>ode
                </div>
                <div class="text-h6 regular">Quasar v<div class="inline-block text-accent text-bold">{{ $q.version }}</div></div>
                <div class="text-h6 regular">Strapi v<div class="inline-block text-accent text-bold">^3.0.0</div></div>
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
                  <div class="col-12 col-sm-6 col-md-4" v-for="(img, i) in images" :key="i">
                    <q-card>
                      <q-img
                        :src="img"
                        :ratio="1"
                      />

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
                            Img {{i + 1}}
                          </div>
                          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
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
      images: [
        'https://cdnb.artstation.com/p/assets/images/images/023/969/931/large/yerim-kim-2.jpg?1580904395',
        'https://cdna.artstation.com/p/assets/images/images/023/969/908/large/yerim-kim-20.jpg?1580904367',
        'https://cdna.artstation.com/p/assets/images/images/023/969/920/large/yerim-kim-18.jpg?1580904387'
      ],
      stars: 3
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="sass">
.logo-container
  display: flex
  justify-content: center
  margin-bottom: 100px

.orbit
  width: 200px
  height: 200px
  border: 1px solid rgba(255, 255, 255, 0.12)
  position: absolute
  border-radius: 100%
  margin: -50px auto
  animation: orbit 20s linear infinite

.quasar
  background: url('https://cdn.quasar.dev/logo/svg/quasar-logo.svg')
  width: 100px
  height: 100px
  border-radius: 100%
  animation: logo-rotate 80s linear infinite

.strapi
  background: url('https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-logo-hero_c94026101f.svg')
  background-size: cover
  width: 50px
  height: 50px
  margin: 5px

@keyframes orbit
  to
    transform: rotate(360deg)

@keyframes logo-rotate
  to
    transform: rotate(-360deg)
</style>
