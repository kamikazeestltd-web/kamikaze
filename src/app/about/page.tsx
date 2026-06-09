import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-black text-white pt-16">

      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=80"
          alt="KAMIKAZE"
          fill
          className="object-cover opacity-25 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-4">Our Story</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Built Different.
            <br />
            <span className="text-white/15">From Day One.</span>
          </h1>
        </div>
      </section>

      {/* Manifesto */}
      <section className="max-w-3xl mx-auto px-6 py-24 space-y-8">
        <p className="text-lg text-white/70 leading-relaxed font-light">
          KAMIKAZE was created for people who attack life without hesitation.
        </p>
        <p className="text-lg text-white/40 leading-relaxed">
          Every piece is designed to represent ambition, discipline, and the
          willingness to leave a mark on the world.
        </p>
        <p className="text-xl text-white font-black tracking-wide uppercase">
          This is not fashion. This is a statement.
        </p>
      </section>

      {/* Values */}
      <section className="border-t border-white/5 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/20 mb-16 text-center">
            What We Stand For
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {[
              {
                number: "01",
                title: "Quality First",
                body: "We source premium materials and refuse to compromise on construction. If it doesn't meet our standard, it doesn't exist.",
              },
              {
                number: "02",
                title: "Intentional Design",
                body: "Every silhouette, every detail, every colorway is deliberate. Nothing is accidental. Nothing is wasted.",
              },
              {
                number: "03",
                title: "Built to Last",
                body: "We don't follow trends. We create pieces that outlast the cycle and become part of your identity.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-black p-10">
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 mb-6">
                  {v.number}
                </p>
                <h3 className="text-lg font-black uppercase tracking-tighter mb-4">
                  {v.title}
                </h3>
                <p className="text-xs text-white/30 leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirations */}
      <section className="border-t border-white/5 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/20 mb-6">Vision</p>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">
              The Biggest
              <br />Streetwear Brand
              <br /><span className="text-white/20">In Southeast Asia.</span>
            </h2>
            <p className="text-sm text-white/30 leading-relaxed">
              We&apos;re not building a clothing company. We&apos;re building a
              movement. A culture. A signal that Malaysia has something to say
              to the world of fashion.
            </p>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&q=80"
              alt="KAMIKAZE vision"
              fill
              className="object-cover grayscale opacity-60"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 py-32 px-6 text-center">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">
          Ready To Leave
          <br />Your Mark?
        </h2>
        <Link
          href="/shop"
          className="inline-block bg-white text-black px-12 py-4 text-xs tracking-[0.3em] uppercase font-black hover:bg-white/90 transition-all"
        >
          Shop The Collection
        </Link>
      </section>

    </div>
  );
}
