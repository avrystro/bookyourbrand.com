'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <Nav />
      <main className="py-32 flex-1">
        <Container className="text-center">
          <p className="text-[11px] font-semibold tracking-[5px] uppercase text-gold mb-6">
            S O M E T H I N G &ensp; W E N T &ensp; W R O N G
          </p>
          <h1 className="font-display text-5xl font-medium text-ink mb-6">
            The page stumbled.
          </h1>
          <p className="text-lg text-ink-soft mb-10 max-w-xl mx-auto">
            An unexpected error occurred. Try again, or head back to the homepage.
          </p>
          <div className="flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={reset}
              className="bg-gold text-ink px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase whitespace-nowrap hover:bg-gold-dark transition-colors"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="text-gold text-sm font-semibold tracking-[0.15em] uppercase hover:text-gold-dark transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
