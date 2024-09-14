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
    <div className='flex h-full flex-col p-2'>
      <div className='p-2'>
        <SearchField setSearchInput={setSearchInput} />
        <FilterBar filters={uniqueTypes} setFilter={handleSetFilter} />
      </div>
      <ItemsList
        items={filteredItems}
        onButtonClick={onAddToShopClick}
        buttonType='ADD'
        noItemsMessage={noItemsFoundString}
      />
    </div>
  )
}
