import { ShopBuilder } from '@/components/ShopBuilder'
import { fetchAllItems } from '@/lib/repositories'

export default async function ShopPage() {
  const items = await fetchAllItems()

  return (
    <main className='flex flex-col h-full'>
      <ShopBuilder items={items} />
    </main>
  )
}
