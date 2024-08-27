import { Item } from '@/interfaces'
import { ItemLi } from './ItemLi'

type ButtonType = 'ADD' | 'REMOVE'

interface ItemsListProps {
  items: Item[]
  onButtonClick: (item: Item) => void
  buttonType?: ButtonType
}

const ItemsList = ({ items, onButtonClick, buttonType }: ItemsListProps) => {
  if (!items) return <div>No items found!</div>
  return (
    <ul>
      {items.map((item, i) => {
        return (
          <ItemLi
            key={item.id + i}
            item={item}
            onButtonClick={onButtonClick}
            buttonType={buttonType}
          />
        )
      })}
    </ul>
  )
}

export { ItemsList }
