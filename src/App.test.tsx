import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from './App'

describe('App', () => {
  it('renders the hero eyebrow text', () => {
    render(<App />)
    expect(screen.getByText('School search without the stress')).not.toBeNull()
  })
})
