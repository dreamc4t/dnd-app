'use client'
import React, { useState } from 'react'
import { mySavedShopsTitle, noShopsFoundsString } from '@/constants/strings'
import { Shop } from '@/interfaces'
import ShopListItem from './ShopListItem'
import { Heading } from '../Heading'

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
    <div className='items- mx-auto flex max-w-2xl flex-col items-center'>
      <Heading title={mySavedShopsTitle} variant='h2' />
      <ul className='w-full border border-b-0 border-black'>
        {shops.map((shop) => (
          <ShopListItem shop={shop} key={shop.id} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  )
}

export { ShopsList }
