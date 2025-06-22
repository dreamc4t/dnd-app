import { render, screen } from '@testing-library/react'

import { icons } from './icons'

describe('Rendering a couple of different icons, no need for all of them', () => {
  it('renders the DownIcon with props', () => {
    render(icons.RefreshIcon({ color: 'red', size: 24 }))
    const svgElement = screen.getByRole('img')

    expect(svgElement).toHaveAttribute('fill', 'red')
    expect(svgElement).toHaveAttribute('width', '24')
    expect(svgElement).toHaveAttribute('height', '24')
    expect(svgElement).toBeInTheDocument()
  })

  it('renders the GridBigIcon without props', () => {
    render(icons.GridBigIcon({}))
    const svgElement = screen.getByRole('img')

    expect(svgElement).toBeInTheDocument()
  })
})
