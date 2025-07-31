import React from 'react'
import { mySavedShopsTitle, noShopsFoundsString } from '@/constants/strings'
import { Shop } from '@/interfaces'
import { Heading } from '../Heading'
import { ShopListItem } from './ShopListItem'

interface ShopsListProps {
  shops: Shop[]
}

const ShopsList: React.FC<ShopsListProps> = ({ shops }) => {
  if (shops.length === 0) return <div>{noShopsFoundsString}</div>

  const sortedShops = [...shops].sort((a, b) => {
    const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0
    const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0

    return dateB - dateA
  })

  return (
    <div className='mx-auto flex max-w-3xl flex-col'>
      <Heading title={mySavedShopsTitle} variant='h1' className='py-6' />
      <ul className='space-y-2'>
        {sortedShops.map((shop) => (
          <ShopListItem shop={shop} key={shop.id} />
        ))}
      </ul>
    </div>
  )
}

export { ShopsList }
