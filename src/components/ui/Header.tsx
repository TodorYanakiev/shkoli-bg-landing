import type { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { primaryButtonClass } from '../../constants/classes'
import { APP_BASE_URL } from '../../constants/env'

const Header = (): ReactElement => {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/60 bg-white/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-12">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-3" aria-label={t('common.brandName')}>
            <img
              src={logo}
              alt={t('common.logoAlt')}
              className="h-10 w-10 object-contain"
              loading="lazy"
            />
            <span className="sr-only">{t('common.brandName')}</span>
          </Link>
          <nav
            className="hidden items-center gap-5 text-base text-slate-600 lg:flex"
            aria-label={t('header.navLabel')}
          >
            <a
              href="#trust"
              className="transition hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {t('footer.links.trust')}
            </a>
            <a
              href="#idea"
              className="transition hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {t('footer.links.idea')}
            </a>
            <a
              href="#flow"
              className="transition hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {t('footer.links.flow')}
            </a>
            <a
              href="#support"
              className="transition hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {t('footer.links.support')}
            </a>
          </nav>
        </div>
        <a href={APP_BASE_URL} className={primaryButtonClass}>
          {t('header.cta')}
        </a>
      </div>
    </header>
  )
}

export default Header
