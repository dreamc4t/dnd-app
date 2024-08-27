'use client'
import { useEffect, useState } from 'react'
import { ItemsList } from '../ItemsList'
import { Item, Shop } from '@/interfaces'
import { saveShop } from '@/app/actions/saveShop' // Import the server action
import { SearchField } from '../searchField'

const ShopBuilder = ({ items }: { items: Item[] }) => {
  const [shopName, setShopName] = useState<string>('')
  const [selectedItems, setSelectedItems] = useState<Item[]>([])
  const [searchInput, setSearchInput] = useState<string>('')
  const [filteredItems, setFilteredItems] = useState<Item[]>(items)

  const addItemToShop = (item: Item) => {
    setSelectedItems((prevItems) => [...prevItems, item])
  }

  const removeItemFromShop = (itemToRemove: Item) => {
    console.log(itemToRemove)

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

  useEffect(() => {
    const lowerCaseSearchInput = searchInput.toLowerCase()

    setFilteredItems(
      items.filter(({ name }) => name.toLowerCase().includes(lowerCaseSearchInput)),
    )
  }, [searchInput, items])

  return (
    <div className='flex min-h-screen'>
      <div className='flex-1 flex'>
        <div className='w-3/5 p-5'>
          <SearchField setSearchInput={setSearchInput} />
          <ItemsList
            items={filteredItems}
            onButtonClick={addItemToShop}
            buttonType='ADD'
          />
        </div>

        <div className='w-2/5 p-5 bg-gray-100 border-l border-gray-300 sticky top-0'>
          <input
            type='text'
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            placeholder='Enter shop name...'
            className='p-2 mb-4 border border-gray-300 rounded w-full'
          />
          <ul className='space-y-4'>
            <ItemsList
              items={selectedItems}
              onButtonClick={removeItemFromShop}
              buttonType='REMOVE'
            />
          </ul>
          <div>
            <button
              className='bg-blue-500 text-white mt-4 px-4 py-2 rounded'
              onClick={handleSaveShop}
            >
              Save Shop
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ShopBuilder }
