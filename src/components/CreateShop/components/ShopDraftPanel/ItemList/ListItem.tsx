'use client'
import { Item } from '@/interfaces'
import { MouseEvent, useState } from 'react'
import { ExpandedContent } from './ExpandedContent'
import { deleteString } from '@/constants/strings'
import { TrashcanIcon } from '@/components/icons'

interface ListItemProps {
  item: Item
  onDeleteItem: (item: Item) => void
}

const ListItem = ({ item, onDeleteItem }: ListItemProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false)

  const handleRowClick = () => {
    setIsToggled(!isToggled)
  }

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onDeleteItem(item)
  }

  return (
    <li className='hover:bg-row-hover cursor-pointer list-none' onClick={handleRowClick}>
      <div className='flex items-center justify-between py-1'>
        <div className='flex-1'>
          <p>{item.name}</p>
        </div>

        <div className='w-20'>
          <p>{item.prize}</p>
        </div>
        <TrashcanIcon
          className='fill-text-primary hover:fill-text-secondary'
          onClick={handleButtonClick}
        />
      </div>
      {isToggled && <ExpandedContent item={item} />}
    </li>
  )
}

export { ListItem }
