'use client'
import { useState } from 'react'
import { CheckIcon, CopyIcon } from '../icons'

interface CopyShopLinkProps {
  shopId: string
}

const CopyShopLink = ({ shopId }: CopyShopLinkProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const linkToPlayer = `${window.location.origin}/shop/${shopId}`

    await navigator.clipboard.writeText(linkToPlayer)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button onClick={handleCopy}>
      <p className='flex items-center gap-1 text-lg font-semibold hover:text-text-secondary'>
        <CopyIcon />
        {copied ? (
          <span className='text-success flex items-center gap-1'>
            <CheckIcon className='fill-success' />
            Copied link!
          </span>
        ) : (
          'Copy link for players'
        )}
      </p>
    </button>
  )
}

export { CopyShopLink }
