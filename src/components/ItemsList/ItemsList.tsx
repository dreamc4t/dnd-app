import { Item } from '@/interfaces'
import { ItemLi } from './ItemLi'
import { noItemsFoundString } from '@/constants/strings'

type ButtonType = 'ADD' | 'REMOVE'

interface ItemsListProps {
  items: Item[]
  onButtonClick: (item: Item) => void
  buttonType?: ButtonType
}

const ItemsList = ({ items, onButtonClick, buttonType }: ItemsListProps) => {
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
