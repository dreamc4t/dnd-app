'use client'

import { Shop } from '@/interfaces'
import { ItemsTable } from '../ItemsTable'
import { Heading } from '../Heading'
import { CopyShopLink, DeleteShopButton } from './components'
import { useRouter } from 'next/navigation'
import { NAV_MY_SHOPS_URL } from '@/constants/urls'
import { useState } from 'react'

interface ShopOverviewProps {
  shop: Shop
}
const ShopOverview = ({ shop }: ShopOverviewProps) => {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)

  const { name, id, items, createdAt, updatedAt } = shop

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })

  const handleDeleted = () => {
    router.push(`/${NAV_MY_SHOPS_URL}`)
  }
  return (
    <div className='relative'>
      {isDeleting && (
        <div className='pointer-events-auto absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-black/20 backdrop-blur-sm'>
          <span className='text-sm text-white'>Deleting shop...</span>
        </div>
      )}

      <div className='m-auto max-w-5xl'>
        <Heading title={name} variant='h2' className='pb-2 text-3xl' />
        <p className='text-text-secondary'>Created {formatDate(createdAt)}</p>
        <CopyShopLink shopId={id} />
        <DeleteShopButton
          shopId={id}
          onDeleted={handleDeleted}
          onDeleting={() => setIsDeleting(true)}
        />
        <ItemsTable
          items={items}
          title='Items'
          itemAttributesToDisplay={['type', 'weight', 'prize']}
        />
      </div>
    </div>
  )
}

export { ShopOverview }
