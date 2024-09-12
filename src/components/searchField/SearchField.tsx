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
      className='mr-4 w-full rounded border border-gray-300 p-2'
    />
  )
}

export { SearchField }
