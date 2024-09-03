import { expandedContentAriaLabel } from '@/constants/ariaLabels'
import { Item } from '@/interfaces/Item'

interface ExpandedContentProps {
  item: Item
}

const ExpandedContent = ({ item }: ExpandedContentProps) => {
  const { description, type, name } = item
  return (
    <section aria-label={expandedContentAriaLabel(name)}>
      <p className='italic text-xs'>{type}</p>
      {description.map((desc, i) => {
        return (
          <p className='mt-2 mb-1' key={`${desc} ${i}`}>
            {desc}
          </p>
        )
      })}
    </section>
  )
}

export { ExpandedContent }
