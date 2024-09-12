'use client'

import React, { useState } from 'react'
import { DELETE_SHOP_ENDPOINT } from '@/constants/urls'
import { Shop } from '@/interfaces'
import { ApiService } from '@/lib/services'

interface ShopListItemProps {
  shop: Shop
  onDelete: (id: string) => void
}

// TODO LOOK INTO THIS IS JUST A LOT OF GPT FOR MVP

const ShopListItem: React.FC<ShopListItemProps> = ({ shop, onDelete }) => {
  const [loading, setLoading] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const handleCopy = () => {
    const currentURL = window.location.origin
    const url = `${currentURL}/shop/${shop.id}`
    navigator.clipboard
      .writeText(url)
      .then(() => console.log('Link copied to clipboard'))
      .catch((err) => console.error('Failed to copy link: ', err))
  }

  const handleDelete = async () => {
    setConfirmDelete(true)
  }

  const handleConfirmDelete = async () => {
    setLoading(true)
    try {
      const endpoint = `${DELETE_SHOP_ENDPOINT}/${shop.id}`
      await ApiService.delete(endpoint)
      onDelete(shop.id as string) // Notify the parent component about the deletion
    } catch (err) {
      console.error('Failed to delete shop:', err)
    } finally {
      setLoading(false)
      setConfirmDelete(false)
    }
  }

  const handleCancelDelete = () => {
    setConfirmDelete(false)
  }

  return (
    <li key={shop.id} className='flex max-w-lg items-center border border-black p-2'>
      <h2 className='flex-1 text-xl'>{shop.name}</h2>
      {confirmDelete ? (
        <div className='flex space-x-2'>
          <button
            className='rounded-md border border-red-600 p-2 text-red-600'
            onClick={handleConfirmDelete}
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Yes'}
          </button>
          <button
            className='rounded-md border border-neutral-800 p-2'
            onClick={handleCancelDelete}
          >
            No
          </button>
        </div>
      ) : (
        <button
          className='rounded-md border border-neutral-800 p-2'
          onClick={handleDelete}
          disabled={loading}
        >
          {loading ? 'Deleting...' : 'Delete'}
        </button>
      )}
      <button className='rounded-md border border-neutral-800 p-2' onClick={handleCopy}>
        Copy link
      </button>
    </li>
  )
}

export default ShopListItem
