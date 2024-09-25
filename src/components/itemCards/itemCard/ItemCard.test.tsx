import { render, screen, fireEvent } from '@testing-library/react'
import { ItemCard } from '.'
import { mockItem } from '@/development/mockData'

describe('ItemCard', () => {
  it('renders', () => {
    render(<ItemCard item={mockItem} />)
    const itemCard = screen.getByRole('article')
    expect(itemCard).toBeInTheDocument()
  })

  it('initially does not show expanded content', () => {
    render(<ItemCard item={mockItem} />)
    const expandedContent = screen.queryByText(mockItem.description[0]) // Adjust the text to match what's in your ExpandedContent component
    expect(expandedContent).not.toBeInTheDocument()
  })

  it('toggles expand state on click', () => {
    render(<ItemCard item={mockItem} />)
    const itemCard = screen.getByRole('article')

    // Click to expand
    fireEvent.click(itemCard)
    expect(screen.getByText(mockItem.description[0])).toBeInTheDocument()

    // Click to collapse
    fireEvent.click(itemCard)
    expect(screen.queryByText(mockItem.description[0])).not.toBeInTheDocument()
  })

  it('renders Header with the item name', () => {
    render(<ItemCard item={mockItem} />)
    expect(screen.getByText(mockItem.name)).toBeInTheDocument()
  })
})
