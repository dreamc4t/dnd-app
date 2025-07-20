import { saveShopString, isSavingString } from '@/constants/strings'
import { useShopDraftContext } from '../../ShopDraftContext'

export const SaveShopButton = () => {
  const { handleSaveShop, isSaving } = useShopDraftContext()

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
