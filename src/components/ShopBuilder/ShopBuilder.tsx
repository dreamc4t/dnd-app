'use client'
import { Item } from '@/interfaces'
import { FilterableItemList } from '../FilterableItemList'
import { ShopContainer } from './ShopContainer'
import { useShopBuilderContext } from './ShopBuilderContext'

const ShopBuilder = ({ items }: { items: Item[] }) => {
  const { addItemToShop, isSaving } = useShopBuilderContext()

  return (
    <div className='flex h-full flex-col'>
      <div className='flex flex-grow overflow-y-hidden'>
        <div className='p-x-2 w-3/5 overflow-y-auto border-r border-black'>
          <FilterableItemList items={items} onAddToShopClick={addItemToShop} />
        </div>
        <div className='p-x-2 w-2/5 overflow-y-auto'>
          <ShopContainer />
          {isSaving && <div className='spinner'>Saving...</div>}
        </div>
      </div>
      {/* Show modal spinner while loading */}
      {isSaving && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='h-16 w-16 animate-spin rounded-full border-b-4 border-t-4 border-white'></div>
        </div>
      )}
    </div>
  )
}

export { ShopBuilder }
