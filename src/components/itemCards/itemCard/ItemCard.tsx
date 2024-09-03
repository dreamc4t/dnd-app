'use client'

import { useState } from 'react'
import { Header, ExpandedContent, Footer } from './content'
import { Item } from '@/interfaces/Item'
interface ItemCardProps {
  item: Item
}

const ItemCard = ({ item }: ItemCardProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <article
      onClick={handleClick}
      className='border border-black p-2 rounded-lg cursor-pointer max-w-md w-full'
    >
      <Header title={item.name} />
      {isExpanded && <ExpandedContent item={item} />}
      <Footer isExpanded={isExpanded} item={item} />
    </article>
  )
}

export { ItemCard }
