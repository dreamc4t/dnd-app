import { noItemsSelectedString } from '@/constants/strings'
import { Item } from '@/interfaces'
import { ListItem } from './ListItem'

interface ItemsListProps {
  items?: Item[]
  onUpdateItem?: (itemId: string, updatedFields: Partial<Item>) => void
  onDeleteItem: (item: Item) => void
}

const ItemList = ({ items, onUpdateItem, onDeleteItem }: ItemsListProps) => {
  if (!items) return <div>{noItemsSelectedString}</div>

  return (
    <div>
      {items.map((item) => {
        return <ListItem item={item} key={item.id} onDeleteItem={onDeleteItem} />
      })}
    </div>
  )
}

export { ItemList }
