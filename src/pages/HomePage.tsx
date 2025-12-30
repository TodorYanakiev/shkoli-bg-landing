import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import heroImage from '../assets/hero.png'
import heroIllustration from '../assets/hero-illustration.svg'
import { primaryButtonClass } from '../constants/classes'
import { APP_BASE_URL } from '../constants/env'

type IdeaCard = {
  icon: ReactNode
  title: string
  description: string
}

type SupportCard = {
  icon: ReactNode
  title: string
  description: string
}

const cardIcons: Record<string, ReactNode> = {
  discovery: (
    <svg className="h-9 w-9 text-brand" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5Zm0 3.5a5 5 0 0 1 5 5c0 2.8-2.2 5-5 5a5 5 0 0 1-5-5c0-2.8 2.2-5 5-5Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z"
        fill="currentColor"
      />
    </svg>
  ),
  guidance: (
    <svg className="h-9 w-9 text-brand" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4c-1.8 0-3.4.7-4.6 1.8l-1.7-1.7-1.4 1.4 1.6 1.6A7.9 7.9 0 0 0 4 12c0 4.4 3.6 8 8 8 2.1 0 4-.8 5.4-2.2l1.8 1.8 1.4-1.4-1.9-1.9A8 8 0 0 0 20 12c0-4.4-3.6-8-8-8Zm0 2c3.3 0 6 2.7 6 6 0 1.2-.4 2.3-1 3.2l-2.2-2.2c.1-.3.2-.6.2-1 0-1.6-1.4-3-3-3-.4 0-.7.1-1 .2L8.8 6.9A5.9 5.9 0 0 1 12 6Zm-4 6c0-.4.1-.7.2-1l5.7 5.7c-.7.2-1.2.3-1.9.3-3.3 0-6-2.7-6-6Z"
        fill="currentColor"
      />
    </svg>
  ),
  transparency: (
    <svg className="h-9 w-9 text-brand" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 4.5h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2Zm0 2v11h11v-11h-11Zm3 2.5h5v2h-5v-2Zm0 3.5h5v2h-5v-2Zm-2-3.5h1.5v2H7.5v-2Zm0 3.5h1.5v2H7.5v-2Z"
        fill="currentColor"
      />
    </svg>
  ),
  community: (
    <svg className="h-9 w-9 text-brand" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 4.5a3 3 0 1 1-.1 6 3 3 0 0 1 .1-6Zm8 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM8 13c2.7 0 5 1.1 5 3.5V19H3v-2.5C3 14.1 5.3 13 8 13Zm8 0c.5 0 1 .1 1.5.2A4.9 4.9 0 0 1 21 17.5V19h-6v-2.5c0-.7-.2-1.3-.6-1.8l.1-.1A4.6 4.6 0 0 1 16 13Z"
        fill="currentColor"
      />
    </svg>
  ),
}

const HomePage = (): JSX.Element => {
  const { t } = useTranslation()

  const ideaCards: IdeaCard[] = [
    {
      icon: cardIcons.discovery,
      title: t('home.idea.cards.discovery.title'),
      description: t('home.idea.cards.discovery.text'),
    },
    {
      icon: cardIcons.guidance,
      title: t('home.idea.cards.guidance.title'),
      description: t('home.idea.cards.guidance.text'),
    },
    {
      icon: cardIcons.transparency,
      title: t('home.idea.cards.transparency.title'),
      description: t('home.idea.cards.transparency.text'),
    },
    {
      icon: cardIcons.community,
      title: t('home.idea.cards.community.title'),
      description: t('home.idea.cards.community.text'),
    },
  ]

  const supportCards: SupportCard[] = [
    {
      icon: (
        <svg className="h-6 w-6 text-brand" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5.5 4.5h13a1 1 0 0 1 1 1v8.8a1 1 0 0 1-.6.9l-6.5 2.8a1 1 0 0 1-.8 0l-6.5-2.8a1 1 0 0 1-.6-.9V5.5a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 7.5h11M6.5 10.5h5.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: t('home.support.cards.guided.title'),
      description: t('home.support.cards.guided.text'),
    },
    {
      icon: (
        <svg className="h-6 w-6 text-brand" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 4.5c4.1 0 7.5 2 7.5 4.5s-3.4 4.5-7.5 4.5S4.5 11.5 4.5 9 7.9 4.5 12 4.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.6 14.3c1.3 1.3 4.1 2.2 7.4 2.2 3.3 0 6.1-.9 7.4-2.2M4.9 17.1c1.2 1.1 3.9 1.9 7.1 1.9 3.2 0 5.9-.8 7.1-1.9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: t('home.support.cards.confident.title'),
      description: t('home.support.cards.confident.text'),
    },
  ]

  return (
    <div className="flex w-full flex-col">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-6 bg-white px-4 py-8 sm:gap-10 sm:px-6 sm:py-12 lg:flex-row lg:items-center lg:gap-16 lg:px-12">
        <div className="flex flex-1 flex-col items-start gap-7">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold sm:text-5xl lg:text-7xl">{t('home.title')}</h1>
            <p className="max-w-2xl text-lg text-slate-600 sm:text-xl">{t('home.subtitle')}</p>
          </div>
          <a href={APP_BASE_URL} className={primaryButtonClass}>
            {t('header.cta')}
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img
            src={heroIllustration}
            alt={t('home.heroAlt')}
            className="w-full max-w-xl"
            loading="lazy"
          />
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden bg-slate-50">
        <div
          className="pointer-events-none absolute -top-16 left-0 h-16 w-full bg-slate-50 [clip-path:polygon(0_100%,100%_0,100%_100%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 py-8 sm:px-6 sm:py-14 lg:px-12">
          <div className="mb-6 flex flex-col gap-8 sm:mb-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
                {t('home.idea.heading')}
              </h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
              <div className="flex flex-col gap-4">
                <p className="text-lg text-slate-700 sm:text-xl">{t('home.idea.left')}</p>
                <button type="button" className={`${primaryButtonClass} w-fit`}>
                  {t('home.idea.button')}
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-lg text-slate-700 sm:text-xl">{t('home.idea.right')}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ideaCards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md focus-within:-translate-y-1 focus-within:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-brand">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="text-sm text-slate-600">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 min-h-screen text-white integrations-section">
        <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-0">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">{t('home.support.heading')}</h2>
              <p className="text-lg leading-relaxed text-slate-200 sm:text-xl">
                {t('home.idea.left')}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {supportCards.map((card) => (
                <article
                  key={card.title}
                  className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md focus-within:-translate-y-1 focus-within:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-brand">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                  <p className="text-sm text-slate-600">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-full max-w-xl lg:relative">
              <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-emerald-900/20">
                <img
                  src={heroImage}
                  alt={t('home.support.primaryAlt')}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="hidden w-2/3 max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg lg:absolute lg:-bottom-10 lg:right-6 lg:block">
                <img
                  src={heroIllustration}
                  alt={t('home.support.secondaryAlt')}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
