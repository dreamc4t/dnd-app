'use client'

import React, { useState } from 'react'
import { ItemsList } from '../ItemsList'
import { EditableField } from '../ItemsList/EditableField'
import { Modal } from '../Modal'
import { Item, Shop } from '@/interfaces'
import { ApiService } from '@/lib/services'
interface EditShopModalProps {
  showModal: boolean
  setShowModal: (x: boolean) => void
  onSave: (updatedShop: Shop) => void
  shop: Shop
}
const EditShopModal = ({ onSave, setShowModal, showModal, shop }: EditShopModalProps) => {
  const [editedShop, setEditedShop] = useState<Shop>(shop)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Handle name change
  const handleEditName = (newName: string) => {
    setEditedShop({ ...editedShop, name: newName })
  }

  // Handle item update
  const handleEditItem = (itemId: string, updatedFields: Partial<Item>) => {
    const updatedItems = editedShop.items.map((item) =>
      item.id === itemId ? { ...item, ...updatedFields } : item,
    )
    setEditedShop({ ...editedShop, items: updatedItems })
  }

  const handleConfirm = async () => {
    setLoading(true)
    try {
      const endpoint = `/shop/update/${editedShop.id}`
      await ApiService.patch(endpoint, editedShop)
      console.log('Shop updated successfully!')
      onSave(editedShop) // Optionally inform parent component of the update
      setShowModal(false) // Close modal after saving
    } catch (error) {
      console.error('Failed to update shop:', error)
      setError('Failed to update shop. Please try again.') // Display error message
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <EditableField onSave={handleEditName} value={editedShop.name} />
      <ItemsList items={editedShop.items} onUpdateItem={handleEditItem} />
      <div className='mt-4 flex justify-end'>
        {error && <p className='text-red-500'>{error}</p>} {/* Error message */}
        <button
          onClick={handleConfirm}
          disabled={loading}
          className='rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-50'
        >
          {loading ? 'Saving...' : 'Confirm'}
        </button>
      </div>
    </Modal>
  )
}

export { EditShopModal }
