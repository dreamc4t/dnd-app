import { Shop } from '@/interfaces'
import { auth } from '@/lib/auth'
import { fetchUserShops } from '@/lib/repositories'

export default async function MyShops() {
  const session = await auth()
  if (!session?.user) return <p>You are not logged in</p>

  const shops = await fetchUserShops()

  return (
    <main>
      {shops.map((shop: Shop) => {
        return <div key={shop.id}>{shop.name}</div>
      })}
    </main>
  )
}
