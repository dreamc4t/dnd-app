import { ItemsList } from '../ItemsList'
import { noItemsSelectedString } from '@/constants/strings'
import { SaveShopButton } from './SaveShopButton'
import { ShopNameInput } from './ShopNameInput'
import { useShopBuilderContext } from './ShopBuilderContext'
import { LoadingSpinnerOverlay } from '../LoadingSpinnerOverlay'

export const ShopContainer = () => {
  const { removeItemFromShop, selectedItems, isSaving, errorMessage } =
    useShopBuilderContext()

  return (
    <div className={`relative flex h-full flex-col ${isSaving ? 'blur-sm' : ''}`}>
      <div className={`p-4`}>
        <div className='flex items-center space-x-4'>
          <ShopNameInput />
          <SaveShopButton />
        </div>
        {errorMessage && <p className='text-sm text-red-500'>{errorMessage}</p>}
      </div>
      <div className={`mt-4 flex-grow overflow-auto`}>
        <ItemsList
          items={selectedItems}
          onButtonClick={removeItemFromShop}
          buttonType='REMOVE'
          noItemsMessage={noItemsSelectedString}
          itemEditable={true}
        />
      </div>

      {isSaving && <LoadingSpinnerOverlay />}
    </div>
  )
}
