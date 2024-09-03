import React from 'react'
import { render, screen } from '@testing-library/react'
import { ExpandedContent } from '.'
import { expandedContentAriaLabel } from '@/constants/ariaLabels'
import { mockItem } from '@/development/mockData'

describe('ExpandedContent', () => {
  it('Renders the expanded content', () => {
    render(<ExpandedContent item={mockItem} />)
    const content = screen.getByRole('region', {
      name: expandedContentAriaLabel(mockItem.name),
    })
    expect(content).toBeInTheDocument()
  })

  it('displays the item type', () => {
    render(<ExpandedContent item={mockItem} />)

    const itemType = screen.getByText(mockItem.type)
    expect(itemType).toBeInTheDocument()
    expect(itemType).toHaveClass('italic', 'text-xs')
  })

  it('renders all descriptions from the item', () => {
    render(<ExpandedContent item={mockItem} />)

    mockItem.description.forEach((desc) => {
      const descriptionElement = screen.getByText(desc)
      expect(descriptionElement).toBeInTheDocument()
    })
  })

  it('renders when no descriptions', () => {
    const newMockItem = mockItem
    newMockItem.description = []

    render(<ExpandedContent item={newMockItem} />)
    const content = screen.getByRole('region', {
      name: expandedContentAriaLabel(newMockItem.name),
    })
    expect(content).toBeInTheDocument()
  })

  it('renders when no type', () => {
    const newMockItem = mockItem
    newMockItem.type = ''

    render(<ExpandedContent item={newMockItem} />)
    const content = screen.getByRole('region', {
      name: expandedContentAriaLabel(newMockItem.name),
    })
    expect(content).toBeInTheDocument()
  })
})
