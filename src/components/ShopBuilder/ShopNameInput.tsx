import { enterShopNameString } from '@/constants/strings'

interface ShopNameInputProps {
  shopName: string
  setShopName: (name: string) => void
}
export const ShopNameInput = ({ setShopName, shopName }: ShopNameInputProps) => {
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
