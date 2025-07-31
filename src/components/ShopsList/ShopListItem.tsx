import React from 'react'
import { NAV_MY_SHOPS_URL } from '@/constants/urls'
import { Shop } from '@/interfaces'

import { ShopSummary } from './ShopSummary'
import { ChevronRight } from '../icons'
import Link from 'next/link'

interface ShopListItemProps {
  shop: Shop
}

const ShopListItem: React.FC<ShopListItemProps> = ({ shop }) => {
  const href = `${NAV_MY_SHOPS_URL}/${shop.id}`
  return (
    <li className='group cursor-pointer rounded px-2 transition-colors hover:bg-surface hover:text-text-secondary'>
      <Link className='flex items-center justify-between' href={href}>
        <ShopSummary shop={shop} />
        <ChevronRight className='fill-text-primary group-hover:fill-text-secondary' />
      </Link>
    </li>
  )
}

export { ShopListItem }
