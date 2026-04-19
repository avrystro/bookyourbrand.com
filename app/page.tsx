import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { CredibilityStrip } from '@/components/CredibilityStrip'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <CredibilityStrip />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
