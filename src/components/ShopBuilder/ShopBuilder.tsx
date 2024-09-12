'use client'
import { Item } from '@/interfaces'
import { FilterableItemList } from '../FilterableItemList'
import { ShopContainer } from './ShopContainer'
import { useShopBuilderContext } from './ShopBuilderContext'

const ShopBuilder = ({ items }: { items: Item[] }) => {
  const { addItemToShop, isSaving } = useShopBuilderContext()

  return (
    <div className='flex flex-col h-full'>
      <div className='flex overflow-y-hidden flex-grow'>
        <div className='w-3/5 border-r border-black overflow-y-auto p-x-2'>
          <FilterableItemList items={items} onAddToShopClick={addItemToShop} />
        </div>
        <div className='w-2/5   overflow-y-auto  p-x-2'>
          <ShopContainer />
          {isSaving && <div className='spinner'>Saving...</div>}
        </div>
      </div>
      {/* Show modal spinner while loading */}
      {isSaving && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white'></div>
        </div>
      )}
    </div>
  )
}

export { ShopBuilder }
