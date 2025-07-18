import { ItemsList } from '../ItemsList'
import { noItemsSelectedString } from '@/constants/strings'
import { SaveShopButton } from './SaveShopButton'
import { ShopNameInput } from './ShopNameInput'
import { useShopBuilderContext } from './ShopBuilderContext'
import { LoadingSpinnerOverlay } from '../LoadingSpinnerOverlay'
import { useItemsContext } from '@/context'
import { Heading } from '../Heading'

export const CurrentShop = () => {
  const { removeItemFromShop, selectedItems, isSaving, errorMessage, updateItemInShop } =
    useShopBuilderContext()
  const { itemTypes } = useItemsContext()

  return (
    <div className={`relative flex h-full flex-col ${isSaving ? 'blur-sm' : ''}`}>
      <Heading variant='h2' title='Current Shop' className='mb-3' />
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
