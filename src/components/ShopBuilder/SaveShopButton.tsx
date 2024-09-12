import { saveShopString, isSavingString } from '@/constants/strings'
import { useShopBuilderContext } from './ShopBuilderContext'

export const SaveShopButton = () => {
  const { handleSaveShop, isSaving } = useShopBuilderContext()
  return (
    <button
      className='w-28 rounded bg-blue-500 px-4 py-2 text-white'
      onClick={handleSaveShop}
      disabled={isSaving}
    >
      {isSaving ? isSavingString : saveShopString}
    </button>
  )
}
