// V1 — Book-page metaphor: CHAPTER I label, centered title, serif body, page number in corner
export default function Step1V1() {
  return (
    <main className="min-h-screen py-20 px-8 flex items-center justify-center bg-cream-dark/30">
      <div className="relative w-[520px] h-[720px] bg-cream p-20 shadow-[0_30px_60px_rgba(20,24,33,0.12)]">
        {/* Gold CHAPTER I label */}
        <p className="text-center text-[10px] font-semibold tracking-[6px] uppercase text-gold mb-6">
          C H A P T E R &ensp; I
        </p>

        {/* Playfair chapter title */}
        <h2 className="font-display text-4xl text-ink text-center leading-tight mb-2">
          Introduction
        </h2>

        {/* Subtitle divider */}
        <div className="w-16 h-px bg-gold mx-auto mb-10" />

        {/* Body prose */}
        <div className="space-y-4 text-[15px] leading-[1.85] text-ink-soft font-display">
          <p className="first-letter:font-display first-letter:text-5xl first-letter:font-medium first-letter:text-ink first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-[1]">
            The first time I understood that words could change a life, I was eleven years old and
            had just finished a book my mother handed me without a word. She knew, before I did,
            that the story would meet me exactly where I stood.
          </p>
          <p>
            What I learned that afternoon has never left me. Books do not arrive in our lives by
            accident. They find us when we are ready, and they stay with us long after we have
            forgotten the room we read them in.
          </p>
          <p>
            This book is written for the reader who is ready.
          </p>
        </div>

        {/* Page number bottom-right */}
        <p className="absolute bottom-8 right-12 text-[10px] tracking-[3px] text-ink-fade">1</p>
      </div>
    </main>
  )
}
