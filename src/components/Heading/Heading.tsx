import clsx from 'clsx'
import { FC, HtmlHTMLAttributes } from 'react'

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4'

interface HeadingProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
  title: string
  variant?: HeadingVariant
}

const Heading: FC<HeadingProps> = ({ title, variant = 'h2', ...props }) => {
  const baseStyles = 'text-black font-bold'
  const { className } = props

  const variantStyles: Record<HeadingVariant, string> = {
    h1: clsx('text-4xl'),
    h2: clsx('text-3xl'),
    h3: clsx('text-2xl'),
    h4: clsx('text-xl'),
  }

  const HeadingTag = variant as keyof JSX.IntrinsicElements

  return (
    <HeadingTag
      className={clsx(baseStyles, variantStyles[variant], className, { ...props }, 'p-4')}
    >
      {title}
    </HeadingTag>
  )
}

export { Heading }
