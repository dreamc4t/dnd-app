import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('SignIn Button', () => {
  const mockOnclick = jest.fn()

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
})
