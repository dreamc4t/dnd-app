'use client'

import { Shop } from '@/interfaces'
import { ItemsTable } from '../ItemsTable'
import { Heading } from '../Heading'
import { CopyShopLink, DeleteShopButton } from './components'
import { useState } from 'react'

interface ShopOverviewProps {
  shop: Shop
}
const ShopOverview = ({ shop }: ShopOverviewProps) => {
  const { name, id, items, createdAt, updatedAt } = shop

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })

  return (
    <div className='m-auto max-w-5xl'>
      <Heading title={name} variant='h2' className='pb-2 text-3xl' />
      <p className='text-text-secondary'>Created {formatDate(createdAt)}</p>
      <CopyShopLink shopId={id} />
      <DeleteShopButton shopId={id} />
      <ItemsTable
        items={items}
        title='Items'
        itemAttributesToDisplay={['type', 'weight', 'prize']}
      />
    </div>
  )
}

export { ShopOverview }
