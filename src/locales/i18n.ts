import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './en/translation.json'
import bgTranslation from './bg/translation.json'

const resources = {
  en: { translation: enTranslation },
  bg: { translation: bgTranslation },
}

const getPreferredLanguage = (): 'en' | 'bg' => {
  if (typeof navigator === 'undefined') {
    return 'en'
  }

  const browserLanguages = navigator.languages && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language]

  const normalized = browserLanguages
    .filter(Boolean)
    .map((language) => language.toLowerCase())

  if (normalized.some((language) => language.startsWith('bg'))) {
    return 'bg'
  }

  return 'en'
}

i18n.use(initReactI18next).init({
  resources,
  lng: getPreferredLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
