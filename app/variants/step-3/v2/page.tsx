// V2 — Flat cover card: no 3D, brand-first, front face only, clean editorial
export default function Step3V2() {
  return (
    <main className="min-h-screen py-20 px-8 flex items-center justify-center bg-cream-dark/30">
      <div className="relative">
        {/* Flat book cover */}
        <div className="relative w-[400px] h-[580px] bg-cream shadow-[0_40px_80px_rgba(20,24,33,0.2)] border border-cream-dark">
          {/* Top ornament crest */}
          <div className="absolute top-14 left-0 right-0 flex justify-center">
            <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
              <span className="font-display text-xl text-gold italic">B</span>
            </div>
          </div>

          {/* VOX VERBUM FABULA */}
          <div className="absolute top-32 left-0 right-0 text-center">
            <p className="text-[9px] tracking-[5px] uppercase text-gold">
              V O X &ensp; · &ensp; V E R B U M &ensp; · &ensp; F A B U L A
            </p>
          </div>

          {/* Title stack centered */}
          <div className="absolute top-56 left-0 right-0 px-10 text-center">
            <h2 className="font-display text-4xl leading-[1.05] text-ink mb-3">
              The Quiet Work of Becoming
            </h2>
            <p className="font-display italic text-lg text-ink-fade">a memoir</p>
          </div>

          {/* Gold rule */}
          <div className="absolute top-[62%] left-16 right-16 h-px bg-gold" />

          {/* Author */}
          <div className="absolute bottom-20 left-0 right-0 text-center">
            <p className="text-[10px] tracking-[4px] uppercase text-ink font-semibold">
              D A V I D &ensp; L L O Y D &ensp; S T R A U S S
            </p>
            <p className="font-display italic text-sm text-ink-fade mt-3">Professional Wordsmith</p>
          </div>
        </div>

        {/* Subtle shadow hint below */}
        <div className="absolute -bottom-4 left-8 right-8 h-4 bg-ink/10 blur-md rounded-full" />
      </div>
    </main>
  )
}
