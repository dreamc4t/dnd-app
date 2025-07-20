'use client'

import { ItemContextProvider, NpcNamesContextProvider } from '@/context'
import { Item, NpcNames } from '@/interfaces'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ReactNode, useState } from 'react'

interface ProvidersProps {
  children: ReactNode
  session?: Session | null
  items: Item[]
  npcNames: NpcNames[]
}
const Providers = ({ children, session, items, npcNames }: ProvidersProps) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ItemContextProvider items={items}>
          <NpcNamesContextProvider npcNames={npcNames}>
            {children}
          </NpcNamesContextProvider>
        </ItemContextProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default Providers
