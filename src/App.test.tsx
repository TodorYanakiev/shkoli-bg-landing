import { render, screen } from '@testing-library/react'
import { describe, expect, it, beforeEach } from 'vitest'

describe('App', () => {
  beforeEach(() => {
    window.history.pushState({}, 'landing', '/landing/')
  })

  it('renders the hero eyebrow text', async () => {
    const { default: App } = await import('./App')
    render(<App />)
    const eyebrowTexts = ['School search without the stress', 'Търсене на школа, без напрежение']
    expect(
      screen.getByText((content) => eyebrowTexts.includes(content ?? ''))
    ).not.toBeNull()
  })
})
