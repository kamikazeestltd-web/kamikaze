import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-xs tracking-[0.4em] uppercase text-[var(--accent)] mb-4">
          Our Story
        </p>
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none max-w-3xl">
          Built Different.
          <br />
          <span className="text-[var(--foreground)]/30">From Day One.</span>
        </h1>
      </section>

      {/* Full-width image */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1600&q=80"
          alt="Kamikaze brand"
          fill
          className="object-cover opacity-50"
        />
      </section>

      {/* Story text */}
      <section className="max-w-3xl mx-auto px-6 py-24 space-y-8">
        <p className="text-lg text-[var(--foreground)]/80 leading-relaxed">
          Kamikaze was born from a single conviction: that streetwear and luxury
          don&apos;t have to be opposites. We exist at the intersection — raw
          energy with refined execution.
        </p>
        <p className="text-lg text-[var(--foreground)]/60 leading-relaxed">
          Every piece is designed for people who carry themselves with purpose.
          The cut is intentional. The fabric is premium. The attitude is
          non-negotiable.
        </p>
        <p className="text-lg text-[var(--foreground)]/60 leading-relaxed">
          We don&apos;t chase seasons. We build a wardrobe that outlasts them.
        </p>
      </section>

      {/* Values */}
      <section className="border-t border-[var(--border)] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--accent)] mb-12 text-center">
            What We Stand For
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Quality First",
                body: "We source premium materials and refuse to compromise on construction. If it doesn't meet our standard, it doesn't ship.",
              },
              {
                title: "Intentional Design",
                body: "Every silhouette, every detail, every colorway is deliberate. Nothing is accidental. Nothing is wasted.",
              },
              {
                title: "Built to Last",
                body: "Fast fashion is not in our vocabulary. We make pieces that get better with wear and outlast the trend cycle.",
              },
            ].map((v) => (
              <div key={v.title}>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-[var(--foreground)]/50 leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 px-6">
        <h2 className="text-3xl font-bold uppercase tracking-tight mb-6">
          Ready to move with intent?
        </h2>
        <Link
          href="/shop"
          className="bg-[var(--foreground)] text-[var(--background)] px-10 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[var(--accent)] transition-colors inline-block"
        >
          Shop the Collection
        </Link>
      </section>
    </div>
  );
}
