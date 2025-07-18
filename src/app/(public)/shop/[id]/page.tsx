import { PlayerShop } from '@/components/playerShop'
import { Shop } from '@/interfaces/Shop'
import { getShopById } from '@/lib/services'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = params
  const shop: Shop | null = await getShopById(id)

  // TODO fix notFound to custom
  if (!shop) return notFound()

  return <div>{<PlayerShop shop={shop} />}</div>
}
