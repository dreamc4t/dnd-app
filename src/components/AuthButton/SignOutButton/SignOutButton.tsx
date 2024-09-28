'use client'
import { signOutString } from '@/constants/strings'
import { signOut } from 'next-auth/react'

export function SignOutButton() {
  return <button onClick={() => signOut()}>{signOutString}</button>
}
