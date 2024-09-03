'use client'
import { useState } from 'react'
import { Item, Shop } from '@/interfaces'
import { saveShop } from '@/app/actions/saveShop' // Import the server action
import { FilterableItemList } from '../FilterableItemList'
import { CurrentShop } from './CurrentShop'

const ShopBuilder = ({ items }: { items: Item[] }) => {
  const [shopName, setShopName] = useState<string>('')
  const [selectedItems, setSelectedItems] = useState<Item[]>([])

  const addItemToShop = (item: Item) => {
    setSelectedItems((prevItems) => [...prevItems, item])
  }

  const removeItemFromShop = (itemToRemove: Item) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove.id),
    )
  }

  const handleSaveShop = async () => {
    const shop: Shop = {
      name: shopName,
      items: selectedItems,
    }

    try {
      await saveShop(shop)
    } catch (error) {
      console.error('Failed to save shop:', error)
    }
  }

  return (
    <div className='flex flex-col h-full'>
      <div className='flex overflow-y-hidden flex-grow'>
        <div className='w-3/5 border-2 border-black  overflow-y-auto'>
          <FilterableItemList items={items} onAddToShopClick={addItemToShop} />
        </div>
        <div className='w-2/5 border-2 border-red-500  overflow-y-auto'>
          <CurrentShop
            shopName={shopName}
            setShopName={setShopName}
            handleSaveShop={handleSaveShop}
            items={selectedItems}
            removeItemFromShop={removeItemFromShop}
          />
        </div>
      </div>
    </div>
  )
}

export { ShopBuilder }
