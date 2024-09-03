import { Item } from '@/interfaces'
import React from 'react'
import { ItemsList } from '../ItemsList'
import { noItemsSelectedString } from '@/constants/strings'

interface CurrentShopProps {
  items: Item[]
  removeItemFromShop: (item: Item) => void
  handleSaveShop: () => void
  shopName: string
  setShopName: (name: string) => void
}
export const CurrentShop = ({
  items,
  removeItemFromShop,
  handleSaveShop,
  setShopName,
  shopName,
}: CurrentShopProps) => {
  return (
    <div>
      <div className='sticky top-0 bg-white z-10 p-4'>
        <div className='flex items-center space-x-4'>
          <input
            type='text'
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            placeholder='Enter shop name...'
            className='p-2 border border-gray-300 rounded flex-grow'
          />
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded'
            onClick={handleSaveShop}
          >
            Save Shop
          </button>
        </div>
      </div>
      <div className='mt-4'>
        {items.length > 0 ? (
          <ItemsList
            items={items}
            onButtonClick={removeItemFromShop}
            buttonType='REMOVE'
          />
        ) : (
          <div>{noItemsSelectedString}</div>
        )}
      </div>
    </div>
  )
}
