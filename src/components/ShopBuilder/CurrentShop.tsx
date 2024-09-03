import { Item } from '@/interfaces'
import React from 'react'
import { ItemsList } from '../ItemsList'
import { noItemsSelectedString } from '@/constants/strings'
import { SaveShopButton } from './SaveShopButton'
import { ShopNameInput } from './ShopNameInput'

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
    <div className='flex flex-col h-full'>
      <div className='p-4 '>
        <div className='flex items-center space-x-4 h-full'>
          <ShopNameInput setShopName={setShopName} shopName={shopName} />
          <SaveShopButton handleSaveShop={handleSaveShop} />
        </div>
      </div>
      <div className='mt-4 flex-grow overflow-auto  '>
        <ItemsList
          items={items}
          onButtonClick={removeItemFromShop}
          buttonType='REMOVE'
          noItemsMessage={noItemsSelectedString}
        />
      </div>
    </div>
  )
}
