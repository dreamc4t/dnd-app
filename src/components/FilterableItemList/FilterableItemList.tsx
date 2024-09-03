'use client'
import React, { useEffect, useState } from 'react'
import { SearchField } from '../searchField'
import { ItemsList } from '../ItemsList'
import { Item } from '@/interfaces'
import { FilterBar } from '../filterBar'
import { noItemsFoundString } from '@/constants/strings'

interface FilterableItemListProps {
  items: Item[]
  onAddToShopClick: (item: Item) => void
}
export const FilterableItemList = ({
  items,
  onAddToShopClick,
}: FilterableItemListProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [searchInput, setSearchInput] = useState<string>('')
  const [filteredItems, setFilteredItems] = useState<Item[]>(items)

  const itemTypes = items.flatMap((item) => item.type)
  const uniqueTypes = Array.from(new Set(itemTypes))

  const handleSetFilter = (filter: string, isSelected: boolean) => {
    if (isSelected) {
      if (!selectedFilters.includes(filter)) {
        setSelectedFilters((prevFilters) => [...prevFilters, filter])
      }
    } else {
      setSelectedFilters((prevFilters) => prevFilters.filter((f) => f !== filter))
    }
  }

  const filterItems = (
    items: Item[],
    searchInput: string,
    selectedFilters: string[],
  ): Item[] => {
    const lowerCaseSearchInput = searchInput.toLowerCase()

    const filteredBySearch = items.filter(({ name }) =>
      name.toLowerCase().includes(lowerCaseSearchInput),
    )

    return selectedFilters.length
      ? filteredBySearch.filter(({ type }) => selectedFilters.includes(type))
      : filteredBySearch
  }

  useEffect(() => {
    setFilteredItems(filterItems(items, searchInput, selectedFilters))
  }, [searchInput, selectedFilters, items])

  return (
    <div className='flex flex-col '>
      <div className='sticky top-0 z-10 bg-white p-4'>
        <SearchField setSearchInput={setSearchInput} />
        <FilterBar filters={uniqueTypes} setFilter={handleSetFilter} />
      </div>
      <div className='flex-grow overflow-auto'>
        {filteredItems.length > 0 ? (
          <ItemsList
            items={filteredItems}
            onButtonClick={onAddToShopClick}
            buttonType='ADD'
          />
        ) : (
          <div>{noItemsFoundString}</div>
        )}
      </div>
    </div>
  )
}
