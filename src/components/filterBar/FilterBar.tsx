import { filtersString } from '@/constants/strings'
import { Chip } from '../Chip'

interface FilterBarProps {
  filters: string[]
  setFilter: (filter: string, isSelected: boolean) => void
  selectedFilters: string[]
}
const FilterBar = ({ filters, setFilter, selectedFilters }: FilterBarProps) => {
  filters.sort()
  return (
    <div>
      <h2 className='text-center'>{filtersString}</h2>
      <section role='group' className='flex flex-wrap gap-x-2 gap-y-1'>
        {filters.map((filter, i) => {
          const key = `${filter}${i}`
          const isSelected = selectedFilters.includes(filter)

          return (
            <Chip
              key={key}
              title={filter}
              onClick={() => setFilter(filter, !isSelected)}
              selected={isSelected}
            />
          )
        })}
      </section>
    </div>
  )
}

export { FilterBar }
