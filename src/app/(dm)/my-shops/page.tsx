import ShopsList from '@/components/ShopsList/ShopsList'
import { auth } from '@/lib/auth'
import { fetchUserShops } from '@/lib/repositories'

export default async function MyShops() {
  const session = await auth()
  if (!session?.user?.id) return <p>You are not logged in</p>

  const userID = session.user.id
  const shops = await fetchUserShops(userID)

  return (
    <main>
      <ShopsList initialShops={shops} />
    </main>
  )
}
