import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('Header', () => {
  it('renders the title', () => {
    const title = 'Test Item Title'
    render(<Header title={title} />)
    const titleElement = screen.getByRole('heading', { name: title })
    expect(titleElement).toBeInTheDocument()
  })
})
