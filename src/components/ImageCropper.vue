<template>
  <div>
    <div class="row justify-center q-mb-md">
      <div class="col-sm-12 col-md-8">
        <vue-cropper
          ref="cropper"
          :src="cropperSrc"
          alt="Photo Profile"
          :aspect-ratio="1"
          :view-mode="3"
        />
      </div>
    </div>

    <input
      ref="input"
      type="file"
      name="image"
      accept="image/*"
      @change="setImage"
      class="hidden"
    />

    <div class="row justify-center">
      <div class="col-sm-12 col-md-8 text-center">
        <div class="q-gutter-md">
          <q-btn no-caps color="positive" icon="far fa-folder-open" label="Chosse File" @click="showFileChooser" />
          <q-btn round no-caps color="positive" class="square" icon="fas fa-arrows-alt-v" @click="flipY($event)" />
          <q-btn round no-caps color="positive" class="square" icon="fas fa-arrows-alt-h" @click="flipX($event)" />
          <q-btn round no-caps color="positive" class="square" icon="fas fa-redo-alt" @click="rotate(-90)" />
          <q-btn round no-caps color="positive" class="square" icon="fas fa-redo-alt fa-flip-horizontal" @click="rotate(90)" />
        </div>
        <div class="q-mt-md">
          <q-btn no-caps color="primary" label="Save" @click="save" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mime from 'mime-types'
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'

export default {
  name: 'ComponentImageCropper',
  components: { VueCropper },
  props: ['cropperSrc', 'save'],
  data () {
    return {
      cropImg: ''
    }
  },
  methods: {
    setImage (e) {
      const file = e.target.files[0]
      if (file.type.indexOf('image/') === -1) {
        this.$q.notify({
          type: 'warning',
          message: 'Please select an image file'
        })
        return
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader()
        reader.onload = (event) => {
          this.imgSrc = event.target.result
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result)
        }
        reader.readAsDataURL(file)
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'Sorry, FileReader API not supported'
        })
      }
    },
    showFileChooser () {
      this.$refs.input.click()
    },
    dataURLtoFile (dataurl) {
      const arr = dataurl.split(',')
      const type = arr[0].match(/:(.*?);/)[1]
      const bstr = window.atob(arr[1])
      let n = bstr.length
      const u8arr = new Uint8Array(n)

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      const extension = mime.extension(type)
      const filename = `${this.$moment().format('YYYY-MM-DD HH:mm:ss')}.${extension}`
      return new File([u8arr], filename, { type: type })
    },
    cropImage () {
      this.cropImg = this.$refs.cropper.getCroppedCanvas({ width: 1024, height: 1024 }).toDataURL()
      const file = this.dataURLtoFile(this.cropImg)
      const formData = new FormData()
      formData.append('files', file)
      return formData
    },
    flipX (event) {
      const dom = event.currentTarget
      let scale = dom.getAttribute('data-scale')
      scale = scale ? -scale : -1
      this.$refs.cropper.scaleX(scale)
      dom.setAttribute('data-scale', scale)
    },
    flipY (event) {
      const dom = event.currentTarget
      let scale = dom.getAttribute('data-scale')
      scale = scale ? -scale : -1
      this.$refs.cropper.scaleY(scale)
      dom.setAttribute('data-scale', scale)
    },
    reset () {
      this.$refs.cropper.reset()
    },
    rotate (deg) {
      this.$refs.cropper.rotate(deg)
    }
  }
}
</script>
