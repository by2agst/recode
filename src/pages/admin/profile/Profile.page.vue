<template>
  <q-page class="bg-blue-grey-1 q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-sm-4">
        <q-card>
          <q-card-section>
            <div class="row q-col-gutter-md q-mb-md items-center">
              <div class="col-auto">
                <q-avatar rounded size="100px" color="primary" text-color="white">
                  <q-img
                    v-if="me.avatar"
                    :src="$g.getSrc(me.avatar.formats.thumbnail.url)"
                    :ratio="1"
                  />
                  <div v-else>
                    {{$g.initialName(me.username)}}
                  </div>
                </q-avatar>
              </div>
              <div class="col">
                <div class="text-h6">
                  {{me.username | capitalize}}
                </div>
                <div class="text-subtitle2 text-grey">{{me.role.name}}</div>
              </div>
            </div>
            <q-list class="q-mt-md" dense>
              <q-item
                clickable
                v-ripple
                active-class="text-positive"
                :active="panel === 'personalInformation'"
                @click="panel = 'personalInformation'"
                >
                <q-item-section avatar>
                  <q-avatar color="clear" text-color="positive" icon="far fa-id-card" />
                </q-item-section>
                <q-item-section>Personal Information</q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                active-class="text-positive"
                :active="panel === 'changePassword'"
                @click="panel = 'changePassword'"
                >
                <q-item-section avatar>
                  <q-avatar color="clear" text-color="positive" icon="fas fa-unlock-alt" />
                </q-item-section>
                <q-item-section>Change Password</q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                active-class="text-positive"
                :active="panel === 'changePhoto'"
                @click="panel = 'changePhoto'"
                >
                <q-item-section avatar>
                  <q-avatar color="clear" text-color="positive" icon="fas fa-camera-retro" />
                </q-item-section>
                <q-item-section>Change Photo Profile</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-sm-8">
        <q-tab-panels
          v-model="panel"
          animated
          transition-prev="slide-down"
          transition-next="slide-up"
          class="shadow-2 rounded-borders"
          >
          <q-tab-panel name="personalInformation">
            <div class="text-subtitle1 q-mb-md">
              Personal Information
              <small class="text-grey">update your personal information</small>
            </div>
            <div class="full-width">
              <q-form class="q-gutter-y-md" ref="formPersonal" @submit="updatePersonal">
                <div class="row justify-center">
                  <div class="col-sm-12 col-md-8">
                    <div class="row q-col-gutter-sm items-center">
                      <div class="col-4 text-right">
                        <div class="q-pt-xs q-pb-lg">
                          Email
                        </div>
                      </div>
                      <div class="col-8">
                        <div class="q-pt-xs q-pb-lg">
                          {{me.email}}
                        </div>
                      </div>
                    </div>
                    <div class="row q-col-gutter-sm items-center">
                      <div class="col-4 text-right">
                        <div class="q-pt-xs q-pb-lg">
                          Username
                        </div>
                      </div>
                      <div class="col-8">
                        <div class="q-pt-xs q-pb-lg">
                          {{me.username}}
                        </div>
                      </div>
                    </div>
                    <div class="row q-col-gutter-sm items-center">
                      <div class="col-4 text-right">
                        <div class="q-pt-xs q-pb-lg">
                          Full name
                        </div>
                      </div>
                      <div class="col-8">
                        <q-input
                          dense
                          lazy-rules
                          outlined
                          ref="fullName"
                          v-model="form.fullName"
                          placeholder="Full name"
                          :rules="[
                            val => !!val || $t('rules.required', { name: 'fullName' })
                          ]"
                        />
                      </div>
                    </div>
                    <div class="row q-col-gutter-sm items-center">
                      <div class="col-8 offset-4">
                        <q-btn no-caps color="primary" label="Save" @click="updatePersonal" />
                      </div>
                    </div>
                  </div>
                </div>
              </q-form>
            </div>
          </q-tab-panel>

          <q-tab-panel name="changePassword">
            <div class="text-subtitle1 q-mb-md">
              Change Password
              <small class="text-grey">update your password</small>
            </div>
            <div class="full-width">
              <q-form class="q-gutter-y-md" ref="formPassword" @submit="updatePassword">
                <div class="row justify-center">
                  <div class="col-sm-12 col-md-8">
                    <div class="row q-col-gutter-sm items-center">
                      <div class="col-4 text-right">
                        <div class="q-pt-xs q-pb-lg">
                          Old Password
                        </div>
                      </div>
                      <div class="col-8">
                        <q-input
                          dense
                          lazy-rules
                          outlined
                          ref="oldPassword"
                          v-model="form.oldPassword"
                          :type="isOldPwd ? 'password' : 'text'"
                          :rules="[
                            val => !!val || $t('rules.required', { name: 'oldPassword' })
                          ]"
                          >
                          <template v-slot:append>
                            <q-icon
                              :name="isOldPwd ? 'visibility_off' : 'visibility'"
                              class="cursor-pointer"
                              @click="isOldPwd = !isOldPwd"
                            />
                          </template>
                        </q-input>
                      </div>
                    </div>
                    <div class="row q-col-gutter-sm items-center">
                      <div class="col-4 text-right">
                        <div class="q-pt-xs q-pb-lg">
                          New Password
                        </div>
                      </div>
                      <div class="col-8">
                        <q-input
                          dense
                          lazy-rules
                          outlined
                          ref="newPassword"
                          v-model="form.newPassword"
                          :type="isNewPwd ? 'password' : 'text'"
                          :rules="[
                            val => !!val || $t('rules.required', { name: 'newPassword' })
                          ]"
                          >
                          <template v-slot:append>
                            <q-icon
                              :name="isNewPwd ? 'visibility_off' : 'visibility'"
                              class="cursor-pointer"
                              @click="isNewPwd = !isNewPwd"
                            />
                          </template>
                        </q-input>
                      </div>
                    </div>
                    <div class="row q-col-gutter-sm items-center">
                      <div class="col-4 text-right">
                        <div class="q-pt-xs q-pb-lg">
                          Password confirmation
                        </div>
                      </div>
                      <div class="col-8">
                        <q-input
                          dense
                          lazy-rules
                          outlined
                          ref="passwordConfirmation"
                          v-model="form.passwordConfirmation"
                          :type="isPwdCnf ? 'password' : 'text'"
                          :rules="[
                            val => !!val || $t('rules.required', { name: 'passwordConfirmation' }),
                            val => val.length > 6 || $t('rules.minLength', { name: 'passwordConfirmation', length: 6 }),
                            val => val === form.newPassword || $t('rules.sameAs', { name: 'passwordConfirmation', field: 'password' })
                          ]"
                          >
                          <template v-slot:append>
                            <q-icon
                              :name="isPwdCnf ? 'visibility_off' : 'visibility'"
                              class="cursor-pointer"
                              @click="isPwdCnf = !isPwdCnf"
                            />
                          </template>
                        </q-input>
                      </div>
                    </div>
                    <div class="row q-col-gutter-sm items-center">
                      <div class="col-8 offset-4">
                        <q-btn no-caps color="primary" label="Change Password" @click="updatePassword" />
                      </div>
                    </div>
                  </div>
                </div>
              </q-form>
            </div>
          </q-tab-panel>

          <q-tab-panel name="changePhoto">
            <div class="text-subtitle1 q-mb-md">
              Change Photo
              <small class="text-grey">update your photo profile</small>
            </div>
            <div class="full-width">
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
                    <q-btn no-caps color="primary" label="Save" @click="updateAvatar" />
                  </div>
                </div>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script>
