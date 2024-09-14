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
  editable?: boolean
}

const ItemLi = ({ item, buttonType, onButtonClick, editable = false }: ItemLiProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const [name, setName] = useState<string>(item.name)
  const [description, setDescription] = useState<string[]>(item.description)
  const [prize, setPrize] = useState<string>(item.prize)
  const [type, setType] = useState<string>(item.type)

  const handleRowClick = () => {
    setIsToggled(!isToggled)
  }

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (onButtonClick) {
      onButtonClick(item)
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
          {editable ? <EditableField value={name} onSave={setName} /> : <p>{name}</p>}
        </div>
        <div className='flex-1'>{type}</div>
        <div className='flex-1'>
          {editable ? <EditableField value={prize} onSave={setPrize} /> : <p>{prize}</p>}
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
      {isToggled && <ExpandedContent description={description} />}
    </li>
  )
}

export { ItemLi }
