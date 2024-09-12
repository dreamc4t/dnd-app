import ShopBuilderWrapper from '@/components/AuthButton/ShopBuilderWrapper/ShopBuilderWrapper'
import { fetchAllItems } from '@/lib/repositories'

export default async function ShopPage() {
  const items = await fetchAllItems()

  return (
    <main className='flex flex-col h-full'>
      <ShopBuilderWrapper items={items} />
    </main>
  )
}
