import { ItemsList } from '../ItemsList'
import { noItemsSelectedString } from '@/constants/strings'
import { SaveShopButton } from './SaveShopButton'
import { ShopNameInput } from './ShopNameInput'
import { useShopBuilderContext } from './ShopBuilderContext'

export const ShopContainer = () => {
  const { removeItemFromShop, selectedItems } = useShopBuilderContext()

  return (
    <div className='flex h-full flex-col'>
      <div className='p-4'>
        <div className='flex h-full items-center space-x-4'>
          <ShopNameInput />
          <SaveShopButton />
        </div>
      </div>
      <div className='mt-4 flex-grow overflow-auto'>
        <ItemsList
          items={selectedItems}
          onButtonClick={removeItemFromShop}
          buttonType='REMOVE'
          noItemsMessage={noItemsSelectedString}
          itemEditable={true}
        />
      </div>
    </div>
  )
}
