// V2 — Margin-notes heavy: annotations dominate, body prose smaller, notes in Playfair italic
export default function Step2V2() {
  return (
    <main className="min-h-screen py-20 px-8 flex items-center justify-center bg-cream-dark/30">
      <div className="relative w-[720px] h-[720px] bg-cream p-14 shadow-[0_30px_60px_rgba(20,24,33,0.12)]">
        {/* Title */}
        <p className="text-[10px] font-semibold tracking-[5px] uppercase text-ink-fade mb-8">
          A N &ensp; E D I T O R &apos; S &ensp; P A S S
        </p>

        <div className="grid grid-cols-[220px_1fr] gap-10">
          {/* Margin notes column */}
          <aside className="space-y-12 pt-1">
            <div>
              <p className="text-[9px] tracking-[3px] uppercase text-gold mb-1">On rhythm</p>
              <p className="font-display italic text-[16px] text-ink leading-tight">
                The sentence wants to breathe here. Shorter. One beat.
              </p>
            </div>
            <div>
              <p className="text-[9px] tracking-[3px] uppercase text-gold mb-1">On voice</p>
              <p className="font-display italic text-[16px] text-ink leading-tight">
                This is you on stage. Not you in the notebook.
              </p>
            </div>
            <div>
              <p className="text-[9px] tracking-[3px] uppercase text-gold mb-1">On the reader</p>
              <p className="font-display italic text-[16px] text-ink leading-tight">
                They have come this far. Reward them.
              </p>
            </div>
          </aside>

          {/* Body prose */}
          <div className="space-y-3 text-[13px] leading-[1.75] text-ink-soft pl-6 border-l border-cream-dark">
            <p className="line-through">
              It was a long and difficult time in my life, and I struggled with many things that I
              had not anticipated, including the slow realization that everything I thought I knew
              about myself had to be re-examined from the beginning.
            </p>
            <p>
              <span className="text-ink font-medium">Revised:</span> Everything I thought I knew
              about myself had to be re-examined. Slowly. From the beginning.
            </p>
            <div className="pt-4 border-t border-cream-dark" />
            <p className="line-through">
              What I want to share with you is something that took me twenty years to understand.
            </p>
            <p>
              <span className="text-ink font-medium">Revised:</span> This took me twenty years to
              see. It will take you one chapter.
            </p>
          </div>
        </div>

        <p className="absolute bottom-8 left-14 text-[10px] tracking-[3px] uppercase text-ink-fade">
          Vox · Verbum · Fabula
        </p>
      </div>
    </main>
  )
}
