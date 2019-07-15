import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './en'
import zhLocale from './zh'
import publicFun from '@/utils/vendor'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale
  },
  zh: {
    ...zhLocale
  }
}
const lang = publicFun.getUrlParams('language') || 'zh'
const i18n = new VueI18n({
  locale: lang,
  messages: messages
})

export default i18n
