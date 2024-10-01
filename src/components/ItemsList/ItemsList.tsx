import { ButtonStyle, Item } from '@/interfaces'
import { ItemLi } from './ItemLi'
import { addToShopString, deleteString } from '@/constants/strings'

type ButtonType = 'ADD' | 'REMOVE'

interface ItemsListBaseProps {
  items: Item[]
  noItemsMessage?: string
  onUpdateItem?: (itemId: string, updatedFields: Partial<Item>) => void
  isEditable?: boolean
  itemTypes?: string[]
}

type ItemsListProps =
  | (ItemsListBaseProps & {
      buttonType?: undefined
      onButtonClick?: undefined
    })
  | (ItemsListBaseProps & {
      buttonType: ButtonType
      onButtonClick: (item: Item) => void
    })

const ItemsList = ({
  items,
  onButtonClick,
  buttonType,
  noItemsMessage = 'No items',
  onUpdateItem,
  isEditable,
  itemTypes,
}: ItemsListProps) => {
  const buttonConfigMap: Record<ButtonType, { title: string; buttonStyle: ButtonStyle }> =
    {
      ADD: { title: addToShopString, buttonStyle: 'default' },
      REMOVE: { title: deleteString, buttonStyle: 'default' },
    }
  return (
    <div className='overflow-y-auto'>
      {items.length > 0 ? (
        <ul>
          {items.map((item, i) => {
            const buttonProps = buttonType && {
              onButtonClick,
              ...buttonConfigMap[buttonType],
            }

            return (
              <ItemLi
                key={item.id + i}
                item={item}
                buttonProps={buttonProps}
                onUpdateItem={onUpdateItem}
                isEditable={isEditable}
                itemTypes={itemTypes}
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
