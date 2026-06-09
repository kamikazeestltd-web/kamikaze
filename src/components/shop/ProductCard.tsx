import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-[var(--muted)] mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt={product.name}
            fill
            className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] tracking-widest uppercase bg-[var(--background)]/80 px-2 py-1">
            {product.category}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium tracking-wide">{product.name}</h3>
        </div>
        <p className="text-sm text-[var(--accent)] font-semibold">
          RM${product.price}
        </p>
      </div>
    </Link>
  );
}
