import { FilterBar } from '.'

import { render, screen } from '@testing-library/react'

const mockFilters = ['black', 'green', 'white']
const mockSetFilter = jest.fn()
const mockSelectedFilters = ['black', 'green']

describe('FilterBar', () => {
  it('renders component', () => {
    render(
      <FilterBar
        filters={mockFilters}
        setFilter={mockSetFilter}
        selectedFilters={mockSelectedFilters}
      />,
    )

    const bar = screen.getByRole('group')
    expect(bar).toBeInTheDocument()
  })

  it('renders buttons for every filter', () => {
    render(
      <FilterBar
        filters={mockFilters}
        setFilter={mockSetFilter}
        selectedFilters={mockSelectedFilters}
      />,
    )

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(mockFilters.length)
  })
})
