import { saveShopString } from '@/constants/strings'
import { useShopBuilderContext } from './ShopBuilderContext'

export const SaveShopButton = () => {
  const { handleSaveShop } = useShopBuilderContext()
  return (
    <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={handleSaveShop}>
      {saveShopString}
    </button>
  )
}
