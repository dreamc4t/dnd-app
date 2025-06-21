import { ReactNode } from 'react'
import { auth } from '@/lib/auth'
import Providers from './Providers'
import { fetchAllItems } from '@/lib/repositories'
import { Header } from '@/components'

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const session = await auth()
  const items = await fetchAllItems()

  return (
    <div className='flex h-screen flex-col'>
      <Providers session={session} items={items}>
        <Header />
        <div className='flex-grow overflow-auto'>{children}</div>
      </Providers>
    </div>
  )
}
