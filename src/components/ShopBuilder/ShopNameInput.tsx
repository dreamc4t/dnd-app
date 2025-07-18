'use client'

import { useState, useRef, useEffect } from 'react'
import { Heading } from '../Heading'
import { EditIcon } from '../icons' // adjust as needed
import { enterShopNameString } from '@/constants/strings'
import { useShopBuilderContext } from './ShopBuilderContext'

export const ShopNameInput = () => {
  const { shopName, setShopName } = useShopBuilderContext()
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditing(false)
    }
  }

  return (
    <div className='mb-4 flex items-center gap-1'>
      <label className='text-nowrap text-text-secondary'>Shop name:</label>
      <div className='flex w-full items-center gap-1' onClick={() => setIsEditing(true)}>
        {isEditing ? (
          <input
            ref={inputRef}
            type='text'
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            onBlur={() => setIsEditing(false)}
            onKeyDown={handleKeyDown}
            placeholder={enterShopNameString}
            className='w-full rounded bg-backgroundTint2 font-semibold text-text-primary focus:outline-none'
          />
        ) : (
          <p className='cursor-pointer font-semibold text-text-primary'>
            {shopName || (
              <span className='italic text-text-secondary'>{enterShopNameString}</span>
            )}
          </p>
        )}
        {shopName && !isEditing && (
          <EditIcon className='cursor-pointer fill-text-primary' size={16} />
        )}
      </div>
    </div>
  )
}
