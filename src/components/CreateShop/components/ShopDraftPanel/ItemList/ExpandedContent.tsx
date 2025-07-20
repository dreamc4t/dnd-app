import { descriptionString } from '@/constants/strings'
import { Item } from '@/interfaces'

interface ExpandedContentProps {
  item: Item
}
const ExpandedContent = ({ item }: ExpandedContentProps) => {
  const { description, weight, tags, type } = item

  return (
    <div className='mb-2 flex flex-col gap-3 border-b border-text-secondary pb-2 text-sm text-text-secondary'>
      <div className='text-xs tracking-wide'>{type}</div>

      <div>
        <span className='mb-1 block font-medium text-text-primary'>
          {descriptionString}
        </span>
        {description.map((paragraph, i) => {
          const key = `${paragraph.slice(0, 20).trim()}${i}`
          return (
            <p key={key} className={i > 0 ? 'mt-2' : ''}>
              {paragraph}
            </p>
          )
        })}
      </div>

      <div className='text-xs font-medium'>
        <span className='text-text-primary'>Weight:</span> {weight}
        <div className='mt-2 flex items-center gap-1'>
          <span className='font-medium text-text-primary'>Tags:</span>
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag, i) => (
              <span
                key={tag + i}
                className='bg-accent text-accent-foreground rounded py-0.5'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { ExpandedContent }
