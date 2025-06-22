import clsx from 'clsx'
import { FC, HtmlHTMLAttributes } from 'react'

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4'

interface HeadingProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
  title: string
  variant?: HeadingVariant
}

const Heading: FC<HeadingProps> = ({ title, variant = 'h2', ...props }) => {
  const baseStyles = 'p-0'
  const { className } = props

  const variantStyles: Record<HeadingVariant, string> = {
    h1: clsx('text-3xl'),
    h2: clsx('text-2xl'),
    h3: clsx('text-lg'),
    h4: clsx('text-l'),
  }

  const HeadingTag = variant as keyof JSX.IntrinsicElements

  return (
    <HeadingTag
      className={clsx(baseStyles, variantStyles[variant], className, { ...props })}
    >
      {title}
    </HeadingTag>
  )
}

export { Heading }
