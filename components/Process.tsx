import { Button } from '@/components/ui/Button'
import { Container } from '@/components/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'

const steps = [
  {
    numeral: 'I',
    title: 'The Author Interview',
    text: "Before we agree to work together, David offers you the opportunity to answer a series of carefully developed questions, a deep creative exploration designed to surface your voice, your message, and the heart of your story. From your answers, David writes a complimentary sample introduction and working outline, bringing the vision of your book to life on the page for the very first time. This is your chance to interview David and his skills, just as he is getting to know you and your story. No commitment. No pressure. Just your book, alive in front of you.",
  },
  {
    numeral: 'II',
    title: 'The Writing',
    text: 'Once we decide to work together the writing journey begins, with weekly sessions over several months. You bring your stories, your lived experiences, your insight, and your voice. David shapes the structure, sharpens the message, and makes sure every chapter earns the next one. We go back and forth, like a tennis match with the manuscript, until what is on the page sounds unmistakably like you.',
  },
  {
    numeral: 'III',
    title: 'The Finished Manuscript',
    text: 'The final manuscript is proofread, refined, and polished, every chapter earning its place in your personal story brand. What you receive is a complete work, ready for publication through any path you choose.',
    extraText:
      'Ready to publish? We also offer full self-publishing support, interior design, formatting, cover coordination, and step-by-step guidance through publication. Many of our clients choose to continue working together through this stage.',
  },
]

export function Process() {
  return (
    <section id="craft" className="py-28">
      <Container>
        <div className="text-center mb-16">
          <SectionLabel className="mb-4">T H E &ensp; P R O C E S S</SectionLabel>
          <h2 className="font-display text-5xl font-medium text-ink mb-5">
            How Your Book Comes to Life
          </h2>
          <p className="text-lg text-ink-soft max-w-[640px] mx-auto">
            You bring the story. David brings over forty years of craft. Together, we build
            something neither of us could make alone.
          </p>
        </div>

        <div className="max-w-[760px] mx-auto flex flex-col gap-14 pl-28">
          {steps.map((step) => (
            <div key={step.numeral} className="grid grid-cols-[80px_1fr] gap-8 items-start">
              <div className="font-display text-6xl text-gold leading-none">{step.numeral}</div>
              <div>
                <h3 className="font-display text-2xl font-medium text-ink mb-3">{step.title}</h3>
                <p className="text-[17px] leading-[1.75] text-ink-soft">{step.text}</p>
                {step.extraText && (
                  <p className="text-[17px] leading-[1.75] text-ink-soft mt-3">{step.extraText}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" href="mailto:david@bookyourbrand.com">
            Start the Conversation
          </Button>
        </div>
      </Container>
    </section>
  )
}
