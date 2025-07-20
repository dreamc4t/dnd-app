'use client'
import { Item } from '@/interfaces'
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import { ExpandedContent } from './ExpandedContent'
import { TrashcanIcon } from '@/components/icons'

interface ListItemProps {
  item: Item
  onDeleteItem: (item: Item) => void
  onUpdateItem: (itemId: string, updatedFields: Partial<Item>) => void
}

const ListItem = ({ item, onDeleteItem, onUpdateItem }: ListItemProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false)
  const [isEditingPrice, setIsEditingPrice] = useState(false)
  const [newPrice, setNewPrice] = useState<string>(item.prize)

  const priceRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleRowClick = () => setIsToggled(!isToggled)

  const handleDeleteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onDeleteItem(item)
  }

  const handleEditClick = (e: MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation()
    setIsEditingPrice(true)
  }

  const cancelEditPrice = () => {
    setIsEditingPrice(false)
  }

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPrice(e.target.value)
    onUpdateItem(item.id, { prize: newPrice })
  }

  useEffect(() => {
    if (!isEditingPrice) return

    const handleClickOutside = (e: Event) => {
      if (priceRef.current && !priceRef.current.contains(e.target as Node)) {
        cancelEditPrice()
      }
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') cancelEditPrice()
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isEditingPrice])

  useEffect(() => {
    if (isEditingPrice) {
      requestAnimationFrame(() => {
        inputRef.current?.select()
      })
    }
  }, [isEditingPrice])

  return (
    <li className='hover:bg-row-hover cursor-pointer list-none' onClick={handleRowClick}>
      <div className='flex items-center justify-between py-1'>
        <div className='flex-1'>
          <p>{item.name}</p>
        </div>

        <div className='w-20' ref={priceRef}>
          {isEditingPrice ? (
            <div className='relative w-full'>
              <input
                ref={inputRef}
                type='text'
                value={newPrice}
                onClick={(e) => e.stopPropagation()}
                onChange={handlePriceChange}
                className='w-full bg-surface px-1 focus:outline-none'
              />
            </div>
          ) : (
            <p
              className='min-h-5 cursor-text hover:text-text-secondary'
              onClick={handleEditClick}
            >
              {newPrice.length > 0 ? newPrice : '-'}
            </p>
          )}
        </div>
        <TrashcanIcon
          className='fill-text-primary hover:fill-text-secondary'
          onClick={handleDeleteClick}
        />
      </div>
      {isToggled && <ExpandedContent item={item} />}
    </li>
  )
}

export { ListItem }
