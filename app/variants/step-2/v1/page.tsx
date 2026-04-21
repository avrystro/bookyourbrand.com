// V1 — Stylized editor view: body prose + gold margin notes + inline edits
export default function Step2V1() {
  return (
    <main className="min-h-screen py-20 px-8 flex items-center justify-center bg-cream-dark/30">
      <div className="relative w-[680px] h-[720px] bg-cream p-14 shadow-[0_30px_60px_rgba(20,24,33,0.12)]">
        {/* Chapter header */}
        <div className="flex items-baseline justify-between border-b border-cream-dark pb-4 mb-6">
          <p className="text-[10px] font-semibold tracking-[4px] uppercase text-ink-fade">
            Chapter 2, Draft 3
          </p>
          <p className="text-[10px] tracking-[2px] uppercase text-gold">Revisions by D.L.S.</p>
        </div>

        {/* Body with inline edits + margin notes */}
        <div className="grid grid-cols-[1fr_140px] gap-8">
          <div className="space-y-4 text-[14px] leading-[1.85] text-ink">
            <p>
              The morning I decided to leave was not{' '}
              <span className="line-through text-ink-fade/60">dramatic or loud</span>{' '}
              <span className="text-gold italic">the one I had imagined</span>. I woke, made coffee,
              and sat at the kitchen table long enough to know the truth of it.
            </p>
            <p>
              There is a moment in every life when the story you have been telling yourself goes
              quiet, and you hear{' '}
              <span className="line-through text-ink-fade/60">the other story</span>{' '}
              <span className="text-gold italic">what has been waiting</span>. You cannot unhear it.
              You can only{' '}
              <span className="line-through text-ink-fade/60">decide what to do</span>{' '}
              <span className="text-gold italic">choose whether to walk toward it</span>.
            </p>
            <p>
              For years I had believed that courage was a loud thing. A shout. A burst. I was
              wrong. Courage is almost always quiet, and it is almost always a decision you make at
              a kitchen table alone.
            </p>
          </div>

          {/* Margin notes */}
          <aside className="space-y-10 pt-2">
            <div className="text-right">
              <p className="font-display italic text-[13px] text-gold leading-tight">
                Start from the voice, not the event.
              </p>
              <p className="text-[9px] tracking-[2px] uppercase text-ink-fade mt-1">D.L.S. —</p>
            </div>
            <div className="text-right">
              <p className="font-display italic text-[13px] text-gold leading-tight">
                Tighten. Let the reader arrive.
              </p>
              <p className="text-[9px] tracking-[2px] uppercase text-ink-fade mt-1">D.L.S. —</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
