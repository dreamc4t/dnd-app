import { MouseEventHandler } from 'react'

type CustomIconProps = {
  path: string
  size?: number
  title?: string
  onClick?: MouseEventHandler
  className?: string
}

const CustomIcon = ({
  size = 24,
  path,
  onClick,
  title = 'svg icon',
  className,
}: CustomIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24 '
      // fill={color}
      onClick={onClick}
      className={`fill-text-primary ${className} flex-shrink-0`}
      role='img'
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  )
}

export { CustomIcon }
