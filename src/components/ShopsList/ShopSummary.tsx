import React from 'react'
import { Heading } from '../Heading'
import { Shop } from '@/interfaces'
import { createdAtString, itemsString, unknownString } from '@/constants/strings'

interface ShopSummaryProps {
  shop: Shop
}
const ShopSummary = ({ shop }: ShopSummaryProps) => {
  const { items, name, createdAt } = shop

  const formattedDate = createdAt
    ? new Date(createdAt).toISOString().slice(0, 10)
    : unknownString

  return (
    <section>
      <Heading variant='h3' title={name} />
      <div className='text-text-secondary'>
        <p>
          {createdAtString} {formattedDate}
        </p>
        <p>
          {items.length.toString()} {itemsString}
        </p>
      </div>
    </section>
  )
}

export { ShopSummary }
