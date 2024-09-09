'use client'
import { useState } from 'react'
import { Item, Shop } from '@/interfaces'
import { saveShop } from '@/app/actions/saveShop' // Import the server action
import { FilterableItemList } from '../FilterableItemList'
import { CurrentShop } from './CurrentShop'

const ShopBuilder = ({ items }: { items: Item[] }) => {
  const [shopName, setShopName] = useState<string>('')
  const [selectedItems, setSelectedItems] = useState<Item[]>([])
  const [isSaving, setIsSaving] = useState<boolean>(false)

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

    setIsSaving(true) // Start loading spinner
    try {
      await saveShop(shop)
      // Optionally, reset the form or show a success message
      setShopName('')
      setSelectedItems([])
    } catch (error) {
      console.error('Failed to save shop:', error)
    } finally {
      setIsSaving(false) // Stop loading spinner
    }
  }

  return (
    <div className='flex flex-col h-full'>
      <div className='flex overflow-y-hidden flex-grow'>
        <div className='w-3/5 border-r border-black overflow-y-auto p-x-2'>
          <FilterableItemList items={items} onAddToShopClick={addItemToShop} />
        </div>
        <div className='w-2/5   overflow-y-auto  p-x-2'>
          <CurrentShop
            shopName={shopName}
            setShopName={setShopName}
            handleSaveShop={handleSaveShop}
            items={selectedItems}
            removeItemFromShop={removeItemFromShop}
          />
          {isSaving && <div className='spinner'>Saving...</div>}
        </div>
      </div>
      {/* Show modal spinner while loading */}
      {isSaving && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white'></div>
        </div>
      )}
    </div>
  )
}

export { ShopBuilder }
