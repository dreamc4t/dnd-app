import { useShopDraftContext } from './ShopDraftContext'
import { useResizable } from '@/hooks'
import { ItemCatalogPanel, ShopDraftPanel } from './components'

const CreateShopLayout = () => {
  const { addItemToShop } = useShopDraftContext()
  const { handleMouseDown, widthPercentage } = useResizable({
    initialLeftWidthPercentage: 60,
    minimumWidthPercentage: 35,
  })

  return (
    <div className='flex h-full flex-col'>
      <div className='flex flex-grow overflow-y-hidden'>
        <div className='overflow-y-scroll pr-4' style={{ width: `${widthPercentage}%` }}>
          <ItemCatalogPanel onAddToShopClick={addItemToShop} />
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
          <ShopDraftPanel />
        </div>
      </div>
    </div>
  )
}

export { CreateShopLayout }
