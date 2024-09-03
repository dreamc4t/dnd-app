'use client'
import { useState } from 'react'

interface FilterButtonProps {
  title: string
  setFilter: (filter: string, isSelected: boolean) => void
}

const FilterButton = ({ title, setFilter }: FilterButtonProps) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = () => {
    setFilter(title, !isSelected)
    setIsSelected(!isSelected)
  }

  return (
    <button
      className={`${
        isSelected
          ? 'bg-gray-500 text-white hover:bg-gray-500'
          : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
      } px-2 py-1 rounded mx-1 my-1 cursor-pointer outline-none`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export { FilterButton }
