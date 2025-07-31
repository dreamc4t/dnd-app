'use client'

import { useState, FC } from 'react'

interface DeleteShopButtonProps {
  shopId: string
  onDeleted?: () => void
  onDeleting?: () => void
}

const DeleteShopButton: FC<DeleteShopButtonProps> = ({
  shopId,
  onDeleted,
  onDeleting,
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this shop?')
    if (!confirmed) return
    setIsLoading(true)
    onDeleting?.()

    try {
      // TODO variable for path
      const res = await fetch(`/api/shop/${shopId}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Delete failed')

      onDeleted?.()
    } catch (error) {
      console.error(error)
      alert('Something went wrong, the developer probably sucks ass')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isLoading}
      className='text-sm text-red-600 hover:text-red-800 disabled:opacity-50'
    >
      {isLoading ? 'Deleting...' : 'Delete'}
    </button>
  )
}

export { DeleteShopButton }
