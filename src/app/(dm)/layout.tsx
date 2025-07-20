import { ReactNode } from 'react'
import { auth } from '@/lib/auth'
import Providers from './Providers'
import { Header } from '@/components'
import { getAllItems } from '@/lib/services/itemService'
import { getAllNpcNames } from '@/lib/services'

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const session = await auth()
  const items = await getAllItems()
  const npcNames = await getAllNpcNames()

  return (
    <div className='flex h-screen flex-col'>
      <Providers session={session} items={items} npcNames={npcNames}>
        <Header />
        <div className='flex-grow overflow-auto p-4'>{children}</div>
      </Providers>
    </div>
  )
}
