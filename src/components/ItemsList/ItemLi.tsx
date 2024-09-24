'use client'
import { Item } from '@/interfaces'
import { MouseEvent, useEffect, useState } from 'react'
import { ExpandedContent } from './ExpandedContent'
import { EditableField } from './EditableField'
import { EditIcon } from '../icons'
import DropdownEditableField from './DropdownEditableField'
type ButtonType = 'ADD' | 'REMOVE'

interface ItemLiProps {
  item: Item
  buttonType?: ButtonType
  onButtonClick?: (item: Item) => void
  onUpdateItem?: (itemId: string, updatedFields: Partial<Item>) => void
  isEditable?: boolean
  itemTypes?: string[]
}

const ItemLi = ({
  item,
  buttonType,
  onButtonClick,
  onUpdateItem,
  isEditable = false,
  itemTypes
}: ItemLiProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)

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
  const handleTypeSave = (newType: string) => {
    if (onUpdateItem) {
      onUpdateItem(item.id, { type: newType })
    }
  }


  const handleSetEditMode = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    isEditable && setIsEditing(!isEditing)
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
          {isEditing ? (
            <EditableField
              value={item.name}
              onSave={handleNameSave}
              isEditing={isEditing}
            />
          ) : (
            <p>{item.name}</p>
          )}
        </div>
        <div className='flex-1'>
          {isEditing ? (
            <DropdownEditableField itemTypes={itemTypes} selectedType={item.type} onSave={handleTypeSave}/>
          ) : (
            <p>{item.type}</p>
          )}
        </div>        <div className='flex-1'>
          {isEditing ? (
            <EditableField
              value={item.prize}
              onSave={handlePrizeSave}
              isEditing={isEditing}
            />
          ) : (
            <p>{item.prize}</p>
          )}
        </div>
        {isEditable && <button onClick={handleSetEditMode}>{<EditIcon />}</button>}

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
