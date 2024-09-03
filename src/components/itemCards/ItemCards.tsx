import { Item } from '@/interfaces/Item'
import { ItemCard } from './itemCard'

interface ItemCardsContainerProps {
  items: Item[]
}

const ItemCardsContainer = ({ items }: ItemCardsContainerProps) => {
  return (
    <section>
      {items.map((item, i) => (
        <ItemCard item={item} key={`${item.id}-${i}`} />
      ))}
    </section>
  )
}

export { ItemCardsContainer }
