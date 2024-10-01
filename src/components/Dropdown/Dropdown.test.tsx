import { render, screen, fireEvent } from '@testing-library/react'
import { Dropdown } from './Dropdown'

describe('Dropdown component', () => {
  const mockOnSelect = jest.fn()
  const items = ['Option 1', 'Option 2', 'Option 3']

  beforeEach(() => {
    mockOnSelect.mockClear()
  })

  test('renders correctly with given items and selected item', () => {
    render(<Dropdown items={items} selectedItem='Option 1' onSelect={mockOnSelect} />)
    const dropdown = screen.getByRole('combobox')
    expect(dropdown).toBeInTheDocument()

    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(3)
    expect(options[0]).toHaveTextContent('Option 1')
    expect(options[1]).toHaveTextContent('Option 2')
    expect(options[2]).toHaveTextContent('Option 3')
  })

  test('calls onSelect with the selected value when an option is selected', () => {
    render(<Dropdown items={items} selectedItem='Option 1' onSelect={mockOnSelect} />)
    const dropdown = screen.getByRole('combobox')

    fireEvent.change(dropdown, { target: { value: 'Option 2' } })
    expect(mockOnSelect).toHaveBeenCalledWith('Option 2')
  })
})
