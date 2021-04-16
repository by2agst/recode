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
                  re<div class="inline-block text-accent">:</div><div class="inline-block text-accent flip-horizontal">c</div>ode
                </div>
                <div class="text-h6 regular">Quasar v<div class="inline-block text-accent text-bold">{{ $q.version }}</div></div>
                <div class="text-h6 regular">Strapi v<div class="inline-block text-accent text-bold">3.2.5</div></div>
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
  components: {
  },
  data () {
    return {
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
  background-image: url('~assets/quasar-logo.svg')
  width: 100px
  height: 100px
  border-radius: 100%
  animation: logo-rotate 80s linear infinite

.strapi
  background-image: url('~assets/strapi-logo.svg')
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
