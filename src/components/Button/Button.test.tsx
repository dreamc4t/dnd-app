import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('SignIn Button', () => {
  const mockOnclick = jest.fn()

  beforeEach(() => {
    mockOnclick.mockClear()
  })

  it('renders a button', () => {
    render(<Button />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('fires onClick function when clicked', () => {
    render(<Button onClick={mockOnclick} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(mockOnclick).toHaveBeenCalled()
  })

  it('does not fire onClick function when the button is disabled via the disabled prop', () => {
    render(<Button onClick={mockOnclick} disabled={true} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(mockOnclick).not.toHaveBeenCalled()
    expect(button).toBeDisabled()
  })

  it('does not fire onClick function when the buttonStyle is set to disabled', () => {
    render(<Button onClick={mockOnclick} buttonStyle='disabled' />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(mockOnclick).not.toHaveBeenCalled()
    expect(button).toBeDisabled()
  })
})
