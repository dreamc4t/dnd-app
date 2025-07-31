import { Item } from '@/interfaces'
import { Heading } from '../Heading'
import { addToShopString } from '@/constants/strings'

interface ItemsTableProps {
  items: Item[]
  title: string
  onButtonClick?: (item: Item) => void
  itemAttributesToDisplay?: (keyof Omit<Item, 'name'>)[]
}
const ItemsTable = ({
  items,
  title,
  onButtonClick,
  itemAttributesToDisplay = ['type', 'prize'],
}: ItemsTableProps) => {
  return (
    <div>
      <Heading variant='h3' title={title} className='py-3' />

      <div className='overflow-hidden rounded-xl border border-backgroundTint2 shadow-sm'>
        <table className='w-full text-left'>
          <thead className='bg-backgroundTint1'>
            <tr>
              <th className='p-3'>Name</th>
              {itemAttributesToDisplay.map((attr, i) => {
                return (
                  <th key={attr + i} className='p-3 capitalize'>
                    {attr}
                  </th>
                )
              })}
              {onButtonClick && <th className='w-28 p-1' />}
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr
                key={`${item.id} ${i}`}
                className='border-t border-contrast text-text-secondary'
              >
                <td className='p-3 text-text-primary'>{item.name}</td>
                {itemAttributesToDisplay.map((attr, i) => {
                  return (
                    <td key={attr + i} className='p-3'>
                      {item[attr]}
                    </td>
                  )
                })}
                {onButtonClick && (
                  <td className='min-w-14 p-1'>
                    <button
                      onClick={() => onButtonClick(item)}
                      className='text-primary text-left text-sm hover:underline focus:outline-none'
                    >
                      {addToShopString}
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export { ItemsTable }
