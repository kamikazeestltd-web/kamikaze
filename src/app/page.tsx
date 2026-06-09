import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts } from "@/lib/products";
import ProductCard from "@/components/shop/ProductCard";
import EmailCapture from "@/components/ui/EmailCapture";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div className="bg-black text-white">

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1920&q=90"
            alt="KAMIKAZE"
            fill
            className="object-cover opacity-30 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8 text-7xl md:text-8xl tracking-[0.3em]">神風</div>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter leading-none mb-6 uppercase">
            Rebel With
            <br />
            <span className="text-red-600">Discipline</span>
          </h1>
          <p className="text-white/40 text-sm tracking-[0.2em] uppercase mb-12 max-w-sm mx-auto">
            Japanese-Inspired Luxury Streetwear
          </p>
          <Link
            href="/shop"
            className="inline-block border-2 border-red-600 text-red-600 px-12 py-4 text-xs tracking-[0.3em] uppercase font-black hover:bg-red-600 hover:text-black transition-all duration-300"
          >
            Enter The Vision
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
          <span className="text-[9px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="border-y border-white/5 py-4 overflow-hidden bg-black">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(8).fill("KAMIKAZE 神風 · REBEL WITH DISCIPLINE · LUXURY STREETWEAR · MALAYSIA · ").map((text, i) => (
            <span key={i} className="text-[10px] tracking-[0.4em] uppercase text-white/15 mr-0">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURED COLLECTION ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-3">
              Now Available
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              Vision Collection
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors border-b border-white/10 hover:border-white/40 pb-1"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── BRAND STORY ── */}
      <section className="border-t border-white/5 py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80"
              alt="Why KAMIKAZE"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6">
              Our Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-10 pb-6 border-b-2 border-red-600">
              The Kamikaze
              <br />
              <span className="text-white/60">Philosophy</span>
            </h2>
            <div className="space-y-6 text-white/50 text-sm leading-relaxed">
              <p>
                KAMIKAZE was created for people who attack life without hesitation.
              </p>
              <p>
                Every piece is designed to represent ambition, discipline, and
                the willingness to leave a mark on the world.
              </p>
              <p className="text-white font-semibold tracking-wide">
                This is not fashion. This is a statement.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-block mt-10 text-[10px] tracking-[0.3em] uppercase border-b border-white/20 hover:border-white pb-1 text-white/50 hover:text-white transition-all"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS / CREDIBILITY ── */}
      <section className="border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "2024", label: "Founded" },
            { value: "MY", label: "Origin" },
            { value: "100%", label: "Premium Quality" },
            { value: "∞", label: "Ambition" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-black tracking-tight mb-2">
                {stat.value}
              </p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/30">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMMUNITY / MOVEMENT ── */}
      <section id="movement" className="border-t border-white/5 py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase text-black/30 mb-4">
              More Than A Brand
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              The Movement
            </h2>
            <p className="mt-6 text-black/40 text-sm max-w-md mx-auto leading-relaxed">
              KAMIKAZE is a community of builders, dreamers, and doers. Every
              piece you wear is a signal to the world.
            </p>
          </div>

          {/* Community grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-16">
            {[
              "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=400&q=80",
              "https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=400&q=80",
              "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=400&q=80",
              "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80",
            ].map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image
                  src={img}
                  alt="KAMIKAZE community"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "KAMIKAZE hits different. It&apos;s not just clothing — it&apos;s a mindset.",
                name: "Amir R.",
                title: "Entrepreneur, KL",
              },
              {
                quote: "Finally a local brand that actually looks premium. Every piece is fire.",
                name: "Haziq M.",
                title: "Content Creator, Selangor",
              },
              {
                quote: "I wear KAMIKAZE to remind myself what I&apos;m building towards.",
                name: "Faris A.",
                title: "Athlete, Penang",
              },
            ].map((t) => (
              <div key={t.name} className="border border-black/10 p-8">
                <p className="text-sm leading-relaxed text-black/60 mb-6">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-xs font-black tracking-widest uppercase">{t.name}</p>
                <p className="text-[10px] tracking-widest uppercase text-black/30 mt-1">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ── */}
      <section className="border-t border-white/5 py-32 px-6 bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-4">
            Become A Member
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Join The
            <br />Order
          </h2>
          <p className="text-white/30 text-sm mb-12">
            Early access. Exclusive drops. Community first. Discipline always.
          </p>
          <EmailCapture />
        </div>
      </section>

      {/* ── CATEGORY SPLIT ── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {[
          {
            label: "New Arrivals",
            sub: "SS26",
            image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=900&q=80",
            href: "/shop",
          },
          {
            label: "Best Sellers",
            sub: "All Time",
            image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=900&q=80",
            href: "/shop",
          },
        ].map((cat) => (
          <Link
            key={cat.label}
            href={cat.href}
            className="relative h-[60vh] overflow-hidden group"
          >
            <Image
              src={cat.image}
              alt={cat.label}
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-3">
                {cat.sub}
              </p>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-white">
                {cat.label}
              </h3>
              <span className="mt-4 text-[10px] tracking-[0.3em] uppercase text-white/40 border-b border-white/20 pb-1">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </section>

    </div>
  );
}
