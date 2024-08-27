import { searchForItemsString } from '@/constants/strings'
import { ChangeEvent } from 'react'

type SearchFieldProps = {
  setSearchInput: (input: string) => void
}
const SearchField = ({ setSearchInput }: SearchFieldProps) => {
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }
  return (
    <input
      type='text'
      onChange={handleTextInput}
      placeholder={searchForItemsString}
      role='search'
      className='p-2 border border-gray-300 rounded w-full mr-4'
    />
  )
}

export { SearchField }
