import { NotLoggedIn } from '@/components/NotLoggedIn'
import { ShopsList } from '@/components/ShopsList'
import { auth } from '@/lib/auth'
import { getShopsByUserId } from '@/lib/services'

export default async function MyShops() {
  const session = await auth()
  if (!session?.user?.id) return <NotLoggedIn />

  const userID = session.user.id
  const shops = await getShopsByUserId(userID)

  return (
    <main>
      <ShopsList shops={shops} />
    </main>
  )
}
