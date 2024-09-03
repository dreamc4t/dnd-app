import { render, fireEvent, screen } from '@testing-library/react'

import { CustomIcon } from './CustomIcon'

describe('Custom Icon', () => {
  it('renders an icon', () => {
    render(<CustomIcon path='' />)
    const svgElement = screen.getByRole('img')

    expect(svgElement).toBeInTheDocument()
  })

  it('calls the onClick event handler when clicked', () => {
    const onClick = jest.fn()
    render(<CustomIcon path='' onClick={onClick} />)
    const svgElement = screen.getByRole('img')

    fireEvent.click(svgElement)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
