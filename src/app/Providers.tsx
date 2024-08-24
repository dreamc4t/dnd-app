'use client'

import { Children } from '@/interfaces'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useState } from 'react'

const ReactQueryProvider = ({ children }: Children) => {
  const [queryClient] = useState(() => new QueryClient())

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryProvider
