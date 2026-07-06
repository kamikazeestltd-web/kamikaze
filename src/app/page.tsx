import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getFeaturedProducts } from "@/lib/products";
import ProductCard from "@/components/shop/ProductCard";
import EmailCapture from "@/components/ui/EmailCapture";
import CountdownTimer from "@/components/ui/CountdownTimer";

export const metadata: Metadata = {
  title: "KHONS — Rise. Rule. Return.",
  description:
    "KHONS is streetwear from the land of the two Niles. Named after Khonsu, the moon god who dies and returns every cycle. For those who refuse to stay buried.",
  keywords: [
    "KHONS streetwear",
    "Egyptian streetwear",
    "Nubian fashion",
    "moon god",
    "luxury streetwear",
    "premium clothing",
  ],
};

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div className="bg-obsidian text-moon">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Nile glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-nile/30 to-transparent blur-3xl opacity-40" />

        <div className="absolute inset-0">
          <div className="absolute inset-0 hero-distort">
            <Image
              src="/hero.jpg"
              alt="KHONS"
              fill
              className="object-cover object-top opacity-30"
              priority
            />
          </div>
          <div className="absolute inset-0 hero-glitch-red">
            <Image
              src="/hero.jpg"
              alt=""
              fill
              className="object-cover object-top opacity-[0.06]"
              priority
            />
          </div>
          <div className="absolute inset-0 hero-glitch-blue">
            <Image
              src="/hero.jpg"
              alt=""
              fill
              className="object-cover object-top opacity-[0.06]"
              priority
            />
          </div>
          <div className="absolute inset-0 hero-glitch-slice">
            <Image
              src="/hero.jpg"
              alt=""
              fill
              className="object-cover object-top opacity-20"
              priority
            />
          </div>
          <div className="absolute inset-0 hero-scanlines" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-obsidian/20 to-obsidian" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-nile mb-8">
            Streetwear from the land of the two Niles
          </p>
          <h1 className="text-[clamp(5rem,20vw,14rem)] font-black tracking-tight leading-none mb-6 uppercase text-moon">
            KHONS
          </h1>
          <p className="text-white/40 text-sm tracking-[0.2em] uppercase mb-12 max-w-sm mx-auto">
            The moon always returns.
          </p>

          {/* Countdown */}
          <div className="mb-12">
            <p className="text-[10px] tracking-[0.4em] uppercase text-moon-dim mb-6">
              Launching In
            </p>
            <CountdownTimer />
          </div>

          <Link
            href="/shop"
            className="inline-block border-2 border-nile text-nile px-12 py-4 text-xs tracking-[0.3em] uppercase font-black hover:bg-nile hover:text-obsidian transition-all duration-300"
          >
            Rise. Rule. Return.
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-moon-faint">
          <span className="text-[9px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-nile to-transparent" />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="border-y border-line py-4 overflow-hidden bg-obsidian">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(8).fill("KHONS · THE MOON ALWAYS RETURNS · RISE RULE RETURN · FROM THE TWO NILES · ").map((text, i) => (
            <span key={i} className="text-[10px] tracking-[0.4em] uppercase text-moon-faint mr-0">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* ── THREE FACES ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-nile mb-4">
            Three Faces. One God.
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-moon">
            Rise. Rule. Return.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border border-line">
          {[
            {
              num: "I",
              title: "Rise",
              aspect: "The Traveller",
              desc: "He crosses the night sky without stopping — no light to guide him but his own. For the ones who keep moving through the dark when there's nothing yet to show for it.",
              color: "text-nile",
            },
            {
              num: "II",
              title: "Rule",
              aspect: "The Devourer",
              desc: "In the oldest texts he strangles the old gods so the king may take their power. Defiance with teeth. You don't ask for the throne — you take what was always yours.",
              color: "text-blood",
            },
            {
              num: "III",
              title: "Return",
              aspect: "The Moon",
              desc: "Devoured to nothing every cycle. Back to full every time. Impossible to keep buried. The whole brand in one law of the sky: the moon always returns.",
              color: "text-gold",
            },
          ].map((face) => (
            <div key={face.num} className="bg-night border border-line p-8 hover:bg-raised transition-colors duration-300">
              <p className={`text-xs tracking-[0.3em] uppercase ${face.color} mb-3`}>
                {face.num}
              </p>
              <h3 className="text-3xl font-black uppercase tracking-tight text-moon mb-2">
                {face.title}
              </h3>
              <p className={`text-sm italic mb-4 ${face.color}`}>
                {face.aspect}
              </p>
              <p className="text-sm text-moon-dim leading-relaxed">
                {face.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="bg-night border-t border-line py-24 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-base text-moon-dim leading-relaxed">
            Every night the moon is <span className="text-moon italic">swallowed whole</span> — devoured down to nothing.
          </p>
          <p className="text-lg text-moon-dim leading-relaxed">
            And every night it climbs back. Sharper. Fuller. <span className="text-nile italic">Impossible to kill.</span> The kingdom of Kush called that force <span className="text-moon font-bold">KHONSU</span> — the traveller who crosses the dark, the devourer who takes power from the gods, the moon that dies and returns without fail.
          </p>
          <p className="text-lg text-moon-dim leading-relaxed">
            KHONS is cut for the ones built the same way. Buried, and back again. <span className="text-moon italic font-bold">This is not clothing. It is the mark of everyone who refused to stay in the dark.</span>
          </p>
        </div>
      </section>

      {/* ── FEATURED COLLECTION ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-nile mb-3">
              Now Available
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-moon">
              The First Rising
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs tracking-[0.3em] uppercase text-moon-dim hover:text-moon transition-colors border-b border-line hover:border-moon pb-1"
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

      {/* ── EMAIL CAPTURE ── */}
      <section className="border-t border-line py-32 px-6 bg-night">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-nile mb-4">
            Join The Cycle
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-moon mb-4">
            The Moon Returns
          </h2>
          <p className="text-moon-dim text-sm mb-12">
            Early drops. Exclusive access. The movement. Delivered to you first.
          </p>
          <EmailCapture />
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {[
          {
            label: "The Traveller",
            sub: "Rise Collection",
            image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80",
            href: "/shop?category=Tops",
          },
          {
            label: "The Devourer",
            sub: "Rule Collection",
            image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=900&q=80",
            href: "/shop?category=Bottoms",
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
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-50"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-xs tracking-[0.4em] uppercase text-moon-dim mb-3">
                {cat.sub}
              </p>
              <h3 className="text-3xl font-black uppercase tracking-tight text-moon">
                {cat.label}
              </h3>
              <span className="mt-4 text-xs tracking-[0.3em] uppercase text-moon-dim border-b border-moon-dim pb-1">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
