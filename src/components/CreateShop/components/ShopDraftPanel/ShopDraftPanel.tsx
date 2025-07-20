import { Heading } from '@/components/Heading'
import { ItemList } from './ItemList'
import { LoadingSpinnerOverlay } from '@/components/LoadingSpinnerOverlay'
import { currentShopTitle } from '@/constants/strings'
import { SaveShopButton } from './SaveShopButton'
import { ShopNameInput } from './ShopNameInput'
import { useShopDraftContext } from '../../ShopDraftContext'

export const ShopDraftPanel = () => {
  const { removeItemFromShop, selectedItems, isSaving, errorMessage, updateItemInShop } =
    useShopDraftContext()

  return (
    <div className={`relative flex h-full flex-col gap-3 ${isSaving ? 'blur-sm' : ''}`}>
      <Heading variant='h2' title={currentShopTitle} />
      <div>
        <ShopNameInput />
        {errorMessage && <p className='text-sm text-red-500'>{errorMessage}</p>}
      </div>
      <div className='flex-grow overflow-auto'>
        <ItemList
          items={selectedItems}
          onDeleteItem={removeItemFromShop}
          onUpdateItem={updateItemInShop}
        />
      </div>
      <SaveShopButton />

      {isSaving && <LoadingSpinnerOverlay />}
    </div>
  )
}
