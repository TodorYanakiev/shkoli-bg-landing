import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { primaryButtonClass } from '../../constants/classes'
import { APP_BASE_URL } from '../../constants/env'

const Footer = (): JSX.Element => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-12">
        <div className="flex flex-col gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt={t('common.logoAlt')}
              className="h-10 w-10 object-contain"
              loading="lazy"
            />
            <span className="text-lg font-semibold text-slate-900">{t('common.brandName')}</span>
          </Link>
          <p className="max-w-sm text-base text-slate-600">{t('footer.tagline')}</p>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-6">
          <nav className="flex flex-wrap gap-4 text-base text-slate-600" aria-label={t('footer.navLabel')}>
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
              href="#trust"
              className="transition hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {t('footer.links.trust')}
            </a>
            <a
              href="#support"
              className="transition hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {t('footer.links.support')}
            </a>
          </nav>
          <a href={APP_BASE_URL} className={primaryButtonClass}>
            {t('header.cta')}
          </a>
        </div>
      </div>
      <div className="border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-4 text-sm text-slate-500 sm:px-6 lg:px-12">
          {t('footer.copy', { year })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
