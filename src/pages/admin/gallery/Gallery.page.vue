<template>
  <q-page class="q-pa-md" :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-blue-grey-1'">
    <div class="row" ref="grid" v-resize:debounce="onResize">
      <div class="grid-sizer col-xs-1 col-md-1" />
      <div class="grid-item q-pa-xs" :class="i % 3 == 0 ? 'col-xs-12 col-md-4' : 'col-xs-6 col-md-2'" v-for="(img, i) in images" :key="i">
        <q-img
          :src="img"
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
      images: [
        'https://cdna.artstation.com/p/assets/images/images/026/722/634/large/yuhong-ding-kyoto-final.jpg?1589542650',
        'https://cdnb.artstation.com/p/assets/images/images/025/115/617/large/yuhong-ding-march-19th-2019.jpg?1584667057',
        'https://cdnb.artstation.com/p/assets/images/images/023/561/355/large/jordan-grimmer-fguhfugbfubgf.jpg?1579615379',
        'https://cdna.artstation.com/p/assets/images/images/019/989/218/large/avant-choi-0815.jpg?1565877963',
        'https://cdna.artstation.com/p/assets/images/images/018/823/294/large/minsung-jeon-13-55.jpg?1560870860',
        'https://cdnb.artstation.com/p/assets/images/images/020/085/583/large/donglu-yu-b612-20190820-084048-144.jpg?1566307016',
        'https://cdnb.artstation.com/p/assets/images/images/024/588/377/large/shal-e-1-3.jpg?1582897587',
        'https://cdnb.artstation.com/p/assets/images/images/015/176/477/large/seokyun-jang-light04-fin01.jpg?1547376023',
        'https://cdna.artstation.com/p/assets/images/images/026/722/634/large/yuhong-ding-kyoto-final.jpg?1589542650',
        'https://cdnb.artstation.com/p/assets/images/images/025/115/617/large/yuhong-ding-march-19th-2019.jpg?1584667057',
        'https://cdnb.artstation.com/p/assets/images/images/023/561/355/large/jordan-grimmer-fguhfugbfubgf.jpg?1579615379',
        'https://cdna.artstation.com/p/assets/images/images/019/989/218/large/avant-choi-0815.jpg?1565877963',
        'https://cdna.artstation.com/p/assets/images/images/018/823/294/large/minsung-jeon-13-55.jpg?1560870860',
        'https://cdnb.artstation.com/p/assets/images/images/020/085/583/large/donglu-yu-b612-20190820-084048-144.jpg?1566307016',
        'https://cdnb.artstation.com/p/assets/images/images/024/588/377/large/shal-e-1-3.jpg?1582897587',
        'https://cdnb.artstation.com/p/assets/images/images/015/176/477/large/seokyun-jang-light04-fin01.jpg?1547376023'
      ],
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
