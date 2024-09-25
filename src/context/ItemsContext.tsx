'use client'

import { createContext, useContext, ReactNode } from 'react'
import { Item } from '@/interfaces'

interface ItemsContextType {
  items: Item[]
  itemTypes: string[]
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

  return (
    <ItemContext.Provider
      value={{
        items,
        itemTypes,
      }}
    >
      {children}
    </ItemContext.Provider>
  )
}

export { useItemsContext, ItemContextProvider }
