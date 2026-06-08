"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/store/cart";

export default function SuccessPage() {
  const clearCart = useCartStore((s) => s.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="max-w-2xl mx-auto px-6 py-40 text-center">
      <div className="text-5xl mb-8">✓</div>
      <p className="text-xs tracking-[0.4em] uppercase text-[var(--accent)] mb-4">
        Order Confirmed
      </p>
      <h1 className="text-3xl font-bold uppercase tracking-tight mb-6">
        Thank You
      </h1>
      <p className="text-[var(--foreground)]/50 mb-12 leading-relaxed">
        Your order has been placed. You&apos;ll receive a confirmation email
        shortly. We&apos;ll notify you when your order ships.
      </p>
      <Link
        href="/shop"
        className="bg-[var(--foreground)] text-[var(--background)] px-10 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[var(--accent)] transition-colors inline-block"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
