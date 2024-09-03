import { filtersString } from '@/constants/strings'
import { FilterButton } from './FilterButton'

interface FilterBarProps {
  filters: string[]
  setFilter: (filter: string, isSelected: boolean) => void
}
const FilterBar = ({ filters, setFilter }: FilterBarProps) => {
  filters.sort()
  return (
    <section role='group'>
      <h2 className='text-center'>{filtersString}</h2>
      {filters.map((filter, i) => {
        const key = `${filter}${i}`
        return <FilterButton title={filter} key={key} setFilter={setFilter} />
      })}
    </section>
  )
}

export { FilterBar }
