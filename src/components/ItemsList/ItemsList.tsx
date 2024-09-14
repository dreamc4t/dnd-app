import { Item } from '@/interfaces'
import { ItemLi } from './ItemLi'

type ButtonType = 'ADD' | 'REMOVE'

interface ItemsListProps {
  items: Item[]
  onButtonClick?: (item: Item) => void
  buttonType?: ButtonType
  noItemsMessage?: string
  onUpdateItem?: (itemId: string, updatedFields: Partial<Item>) => void
}

const ItemsList = ({
  items,
  onButtonClick,
  buttonType,
  noItemsMessage = 'No items',
  onUpdateItem,
}: ItemsListProps) => {
  return (
    <div className='overflow-y-auto'>
      {items.length > 0 ? (
        <ul>
          {items.map((item, i) => {
            return (
              <ItemLi
                key={item.id + i}
                item={item}
                onButtonClick={onButtonClick}
                buttonType={buttonType}
                onUpdateItem={onUpdateItem}
              />
            )
          })}
        </ul>
      ) : (
        <div>{noItemsMessage}</div>
      )}
    </div>
  )
}

export { ItemsList }
