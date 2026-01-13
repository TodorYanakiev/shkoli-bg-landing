import type { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { normalizeLanguage, storeLanguage } from '../../utils/language'
import type { SupportedLanguage } from '../../utils/language'

const LanguageToggle = (): ReactElement => {
  const { i18n, t } = useTranslation()
  const currentLanguage = normalizeLanguage(i18n.language)
  const nextLanguage: SupportedLanguage = currentLanguage === 'bg' ? 'en' : 'bg'
  const ariaLabel = t('common.languageSwitcher.label', {
    language: t(`common.languageSwitcher.languages.${nextLanguage}`),
  })

  const handleLanguageChange = (): void => {
    i18n.changeLanguage(nextLanguage)
    storeLanguage(nextLanguage)
  }

  return (
    <button
      type="button"
      onClick={handleLanguageChange}
      aria-label={ariaLabel}
      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      {nextLanguage.toUpperCase()}
    </button>
  )
}

export default LanguageToggle
