<template>
  <q-page class="bg-blue-grey-1 q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-sm-6 col-md-3" v-for="i in 4" :key="`a${i}`">
        <q-card>
          <q-card-section>
            <div class="row items-center">
              <div class="col">
                <div class="text-subtitle1">Total Profit</div>
                <div class="text-subtitle2 text-grey">All Customs</div>
              </div>
              <div class="col-auto text-center">
                <div class="text-h4"
                  :class="{
                    'text-warning': i === 1,
                    'text-accent': i === 2,
                    'text-positive': i === 3,
                    'text-primary': i === 4,
                  }"
                  >
                  \{{50 + i * 10}}
                </div>
              </div>
            </div>
            <q-linear-progress
              size="5px"
              :class="{
                'text-warning': i === 1,
                'text-accent': i === 2,
                'text-positive': i === 3,
                'text-primary': i === 4,
              }"
              :value="(50 + i * 10) / 100"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
