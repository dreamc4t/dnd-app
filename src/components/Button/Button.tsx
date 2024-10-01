import { ButtonSize, ButtonStyle } from '@/interfaces'
import clsx from 'clsx'
import { ButtonHTMLAttributes, MouseEvent, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  size?: ButtonSize
  buttonStyle?: ButtonStyle
}

const Button: FC<ButtonProps> = ({
  size = 'normal',
  buttonStyle = 'default',
  onClick,
  title,
  children,
  ...rest
}) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e)
  }

  const sizeStyles: Record<ButtonSize, string> = {
    small: clsx('py-1 px-2 text-sm'),
    normal: clsx('px-4 py-2 text-base'),
    large: clsx('px-6 py-3 text-lg'),
  }

  const variantStyles: Partial<Record<ButtonStyle, string>> = {
    default: clsx('bg-button-default hover:bg-button-hover active:bg-button-active'),
    disabled: clsx('bg-button-disabled text-textDisabled cursor-not-allowed'),
  }

  const style = clsx('rounded text-white', variantStyles[buttonStyle], sizeStyles[size])

  return (
    <button
      className={style}
      onClick={buttonStyle !== 'disabled' ? handleClick : undefined}
      disabled={buttonStyle === 'disabled'}
      {...rest}
    >
      {title && <span>{title}</span>}
      {children}
    </button>
  )
}

export { Button }
