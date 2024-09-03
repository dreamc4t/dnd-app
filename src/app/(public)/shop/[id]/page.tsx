// import { PlayerShop } from '@/components/playerShop'
// import { shopURL } from '@/constants/urls'
// import { Shop } from '@/interfaces/Shop'

interface PageProps {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageProps) {
  // const { id } = params
  // const url = `${shopURL}/${id}`
  // const shop: Shop = await fetch(url).then((res) => res.json())

  return <div>{/* <PlayerShop shop={shop} /> */}</div>
}
