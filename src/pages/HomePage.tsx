import type { ReactNode } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import heroImage from '../assets/hero.png'
import heroIllustration from '../assets/hero-illustration.png'
import PaperEdge from '../components/ui/PaperEdge'
import { outlineButtonClass, primaryButtonClass } from '../constants/classes'
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

type TrustItem = {
  icon: ReactNode
  label: string
}

type FlowStep = {
  title: string
  description: string
}

type FlowPanelItem = {
  label: string
  value: string
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

const trustIcons: Record<string, ReactNode> = {
  local: (
    <svg className="h-5 w-5 text-brand" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5a6.5 6.5 0 0 0-6.5 6.5c0 4.6 6.5 10.5 6.5 10.5s6.5-5.9 6.5-10.5A6.5 6.5 0 0 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  criteria: (
    <svg className="h-5 w-5 text-brand" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 4.5h7l3 3V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14 4.5V8h3.5M9 12h6M9 15.5h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  community: (
    <svg className="h-5 w-5 text-brand" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.5 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm7 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3.5 19v-1.4c0-2 2.7-3.6 5-3.6s5 1.6 5 3.6V19m2-2.4c.5-.4 1.2-.6 2-.6 2.2 0 4 1.2 4 2.8V19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        <svg className="h-7 w-7 text-brand" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
        <svg className="h-7 w-7 text-brand" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

  const trustItems: TrustItem[] = [
    {
      icon: trustIcons.local,
      label: t('home.trust.items.local'),
    },
    {
      icon: trustIcons.criteria,
      label: t('home.trust.items.criteria'),
    },
    {
      icon: trustIcons.community,
      label: t('home.trust.items.community'),
    },
  ]

  const flowSteps: FlowStep[] = [
    {
      title: t('home.flow.steps.location.title'),
      description: t('home.flow.steps.location.text'),
    },
    {
      title: t('home.flow.steps.filters.title'),
      description: t('home.flow.steps.filters.text'),
    },
    {
      title: t('home.flow.steps.compare.title'),
      description: t('home.flow.steps.compare.text'),
    },
  ]

  const flowPanelItems: FlowPanelItem[] = [
    {
      label: t('home.flow.panel.items.distance.label'),
      value: t('home.flow.panel.items.distance.value'),
    },
    {
      label: t('home.flow.panel.items.schedule.label'),
      value: t('home.flow.panel.items.schedule.value'),
    },
    {
      label: t('home.flow.panel.items.focus.label'),
      value: t('home.flow.panel.items.focus.value'),
    },
  ]

  return (
    <div className="flex w-full flex-col">
      <section className="mx-auto flex max-w-6xl flex-col justify-center gap-8 bg-white px-4 py-20 sm:gap-10 sm:px-6 sm:py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-12 lg:py-28">
        <div className="flex flex-1 flex-col items-start gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand sm:text-base">
              {t('home.eyebrow')}
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              <Trans
                i18nKey="home.title"
                components={{
                  highlight: <span className="text-brand" />,
                }}
              />
            </h1>
            <p className="max-w-xl text-lg text-slate-600 sm:text-xl">{t('home.subtitle')}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href={APP_BASE_URL} className={primaryButtonClass}>
              {t('header.cta')}
            </a>
            <a href="#flow" className={outlineButtonClass}>
              {t('home.hero.secondaryCta')}
            </a>
          </div>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <div
            className="pointer-events-none absolute -inset-16 rounded-full bg-emerald-100/70 blur-3xl"
            aria-hidden="true"
          />
          <img
            src={heroIllustration}
            alt={t('home.heroAlt')}
            className="relative w-full max-w-xl rounded-3xl border border-emerald-100/70 bg-white shadow-xl shadow-emerald-900/10"
            loading="lazy"
          />
        </div>
      </section>

      <section id="trust" className="scroll-mt-24 border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand sm:text-base">
              {t('home.trust.eyebrow')}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              {t('home.trust.heading')}
            </h2>
            <p className="mt-3 text-base text-slate-600">{t('home.trust.copy')}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-medium text-slate-700 shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand shadow-sm">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="idea"
        className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-emerald-50/50 to-white py-20 sm:py-24 lg:py-28"
      >
        <PaperEdge className="pointer-events-none absolute -top-1 left-0 z-0 h-16 w-full text-white drop-shadow-[0_2px_6px_rgba(15,23,42,0.08)]" />
        <div
          className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full bg-emerald-100/70 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-8 h-72 w-72 rounded-full bg-emerald-50/70 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-12">
          <div className="mb-6 flex flex-col gap-8 sm:mb-10">
            <div className="max-w-2xl">
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
                className="flex h-full min-h-[220px] flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:ring-1 hover:ring-emerald-200/70 focus-within:-translate-y-1 focus-within:shadow-md focus-within:ring-1 focus-within:ring-emerald-200/70"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-brand">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="text-base leading-relaxed text-slate-600">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="flow"
        className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-white via-emerald-50/35 to-white py-20 sm:py-24 lg:py-28"
      >
        <div
          className="pointer-events-none absolute -right-20 top-4 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-emerald-100/50 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand sm:text-base">
              {t('home.flow.eyebrow')}
            </p>
            <h2 className="max-w-2xl text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
              {t('home.flow.heading')}
            </h2>
            <p className="max-w-xl text-lg text-slate-600 sm:text-xl">{t('home.flow.copy')}</p>
            <div className="grid gap-5">
              {flowSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="group relative flex gap-4 overflow-hidden rounded-2xl border border-emerald-100/70 bg-white/95 p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg focus-within:-translate-y-1 focus-within:border-emerald-200 focus-within:shadow-lg before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-gradient-to-b before:from-brand before:to-emerald-200 before:opacity-70 before:content-['']"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-100 bg-white text-brand shadow-sm">
                    <span className="text-base font-semibold text-brand">{index + 1}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                    <p className="text-base text-slate-600">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href={APP_BASE_URL} className={primaryButtonClass}>
                {t('home.flow.primaryCta')}
              </a>
              <a href="#support" className={outlineButtonClass}>
                {t('home.flow.secondaryCta')}
              </a>
            </div>
          </div>
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-emerald-200/70 via-emerald-100/60 to-white blur-2xl opacity-90"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -left-6 top-6 hidden h-full w-full rounded-3xl border border-emerald-100/70 bg-white/70 shadow-lg lg:block"
              aria-hidden="true"
            />
            <div className="relative rounded-3xl border border-emerald-100 bg-white/95 p-6 shadow-xl backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                {t('home.flow.panel.eyebrow')}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900 sm:text-2xl">
                {t('home.flow.panel.title')}
              </h3>
              <p className="mt-3 text-base text-slate-600">{t('home.flow.panel.copy')}</p>
              <dl className="mt-6 grid gap-3">
                {flowPanelItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl border border-emerald-100/60 bg-white px-4 py-3 shadow-sm"
                  >
                    <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {item.label}
                    </dt>
                    <dd className="text-base font-semibold text-slate-900">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section
        id="support"
        className="relative scroll-mt-24 border-t border-emerald-100/70 bg-gradient-to-b from-white via-emerald-50/60 to-white py-20 text-slate-900 sm:py-24 lg:py-28"
      >
        <div
          className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-6 h-72 w-72 rounded-full bg-emerald-50/70 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <h2 className="max-w-2xl text-2xl font-semibold sm:text-3xl lg:text-4xl">
                {t('home.support.heading')}
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                {t('home.support.copy')}
              </p>
              <a href={APP_BASE_URL} className={`${primaryButtonClass} w-fit`}>
                {t('home.support.button')}
              </a>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {supportCards.map((card) => (
                <article
                  key={card.title}
                  className="group flex h-full min-h-[220px] flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:ring-1 hover:ring-emerald-200/70 focus-within:-translate-y-1 focus-within:shadow-md focus-within:ring-1 focus-within:ring-emerald-200/70"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-brand transition group-hover:bg-emerald-100 group-hover:text-brand-dark">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                  <p className="text-base leading-relaxed text-slate-700">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-full max-w-xl lg:relative">
              <div className="relative overflow-hidden rounded-3xl border border-emerald-100/60 bg-white shadow-2xl shadow-emerald-900/20">
                <img
                  src={heroImage}
                  alt={t('home.support.primaryAlt')}
                  className="h-full w-full object-cover brightness-105 saturate-100 hue-rotate-15"
                  loading="lazy"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-200/40 via-emerald-100/20 to-transparent mix-blend-soft-light"
                  aria-hidden="true"
                />
              </div>
              <div className="hidden w-2/3 max-w-sm overflow-hidden rounded-3xl border border-emerald-100/60 bg-white shadow-xl shadow-emerald-900/15 lg:absolute lg:-bottom-10 lg:right-6 lg:block">
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
