'use client'

import { useState, useRef, useEffect } from 'react'
import { ProfileIcon } from '../icons'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

const ProfileButton = () => {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // TODO CLEAN UP AND REFACTOR DROPDOWN
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className='relative'>
      <button
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        className='rounded-full border border-gray-700 p-1 transition hover:ring-2 hover:ring-white'
      >
        <ProfileIcon color='white' />
      </button>

      {open && (
        <div
          ref={menuRef}
          className='absolute right-0 z-50 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black/10'
        >
          <ul className='py-1 text-sm text-gray-700'>
            <li>
              <Link
                href='/user'
                className='block px-4 py-2 hover:bg-gray-100'
                onClick={() => setOpen(false)}
              >
                My Profile
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  signOut()
                  setOpen(false)
                }}
                className='w-full px-4 py-2 text-left hover:bg-gray-100'
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export { ProfileButton }
