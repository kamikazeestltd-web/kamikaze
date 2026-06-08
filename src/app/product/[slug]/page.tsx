"use client";

import { use, useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import { useCartStore } from "@/store/cart";
import Link from "next/link";

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
  const addItem = useCartStore((s) => s.addItem);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <Link
        href="/shop"
        className="text-xs tracking-widest uppercase text-[var(--foreground)]/40 hover:text-[var(--foreground)] transition-colors mb-10 inline-block"
      >
        ← Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Images */}
        <div className="space-y-3">
          <div className="relative aspect-[3/4] bg-[var(--muted)] overflow-hidden">
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-20 aspect-square overflow-hidden border-2 transition-colors ${
                    activeImage === i
                      ? "border-[var(--foreground)]"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="lg:sticky lg:top-24 self-start">
          <p className="text-xs tracking-widest uppercase text-[var(--accent)] mb-3">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold uppercase tracking-tight mb-4">
            {product.name}
          </h1>
          <p className="text-2xl text-[var(--accent)] font-semibold mb-8">
            ${product.price}
          </p>

          <p className="text-[var(--foreground)]/60 leading-relaxed mb-10">
            {product.description}
          </p>

          {/* Size selector */}
          <div className="mb-8">
            <p className="text-xs tracking-widest uppercase mb-4 flex justify-between">
              <span>Select Size</span>
              {!selectedSize && (
                <span className="text-[var(--foreground)]/40">Required</span>
              )}
            </p>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 text-sm border transition-colors ${
                    selectedSize === size
                      ? "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]"
                      : "border-[var(--border)] hover:border-[var(--foreground)]/60"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!selectedSize}
            className={`w-full py-4 text-sm tracking-widest uppercase font-semibold transition-all ${
              added
                ? "bg-green-600 text-white"
                : selectedSize
                ? "bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)]"
                : "bg-[var(--border)] text-[var(--foreground)]/30 cursor-not-allowed"
            }`}
          >
            {added ? "Added to Cart ✓" : "Add to Cart"}
          </button>

          {added && (
            <Link
              href="/cart"
              className="block text-center text-xs tracking-widest uppercase mt-4 text-[var(--accent)] hover:underline"
            >
              View Cart →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
