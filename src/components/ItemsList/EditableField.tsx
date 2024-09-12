'use client'
import { useState, useRef, useEffect } from 'react'

interface EditableFieldProps {
  value: string
  onSave: (newValue: string) => void
}

const EditableField = ({ value, onSave }: EditableFieldProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [currentValue, setCurrentValue] = useState<string>(value)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  const handleBlur = () => {
    setIsEditing(false)
    onSave(currentValue)
  }

  const handleClick = () => {
    setIsEditing(true)
  }

  return (
    <div onClick={handleClick}>
      {isEditing ? (
        <input
          ref={inputRef}
          type='text'
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          onBlur={handleBlur}
          className='w-full border p-1'
        />
      ) : (
        <span>{currentValue}</span>
      )}
    </div>
  )
}

export { EditableField }
