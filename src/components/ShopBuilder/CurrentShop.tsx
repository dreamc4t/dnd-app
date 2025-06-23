import { ItemsList } from '../ItemsList'
import { noItemsSelectedString } from '@/constants/strings'
import { SaveShopButton } from './SaveShopButton'
import { ShopNameInput } from './ShopNameInput'
import { useShopBuilderContext } from './ShopBuilderContext'
import { LoadingSpinnerOverlay } from '../LoadingSpinnerOverlay'
import { useItemsContext } from '@/context'

export const CurrentShop = () => {
  const { removeItemFromShop, selectedItems, isSaving, errorMessage, updateItemInShop } =
    useShopBuilderContext()
  const { itemTypes } = useItemsContext()

  return (
    <div className={`relative flex h-full flex-col ${isSaving ? 'blur-sm' : ''}`}>
      <div>
        <div className='flex items-center space-x-4'>
          <ShopNameInput />
        </div>
        {errorMessage && <p className='absolute text-sm text-red-500'>{errorMessage}</p>}
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
