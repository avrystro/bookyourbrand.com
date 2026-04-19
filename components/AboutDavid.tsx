import Image from 'next/image'
import { Container } from '@/components/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'

const stats = [
  { number: '40+', label: 'Years of Experience' },
  { number: '12', label: 'Own Books Published' },
  { number: '50+', label: 'Client Books Written' },
]

const whyDavid = [
  {
    bold: 'Wordsmith Extraordinaire:',
    text: "He'll make your voice shine, without any paranormal activity.",
  },
  {
    bold: 'Collaboration Guru:',
    text: 'Personalized, hands-on, and more exciting than a Saturday morning cartoon marathon!',
  },
  {
    bold: 'Publisher with Pizzazz:',
    text: 'Because every book deserves a little sparkle.',
  },
  {
    bold: '#DavidLloydStrauss Success:',
    text: "Join the club! It's more fun than a barrel of monkeys (and more rewarding).",
  },
]

export function AboutDavid() {
  return (
    <section id="about" className="py-28">
      <Container>
        <div className="grid md:grid-cols-[400px_1fr] gap-16 items-start">
          <div className="sticky top-24">
            <Image
              src="/assets/images/david-strauss-two-books.png"
              alt="David Lloyd Strauss holding his books"
              width={400}
              height={480}
              className="w-full h-auto drop-shadow-[0_20px_40px_rgba(20,24,33,0.1)]"
            />
          </div>

          <div>
            <SectionLabel className="mb-4">T H E &ensp; W O R D S M I T H</SectionLabel>
            <h2 className="font-display text-5xl font-medium text-ink mb-8">Meet David</h2>

            <div className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-cream-dark">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-4xl font-medium text-gold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-[11px] tracking-[2px] uppercase text-ink-fade">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-5 text-[17px] leading-[1.75] text-ink-soft mb-10">
              <p>
                Books gave David a second chance at life. While visiting the ancient ruins at Chaco
                Canyon, New Mexico, he was struck by a rockfall to the head. The recovery was long
                and uncertain, and it changed the course of everything. It led him to write his
                first two books, <em>Footsteps After the Fall</em> and{' '}
                <em>Dancing with Energy Vampires</em>, and it set him on a path to help bring other
                people&rsquo;s stories to life.
              </p>
              <p>
                David believes that when people are struggling in life and trying to figure things
                out, they will go to a book first, before they go to an actual person. They read
                books to help them make sense of life, to find answers, to feel less alone in
                whatever they are facing. In David&rsquo;s world, he helps people write books for
                the readers who are searching for those answers. We position your book as the answer
                to their problem.
              </p>
              <p>
                Mentored by Sharon Lechter, Tony Robbins, and Bob Proctor. Featured across ABC, NBC,
                CBS, FOX, NPR, the United Nations, and dozens of podcasts and live stages worldwide.
              </p>
              <p>If you have a book inside you, David would like to hear about it.</p>
            </div>

            <blockquote className="border-l-2 border-gold pl-6 my-10">
              <p className="font-display text-2xl italic text-ink leading-snug">
                We take your story and make it the reader&rsquo;s story.
              </p>
            </blockquote>

            <div className="mt-10">
              <h3 className="font-display text-2xl font-medium text-ink mb-4">
                Why Choose David? (Other Than His Stellar Dance Moves and Handsome Bald Head)
              </h3>
              <p className="text-[17px] leading-[1.75] text-ink-soft mb-6">
                David is far more than an international best-selling writer and author coach,
                he&rsquo;s the literary buddy you never knew you needed! Here&rsquo;s why:
              </p>
              <ul className="space-y-3 text-[17px] leading-[1.75] text-ink-soft">
                {whyDavid.map((item) => (
                  <li key={item.bold} className="flex gap-3">
                    <span className="text-gold mt-[14px] leading-none w-4 h-px bg-gold flex-shrink-0" />
                    <span>
                      <strong>{item.bold}</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
