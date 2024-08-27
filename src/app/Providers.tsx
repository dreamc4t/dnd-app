'use client'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ReactNode, useState } from 'react'

interface ProvidersProps {
  children: ReactNode
  session?: Session | null
}
const Providers = ({ children, session }: ProvidersProps) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  )
}

export default Providers
