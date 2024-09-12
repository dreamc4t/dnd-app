import { ButtonHTMLAttributes } from 'react'
import { EditIcon } from '../icons'

interface EditButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const EditButton: React.FC<EditButtonProps> = (props) => {
  return (
    <button {...props}>
      <EditIcon />
      {props.children}
    </button>
  )
}

export { EditButton }
