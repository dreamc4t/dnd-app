'use client'

import { createContext, useContext, ReactNode } from 'react'
import { Item } from '@/interfaces'

interface ItemsContextType {
  items: Item[]
  itemTypes: string[]
  itemsByType: Record<string, Item[]>
}

interface ItemsContextProps {
  children: ReactNode
  items: Item[]
}

const ItemContext = createContext({} as ItemsContextType)
const useItemsContext = () => useContext(ItemContext)

const ItemContextProvider = ({ children, items }: ItemsContextProps) => {
  const itemTypesFlat = items.flatMap((item) => item.type)
  const itemTypes = Array.from(new Set(itemTypesFlat))

  const itemsByType = items.reduce<Record<string, Item[]>>((acc, item) => {
    const type = item.type
    if (!acc[type]) acc[type] = []
    acc[type].push(item)
    return acc
  }, {})

  return (
    <ItemContext.Provider
      value={{
        items,
        itemTypes,
        itemsByType,
      }}
    >
      {children}
    </ItemContext.Provider>
  )
}

export { useItemsContext, ItemContextProvider }
