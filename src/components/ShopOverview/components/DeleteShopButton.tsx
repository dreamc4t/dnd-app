'use client'

import { deleteShopAction } from '@/lib/actions/shopActions'
import { NAV_MY_SHOPS_URL } from '@/constants/urls'
import { useFormStatus } from 'react-dom'
import { FC } from 'react'

interface DeleteShopButtonProps {
  shopId: string
}

const DeleteShopButton: FC<DeleteShopButtonProps> = ({ shopId }) => {
  const { pending } = useFormStatus()

  return (
    <form
      action={async (formData) => {
        const confirmed = window.confirm('Are you sure you want to delete this shop?')
        if (!confirmed) return
        await deleteShopAction(formData)
      }}
    >
      <input type='hidden' name='shopId' value={shopId} />
      <input type='hidden' name='redirectTo' value={`/${NAV_MY_SHOPS_URL}`} />
      <button
        type='submit'
        disabled={pending}
        className='text-sm text-red-600 hover:text-red-800 disabled:opacity-50'
      >
        {pending ? 'Deleting...' : 'Delete'}
      </button>
    </form>
  )
}

export { DeleteShopButton }
