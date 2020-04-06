<template>
  <q-page class="bg-blue-grey-1 q-pa-md">
    <div class="row" ref="grid" v-resize:debounce="onResize">
      <div class="grid-sizer col-1" />
      <div class="grid-item col-8 q-pa-xs" @mouseover="showCaption = true" @mouseout="showCaption = false">
        <q-img
          src="/statics/users/rc19.jpg"
          :ratio="1"
          >
          <div
            class="text-subtitle2 flex flex-center"
            :class="$q.screen.lt.md ? 'absolute-bottom' : 'absolute-full'"
            v-show="showCaption"
            >
            Anti Covid
          </div>
        </q-img>
      </div>
      <div class="grid-item col-4 q-pa-xs" v-for="i in 6" :key="i">
        <q-img
          :src="`/statics/gallery/g0${i}.jpg`"
          :ratio="1"
        />
      </div>
      <div class="grid-item col-8 q-pa-xs">
        <q-img
          src="/statics/users/rc19-1.jpg"
          :ratio="1"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import Masonry from 'masonry-layout'
import resize from 'vue-resize-directive'

export default {
  name: 'Gallery',
  directives: {
    resize
  },
  data () {
    return {
      instance: '',
      masonry: '',
      grid: '',
      showCaption: this.$q.screen.lt.md
    }
  },
  mounted () {
    this.grid = this.$refs.grid
    this.masonry = new Masonry(this.grid, {
      gutter: 0,
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item'
    })
  },
  methods: {
    onResize () {
      this.masonry.reloadItems()
      this.masonry.layout()
    }
  }
}
</script>
