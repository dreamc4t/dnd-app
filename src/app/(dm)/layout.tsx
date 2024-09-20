import { ReactNode } from 'react'
import { auth } from '@/lib/auth'
import Providers from './Providers'
import { NavBar } from '@/components'

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const session = await auth()
  return (
    <div className='flex h-screen flex-col'>
      <Providers session={session}>
        <header className='z-10 bg-slate-600'>
          <NavBar />
        </header>
        <div className='flex-grow overflow-auto'>{children}</div>
      </Providers>
    </div>
  )
}
