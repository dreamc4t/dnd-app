import { ItemsList } from '../ItemsList'
import { noItemsSelectedString } from '@/constants/strings'
import { SaveShopButton } from './SaveShopButton'
import { ShopNameInput } from './ShopNameInput'
import { useShopBuilderContext } from './ShopBuilderContext'
import { LoadingSpinnerOverlay } from '../LoadingSpinnerOverlay'

export const ShopContainer = () => {
  const {
    removeItemFromShop,
    selectedItems,
    isSaving,
    errorMessage,
    updateItemInShop,
    itemTypes,
  } = useShopBuilderContext()

  return (
    <div className={`relative flex h-full flex-col ${isSaving ? 'blur-sm' : ''}`}>
      <div className={`p-4`}>
        <div className='flex items-center space-x-4'>
          <ShopNameInput />
          <SaveShopButton />
        </div>
        {errorMessage && <p className='absolute text-sm text-red-500'>{errorMessage}</p>}
      </div>
      <div className={`mx-2 mt-4 flex-grow overflow-auto`}>
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

      {isSaving && <LoadingSpinnerOverlay />}
    </div>
  )
}
