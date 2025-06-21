'use client'
import { signInString } from '@/constants/strings'
import { signIn } from 'next-auth/react'

export function SignInButton() {
  return (
    <button className='text-sm' onClick={() => signIn()}>
      {signInString}
    </button>
  )
}
