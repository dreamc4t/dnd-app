'use client'
import React, { useState } from 'react'
import { noShopsFoundsString } from '@/constants/strings'
import { Shop } from '@/interfaces'
import ShopListItem from './ShopListItem'


interface ShopsListProps {
  initialShops: Shop[]
}

const ShopsList: React.FC<ShopsListProps> = ({ initialShops }) => {
  const [shops, setShops] = useState<Shop[]>(initialShops)

  const handleDelete = (id: string) => {
    setShops(shops.filter((shop) => shop.id !== id))
  }

  if (shops.length === 0) return <div>{noShopsFoundsString}</div>

  return (
    <div>
      <ul>
        {shops.map((shop) => (
          <ShopListItem shop={shop} key={shop.id} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  )
}

export default ShopsList
