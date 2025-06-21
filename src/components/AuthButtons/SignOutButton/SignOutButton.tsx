'use client'
import { signOutString } from '@/constants/strings'
import { signOut } from 'next-auth/react'

export function SignOutButton() {
  return (
    <button className='text-sm' onClick={() => signOut()}>
      {signOutString}
    </button>
  )
}
