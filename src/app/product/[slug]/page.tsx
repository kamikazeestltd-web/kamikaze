"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import { useCartStore } from "@/store/cart";
import ProductCard from "@/components/shop/ProductCard";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const related = products.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 2000);
      return;
    }
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="bg-obsidian text-moon pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 mb-10 text-[10px] tracking-[0.3em] uppercase text-white/20">
          <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-white/40">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
          {/* Images */}
          <div className="space-y-3">
            <div className="relative aspect-[4/5] bg-[#0a0a0a] overflow-hidden">
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {/* Limited drop badge */}
              <div className="absolute top-4 left-4">
                <span className="text-[9px] tracking-[0.3em] uppercase bg-nile text-obsidian px-3 py-1 font-black">
                  Limited
                </span>
              </div>
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-20 aspect-square overflow-hidden border transition-colors ${
                      activeImage === i ? "border-white/60" : "border-white/10"
                    }`}
                  >
                    <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="lg:sticky lg:top-24 self-start">
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-3">
              {product.category}
            </p>
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-3">
              {product.name}
            </h1>
            <p className="text-2xl font-black tracking-wide mb-2">
              RM{product.price}
            </p>

            {/* Stock status */}
            {product.soldOut ? (
              <p className="text-[10px] tracking-[0.3em] uppercase text-blood mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                Sold Out
              </p>
            ) : (
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                In Stock — Ships in 2–4 business days
              </p>
            )}

            <p className="text-sm text-white/40 leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Size selector */}
            {!product.soldOut && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/40">
                    Select Size
                  </p>
                  <Link href="/size-guide" className="text-[10px] tracking-[0.2em] uppercase text-white/20 hover:text-white transition-colors underline">
                    Size Guide
                  </Link>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 text-xs font-bold border transition-all ${
                        selectedSize === size
                          ? "bg-nile text-obsidian border-white"
                          : "border-white/10 text-white/40 hover:border-white/40 hover:text-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {sizeError && (
                  <p className="text-[10px] tracking-[0.2em] uppercase text-blood mt-3">
                    Please select a size
                  </p>
                )}
              </div>
            )}

            {/* CTAs */}
            {product.soldOut ? (
              <div className="py-8 text-center border border-red-600/30">
                <p className="text-sm font-black uppercase tracking-widest text-blood">
                  This item is sold out
                </p>
                <p className="text-xs text-white/40 mt-2">Join The Order to be notified when it's back in stock.</p>
                <Link
                  href="/"
                  className="inline-block mt-6 text-[10px] tracking-[0.3em] uppercase border border-line px-8 py-3 hover:border-white/60 text-moon-dim hover:text-white transition-all"
                >
                  Browse Other Items
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 text-xs tracking-[0.3em] uppercase font-black transition-all duration-300 ${
                    added
                      ? "bg-white/20 text-white"
                      : "bg-nile text-obsidian hover:bg-white/90"
                  }`}
                >
                  {added ? "Added To Cart ✓" : "Add To Cart"}
                </button>
                <Link
                  href="/checkout"
                  onClick={() => {
                    if (selectedSize) addItem(product, selectedSize);
                  }}
                  className="block w-full py-4 text-xs tracking-[0.3em] uppercase font-black border border-line text-center hover:border-white/60 hover:text-white text-moon-dim transition-all"
                >
                  Buy Now
                </Link>
              </div>
            )}

            {added && (
              <Link
                href="/cart"
                className="block text-center text-[10px] tracking-[0.3em] uppercase mt-4 text-white/30 hover:text-white transition-colors"
              >
                View Cart →
              </Link>
            )}

            {/* Trust signals */}
            <div className="mt-10 pt-8 border-t border-white/5 space-y-3">
              {[
                "Free shipping on orders over RM200",
                "Easy 30-day returns",
                "Secure checkout via Stripe",
              ].map((t) => (
                <p key={t} className="text-[10px] tracking-wide text-white/20 flex items-center gap-2">
                  <span className="text-white/30">✓</span> {t}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-24 pt-16 border-t border-white/5">
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/20 mb-3">
              You May Also Like
            </p>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-10">
              Related Drops
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
