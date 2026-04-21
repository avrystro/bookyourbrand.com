// V3 — Manuscript stationery: all serif, centered, heavy ornament, timeless
export default function Step1V3() {
  return (
    <main className="min-h-screen py-20 px-8 flex items-center justify-center bg-cream-dark/30">
      <div className="relative w-[520px] h-[720px] bg-cream p-16 shadow-[0_30px_60px_rgba(20,24,33,0.12)] border border-cream-dark">
        {/* Ornament */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-gold" />
          <div className="w-2 h-2 rounded-full bg-gold" />
          <div className="w-12 h-px bg-gold" />
        </div>

        {/* Title stack */}
        <div className="text-center mb-10">
          <p className="font-display italic text-lg text-ink-fade mb-3">from the introduction of</p>
          <h2 className="font-display text-3xl text-ink leading-tight mb-3">
            The Quiet Work of Becoming
          </h2>
          <p className="text-[10px] tracking-[4px] uppercase text-ink-fade">A BOOK BY YOU</p>
        </div>

        {/* Ornament */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-12 h-px bg-gold" />
          <div className="w-2 h-2 rounded-full bg-gold" />
          <div className="w-12 h-px bg-gold" />
        </div>

        {/* Body — all Playfair italic, centered */}
        <div className="space-y-5 text-center font-display text-[15px] leading-[1.8] italic text-ink">
          <p>
            There is a kind of knowing that cannot be taught, only earned. It arrives quietly,
            often unbidden, usually on the long nights between what was and what comes next.
          </p>
          <p>
            This book is an account of those nights.
          </p>
          <p className="not-italic font-body text-[11px] tracking-[2px] uppercase text-gold mt-8">
            Continued on the next page
          </p>
        </div>
      </div>
    </main>
  )
}
