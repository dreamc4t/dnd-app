import { Item } from '@/interfaces'
import { FilterableItemList } from '../FilterableItemList'
import { ShopContainer } from './ShopContainer'
import { useShopBuilderContext } from './ShopBuilderContext'
import { useResizable } from '@/hooks'

const ShopBuilder = ({ items }: { items: Item[] }) => {
  const { addItemToShop } = useShopBuilderContext()
  const { handleMouseDown, widthPercentage } = useResizable({
    initialLeftWidthPercentage: 60,
    minimumWidthPercentage: 35,
  })

  return (
    <div className='flex h-full flex-col'>
      <div className='flex flex-grow overflow-y-hidden'>
        <div
          className='p-x-2 overflow-y-auto border-r border-black'
          style={{ width: `${widthPercentage}%` }}
        >
          <FilterableItemList items={items} onAddToShopClick={addItemToShop} />
        </div>

        <div
          className='w-2 cursor-col-resize bg-gray-300'
          onMouseDown={handleMouseDown}
          style={{ cursor: 'col-resize' }}
        />

        <div
          className='p-x-2 overflow-y-auto'
          style={{ width: `${100 - widthPercentage}%` }}
        >
          <ShopContainer />
        </div>
      </div>
    </div>
  )
}

export { ShopBuilder }
