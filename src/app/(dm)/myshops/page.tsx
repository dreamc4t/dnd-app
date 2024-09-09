import ShopsList from '@/components/ShopsList/ShopsList'
import { Shop } from '@/interfaces'
import { auth } from '@/lib/auth'
import { fetchUserShops } from '@/lib/repositories'

export default async function MyShops() {
  const session = await auth()
  if (!session?.user) return <p>You are not logged in</p>

  const shops = await fetchUserShops()

  return (
    <main>
      <ShopsList shops={shops} />
    </main>
  )
}
