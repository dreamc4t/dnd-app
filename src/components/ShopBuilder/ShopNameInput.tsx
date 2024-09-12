import { enterShopNameString } from '@/constants/strings'
import { useShopBuilderContext } from './ShopBuilderContext'

export const ShopNameInput = () => {
  const { shopName, setShopName } = useShopBuilderContext()

  return (
    <input
      type='text'
      value={shopName}
      onChange={(e) => setShopName(e.target.value)}
      placeholder={enterShopNameString}
      className='p-2 border border-gray-300 rounded flex-grow'
    />
  )
}
