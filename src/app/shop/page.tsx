"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/lib/products";
import ProductCard from "@/components/shop/ProductCard";

const categories = ["All", "Tops", "Bottoms", "Outerwear", "Accessories"];
const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sort, setSort] = useState("newest");

  const filtered = useMemo(() => {
    let list =
      activeCategory === "All"
        ? [...products]
        : products.filter((p) => p.category === activeCategory);

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);

    return list;
  }, [activeCategory, sort]);

  return (
    <div className="bg-obsidian text-moon min-h-screen pt-16">
      {/* Header */}
      <div className="border-b border-line px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-nile mb-3">
            The First Rising
          </p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
            Shop
          </h1>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-line px-6 py-4 sticky top-16 bg-obsidian/95 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs tracking-[0.2em] uppercase transition-colors ${
                  activeCategory === cat
                    ? "bg-nile text-obsidian font-black"
                    : "text-moon-dim hover:text-moon border border-line hover:border-nile"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-transparent border border-line text-moon-dim text-xs tracking-widest uppercase px-4 py-2 focus:outline-none hover:border-nile cursor-pointer"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value} className="bg-obsidian">
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-xs tracking-[0.3em] uppercase text-moon-dim mb-8">
          {filtered.length} Products
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-moon-dim py-24 text-xs tracking-[0.4em] uppercase">
            No products found
          </p>
        )}
      </div>
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
