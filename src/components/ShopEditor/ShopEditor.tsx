import { Shop } from '@/interfaces'
import React from 'react'

const ShopEditor = (shop: Shop) => {
  const { name } = shop
  return (
    <div>
      <h2>{name}</h2>
    </div>
  )
}

export { ShopEditor }
