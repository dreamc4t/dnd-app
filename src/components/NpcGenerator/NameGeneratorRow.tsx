import {  InfoIcon, RefreshIcon } from "../icons"


interface NameGeneratorRowProps {
  name: string
  onRandomNameClick: () => void
}
const NameGeneratorRow = ({ name, onRandomNameClick }: NameGeneratorRowProps) => {

  return (
    <div className="flex justify-between">
      <p>Name: {name}</p>
      <button onClick={onRandomNameClick}><RefreshIcon color="white"/> </button>
    </div>
  )
}

export { NameGeneratorRow }
