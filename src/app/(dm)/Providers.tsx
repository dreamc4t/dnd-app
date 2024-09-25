'use client'

import { ItemContextProvider } from '@/context'
import { Item } from '@/interfaces'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ReactNode, useState } from 'react'

interface ProvidersProps {
  children: ReactNode
  session?: Session | null
  items: Item[]
}
const Providers = ({ children, session, items }: ProvidersProps) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ItemContextProvider items={items}>{children}</ItemContextProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default Providers
