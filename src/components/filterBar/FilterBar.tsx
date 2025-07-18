import { filtersString } from '@/constants/strings'
import { Chip } from '../Chip'
import { Heading } from '../Heading'

interface FilterBarProps {
  filters: string[]
  setFilter: (filter: string, isSelected: boolean) => void
  selectedFilters: string[]
}
const FilterBar = ({ filters, setFilter, selectedFilters }: FilterBarProps) => {
  filters.sort()
  return (
    <section>
      <Heading variant='h3' title={filtersString} />
      <div className='flex text-text-secondary'>
        {selectedFilters.map((filter, i) => {
          return <p key={filter + i}>{filter}</p>
        })}
      </div>
      <div role='group' className='flex flex-wrap gap-x-2 gap-y-1'>
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
      </div>
    </section>
  )
}

export { FilterBar }
