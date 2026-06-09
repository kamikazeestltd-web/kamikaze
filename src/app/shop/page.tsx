"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
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
    <div className="bg-black text-white min-h-screen pt-16">
      {/* Header */}
      <div className="border-b border-white/5 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-3">
            SS26
          </p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
            Shop
          </h1>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-white/5 px-6 py-4 sticky top-16 bg-black/95 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-colors ${
                  activeCategory === cat
                    ? "bg-white text-black font-black"
                    : "text-white/30 hover:text-white border border-white/10 hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-transparent border border-white/10 text-white/40 text-[10px] tracking-widest uppercase px-4 py-2 focus:outline-none hover:border-white/30 cursor-pointer"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value} className="bg-black">
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 mb-8">
          {filtered.length} Products
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-white/20 py-24 text-[10px] tracking-[0.4em] uppercase">
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
