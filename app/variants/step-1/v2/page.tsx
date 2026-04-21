// V2 — Editorial letterhead: masthead with meta, body flowing like a feature article
export default function Step1V2() {
  return (
    <main className="min-h-screen py-20 px-8 flex items-center justify-center bg-cream-dark/30">
      <div className="relative w-[520px] h-[720px] bg-cream p-14 shadow-[0_30px_60px_rgba(20,24,33,0.12)]">
        {/* Top masthead */}
        <div className="border-b-2 border-gold pb-4 mb-8">
          <div className="flex items-baseline justify-between mb-2">
            <p className="text-[9px] font-semibold tracking-[4px] uppercase text-ink">
              S A M P L E &ensp; I N T R O
            </p>
            <p className="text-[9px] tracking-[3px] uppercase text-ink-fade">2026</p>
          </div>
          <h2 className="font-display text-3xl text-ink leading-tight">
            Why we go to books first
          </h2>
          <p className="font-display italic text-lg text-ink-fade mt-2">
            A personal brand book for thoughtful professionals
          </p>
        </div>

        {/* Body */}
        <div className="space-y-4 text-[14px] leading-[1.8] text-ink-soft">
          <p>
            Before we talk about what your book could be, let me tell you why people go to books
            before they go to anyone else. When someone is struggling to figure out their life,
            they reach for a book.
          </p>
          <p>
            Not a search result. Not a friend. Not a therapist. A book. They trust that on the
            other side of those pages is someone who has felt what they are feeling, and has lived
            to write about it with clarity.
          </p>
          <p>
            Your readers are already looking for you. The only question is whether they will find
            a book with your name on it, or someone else&rsquo;s.
          </p>
        </div>

        {/* Bottom sig */}
        <div className="absolute bottom-10 left-14 right-14 flex items-center justify-between border-t border-cream-dark pt-4">
          <p className="text-[10px] tracking-[3px] uppercase text-ink-fade">D.L.S.</p>
          <p className="text-[10px] tracking-[3px] uppercase text-gold">Vox · Verbum · Fabula</p>
        </div>
      </div>
    </main>
  )
}
