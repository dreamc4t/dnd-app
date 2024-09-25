import { ReactNode } from 'react'
import { auth } from '@/lib/auth'
import Providers from './Providers'
import { NavBar } from '@/components'
import { fetchAllItems } from '@/lib/repositories'

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
        <header className='z-10 bg-slate-600'>
          <NavBar />
        </header>
        <div className='flex-grow overflow-auto'>{children}</div>
      </Providers>
    </div>
  )
}
