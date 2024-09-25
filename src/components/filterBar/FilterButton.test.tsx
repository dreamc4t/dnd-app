import { fireEvent, render, screen } from '@testing-library/react'
import { FilterButton } from './FilterButton'

const mockTitle = 'green'
const mockSetFilter = jest.fn()

describe('FilterButton', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the button with correct title', () => {
    render(<FilterButton setFilter={mockSetFilter} title={mockTitle} />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(mockTitle)
  })

  it('handles click event and toggles selection state', async () => {
    render(<FilterButton setFilter={mockSetFilter} title={mockTitle} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(mockSetFilter).toHaveBeenLastCalledWith(mockTitle, true)

    fireEvent.click(button)
    expect(mockSetFilter).toHaveBeenLastCalledWith(mockTitle, false)
  })
})
