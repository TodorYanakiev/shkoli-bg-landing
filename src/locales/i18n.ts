import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './en/translation.json'
import bgTranslation from './bg/translation.json'
import { DEFAULT_LANGUAGE, getStoredLanguage, normalizeLanguage } from '../utils/language'

const resources = {
  en: { translation: enTranslation },
  bg: { translation: bgTranslation },
}

const initialLanguage = normalizeLanguage(getStoredLanguage() ?? DEFAULT_LANGUAGE)

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
