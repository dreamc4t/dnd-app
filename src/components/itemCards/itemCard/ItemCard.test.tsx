import { render, screen, fireEvent } from '@testing-library/react'
import { ItemCard } from '.'
import { mockItem } from '@/development/mockData'

describe('ItemCard', () => {
  it('renders', () => {
    render(<ItemCard item={mockItem} />)
    const itemCard = screen.getByRole('article')
    expect(itemCard).toBeInTheDocument()
  })

  it('initially is not expanded', () => {
    render(<ItemCard item={mockItem} />)
    const itemCard = screen.getByRole('article')
    expect(itemCard).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles expand state on click', () => {
    render(<ItemCard item={mockItem} />)
    const itemCard = screen.getByRole('article')
    fireEvent.click(itemCard)
    expect(itemCard).toHaveAttribute('aria-expanded', 'true')
    fireEvent.click(itemCard)
    expect(itemCard).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders Header with the item name', () => {
    render(<ItemCard item={mockItem} />)
    expect(screen.getByText(mockItem.name)).toBeInTheDocument()
  })
})
