import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { CredibilityStrip } from '@/components/CredibilityStrip'
import { Process } from '@/components/Process'
import { BookTypes } from '@/components/BookTypes'
import { AboutDavid } from '@/components/AboutDavid'
import { VideoSection } from '@/components/VideoSection'
import { TestimonialStack } from '@/components/TestimonialStack'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <CredibilityStrip />
        <Process />
        <BookTypes />
        <AboutDavid />
        <VideoSection />
        <TestimonialStack />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
