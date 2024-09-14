'use client'
import { useState, useRef } from 'react'

interface UseResizableProps {
  initialLeftWidthPercentage: number
  minimumWidthPercentage?: number
}
const useResizable = ({
  initialLeftWidthPercentage,
  minimumWidthPercentage = 20,
}: UseResizableProps) => {
  const [widthPercentage, setWidthPercentage] = useState(initialLeftWidthPercentage)
  const maximumWidthPercentage = 100 - minimumWidthPercentage
  const isResizing = useRef(false)

  const disableTextSelection = () => {
    document.body.style.userSelect = 'none'
    document.body.style.pointerEvents = 'none'
  }

  const enableTextSelection = () => {
    document.body.style.userSelect = ''
    document.body.style.pointerEvents = ''
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation()
    isResizing.current = true
    disableTextSelection()
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing.current) {
      const newWidth = (e.clientX / window.innerWidth) * 100
      if (newWidth >= minimumWidthPercentage && newWidth <= maximumWidthPercentage) {
        setWidthPercentage(newWidth)
      }
    }
  }

  const handleMouseUp = () => {
    isResizing.current = false
    enableTextSelection()
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  return {
    widthPercentage,
    handleMouseDown,
  }

  return {
    widthPercentage,
    handleMouseDown,
  }
}

export { useResizable }
