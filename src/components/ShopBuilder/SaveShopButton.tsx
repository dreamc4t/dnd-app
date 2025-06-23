import { saveShopString, isSavingString } from '@/constants/strings'
import { useShopBuilderContext } from './ShopBuilderContext'

export const SaveShopButton = () => {
  const { handleSaveShop, isSaving } = useShopBuilderContext()

  return (
    <button
      className='w-full bg-green-900 px-4 py-2'
      onClick={handleSaveShop}
      disabled={isSaving}
    >
      {isSaving ? isSavingString : saveShopString}
    </button>
  )
}
