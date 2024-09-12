'use client'

import { Children, Item, Shop } from '@/interfaces'
import { createContext, useContext, ReactNode, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { saveShop } from '@/app/actions/saveShop' // Import the server action

interface ShopBuilderContextType {
  shopName: string
  setShopName: (name: string) => void
  selectedItems: Item[]
  addItemToShop: (item: Item) => void
  removeItemFromShop: (item: Item) => void
  isSaving: boolean
  handleSaveShop: () => void
}

const ShopBuilderContext = createContext({} as ShopBuilderContextType)
const useShopBuilderContext = () => useContext(ShopBuilderContext)

const ShopBuilderContextProvider = ({ children }: Children) => {
  const [shopName, setShopName] = useState<string>('')
  const [selectedItems, setSelectedItems] = useState<Item[]>([])
  const [isSaving, setIsSaving] = useState<boolean>(false)

  const addItemToShop = (item: Item) => {
    const newItem = { ...item, id: uuidv4() } // Generate a new ID
    setSelectedItems((prevItems) => [...prevItems, newItem])
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

    setIsSaving(true)
    try {
      await saveShop(shop)
      setShopName('')
      setSelectedItems([])
    } catch (error) {
      console.error('Failed to save shop:', error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <ShopBuilderContext.Provider
      value={{
        shopName,
        setShopName,
        selectedItems,
        addItemToShop,
        removeItemFromShop,
        isSaving,
        handleSaveShop,
      }}
    >
      {children}
    </ShopBuilderContext.Provider>
  )
}

export { useShopBuilderContext, ShopBuilderContextProvider }
