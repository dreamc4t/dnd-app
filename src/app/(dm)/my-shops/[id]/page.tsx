import { ShopOverview } from '@/components/ShopOverview'
import { Shop } from '@/interfaces'
import { getShopById } from '@/lib/services'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageProps) {
  // TODO look into only showing the shop if it matches logged in users id
  const shop: Shop | null = await getShopById(params.id)

  if (!shop) return notFound()

  return <ShopOverview shop={shop} />
}
