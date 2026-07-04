import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className={`group block ${product.soldOut ? 'opacity-50' : ''}`}>
      <div className="relative aspect-[3/4] overflow-hidden bg-night mb-4 border border-line">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className={`object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-70 group-hover:opacity-100 ${product.soldOut ? 'group-hover:grayscale' : ''}`}
        />
        {product.images[1] && !product.soldOut && (
          <Image
            src={product.images[1]}
            alt={product.name}
            fill
            className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}
        {/* Tags */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="text-[9px] tracking-[0.2em] uppercase bg-obsidian/80 text-moon-dim px-2 py-1">
            {product.category}
          </span>
          {product.soldOut && (
            <span className="text-[9px] tracking-[0.2em] uppercase bg-blood/80 text-moon px-2 py-1 font-black">
              Sold Out
            </span>
          )}
        </div>
        {/* Quick view overlay */}
        <div className={`absolute inset-x-0 bottom-0 bg-obsidian/80 py-3 text-center text-[9px] tracking-[0.3em] uppercase text-moon-dim transition-transform duration-300 ${product.soldOut ? '' : 'translate-y-full group-hover:translate-y-0'}`}>
          {product.soldOut ? 'Sold Out' : 'View Product'}
        </div>
      </div>
      <div className="flex justify-between items-start px-0.5">
        <div>
          <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-moon">{product.name}</h3>
          <p className="text-[10px] text-moon-dim tracking-widest uppercase mt-0.5">{product.category}</p>
        </div>
        <p className="text-xs font-black tracking-wide text-nile">
          RM{product.price}
        </p>
      </div>
    </Link>
  );
}
