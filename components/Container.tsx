type Props = {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className = '' }: Props) {
  return (
    <div className={`max-w-[1140px] mx-auto px-6 ${className}`.trim()}>
      {children}
    </div>
  )
}
