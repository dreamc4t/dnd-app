import { ReactNode } from 'react'
import NavBar from '@/components/NavBar/NavBar'
import { auth } from '@/lib/auth'
import Providers from './Providers'

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const session = await auth()
  return (
    <div className='h-screen flex flex-col'>
      <Providers session={session}>
        <header className='bg-slate-600 z-10'>
          <NavBar />
        </header>
        <div className='flex-grow overflow-auto'>{children}</div>
      </Providers>
    </div>
  )
}
