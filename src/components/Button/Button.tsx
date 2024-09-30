import { ButtonSize, ButtonVariant } from '@/interfaces'
import clsx from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  size?: ButtonSize
  variant?: ButtonVariant
}

const Button: React.FC<ButtonProps> = ({
  size = 'normal',
  variant = 'gray',
  onClick,
  title,
  children,
  ...rest
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onClick && onClick(e)
  }

  const buttonSize = clsx(
    size === 'small' && 'py-1 px-2 text-sm',
    size === 'normal' && 'px-4 py-2 text-base',
    size === 'large' && 'px-6 py-3 text-lg',
  )

  const buttonVariant = clsx(
    variant === 'primary' && 'bg-blue-500 text-white hover:bg-blue-600',
    variant === 'gray' && 'bg-gray-500 text-white hover:bg-gray-600',
  )

  const commonStyles = clsx('rounded text-white')

  return (
    <button
      className={clsx(buttonSize, buttonVariant, commonStyles)}
      onClick={handleClick}
      {...rest}
    >
      {title && <p>{title}</p>}
      {children}
    </button>
  )
}

export { Button }
