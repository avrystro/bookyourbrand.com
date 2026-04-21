import Link from 'next/link'

const variants = [
  {
    step: 'Step I — Sample Intro Excerpt',
    purpose: 'Prove the close mechanism. David writes the sample before you pay.',
    options: [
      { slug: 'step-1/v1', label: 'V1 — Book-page metaphor (CHAPTER I + centered title)' },
      { slug: 'step-1/v2', label: 'V2 — Editorial letterhead (masthead + body)' },
      { slug: 'step-1/v3', label: 'V3 — Manuscript stationery (serif-heavy, centered)' },
    ],
  },
  {
    step: 'Step II — Manuscript with editorial markup',
    purpose: 'Prove David does real editorial work, not AI slop.',
    options: [
      { slug: 'step-2/v1', label: 'V1 — Stylized editor view (margin notes + inline edits)' },
      { slug: 'step-2/v2', label: 'V2 — Margin-notes heavy (annotations dominate)' },
      { slug: 'step-2/v3', label: 'V3 — Before/after split within the card' },
    ],
  },
  {
    step: 'Step III — Finished book',
    purpose: 'Prove the output is professional and polished.',
    options: [
      { slug: 'step-3/v1', label: 'V1 — 3D book mockup (angled, spine visible)' },
      { slug: 'step-3/v2', label: 'V2 — Flat cover card (no 3D, brand-first)' },
      { slug: 'step-3/v3', label: 'V3 — Stack of books (library metaphor)' },
    ],
  },
]

export default function VariantsBoard() {
  return (
    <main className="py-16 px-8 max-w-[960px] mx-auto">
      <h1 className="font-display text-4xl mb-2">Process Artifact Variants</h1>
      <p className="text-ink-soft mb-12">
        9 variants across 3 artifacts. Click each to view in isolation. Pick the winner per step.
      </p>

      {variants.map((group) => (
        <section key={group.step} className="mb-16">
          <h2 className="font-display text-2xl text-ink mb-2">{group.step}</h2>
          <p className="text-ink-fade italic mb-6 text-sm">{group.purpose}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {group.options.map((opt) => (
              <Link
                key={opt.slug}
                href={`/variants/${opt.slug}`}
                className="block p-6 border border-cream-dark hover:border-gold transition-colors bg-white"
              >
                <p className="text-xs font-semibold tracking-[2px] uppercase text-gold mb-2">
                  View
                </p>
                <p className="text-ink font-medium">{opt.label}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
