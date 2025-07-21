import { RefreshIcon } from '../icons'

interface NameGeneratorRowProps {
  name: string
  onRandomNameClick: () => void
}
const NameGeneratorRow = ({ name, onRandomNameClick }: NameGeneratorRowProps) => {
  return (
    <div className='flex justify-between'>
      <p>Name: {name}</p>
      <button onClick={onRandomNameClick}>
        <RefreshIcon  />{' '}
      </button>
    </div>
  )
}

export { NameGeneratorRow }
