import { render, screen } from '@testing-library/react'
import { describe, expect, it, beforeEach } from 'vitest'
import enTranslation from './locales/en/translation.json'
import bgTranslation from './locales/bg/translation.json'

describe('App', () => {
  beforeEach(() => {
    window.history.pushState({}, 'landing', '/landing/')
  })

  it('renders the hero eyebrow text', async () => {
    const { default: App } = await import('./App')
    render(<App />)
    const eyebrowTexts = [enTranslation.home.eyebrow, bgTranslation.home.eyebrow]
    expect(
      screen.getByText((content) => eyebrowTexts.includes((content ?? '').trim()))
    ).not.toBeNull()
  })
})
