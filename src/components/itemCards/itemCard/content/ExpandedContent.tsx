import { expandedContentAriaLabel } from '@/constants/ariaLabels'
import { Item } from '@/interfaces/Item'

interface ExpandedContentProps {
  item: Item
}

const ExpandedContent = ({ item }: ExpandedContentProps) => {
  const { description, type, name } = item
  return (
    <section aria-label={expandedContentAriaLabel(name)}>
      <p className='text-xs italic'>{type}</p>
      {description.map((desc, i) => {
        return (
          <p className='mb-1 mt-2' key={`${desc} ${i}`}>
            {desc}
          </p>
        )
      })}
    </section>
  )
}

export { ExpandedContent }
