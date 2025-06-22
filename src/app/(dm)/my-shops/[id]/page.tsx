import { ShopEditor } from '@/components/ShopEditor'
import { SHOP_URL } from '@/constants/urls'
import { Shop } from '@/interfaces'

interface PageProps {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = params
  const url = `${SHOP_URL}/${id}`
  const shop: Shop = await fetch(url).then((res) => res.json())

  return (
    <div>
      <ShopEditor />
    </div>
  )
}
