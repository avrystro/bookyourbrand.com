type Props = {
  children: React.ReactNode
  className?: string
  color?: 'ink' | 'gold'
}

export function SectionLabel({ children, className = '', color = 'ink' }: Props) {
  const colorClass = color === 'gold' ? 'text-gold' : 'text-ink'
  return (
    <p
      className={`text-[11px] font-semibold tracking-[5px] uppercase ${colorClass} ${className}`.trim()}
    >
      {children}
    </p>
  )
}
