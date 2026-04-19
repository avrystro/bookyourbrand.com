'use client'

import { useState } from 'react'
import { Container } from '@/components/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'

type TabKey = 'memoir' | 'self-help' | 'branding' | 'journal'

type Tab = {
  key: TabKey
  label: string
  title: string
  text: string
}

const tabs: Tab[] = [
  {
    key: 'memoir',
    label: 'Memoir',
    title: 'Memoir',
    text: 'Your life has chapters that other people need to read. A memoir captures the experiences, turning points, and quiet revelations that shaped who you are, written so that readers see their own journey reflected in yours.',
  },
  {
    key: 'self-help',
    label: 'Self-Help',
    title: 'Self-Help',
    text: 'You have solved a problem that others are still struggling with. A self-help book positions your insight, your method, and your lived experience as a guide for readers searching for answers they have not been able to find on their own.',
  },
  {
    key: 'branding',
    label: 'Branding Book',
    title: 'Branding Book',
    text: 'A focused, compelling book that establishes you as the authority in your field. Part personal story, part professional vision, a branding book paints the big picture of who you are, what you stand for, and why people should listen. It is not a deep dive into content. It is a strategic introduction that opens doors, builds credibility, and positions you ahead of everyone else in your space.',
  },
  {
    key: 'journal',
    label: 'Journal / Workbook',
    title: 'Journal / Workbook',
    text: 'A book that works alongside the reader. Journals and workbooks combine your expertise with structured exercises, prompts, and reflection spaces, giving readers a tool they return to again and again as they apply your ideas to their own life.',
  },
]

export function BookTypes() {
  const [active, setActive] = useState<TabKey>('memoir')
  const activeTab = tabs.find((t) => t.key === active)!

  return (
    <section id="book-types" className="py-28 bg-cream-dark/30">
      <Container>
        <div className="text-center mb-12">
          <SectionLabel className="mb-4">W H A T &ensp; W E &ensp; W R I T E</SectionLabel>
          <h2 className="font-display text-5xl font-medium text-ink">
            Every book begins with a story worth telling
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto space-y-5 mb-10 text-[17px] leading-[1.75] text-ink-soft">
          <p>
            <strong>Do You Have a Story of Survival or Transformation?</strong>
          </p>
          <p>Has anyone ever said to you, &ldquo;You should write a book about your story...&rdquo;</p>
          <p>
            If your life&rsquo;s journey feels like a page-turner just waiting to be penned, then
            you&rsquo;re in the right place.
          </p>
          <p>No more &ldquo;someday.&rdquo;</p>
          <p>No more &ldquo;maybe later.&rdquo;</p>
          <p>
            It&rsquo;s time to work with writing experts and turn your story into a book that builds
            your authority and brand, amplifies your message, and makes an impact.
          </p>
          <p>
            If you&rsquo;ve ever caught yourself daydreaming about your personal transformation story
            while stuck in traffic or waiting for your coffee to brew, well, enough with the brewing
            and stewing, let&rsquo;s get that book cooking!
          </p>
          <p>
            David, your soon-to-be favorite author coach, writer, editor, and publisher, is here to
            whisk you off on a writing adventure. Get ready to dance through two exciting paths:
          </p>
        </div>

        <p className="max-w-[760px] mx-auto mb-10 text-[17px] leading-[1.75] text-ink-soft italic">
          Whether you are reflecting on a life well-lived, distilling years of hard-won wisdom, or
          giving shape to an idea that keeps you up at night, the first question is always the same:
          what kind of book wants to be written?
        </p>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(tab.key)}
              className={`px-6 py-3 text-xs font-semibold tracking-[2px] uppercase transition-colors ${
                active === tab.key
                  ? 'bg-gold text-ink'
                  : 'bg-transparent text-ink-fade hover:text-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="max-w-[760px] mx-auto bg-cream p-10 border border-gold/10">
          <h3 className="font-display text-3xl font-medium text-ink mb-4">{activeTab.title}</h3>
          <p className="text-[17px] leading-[1.75] text-ink-soft mb-6">{activeTab.text}</p>
          <a
            href="mailto:david@bookyourbrand.com"
            className="text-sm font-semibold tracking-[0.15em] uppercase text-gold hover:text-gold-dark transition-colors"
          >
            Inquire →
          </a>
        </div>
      </Container>
    </section>
  )
}
