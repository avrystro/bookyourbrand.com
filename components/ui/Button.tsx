import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

type ButtonVariant = 'primary' | 'ghost'

type ButtonProps = {
  variant?: ButtonVariant
  href?: string
  children: React.ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'children' | 'className'>

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gold text-ink px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase ' +
    'hover:bg-gold-dark transition-colors duration-200 inline-block',
  ghost:
    'text-gold text-sm font-semibold tracking-[0.15em] uppercase inline-flex items-center gap-2 ' +
    'hover:text-gold-dark transition-colors duration-200',
}

export function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = `${variantClasses[variant]} ${className}`.trim()
  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:')
    if (isExternal) {
      return (
        <a href={href} className={classes} {...rest}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }
  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  )
}
