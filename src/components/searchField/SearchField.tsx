import { searchForItemsString } from '@/constants/strings'
import { ChangeEvent } from 'react'
import { SearchIcon } from '../icons'

type SearchFieldProps = {
  setSearchInput: (input: string) => void
}
const SearchField = ({ setSearchInput }: SearchFieldProps) => {
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  return (
    <div className='relative w-full flex items-center'>
      <SearchIcon className='absolute left-2 fill-text-secondary'/>
      <input
        type='text'
        onChange={handleTextInput}
        placeholder={searchForItemsString}
        role='search'
        className='bg-surface pl-9 mr-4 w-full rounded p-2 placeholder-text-secondary text-text-secondary'
      />
    </div>
  )
}

export { SearchField }
