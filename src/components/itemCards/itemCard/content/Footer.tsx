import { ExternalLinkIcon } from '@/components/icons'
import { Item } from '@/interfaces/Item'

type FooterProps = {
  item: Item
  isExpanded: boolean
}
const Footer = ({ item, isExpanded }: FooterProps) => {
  return (
    <div className='flex items-center justify-between'>
      {item.prize}
      {isExpanded && (
        <a href={item.link} target='_blank'>
          <ExternalLinkIcon />
        </a>
      )}
    </div>
  )
}

export { Footer }
