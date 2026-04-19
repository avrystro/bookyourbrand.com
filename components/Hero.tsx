import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <section className="pt-10 relative overflow-visible">
      <Container>
        <div className="grid grid-cols-[1fr_400px] grid-rows-[auto_auto_auto] items-end gap-0">
          {/* Row 1 Col 1: tagline through subtitle */}
          <div className="col-start-1 row-start-1 self-end pb-0 max-w-[600px]">
            <p
              className="text-[11px] font-semibold tracking-[5px] uppercase text-ink mb-7 opacity-0"
              style={{ animation: 'var(--animate-fade-up)' }}
            >
              V O X &ensp; · &ensp; V E R B U M &ensp; · &ensp; F A B U L A
            </p>
            <h1
              className="font-display text-[clamp(48px,6vw,72px)] font-medium tracking-tight text-ink leading-[1.05] mb-4 opacity-0"
              style={{ animation: 'var(--animate-fade-up)', animationDelay: '120ms' }}
            >
              Voice. Word. Story.
            </h1>
            <p
              className="font-body text-xs font-medium tracking-[3px] uppercase text-ink-soft mb-2 opacity-0"
              style={{ animation: 'var(--animate-fade-up)', animationDelay: '240ms' }}
            >
              D A V I D &ensp; L L O Y D &ensp; S T R A U S S
            </p>
            <p
              className="font-display text-xl italic text-ink-fade opacity-0"
              style={{ animation: 'var(--animate-fade-up)', animationDelay: '320ms' }}
            >
              Professional Wordsmith
            </p>
          </div>

          {/* Row 1 Col 2: David's photo */}
          <div
            className="col-start-2 row-start-1 relative z-10 opacity-0"
            style={{ animation: 'var(--animate-fade-in)', animationDelay: '200ms' }}
          >
            <Image
              src="/assets/images/david-strauss-two-books.png"
              alt="David Lloyd Strauss holding his books"
              width={400}
              height={380}
              priority
              className="h-[260px] w-auto object-contain object-bottom mx-auto -translate-x-[30px] drop-shadow-[0_20px_40px_rgba(20,24,33,0.1)]"
            />
          </div>

          {/* Row 2: full-width gold rule */}
          <div
            className="col-span-full row-start-2 h-0.5 bg-gold scale-x-0 origin-left"
            style={{ animation: 'var(--animate-scale-in)', animationDelay: '400ms' }}
          />

          {/* Row 3 Col 1: body text + CTAs */}
          <div className="col-start-1 row-start-3 max-w-[520px] pt-10">
            <p
              className="text-[17px] leading-[1.75] text-ink-soft max-w-[520px] mb-10 opacity-0"
              style={{ animation: 'var(--animate-fade-up)', animationDelay: '440ms' }}
            >
              <strong>Write that book already!</strong> We take your story and make it the reader&rsquo;s
              story. With over forty years of literary experience and sixteen years working with
              authors, executives, and public figures, David writes books that position your
              experience as an answer to the problems your readers face. Every book begins with a
              conversation about what matters most to you and ends with a published work that
              carries your voice into the world.
            </p>
            <div
              className="w-20 h-px bg-gold mb-9 scale-x-0 origin-left"
              style={{ animation: 'var(--animate-scale-in)', animationDelay: '620ms' }}
            />
            <div
              className="flex items-center gap-8 opacity-0"
              style={{ animation: 'var(--animate-fade-up)', animationDelay: '800ms' }}
            >
              <Button variant="primary" href="mailto:david@bookyourbrand.com">
                Start the Conversation
              </Button>
              <Button variant="ghost" href="#craft">
                See How It Works
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>

          {/* Row 3 Col 2: herald crest */}
          <div className="col-start-2 row-start-3 self-start flex justify-center items-start pt-10 -translate-x-[40px]">
            <Image
              src="/assets/images/herald-crest-full-black-text.png"
              alt="David Lloyd Strauss Herald Crest - Vox Verbum Fabula"
              width={300}
              height={390}
              priority
              className="w-[300px] h-auto opacity-0"
              style={{ animation: 'var(--animate-fade-up)', animationDelay: '500ms' }}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
