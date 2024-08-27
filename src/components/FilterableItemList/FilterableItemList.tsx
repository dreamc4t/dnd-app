'use client'
import React, { useEffect, useState } from 'react'
import { SearchField } from '../searchField'
import { ItemsList } from '../ItemsList'
import { Item } from '@/interfaces'

interface FilterableItemListProps {
  items: Item[]
  onAddToShopClick: (item: Item) => void
}
export const FilterableItemList = ({
  items,
  onAddToShopClick,
}: FilterableItemListProps) => {
  const [searchInput, setSearchInput] = useState<string>('')
  const [filteredItems, setFilteredItems] = useState<Item[]>(items)

  useEffect(() => {
    const lowerCaseSearchInput = searchInput.toLowerCase()

    setFilteredItems(
      items.filter(({ name }) => name.toLowerCase().includes(lowerCaseSearchInput)),
    )
  }, [searchInput, items])

  return (
    <div className='flex flex-col'>
      <div className='sticky top-0 z-10 bg-white'>
        <SearchField setSearchInput={setSearchInput} />
      </div>
      <div className='flex-grow overflow-auto'>
        <ItemsList
          items={filteredItems}
          onButtonClick={onAddToShopClick}
          buttonType='ADD'
        />
      </div>
    </div>
  )
}
