'use client'
import { ShopBuilder } from '@/components/ShopBuilder'
import { ShopBuilderContextProvider } from '@/components/ShopBuilder/ShopBuilderContext'

const ShopBuilderWrapper = () => {
  return (
    <ShopBuilderContextProvider>
      <ShopBuilder />
    </ShopBuilderContextProvider>
  )
}

export { ShopBuilderWrapper }
