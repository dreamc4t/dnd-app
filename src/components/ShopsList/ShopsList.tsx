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

  return (
    <div className='mx-auto flex max-w-3xl flex-col'>
      <Heading title={mySavedShopsTitle} variant='h1' className='py-6' />
      <ul className='space-y-2'>
        {shops.map((shop) => (
          <ShopListItem shop={shop} key={shop.id} />
        ))}
      </ul>
    </div>
  )
}

export { ShopsList }
