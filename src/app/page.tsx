import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts } from "@/lib/products";
import ProductCard from "@/components/shop/ProductCard";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=80"
            alt="Kamikaze hero"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/20 via-transparent to-[var(--background)]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--accent)] mb-6">
            New Collection — SS26
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-8 uppercase">
            Move With
            <br />
            Intent.
          </h1>
          <p className="text-[var(--foreground)]/60 text-lg mb-10 max-w-md mx-auto">
            Premium streetwear built for those who refuse to blend in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-[var(--foreground)] text-[var(--background)] px-10 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[var(--accent)] transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="border border-[var(--foreground)]/30 px-10 py-4 text-sm tracking-widest uppercase hover:border-[var(--foreground)] transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--accent)] mb-2">
              Featured
            </p>
            <h2 className="text-3xl font-bold uppercase tracking-tight">
              The Collection
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-sm tracking-widest uppercase text-[var(--foreground)]/50 hover:text-[var(--foreground)] transition-colors"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand statement */}
      <section className="border-y border-[var(--border)] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            &ldquo;We don&apos;t follow trends.
            <br />
            <span className="text-[var(--accent)]">We set the standard.</span>
            &rdquo;
          </p>
          <p className="mt-6 text-[var(--foreground)]/50 text-sm tracking-widest uppercase">
            — Kamikaze, Est. 2024
          </p>
        </div>
      </section>

      {/* Category blocks */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              label: "Tops & Hoodies",
              image:
                "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80",
              category: "Tops",
            },
            {
              label: "Outerwear",
              image:
                "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&q=80",
              category: "Outerwear",
            },
          ].map((cat) => (
            <Link
              key={cat.category}
              href={`/shop?category=${cat.category}`}
              className="relative h-80 overflow-hidden group"
            >
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">
                    {cat.label}
                  </h3>
                  <p className="text-sm tracking-widest uppercase text-[var(--accent)] mt-1">
                    Shop →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
