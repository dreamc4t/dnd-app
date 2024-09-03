import { dndLogoAltText } from '@/constants/altTexts'
import { Item } from '@/interfaces/Item'
import Image from 'next/image'

type FooterProps = {
  item: Item
  isExpanded: boolean
}
const Footer = ({ item, isExpanded }: FooterProps) => {
  return (
    <div className='flex justify-between items-center'>
      {item.prize}
      {isExpanded && (
        <a href={item.link} target='_blank'>
          <Image src={'/dnd-logo.png'} alt={dndLogoAltText} height={35} width={35} />
        </a>
      )}
    </div>
  )
}

export { Footer }
