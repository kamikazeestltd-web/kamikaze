"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/products";
import ProductCard from "@/components/shop/ProductCard";
import { Suspense } from "react";

const categories = ["All", "Tops", "Bottoms", "Outerwear", "Accessories"];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? products
        : products.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-xs tracking-[0.4em] uppercase text-[var(--accent)] mb-2">
          All Products
        </p>
        <h1 className="text-4xl font-bold uppercase tracking-tight">Shop</h1>
      </div>

      {/* Filter */}
      <div className="flex gap-2 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 text-xs tracking-widest uppercase border transition-colors ${
              activeCategory === cat
                ? "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]"
                : "border-[var(--border)] text-[var(--foreground)]/60 hover:border-[var(--foreground)]/60"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[var(--foreground)]/40 py-24 text-sm tracking-widest uppercase">
          No products found
        </p>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense>
      <ShopContent />
    </Suspense>
  );
}
