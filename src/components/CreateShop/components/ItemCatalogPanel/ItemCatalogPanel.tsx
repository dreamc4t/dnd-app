'use client'
import { FilterBar } from '@/components/filterBar'
import { ItemsTable } from '@/components/ItemsTable'
import { SearchField } from '@/components/searchField'
import { noItemsFoundString } from '@/constants/strings'
import { useItemsContext } from '@/context'
import { Item } from '@/interfaces'
import { useEffect, useState } from 'react'

interface ItemCatalogPanelProps {
  onAddToShopClick: (item: Item) => void
}
export const ItemCatalogPanel = ({ onAddToShopClick }: ItemCatalogPanelProps) => {
  const { itemTypes, itemsByType } = useItemsContext()
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [searchInput, setSearchInput] = useState<string>('')
  const [filteredItems, setFilteredItems] = useState<Record<string, Item[]>>(itemsByType)

  const handleSetFilter = (filter: string, isSelected: boolean) => {
    if (isSelected) {
      if (!selectedFilters.includes(filter)) {
        setSelectedFilters((prevFilters) => [...prevFilters, filter])
      }
    } else {
      setSelectedFilters((prevFilters) => prevFilters.filter((f) => f !== filter))
    }
  }

  useEffect(() => {
    const normalizedSearch = searchInput.toLowerCase()

    const filtered: Record<string, Item[]> = {}

    for (const [type, items] of Object.entries(itemsByType)) {
      const result = items.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(normalizedSearch)
        const matchesFilter =
          selectedFilters.length === 0 || selectedFilters.includes(item.type)
        return matchesSearch && matchesFilter
      })

      if (result.length > 0) {
        filtered[type] = result
      }
    }

    setFilteredItems(filtered)
  }, [itemsByType, searchInput, selectedFilters])

  const hasItems = Object.keys(filteredItems).length > 0

  return (
    <div className='flex h-full flex-col'>
      <div>
        <SearchField setSearchInput={setSearchInput} />
        <FilterBar
          filters={itemTypes}
          setFilter={handleSetFilter}
          selectedFilters={selectedFilters}
        />
      </div>
      {hasItems ? (
        Object.entries(filteredItems).map(([title, items]) => (
          <ItemsTable
            key={title}
            title={title}
            items={items}
            onButtonClick={onAddToShopClick}
          />
        ))
      ) : (
        <div className='p-4 text-center text-sm text-gray-500'>{noItemsFoundString}</div>
      )}
    </div>
  )
}
