// V1 — 3D book mockup: angled perspective, cover face + spine hint, drop shadow
import Image from 'next/image'

export default function Step3V1() {
  return (
    <main className="min-h-screen py-20 px-8 flex items-center justify-center bg-cream-dark/30">
      <div className="relative w-[520px] h-[720px] bg-gradient-to-b from-cream to-cream-dark/40 p-10 flex items-center justify-center">
        {/* 3D book illusion via CSS transforms */}
        <div className="relative" style={{ perspective: '1200px' }}>
          {/* Spine (left sliver) */}
          <div
            className="absolute left-0 top-0 w-4 bg-gold-dark"
            style={{
              height: '400px',
              transform: 'rotateY(-60deg) translateX(-8px)',
              transformOrigin: 'right center',
              boxShadow: 'inset -4px 0 8px rgba(0,0,0,0.3)',
            }}
          />

          {/* Front cover */}
          <div
            className="relative w-[280px] h-[400px] bg-ink shadow-[0_40px_60px_rgba(20,24,33,0.4)]"
            style={{
              transform: 'rotateY(-15deg)',
              transformOrigin: 'left center',
            }}
          >
            {/* Cover ornament top */}
            <div className="absolute top-10 left-0 right-0 flex justify-center">
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-gold" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <div className="w-6 h-px bg-gold" />
              </div>
            </div>

            {/* Cover title */}
            <div className="absolute top-24 left-0 right-0 px-8 text-center">
              <p className="text-[9px] tracking-[4px] uppercase text-gold-light mb-3">A MEMOIR</p>
              <h2 className="font-display text-[28px] leading-[1.1] text-cream">
                The Quiet Work of Becoming
              </h2>
            </div>

            {/* Cover gold rule */}
            <div className="absolute top-[58%] left-8 right-8 h-px bg-gold/60" />

            {/* Cover author */}
            <div className="absolute bottom-14 left-0 right-0 text-center">
              <p className="text-[10px] tracking-[4px] uppercase text-cream font-semibold">
                D A V I D &ensp; L L O Y D &ensp; S T R A U S S
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
