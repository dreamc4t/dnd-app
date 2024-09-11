'use client'
import { descriptionString } from '@/constants/strings'
import { Item } from '@/interfaces'
import { MouseEvent, useState } from 'react'

type ButtonType = 'ADD' | 'REMOVE'

interface ItemLiProps {
  item: Item
  buttonType?: ButtonType
  onButtonClick?: (item: Item) => void
}

const ItemLi = ({ item, buttonType, onButtonClick }: ItemLiProps) => {
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
    <li className='cursor-pointer hover:bg-secondary border-b border-gray-400'>
      <div className='flex justify-between items-center px-1' onClick={handleRowClick}>
        <div className='flex-1'>{item.name}</div>
        <div className='flex-1'>{item.type}</div>
        <div className='flex-1'>{item.prize}</div>

        {onButtonClick && (
          <button
            className={`${getButtonClasses()} px-4 py-2 rounded-md`}
            onClick={handleButtonClick}
          >
            {getButtonText()}
          </button>
        )}
      </div>
      {isToggled && (
        <div className='px-4 py-2'>
          <div className='mt-2'>
            <strong>{descriptionString}</strong>
            {item.description.map((paragraph, i) => {
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
      )}
    </li>
  )
}

export { ItemLi }
