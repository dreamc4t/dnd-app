import React from 'react'
import { ItemsList } from '../ItemsList'
import { EditableField } from '../ItemsList/EditableField'
import { Modal } from '../Modal'
import { Item, Shop } from '@/interfaces'
interface EditShopModalProps {
  showModal: boolean
  setShowModal: (x: boolean) => void
  handleEditName: (name: string) => void
  handleEditItem: ((itemId: string, updatedFields: Partial<Item>) => void) | undefined
  shop: Shop
}
const EditShopModal = ({
  handleEditItem,
  handleEditName,
  setShowModal,
  showModal,
  shop,
}: EditShopModalProps) => {
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <EditableField onSave={handleEditName} value={shop.name} />
      <ItemsList items={shop.items} onUpdateItem={handleEditItem} />
    </Modal>
  )
}

export { EditShopModal }
