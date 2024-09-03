import { ItemCardsContainer } from '../itemCards'
import { Shop } from '@/interfaces/Shop'

interface PlayerShopProps {
  shop: Shop
}
const PlayerShop = async ({ shop }: PlayerShopProps) => {
  const { items } = shop

  return (
    <div className='flex items-start'>
      <section className='border border-neutral-800 m-1 w-96 rounded-md'>
        <ItemCardsContainer items={items} />
      </section>
    </div>
  )
}

export { PlayerShop }
