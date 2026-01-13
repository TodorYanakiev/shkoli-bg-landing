import { render, screen } from '@testing-library/react'
import { describe, expect, it, beforeEach } from 'vitest'

describe('App', () => {
  beforeEach(() => {
    window.history.pushState({}, 'landing', '/landing/')
  })

  it('renders the hero eyebrow text', async () => {
    const { default: App } = await import('./App')
    render(<App />)
    expect(screen.getByText('School search without the stress')).not.toBeNull()
  })
})
