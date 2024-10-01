import { fireEvent, render, screen } from '@testing-library/react'
import { Chip } from '.'

describe('Chip', () => {
  it('renders', () => {
    render(<Chip title={'chip title'} />)
    const chipComponent = screen.getByRole('button', { name: 'chip title' })
    expect(chipComponent).toBeInTheDocument()
  })

  it('clicks', () => {
    const handleClick = jest.fn()
    render(<Chip title={'chip'} onClick={handleClick} />)
    const chipComponent = screen.getByRole('button', { name: 'chip' })

    fireEvent.click(chipComponent)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not click if disabled', () => {
    const handleClick = jest.fn()
    render(<Chip title={'chip'} onClick={handleClick} disabled={true} />)
    const chipComponent = screen.getByRole('button', { name: 'chip' })

    fireEvent.click(chipComponent)
    expect(handleClick).not.toHaveBeenCalled()
  })
})
