'use client'

import React, { useState } from 'react'
import { DELETE_SHOP_ENDPOINT } from '@/constants/urls'
import { Shop } from '@/interfaces'
import { ApiService } from '@/lib/services'
import { ItemsList } from '../ItemsList'

interface ShopListItemProps {
  shop: Shop
  onDelete: (id: string) => void
}

// TODO LOOK INTO THIS IS JUST A LOT OF GPT FOR MVP

const ShopListItem: React.FC<ShopListItemProps> = ({ shop, onDelete }) => {
  const [loading, setLoading] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const currentURL = window.location.origin
    const url = `${currentURL}/shop/${shop.id}`
    navigator.clipboard
      .writeText(url)
      .then(() => console.log('Link copied to clipboard'))
      .catch((err) => console.error('Failed to copy link: ', err))
  }

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setConfirmDelete(true)
  }

  const handleConfirmDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
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

  const handleCancelDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setConfirmDelete(false)
  }

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <li
      key={shop.id}
      className='max-w-lg cursor-pointer border border-black p-2 hover:bg-gray-200'
      onClick={handleExpandClick}
    >
      <div className='flex items-center'>
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
      </div>
      {expanded && <ItemsList items={shop.items} />}
    </li>
  )
}

export default ShopListItem
