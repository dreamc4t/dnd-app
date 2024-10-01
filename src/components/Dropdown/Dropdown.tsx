import clsx from 'clsx'

type DropdownWidth = 'small' | 'normal' | 'large'

interface DropdownProps<T extends string | number> {
  items: T[]
  selectedItem: T
  onSelect: (item: T) => void
  width?: DropdownWidth
}

const Dropdown = <T extends string | number>({
  items,
  selectedItem,
  onSelect,
  width,
}: DropdownProps<T>) => {
  const widthStyles: Record<DropdownWidth, string> = {
    small: clsx('max-w-24'),
    normal: clsx('max-w-56'),
    large: clsx('max-w-72'),
  }
  return (
    <select
      value={selectedItem}
      onChange={(e) => onSelect(e.target.value as T)}
      onClick={(e) => e.stopPropagation()}
      className={`${width && widthStyles[width]} w-full rounded-md border border-gray-400`}
    >
      {items?.map((item, i) => {
        const key = `${item}${i}`
        return (
          <option key={key} value={item}>
            {item}
          </option>
        )
      })}
    </select>
  )
}
export { Dropdown }
