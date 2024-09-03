import { render, screen } from '@testing-library/react'
import { Footer } from '.'
import { mockItem } from '@/development/mockData'
import { dndLogoAltText } from '@/constants/altTexts'

describe('Footer', () => {
  it('always displays the item prize', () => {
    render(<Footer item={mockItem} isExpanded={false} />)
    const prizeElement = screen.getByText(mockItem.prize)
    expect(prizeElement).toBeInTheDocument()
  })

  it('displays the link and image when expanded', () => {
    render(<Footer item={mockItem} isExpanded={true} />)
    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', mockItem.link)

    const image = screen.getByAltText(dndLogoAltText)
    expect(image).toBeInTheDocument()
  })

  it('does not display the link and image when not expanded', () => {
    render(<Footer item={mockItem} isExpanded={false} />)
    const linkElement = screen.queryByRole('link')
    expect(linkElement).not.toBeInTheDocument()

    const image = screen.queryByRole(dndLogoAltText)
    expect(image).not.toBeInTheDocument()
  })
})
