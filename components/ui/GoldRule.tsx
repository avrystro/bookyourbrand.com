type Props = {
  width?: 'short' | 'full'
  className?: string
  animated?: boolean
}

export function GoldRule({ width = 'short', className = '', animated = false }: Props) {
  const widthClass = width === 'full' ? 'w-full' : 'w-20'
  const animationClass = animated
    ? 'scale-x-0 origin-left [animation:var(--animate-scale-in)]'
    : ''
  return (
    <div
      className={`${widthClass} h-px bg-gold ${animationClass} ${className}`.trim()}
    />
  )
}
