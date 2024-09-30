'use client'
import { ButtonVariant, Item } from '@/interfaces'
import { MouseEvent, useState } from 'react'
import { ExpandedContent } from './ExpandedContent'
import { EditableField } from './EditableField'
import { EditIcon } from '../icons'
import DropdownEditableField from './DropdownEditableField'
import { Button } from '../Button'

interface ButtonProps {
  variant: ButtonVariant
  title: string
  onButtonClick?: (item: Item) => void
}

interface ItemLiProps {
  item: Item
  onUpdateItem?: (itemId: string, updatedFields: Partial<Item>) => void
  isEditable?: boolean
  itemTypes?: string[]
  buttonProps?: ButtonProps
}

const ItemLi = ({
  item,
  onUpdateItem,
  isEditable = false,
  itemTypes,
  buttonProps,
}: ItemLiProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const handleRowClick = () => {
    setIsToggled(!isToggled)
  }

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (buttonProps?.onButtonClick) {
      buttonProps.onButtonClick(item)
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

  return (
    <li
      className='cursor-pointer border-b border-gray-400 hover:bg-gray-200'
      onClick={handleRowClick}
    >
      <div className='flex items-center justify-between px-1'>
        <div className='flex-1'>
          <p>{item.name}</p>
        </div>
        <div className='flex-1'>
          <p>{item.type}</p>
        </div>
        <div className='flex-1'>
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
        {buttonProps?.onButtonClick && (
          <Button
            title={buttonProps.title}
            variant={buttonProps.variant}
            size='normal'
            onClick={handleButtonClick}
          />
        )}
      </div>
      {isToggled && <ExpandedContent description={item.description} />}
    </li>
  )
}

export { ItemLi }
