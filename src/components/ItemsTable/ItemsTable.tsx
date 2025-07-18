import { Item } from '@/interfaces'
import { Heading } from '../Heading'
import { addToShopString } from '@/constants/strings'

interface ItemsTableProps {
  items: Item[]
  title: string
  onButtonClick: (item: Item) => void
}
const ItemsTable = ({ items, title, onButtonClick }: ItemsTableProps) => {
  return (
    <div>
      <Heading variant='h3' title={title} className='py-3' />

      <div className='overflow-hidden rounded-xl border border-backgroundTint2 shadow-sm'>
        <table className='w-full text-left'>
          <thead className='bg-backgroundTint1'>
            <tr>
              <th className='p-3'>Name</th>
              <th className='p-3'>Type</th>
              <th className='p-3'>Weight</th>
              <th className='p-3'>Price</th>
              <th className='w-28 p-1' />
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className='border-t border-contrast text-text-secondary'>
                <td className='p-3 text-text-primary'>{item.name}</td>
                <td className='p-3'>{item.type}</td>
                <td className='p-3'>{item.weight}</td>
                <td className='p-3'>{item.prize}</td>
                <td className='w-28 p-1'>
                  <button
                    onClick={() => onButtonClick(item)}
                    className='text-primary text-left text-sm hover:underline focus:outline-none'
                  >
                    {addToShopString}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export { ItemsTable }
