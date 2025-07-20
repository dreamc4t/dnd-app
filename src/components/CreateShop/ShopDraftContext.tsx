'use client'

import { Item, Shop } from '@/interfaces'
import { createContext, useContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { noItemErrorMessage, noShopNameErrorMessage } from '@/constants/strings'

interface ShopDraftContextType {
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

const ShopDraftContext = createContext({} as ShopDraftContextType)
const useShopDraftContext = () => useContext(ShopDraftContext)

const ShopDraftContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [shopName, setShopName] = useState<string>('')
  const [selectedItems, setSelectedItems] = useState<Item[]>([])
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const addItemToShop = (item: Item) => {
    const newItem = { ...item, id: uuidv4() }
    setSelectedItems((prevItems) => [...prevItems, newItem])
    setErrorMessage('')
  }

  // TODO REMOVE LINK IF EDITED ITEM
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

    const now = new Date().toISOString()

    const shop: Omit<Shop, 'id'> = {
      name: shopName,
      items: selectedItems,
      createdAt: now,
      updatedAt: now,
    }

    try {
      await fetch('/api/shop/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(shop),
      })
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
    <ShopDraftContext.Provider
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
    </ShopDraftContext.Provider>
  )
}

export { useShopDraftContext, ShopDraftContextProvider }
