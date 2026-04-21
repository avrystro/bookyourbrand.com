// V3 — Stack of books: library metaphor, shows volume + craft, multiple spines visible
export default function Step3V3() {
  const spines = [
    { title: 'One Big Life', author: 'Elaine Ralls', bg: '#c9a55c', text: '#141821' },
    { title: 'From Drifting to Winning', author: 'Avry Stroeve', bg: '#141821', text: '#c9a55c' },
    { title: 'Old Wealth, New Wealth', author: 'Lecter & Gryp', bg: '#f5f0e8', text: '#141821' },
    { title: 'Sabotage to Success', author: 'Barbara Majeski', bg: '#2a2e38', text: '#dcc088' },
    { title: 'The Quiet Work of Becoming', author: 'Your Name Here', bg: '#c9a55c', text: '#141821' },
  ]

  return (
    <main className="min-h-screen py-20 px-8 flex items-center justify-center bg-cream-dark/30">
      <div className="relative w-[520px] h-[720px] bg-cream p-12 flex items-center justify-center">
        {/* Stack of book spines, slightly offset */}
        <div className="relative flex flex-col gap-1">
          {spines.map((spine, i) => (
            <div
              key={i}
              className="relative w-[360px] h-[56px] flex items-center px-6 shadow-[0_2px_8px_rgba(20,24,33,0.12)]"
              style={{
                backgroundColor: spine.bg,
                color: spine.text,
                marginLeft: `${Math.sin(i * 1.3) * 10}px`,
                transform: `rotate(${Math.sin(i * 2) * 0.6}deg)`,
              }}
            >
              <div className="flex-1">
                <p className="font-display text-[15px] leading-tight">{spine.title}</p>
                <p
                  className="text-[9px] tracking-[2px] uppercase mt-0.5"
                  style={{ opacity: 0.75 }}
                >
                  {spine.author}
                </p>
              </div>
              <div className="w-8 h-px" style={{ backgroundColor: spine.text, opacity: 0.4 }} />
            </div>
          ))}
        </div>

        {/* Caption */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-[10px] tracking-[4px] uppercase text-ink-fade">
            S E L E C T E D &ensp; W O R K
          </p>
          <p className="font-display italic text-sm text-ink-fade mt-2">
            Your book, among the library David has built.
          </p>
        </div>
      </div>
    </main>
  )
}
