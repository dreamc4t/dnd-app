import { descriptionString } from '@/constants/strings'

interface ExpandedContentProps {
  description: string[]
}
const ExpandedContent = ({ description }: ExpandedContentProps) => {
  return (
    <div className='px-4 py-2'>
      <div className='mt-2'>
        <strong>{descriptionString}</strong>
        {description.map((paragraph, i) => {
          const key = `${paragraph.slice(0, 20).trim()}${i}`
          if (i === 0) return <span key={key}>{paragraph}</span>
          return (
            <p key={key} className='mt-2'>
              {paragraph}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export { ExpandedContent }
