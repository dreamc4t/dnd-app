import React from 'react'
import { render, screen } from '@testing-library/react'
import { mockItems } from '@/development/mockData'
import { ItemCardsContainer } from '.'

describe('ItemCardsContainer', () => {
  it('renders all item cards', () => {
    render(<ItemCardsContainer items={mockItems} />)
    const itemCards = screen.getAllByRole('article')
    expect(itemCards.length).toBe(mockItems.length)
  })
})
