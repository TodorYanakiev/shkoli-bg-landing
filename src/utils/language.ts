export type SupportedLanguage = 'bg' | 'en'

const LANGUAGE_STORAGE_KEY = 'landing-preferred-language'
export const DEFAULT_LANGUAGE: SupportedLanguage = 'bg'

const isSupportedLanguage = (language: string | null): language is SupportedLanguage =>
  language === 'bg' || language === 'en'

export const getStoredLanguage = (): SupportedLanguage | null => {
  if (typeof window === 'undefined') {
    return null
  }

  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
  return isSupportedLanguage(stored) ? stored : null
}

export const storeLanguage = (language: SupportedLanguage): void => {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
}

export const normalizeLanguage = (language?: string | null): SupportedLanguage => {
  if (!language) {
    return DEFAULT_LANGUAGE
  }

  const normalized = language.toLowerCase()
  if (normalized.startsWith('bg')) {
    return 'bg'
  }

  if (normalized.startsWith('en')) {
    return 'en'
  }

  return DEFAULT_LANGUAGE
}
