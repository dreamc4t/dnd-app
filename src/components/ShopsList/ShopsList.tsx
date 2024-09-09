import { noShopsFoundsString } from '@/constants/strings'
import { Shop } from '@/interfaces'
import ShopListItem from './ShopListItem'

interface ShopsListProps {
  shops: Shop[]
}
const ShopsList = ({ shops }: ShopsListProps) => {
  if (shops.length === 0) return <div>{noShopsFoundsString}</div>

  return (
    <div>
      <ul className=''>
        {shops.map((shop, i) => {
          return <ShopListItem {...shop} key={shop.id} />
        })}
      </ul>
    </div>
  )
}

export default ShopsList
