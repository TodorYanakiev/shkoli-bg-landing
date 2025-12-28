import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-4 px-1 py-16 text-center sm:py-24">
      <h1 className="text-3xl font-semibold sm:text-4xl">{t('notFound.title')}</h1>
      <Link
        to="/"
        className="mx-auto inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        {t('notFound.cta')}
      </Link>
    </section>
  )
}

export default NotFoundPage
