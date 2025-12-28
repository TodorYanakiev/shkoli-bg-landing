import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { primaryButtonClass } from '../../constants/classes'

const Header = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <header className="relative z-10 w-full bg-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-3" aria-label={t('common.brandName')}>
          <img
            src="/logo.png"
            alt={t('common.logoAlt')}
            className="h-10 w-10 object-contain"
            loading="lazy"
          />
          <span className="sr-only">{t('common.brandName')}</span>
        </Link>
        <button type="button" className={primaryButtonClass}>
          {t('header.cta')}
        </button>
      </div>
    </header>
  )
}

export default Header
