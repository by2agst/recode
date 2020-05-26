<template>
  <q-btn
    flat
    round>
    <q-avatar size="15px">
      <img :src="`statics/flags/${activeLangSvg}.svg`">
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
                <img :src="`statics/flags/${language.svg}.svg`">
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
export default {
  name: 'ComponentLanguages',

  data () {
    return {
      lang: this.$i18n.locale,
      activeLangSvg: '012-uk',
      langOptions: [
        { value: 'en-us', label: 'English', svg: '012-uk' },
        { value: 'id', label: 'Indonesia', svg: '004-indonesia' }
      ]
    }
  },
  mounted () {
    this.setSvgLanguage(this.$i18n.locale)
  },
  methods: {
    changeLanguage (lang) {
      this.$i18n.locale = lang
      this.setSvgLanguage(lang)
    },
    setSvgLanguage (lang) {
      let active = this.langOptions.find(l => l.value === lang)
      this.activeLangSvg = active.svg
    }
  }
}
</script>
