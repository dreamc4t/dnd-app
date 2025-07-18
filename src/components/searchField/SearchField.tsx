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
    <div className='relative flex w-full items-center'>
      <SearchIcon className='absolute left-2 fill-text-secondary' />
      <input
        type='text'
        onChange={handleTextInput}
        placeholder={searchForItemsString}
        role='search'
        className='w-full rounded-lg bg-surface p-2 pl-9 text-text-secondary placeholder-text-secondary focus:outline-none'
      />
    </div>
  )
}

export { SearchField }
