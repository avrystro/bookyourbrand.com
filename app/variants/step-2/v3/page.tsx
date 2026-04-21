// V3 — Before/after split: two columns, same passage shown raw and polished
export default function Step2V3() {
  return (
    <main className="min-h-screen py-20 px-8 flex items-center justify-center bg-cream-dark/30">
      <div className="relative w-[780px] h-[720px] bg-cream p-14 shadow-[0_30px_60px_rgba(20,24,33,0.12)]">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[10px] font-semibold tracking-[5px] uppercase text-ink-fade mb-2">
            T H E &ensp; P L A Y I N G - T E N N I S &ensp; P H A S E
          </p>
          <p className="font-display italic text-lg text-ink">Your words, shaped.</p>
        </div>

        {/* Split columns */}
        <div className="grid grid-cols-2 gap-10">
          {/* Before */}
          <div>
            <div className="flex items-baseline gap-3 mb-4 border-b border-cream-dark pb-2">
              <p className="text-[9px] tracking-[3px] uppercase text-ink-fade">What you brought</p>
              <div className="flex-1 h-px" />
            </div>
            <div className="space-y-3 text-[13px] leading-[1.85] text-ink-fade">
              <p className="line-through decoration-ink-fade/60">
                So this is a story about my life and it starts when I was really young and there
                was this moment when I realized that things were going to change and I remember
                exactly where I was standing.
              </p>
              <p className="line-through decoration-ink-fade/60">
                I think that for a lot of people the hard thing about starting to write a book is
                that you don&rsquo;t really know where to start and you feel like maybe you should
                start at the beginning.
              </p>
            </div>
          </div>

          {/* After */}
          <div>
            <div className="flex items-baseline gap-3 mb-4 border-b border-gold pb-2">
              <p className="text-[9px] tracking-[3px] uppercase text-gold">Your book</p>
              <div className="flex-1 h-px" />
            </div>
            <div className="space-y-3 text-[14px] leading-[1.85] text-ink">
              <p>
                I was eight years old, standing in my grandmother&rsquo;s kitchen, the first time I
                understood that everything was about to change.
              </p>
              <p>
                Starting a book is the wrong problem. The right one is starting a chapter. Any
                chapter. The one you are most ready to tell.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="absolute bottom-10 left-14 right-14 text-center font-display italic text-sm text-ink-fade">
          &ldquo;We play tennis with the manuscript until what is on the page sounds
          unmistakably like you.&rdquo;
        </p>
      </div>
    </main>
  )
}
