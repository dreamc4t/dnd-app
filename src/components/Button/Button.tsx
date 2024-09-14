import React, { ButtonHTMLAttributes } from 'react'

interface EditButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
}

const Button: React.FC<EditButtonProps> = ({ onClick, title, children, ...rest }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onClick && onClick(e)
  }
  return (
    <button
      className='rounded-md border border-neutral-800 p-2'
      onClick={handleClick}
      {...rest}
    >
      {title}
      {children}
    </button>
  )
}

export { Button }
