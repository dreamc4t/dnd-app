'use client'
import { MouseEvent } from 'react'

interface ChipProps {
  title: string
  onClick?: () => void
  disabled?: boolean
  selected?: boolean
}

const Chip = ({ onClick, title, disabled = false, selected = false }: ChipProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onClick && onClick()
  }

  const baseStyle = 'rounded px-2 py-1 text-black'
  const defaultStyle = 'bg-button-default hover:bg-button-hover active:bg-button-active'
  const disabledStyle = 'bg-button-disabled cursor-not-allowed text-gray-500 opacity-50 '
  const selectedStyle = 'bg-button-selected'

  const getStyle = () => {
    if (disabled) return disabledStyle
    if (selected) return selectedStyle
    return defaultStyle
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`${baseStyle} ${getStyle()}`}
    >
      {title}
    </button>
  )
}

export { Chip }
