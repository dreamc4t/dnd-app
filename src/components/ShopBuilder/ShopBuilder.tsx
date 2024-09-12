import { Item } from '@/interfaces'
import { FilterableItemList } from '../FilterableItemList'
import { ShopContainer } from './ShopContainer'
import { useShopBuilderContext } from './ShopBuilderContext'

const ShopBuilder = ({ items }: { items: Item[] }) => {
  const { addItemToShop } = useShopBuilderContext()

  return (
    <div className='flex h-full flex-col'>
      <div className='flex flex-grow overflow-y-hidden'>
        <div className='p-x-2 w-3/5 overflow-y-auto border-r border-black'>
          <FilterableItemList items={items} onAddToShopClick={addItemToShop} />
        </div>
        <div className='p-x-2 w-2/5 overflow-y-auto'>
          <ShopContainer />
        </div>
      </div>
    </div>
  )
}

export { ShopBuilder }
