'use client'

import { useState } from 'react'
import { testimonials } from '@/data/testimonials'
import { Container } from '@/components/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function TestimonialStack() {
  const [order, setOrder] = useState(testimonials.map((_, i) => i))

  const shuffle = () => {
    setOrder((prev) => [...prev.slice(1), prev[0]])
  }

  return (
    <section id="testimonials" className="py-28">
      <Container>
        <div className="text-center mb-14">
          <SectionLabel>W H A T &ensp; C L I E N T S &ensp; S A Y</SectionLabel>
        </div>

        <div
          className="relative max-w-[760px] mx-auto min-h-[440px] cursor-pointer"
          onClick={shuffle}
        >
          {order.map((index, position) => {
            const t = testimonials[index]
            const zIndex = testimonials.length - position
            const opacity = position === 0 ? 1 : position === 1 ? 0.55 : position === 2 ? 0.3 : 0
            const translateY = position === 0 ? 0 : position === 1 ? 8 : 16
            const rotate = position === 0 ? 0 : position === 1 ? 0.8 : -0.5
            const pointerEvents = position > 2 ? 'none' : 'auto'
            return (
              <blockquote
                key={t.id}
                className="absolute inset-0 bg-[#faf7f2] p-12 md:p-14 border border-gold/10 transition-all duration-500"
                style={{
                  zIndex,
                  opacity,
                  transform: `translateY(${translateY}px) rotate(${rotate}deg)`,
                  pointerEvents,
                  transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
                  boxShadow:
                    'inset 0 0 0 1px rgba(201, 165, 92, 0.06), 0 1px 2px rgba(20, 24, 33, 0.06), 0 6px 20px rgba(20, 24, 33, 0.04), 0 1px 0 rgba(255, 255, 255, 0.5)',
                }}
              >
                <span
                  aria-hidden
                  className="absolute top-5 left-10 font-display text-[96px] text-gold/20 leading-none select-none"
                >
                  &ldquo;
                </span>
                <p className="text-[17px] leading-[1.75] text-ink mb-6 relative z-10">{t.quote}</p>
                <footer className="text-sm text-ink-fade">
                  {t.author}, <em>{t.book}</em>
                </footer>
              </blockquote>
            )
          })}
        </div>

        <p className="text-center text-[11px] text-ink-fade mt-20 tracking-[3px] uppercase">
          Click to shuffle
        </p>
      </Container>
    </section>
  )
}
