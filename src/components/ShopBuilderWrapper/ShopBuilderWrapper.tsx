'use client'
import { ShopBuilder } from '@/components/ShopBuilder'
import { ShopBuilderContextProvider } from '@/components/ShopBuilder/ShopBuilderContext'
import { Item } from '@/interfaces'

interface ShopBuilderWrapperProps {
  items: Item[]
}

const ShopBuilderWrapper = ({ items }: ShopBuilderWrapperProps) => {
  return (
    <ShopBuilderContextProvider items={items}>
      <ShopBuilder />
    </ShopBuilderContextProvider>
  )
}

export { ShopBuilderWrapper }
