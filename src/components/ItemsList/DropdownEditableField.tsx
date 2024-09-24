interface DropdownEditableFieldProps {
  selectedType: string
  itemTypes?: string[]
  onSave: (newValue: string) => void
}
const DropdownEditableField = ({
  itemTypes,
  selectedType,
  onSave,
}: DropdownEditableFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.stopPropagation()
    onSave(e.target.value)
  }

  return (
    <select
      value={selectedType}
      onChange={handleChange}
      onClick={(e) => e.stopPropagation()}
    >
      {itemTypes?.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  )
}

export default DropdownEditableField
