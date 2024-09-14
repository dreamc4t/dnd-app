'use client'

import { Children, Item, Shop } from '@/interfaces'
import { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { saveShop } from '@/app/actions/saveShop' // Import the server action
import { noItemErrorMessage, noShopNameErrorMessage } from '@/constants/strings'

interface ShopBuilderContextType {
  shopName: string
  setShopName: (name: string) => void
  selectedItems: Item[]
  addItemToShop: (item: Item) => void
  removeItemFromShop: (item: Item) => void
  isSaving: boolean
  handleSaveShop: () => void
  errorMessage: string
  updateItemInShop: (itemId: string, updatedFields: Partial<Item>) => void // New function
}

const ShopBuilderContext = createContext({} as ShopBuilderContextType)
const useShopBuilderContext = () => useContext(ShopBuilderContext)

const ShopBuilderContextProvider = ({ children }: Children) => {
  const [shopName, setShopName] = useState<string>('')
  const [selectedItems, setSelectedItems] = useState<Item[]>([])
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const addItemToShop = (item: Item) => {
    const newItem = { ...item, id: uuidv4() }
    setSelectedItems((prevItems) => [...prevItems, newItem])
    setErrorMessage('')
  }

  const updateItemInShop = (itemId: string, updatedFields: Partial<Item>) => {
    setSelectedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, ...updatedFields } : item,
      ),
    )
  }

  const removeItemFromShop = (itemToRemove: Item) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove.id),
    )
  }

  const handleSaveShop = async () => {
    if (!shopName.trim()) {
      setErrorMessage(noShopNameErrorMessage)
      return
    }
    if (selectedItems.length === 0) {
      setErrorMessage(noItemErrorMessage)
      return
    }

    setIsSaving(true)
    setErrorMessage('')

    const shop: Shop = {
      name: shopName,
      items: selectedItems,
    }

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

  useEffect(() => {
    if (shopName || selectedItems.length > 0) {
      setErrorMessage('')
    }
  }, [shopName, selectedItems])

  return (
    <ShopBuilderContext.Provider
      value={{
        shopName,
        setShopName,
        selectedItems,
        updateItemInShop,
        addItemToShop,
        removeItemFromShop,
        isSaving,
        handleSaveShop,
        errorMessage,
      }}
    >
      {children}
    </ShopBuilderContext.Provider>
  )
}

export { useShopBuilderContext, ShopBuilderContextProvider }
