'use client'

import React, { useState } from 'react'
import { DELETE_SHOP_ENDPOINT } from '@/constants/urls'
import { Shop } from '@/interfaces'
import { ApiService } from '@/lib/services'
import { ItemsList } from '../ItemsList'
import { Button } from '../Button'
import { EditShopModal } from './EditShopModal'

interface ShopListItemProps {
  shop: Shop
  onDelete: (id: string) => void
}

// TODO LOOK INTO THIS IS JUST A LOT OF GPT FOR MVP

const ShopListItem: React.FC<ShopListItemProps> = ({ shop, onDelete }) => {
  const [loading, setLoading] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [showModal, setShowModal] = useState<boolean>(false)

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

  const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setShowModal(true)
  }
  const handleSaveEditedShop = () => {
    console.log('TO DO')
  }

  return (
    <li
      key={shop.id}
      className='bg-row-default cursor-pointer border-b border-black hover:bg-gray-200'
      onClick={handleExpandClick}
    >
      <div className='flex items-center gap-1'>
        <h2 className='flex-1 pl-2 text-xl'>{shop.name}</h2>
        {confirmDelete ? (
          <div className=''>
            <Button
              disabled={loading}
              onClick={handleConfirmDelete}
              title={loading ? 'Deleting...' : 'Yes'}
              className='rounded-md border border-red-600 p-2 text-red-600'
            />
            <Button disabled={loading} onClick={handleCancelDelete} title='No' />
          </div>
        ) : (
          <Button
            onClick={handleDelete}
            disabled={loading}
            title={loading ? 'Deleting...' : 'Delete'}
          />
        )}

        <Button onClick={handleCopy} title='Copy link' />
        <Button onClick={handleEdit} title='Edit' />
      </div>
      {expanded && <ItemsList items={shop.items} />}
      {showModal && (
        <EditShopModal
          onSave={handleSaveEditedShop}
          setShowModal={setShowModal}
          shop={shop}
          showModal={showModal}
        />
      )}
    </li>
  )
}

export default ShopListItem
