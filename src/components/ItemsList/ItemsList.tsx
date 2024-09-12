import { Item } from '@/interfaces'
import { ItemLi } from './ItemLi'
import { noItemsFoundString } from '@/constants/strings'

type ButtonType = 'ADD' | 'REMOVE'

interface ItemsListProps {
  items: Item[]
  onButtonClick: (item: Item) => void
  buttonType?: ButtonType
  noItemsMessage?: string
  itemEditable?: boolean
}

const ItemsList = ({
  items,
  onButtonClick,
  buttonType,
  noItemsMessage = 'No items',
  itemEditable,
}: ItemsListProps) => {
  return (
    <div className='overflow-y-auto mx-2 '>
      {items.length > 0 ? (
        <ul>
          {items.map((item, i) => {
            return (
              <ItemLi
                key={item.id + i}
                item={item}
                onButtonClick={onButtonClick}
                buttonType={buttonType}
                editable={itemEditable}
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
