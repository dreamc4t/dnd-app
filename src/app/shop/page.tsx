import { ShopBuilder } from '@/components/ShopBuilder'
import { fetchAllItems } from '@/lib/repositories'

export default async function ShopPage() {
  const items = await fetchAllItems()

  return (
    <main>
      <ShopBuilder items={items} />
    </main>
  )
}
