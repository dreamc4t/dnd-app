'use client'

import { DELETE_SHOP_ENDPOINT, SHOP_URL } from '@/constants/urls'
import { Shop } from '@/interfaces'
import { ApiService } from '@/lib/services'
import React from 'react'

const ShopListItem = (shop: Shop) => {
  const handleCopy = () => {
    const currentURL = window.location.origin
    const url = `${currentURL}/shop/${shop.id}`
    navigator.clipboard
      .writeText(url)
      .then(() => console.log('Link copied to clipboard'))
      .catch((err) => console.error('Failed to copy link: ', err))
  }

  const handleDelete = async () => {
    const endpoint = `${DELETE_SHOP_ENDPOINT}/${shop.id}`
    const res = await ApiService.delete(endpoint)
    console.log(res)
  }

  return (
    <li key={shop.id} className='flex max-w-lg items-center border border-black p-2'>
      <h2 className='flex-1 text-xl'>{shop.name}</h2>
      <button
        className='border border-neutral-800 rounded-md  p-2 '
        onClick={handleDelete}
      >
        Delete
      </button>
      <button className='border border-neutral-800 rounded-md p-2 ' onClick={handleCopy}>
        Copy link
      </button>
    </li>
  )
}

export default ShopListItem
