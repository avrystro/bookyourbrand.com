import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/Container'

export function FinalCTA() {
  return (
    <section className="py-24 text-center">
      <Container>
        <div className="flex justify-center mb-10">
          <Image
            src="/assets/images/herald-crest-full-black-text.png"
            alt="David Lloyd Strauss Crest"
            width={180}
            height={234}
            className="w-[180px] h-auto"
          />
        </div>
        <h2 className="font-display text-5xl font-medium text-ink mb-5">
          Write That Book Already!
        </h2>
        <p className="text-lg text-ink-soft mb-10 max-w-[640px] mx-auto">
          The struggle of turning what is in your head into what belongs on a page, that is
          exactly what David solves. Let&rsquo;s talk.
        </p>
        <Button variant="primary" href="mailto:david@bookyourbrand.com">
          Start the Conversation
        </Button>
      </Container>
    </section>
  )
}
