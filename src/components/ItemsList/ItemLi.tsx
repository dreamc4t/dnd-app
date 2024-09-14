'use client'
import { Item } from '@/interfaces'
import { MouseEvent, useState } from 'react'
import { ExpandedContent } from './ExpandedContent'
import { EditableField } from './EditableField'
type ButtonType = 'ADD' | 'REMOVE'

interface ItemLiProps {
  item: Item
  buttonType?: ButtonType
  onButtonClick?: (item: Item) => void
  onUpdateItem?: (itemId: string, updatedFields: Partial<Item>) => void
}

const ItemLi = ({ item, buttonType, onButtonClick, onUpdateItem }: ItemLiProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false)

  const handleRowClick = () => {
    setIsToggled(!isToggled)
  }

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (onButtonClick) {
      onButtonClick(item)
    }
  }

  const handleNameSave = (newName: string) => {
    if (onUpdateItem) {
      onUpdateItem(item.id, { name: newName })
    }
  }

  const handlePrizeSave = (newPrize: string) => {
    if (onUpdateItem) {
      onUpdateItem(item.id, { prize: newPrize })
    }
  }
  const getButtonText = () => {
    switch (buttonType) {
      case 'ADD':
        return 'Add to Shop'
      case 'REMOVE':
        return 'Remove'
      default:
        return ''
    }
  }

  const getButtonClasses = () => {
    switch (buttonType) {
      case 'ADD':
        return 'bg-green-400 text-white'
      case 'REMOVE':
        return 'bg-red-500 text-white'
      default:
        return 'bg-blue-500 text-white'
    }
  }

  return (
    <li
      className='cursor-pointer border-b border-gray-400 hover:bg-gray-200'
      onClick={handleRowClick}
    >
      <div className='flex items-center justify-between px-1'>
        <div className='flex-1'>
          {onUpdateItem ? (
            <EditableField value={item.name} onSave={handleNameSave} />
          ) : (
            <p>{item.name}</p>
          )}
        </div>
        <div className='flex-1'>{item.type}</div>
        <div className='flex-1'>
          {onUpdateItem ? (
            <EditableField value={item.prize} onSave={handlePrizeSave} />
          ) : (
            <p>{item.prize}</p>
          )}
        </div>
        {onButtonClick && (
          <button
            className={`${getButtonClasses()} rounded-md px-4 py-2`}
            onClick={handleButtonClick}
          >
            {getButtonText()}
          </button>
        )}
      </div>
      {isToggled && <ExpandedContent description={item.description} />}
    </li>
  )
}

export { ItemLi }
