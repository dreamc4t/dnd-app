import { saveShopString } from '@/constants/strings'
import { useShopBuilderContext } from './ShopBuilderContext'

export const SaveShopButton = () => {
  const { handleSaveShop } = useShopBuilderContext()
  return (
    <button className='rounded bg-blue-500 px-4 py-2 text-white' onClick={handleSaveShop}>
      {saveShopString}
    </button>
  )
}
