'use client'

import { deleteShopAction } from '@/lib/actions/shopActions'
import { NAV_MY_SHOPS_URL } from '@/constants/urls'
import { useFormStatus } from 'react-dom'
import { FC, MouseEvent } from 'react'

interface DeleteShopButtonProps {
  shopId: string
}

const DeleteShopButton: FC<DeleteShopButtonProps> = ({ shopId }) => {
  return (
    <form action={deleteShopAction}>
      <input type='hidden' name='shopId' value={shopId} />
      <input type='hidden' name='redirectTo' value={`/${NAV_MY_SHOPS_URL}`} />
      <SubmitButton />
    </form>
  )
}

export { DeleteShopButton }

const SubmitButton = () => {
  const { pending } = useFormStatus()

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!window.confirm('Are you sure you want to delete this shop?')) {
      e.preventDefault()
    }
  }
  return (
    <button
      type='submit'
      disabled={pending}
      onClick={handleClick}
      className='text-sm text-red-600 hover:text-red-800 disabled:opacity-50'
    >
      {pending ? 'Deleting...' : 'Delete'}
    </button>
  )
}
