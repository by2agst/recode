<template>
  <q-page class="bg-blue-grey-1 q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-sm-4">
        <q-card>
          <q-card-section>
            <div class="row q-col-gutter-md q-mb-md items-center">
              <div class="col-auto">
                <q-avatar rounded size="100px">
                  <q-img
                    src="https://cdna.artstation.com/p/assets/images/images/023/969/922/large/yerim-kim-1.jpg?1580904390"
                    :ratio="1"
                  />
                </q-avatar>
              </div>
              <div class="col">
                <div class="text-h6">
                  {{me.username | capitalize}}
                </div>
                <div class="text-subtitle2 text-grey">{{me.role.name}}</div>
                <div class="q-gutter-sm">
                  <q-btn no-caps size="sm" color="positive">Upgrade</q-btn>
                  <q-btn no-caps size="sm" color="accent">10 Messages</q-btn>
                </div>
              </div>
            </div>
            <div class="row q-my-sm">
              <div class="col-auto">Email:</div>
              <div class="col text-right text-grey">{{me.email}}</div>
            </div>
            <div class="row q-my-sm">
              <div class="col-auto">Phone:</div>
              <div class="col text-right text-grey">0888888888888</div>
            </div>
            <div class="row q-my-sm">
              <div class="col-auto">Location:</div>
              <div class="col text-right text-grey">Indonesia</div>
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
              <div class="row justify-center">
                <div class="col-sm-12 col-md-8">
                  <div class="row q-col-gutter-sm items-center q-mb-md">
                    <div class="col-4 text-right">
                      Email
                    </div>
                    <div class="col-8">
                      {{me.email}}
                    </div>
                  </div>
                  <div class="row q-col-gutter-sm items-center q-mb-md">
                    <div class="col-4 text-right">
                        Username
                    </div>
                    <div class="col-8">
                      {{me.username}}
                    </div>
                  </div>
                  <div class="row q-col-gutter-sm items-center">
                    <div class="col-4 text-right">
                      <div class="q-pt-xs q-pb-lg">
                        Address
                      </div>
                    </div>
                    <div class="col-8">
                      <q-input
                        dense
                        lazy-rules
                        outlined
                        ref="address"
                        v-model="form.address"
                        placeholder="Address"
                        :rules="[
                          val => !!val || $t('rules.required', { name: 'address' })
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
            </div>
          </q-tab-panel>

          <q-tab-panel name="changePassword">
            <div class="text-subtitle1 q-mb-md">
              Change Password
              <small class="text-grey">update your password</small>
            </div>
            <div class="full-width">
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
                        Retype Password
                      </div>
                    </div>
                    <div class="col-8">
                      <q-input
                        dense
                        lazy-rules
                        outlined
                        ref="reTypePassword"
                        v-model="form.reTypePassword"
                        :type="isRetypePwd ? 'password' : 'text'"
                        :rules="[
                          val => !!val || $t('rules.required', { name: 'reTypePassword' })
                        ]"
                        >
                        <template v-slot:append>
                          <q-icon
                            :name="isRetypePwd ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isRetypePwd = !isRetypePwd"
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
            </div>
          </q-tab-panel>
          <q-tab-panel name="changePhoto">
            <div class="text-subtitle1 q-mb-md">
              Change Photo
              <small class="text-grey">update your photo profile</small>
            </div>
            <div class="full-width q-mb-md">
              <div class="row justify-center">
                <div class="col-sm-12 col-md-8">
                  <vue-cropper
                    ref="cropper"
                    src="https://cdna.artstation.com/p/assets/images/images/023/969/922/large/yerim-kim-1.jpg?1580904390"
                    alt="Photo Profile"
                    :aspect-ratio="1"
                    :view-mode="3"
                  />
                </div>
              </div>
            </div>
            <div class="full-width">
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
                    <q-btn no-caps color="primary" label="Save" @click="cropImage" />
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
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'

export default {
  name: 'Dashboard',
  components: { VueCropper },
  data () {
    return {
      panel: 'personalInformation',
      form: {
        email: 'user@recode.com',
        fullName: 'Re',
        address: '',
        OldPassword: '',
        NewPassword: '',
        RetypePassword: ''
      },
      isOldPwd: true,
      isNewPwd: true,
      isRetypePwd: true,
      cropImg: ''
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
    updatePersonal () {
      this.$refs.address.validate()

      if (this.$refs.address.hasError) {
        this.$q.notify({
          type: 'negative',
          message: `Update personal information failed`
        })
      } else {
        this.$q.notify({
          type: 'positive',
          message: `Update personal information successful`
        })
      }
    },
    updatePassword () {
      this.$refs.oldPassword.validate()
      this.$refs.newPassword.validate()
      this.$refs.reTypePassword.validate()

      if (this.$refs.oldPassword.hasError || this.$refs.newPassword.hasError || this.$refs.reTypePassword.hasError) {
        this.$q.notify({
          type: 'negative',
          message: `Update password failed`
        })
      } else {
        this.$q.notify({
          type: 'positive',
          message: `Update password successful`
        })
      }
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
    cropImage () {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
      console.log('\x1b[36m%s\x1b[0m', '>>> cropImg :', this.cropImg)
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
