import Image from 'next/image'
import { Container } from '@/components/Container'

const itemClass = 'text-[13px] font-semibold tracking-[2.5px] uppercase text-ink-soft'
const svgClass =
  'h-7 w-auto opacity-55 grayscale brightness-[0.35] transition-[opacity,filter] duration-200 hover:opacity-80 hover:grayscale-0 hover:brightness-100'

export function CredibilityStrip() {
  return (
    <section className="py-9 border-t border-b border-cream-dark">
      <Container className="flex flex-col items-center gap-3">
        <div className="flex justify-center items-center gap-6 flex-nowrap">
          <span className={`${itemClass} flex items-center`}>
            <Image src="/assets/logos/nbc.svg" alt="NBC" width={60} height={28} className={svgClass} />
          </span>
          <Dot />
          <span className={`${itemClass} flex items-center`}>
            <Image src="/assets/logos/cbs.svg" alt="CBS" width={60} height={28} className={svgClass} />
          </span>
          <Dot />
          <span className={`${itemClass} flex items-center`}>
            <Image src="/assets/logos/fox.svg" alt="FOX" width={60} height={28} className={svgClass} />
          </span>
          <Dot />
          <span className={itemClass}>ABC</span>
          <Dot />
          <span className={itemClass}>NPR</span>
        </div>
        <p className="text-[10px] font-semibold tracking-[3px] uppercase text-gold">
          International Bestselling Writer
        </p>
      </Container>
    </section>
  )
}

function Dot() {
  return <span className="w-[3px] h-[3px] rounded-full bg-ink-fade inline-block" />
}
