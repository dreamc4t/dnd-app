import { FilterableItemList } from '../FilterableItemList'
import { CurrentShop } from './CurrentShop'
import { useShopBuilderContext } from './ShopBuilderContext'
import { useResizable } from '@/hooks'

const ShopBuilder = () => {
  const { addItemToShop } = useShopBuilderContext()
  const { handleMouseDown, widthPercentage } = useResizable({
    initialLeftWidthPercentage: 60,
    minimumWidthPercentage: 35,
  })

  return (
    <div className='flex h-full flex-col'>
      <div className='flex flex-grow overflow-y-hidden'>
        <div className='overflow-y-scroll pr-4' style={{ width: `${widthPercentage}%` }}>
          <FilterableItemList onAddToShopClick={addItemToShop} />
        </div>

        <div
          className='w-2 cursor-col-resize bg-gray-300'
          onMouseDown={handleMouseDown}
          style={{ cursor: 'col-resize' }}
        />

        <div
          className='overflow-y-auto pl-4'
          style={{ width: `${100 - widthPercentage}%` }}
        >
          <CurrentShop />
        </div>
      </div>
    </div>
  )
}

export { ShopBuilder }
