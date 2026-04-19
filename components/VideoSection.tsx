import { Container } from '@/components/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function VideoSection() {
  return (
    <section id="video" className="py-20 bg-cream-dark/30">
      <Container>
        <div className="text-center mb-10">
          <SectionLabel>S E E &ensp; D A V I D &ensp; I N &ensp; A C T I O N</SectionLabel>
        </div>
        <div className="max-w-[960px] mx-auto aspect-video">
          <iframe
            src="https://www.youtube.com/embed/-sxtYcW-EI0"
            title="David Lloyd Strauss"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          />
        </div>
      </Container>
    </section>
  )
}
