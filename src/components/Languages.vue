<template>
  <q-btn
    flat
    round>
    <q-avatar size="15px">
      <img v-if="lang === 'en-us'" src="~assets/flags/012-uk.svg">
      <img v-else-if="lang === 'id'" src="~assets/flags/004-indonesia.svg">
    </q-avatar>
    <q-menu anchor="bottom right" self="top right" :offset="[0, 10]">
      <q-list>
        <q-item
          clickable
          v-ripple
          v-for="language in langOptions"
          :key="language.value"
          @click="changeLanguage(language.value)" >
          <q-item-section>
            <q-item-label>
              <q-avatar size="15px" class="q-mr-sm">
                <img v-if="language.value === 'en-us'" src="~assets/flags/012-uk.svg">
                <img v-else-if="language.value === 'id'" src="~assets/flags/004-indonesia.svg">
              </q-avatar>
              <span class="vertical-middle">{{language.label}}</span>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>
import { LocalStorage } from 'quasar'

export default {
  name: 'ComponentLanguages',

  data () {
    return {
      lang: LocalStorage.getItem('lang') || this.$i18n.locale,
      langOptions: [
        { value: 'en-us', label: 'English' },
        { value: 'id', label: 'Indonesia' }
      ]
    }
  },
  mounted () {
    this.$i18n.locale = LocalStorage.getItem('lang')
  },
  methods: {
    changeLanguage (lang) {
      this.$i18n.locale = lang
      this.lang = lang
      LocalStorage.set('lang', lang)
    }
  }
}
</script>
