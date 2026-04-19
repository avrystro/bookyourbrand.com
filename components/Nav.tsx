'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Container } from '@/components/Container'

const links = [
  { href: '#craft', label: 'Process' },
  { href: '#book-types', label: 'Publishing' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#library', label: 'Library' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      id="nav"
      className="py-6 sticky top-0 bg-cream/95 backdrop-blur-sm z-50 border-b border-cream-dark"
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="font-display text-xl italic text-ink">
          Book Your Brand
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs font-semibold tracking-[2px] uppercase text-ink-soft hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="mailto:david@bookyourbrand.com"
            className="bg-gold text-ink px-6 py-3 text-xs font-semibold tracking-[0.15em] uppercase whitespace-nowrap hover:bg-gold-dark transition-colors"
          >
            Start the Conversation
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle navigation"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block w-5 h-0.5 bg-ink" />
          <span className="block w-5 h-0.5 bg-ink" />
          <span className="block w-5 h-0.5 bg-ink" />
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-cream-dark bg-cream">
          <Container className="py-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold tracking-[2px] uppercase text-ink-soft hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:david@bookyourbrand.com"
              className="bg-gold text-ink px-6 py-3 text-xs font-semibold tracking-[0.15em] uppercase text-center hover:bg-gold-dark transition-colors"
            >
              Start the Conversation
            </a>
          </Container>
        </div>
      )}
    </nav>
  )
}
