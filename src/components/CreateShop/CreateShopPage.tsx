'use client'

import { ShopDraftContextProvider } from './ShopDraftContext'
import { CreateShopLayout } from './CreateShopLayout'

const CreateShopPage = () => {
  return (
    <ShopDraftContextProvider>
      <CreateShopLayout />
    </ShopDraftContextProvider>
  )
}

export { CreateShopPage }