import mime from 'mime-types'
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'

export default {
  name: 'Dashboard',
  components: { VueCropper },
  data () {
    return {
      panel: 'personalInformation',
      form: {
        fullName: '',
        OldPassword: '',
        NewPassword: '',
        RetypePassword: ''
      },
      isOldPwd: true,
      isNewPwd: true,
      isPwdCnf: true,
      cropImg: ''
    }
  },
  mounted () {
    this.form.fullName = this.me.fullName
  },
  computed: {
    me () {
      return this.$auth.user()
    },
    cropperSrc () {
      const user = this.$auth.user()
      return user.avatar ? this.$g.getSrc(user.avatar.formats.large.url) : `https://via.placeholder.com/1280x720.png/646c9a/ffffff/?text=${user.username}`
    }
  },
  methods: {
    updatePersonal () {
      this.$refs.formPersonal.validate().then(success => {
        if (success) {
          this.$axios.patch(`users/${this.me.id}`, {
            fullName: this.form.fullName
          }).then(({ data }) => {
            this.$q.notify({
              type: 'axios-notify',
              color: 'positive',
              icon: 'far fa-check-circle',
              message: 'Success',
              caption: 'Data updated'
            })
          }).catch(e => {
            const errMessage = this.$g.errorMessage(e)
            this.$q.notify({
              type: 'axios-notify',
              message: 'Update failed',
              caption: errMessage
            })
          })
        }
      })
    },
    updatePassword () {
      this.$refs.formPassword.validate().then(success => {
        if (success) {
          this.$axios.patch(`users/${this.me.id}`, {
            oldPassword: this.form.oldPassword,
            password: this.form.newPassword
          }).then(({ data }) => {
            this.$q.notify({
              type: 'axios-notify',
              color: 'positive',
              icon: 'far fa-check-circle',
              message: 'Success',
              caption: 'Data updated'
            })
          }).catch(e => {
            const errMessage = this.$g.errorMessage(e)
            this.$q.notify({
              type: 'axios-notify',
              message: 'Update failed',
              caption: errMessage
            })
          })
        }
      })
    },
    updateAvatar () {
      const formData = this.cropImage()
      formData.append('refId', this.me.id)
      formData.append('field', 'avatar')
      formData.append('ref', 'user')
      formData.append('source', 'users-permissions')

      this.$axios.post('upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(() => {
        console.log('SUCCESS!!')
        this.$auth.fetch()
        this.$q.notify({
          type: 'axios-notify',
          color: 'positive',
          icon: 'far fa-check-circle',
          message: 'Success',
          caption: 'Update successfull'
        })
      }).catch(e => {
        const errMessage = this.$g.errorMessage(e)
        this.$q.notify({
          type: 'axios-notify',
          message: 'Login Failed',
          caption: errMessage
        })
      })
    },
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
      let arr = dataurl.split(',')
      let type = arr[0].match(/:(.*?);/)[1]
      let bstr = window.atob(arr[1])
      let n = bstr.length
      let u8arr = new Uint8Array(n)

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      const extension = mime.extension(type)
      const filename = `${this.$moment().format('YYYY-MM-DD HH:mm:ss')}.${extension}`
      return new File([u8arr], filename, { type: type })
    },
    cropImage () {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas({ width: 1024, height: 1024 }).toDataURL()
      const file = this.dataURLtoFile(this.cropImg)
      let formData = new FormData()
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

<style>
</style>
