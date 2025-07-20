import { Heading } from '@/components/Heading'
import { ItemsList } from '@/components/ItemsList'
import { LoadingSpinnerOverlay } from '@/components/LoadingSpinnerOverlay'
import { currentShopTitle, noItemsSelectedString } from '@/constants/strings'
import { useItemsContext } from '@/context'
import { SaveShopButton } from './SaveShopButton'
import { ShopNameInput } from './ShopNameInput'
import { useShopDraftContext } from '../../ShopDraftContext'

export const ShopDraftPanel = () => {
  const { removeItemFromShop, selectedItems, isSaving, errorMessage, updateItemInShop } =
    useShopDraftContext()
  const { itemTypes } = useItemsContext()

  return (
    <div className={`relative flex h-full flex-col gap-3 ${isSaving ? 'blur-sm' : ''}`}>
      <Heading variant='h2' title={currentShopTitle} />
      <div>
        <ShopNameInput />
        {errorMessage && <p className='text-sm text-red-500'>{errorMessage}</p>}
      </div>
      <div className='flex-grow overflow-auto'>
        <ItemsList
          items={selectedItems}
          onButtonClick={removeItemFromShop}
          buttonType='REMOVE'
          noItemsMessage={noItemsSelectedString}
          onUpdateItem={updateItemInShop}
          isEditable={true}
          itemTypes={itemTypes}
        />
      </div>
      <SaveShopButton />

      {isSaving && <LoadingSpinnerOverlay />}
    </div>
  )
}
