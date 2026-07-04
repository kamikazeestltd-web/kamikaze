import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Cycle — KHONS",
  description: "Learn about KHONS. Named after Khonsu, the Egyptian moon god who dies and returns every cycle. The story of the moon, the Nile, and rising from the dark.",
  keywords: ["about KHONS", "Khonsu", "Egyptian mythology", "streetwear philosophy"],
};

export default function AboutPage() {
  return (
    <div className="bg-obsidian text-moon pt-16 min-h-screen">

      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden border-b border-line">
        <Image
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=80"
          alt="KHONS"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-xs tracking-[0.4em] uppercase text-nile mb-4">The Cycle</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            The Moon
            <br />
            <span className="text-moon-dim">Always Returns.</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6 py-24 space-y-8">
        <p className="text-lg text-moon-dim leading-relaxed">
          In the land of the two Niles, where the sky holds secrets older than empires, they worshipped a god named Khonsu. Not a king. Not a warrior. A traveller.
        </p>
        <p className="text-lg text-moon-dim leading-relaxed">
          Every night he crossed the dark sky alone, no light to guide him but his own glow. Every night he was swallowed whole — devoured to nothing. And every night he climbed back. Sharper. Fuller. Impossible to kill.
        </p>
        <p className="text-xl text-moon font-black tracking-wide uppercase border-l-4 border-nile pl-6">
          The moon always returns.
        </p>
      </section>

      {/* Three Faces */}
      <section className="border-t border-line py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-nile mb-16 text-center">
            The Three Faces
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
            {[
              {
                num: "I",
                title: "Rise",
                sub: "The Traveller",
                body: "He crosses the night sky without stopping — no light to guide him but his own. For everyone who keeps moving through the dark when there's nothing yet to show for it.",
              },
              {
                num: "II",
                title: "Rule",
                sub: "The Devourer",
                body: "In the oldest texts he strangles the old gods so the king may take their power. Defiance with teeth. You don't ask for the throne — you take what was always yours.",
              },
              {
                num: "III",
                title: "Return",
                sub: "The Moon",
                body: "Devoured to nothing every cycle. Back to full every time. Impossible to keep buried. The whole story in one law of the sky: the moon always returns.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-obsidian p-10">
                <p className="text-xs tracking-[0.3em] uppercase text-nile mb-6">
                  {v.num}
                </p>
                <h3 className="text-lg font-black uppercase tracking-tighter mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-gold italic mb-4">
                  {v.sub}
                </p>
                <p className="text-xs text-moon-dim leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="border-t border-line py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-nile mb-6">Vision</p>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">
              Built For The
              <br /><span className="text-nile">Ones Who Return</span>
            </h2>
            <p className="text-sm text-moon-dim leading-relaxed">
              KHONS is not a fashion brand. It's a mark. A signal that you were buried and came back. That you were devoured and returned sharper. That the dark could not hold you.
            </p>
            <p className="text-sm text-moon-dim leading-relaxed mt-6">
              We are building more than clothing. We are building a cycle. A movement. A community of people who refuse to stay in the dark.
            </p>
          </div>
          <div className="relative aspect-square overflow-hidden border border-line">
            <Image
              src="https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&q=80"
              alt="KHONS vision"
              fill
              className="object-cover grayscale opacity-60 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line py-32 px-6 text-center">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 text-moon">
          Ready To Rise?
        </h2>
        <Link
          href="/shop"
          className="inline-block bg-nile text-obsidian px-12 py-4 text-xs tracking-[0.3em] uppercase font-black hover:bg-nile/90 transition-all"
        >
          Enter The Cycle
        </Link>
      </section>

    </div>
  );
}
