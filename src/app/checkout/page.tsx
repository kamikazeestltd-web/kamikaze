"use client";

import { useCartStore } from "@/store/cart";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CheckoutPage() {
  const { items, total } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error ?? "Something went wrong.");
      }
    } catch {
      setError("Failed to connect to payment service.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-bold uppercase tracking-tight mb-6">
          No items to checkout
        </h1>
        <Link
          href="/shop"
          className="bg-[var(--foreground)] text-[var(--background)] px-10 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[var(--accent)] transition-colors inline-block"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <p className="text-xs tracking-[0.4em] uppercase text-[var(--accent)] mb-2">
        Checkout
      </p>
      <h1 className="text-3xl font-bold uppercase tracking-tight mb-12">
        Review Your Order
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Order items */}
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={`${item.product.id}-${item.size}`}
              className="flex gap-4 border-b border-[var(--border)] pb-4"
            >
              <div className="relative w-20 aspect-[3/4] bg-[var(--muted)] flex-shrink-0">
                <Image
                  src={item.product.images[0]}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex justify-between">
                <div>
                  <p className="text-sm font-medium">{item.product.name}</p>
                  <p className="text-xs text-[var(--foreground)]/40 mt-1 uppercase tracking-wider">
                    {item.size} · Qty {item.quantity}
                  </p>
                </div>
                <p className="text-sm text-[var(--accent)] font-semibold">
                  RM${item.product.price * item.quantity}
                </p>
              </div>
            </div>
          ))}
          <div className="flex justify-between text-lg font-bold pt-2">
            <span>Total</span>
            <span className="text-[var(--accent)]">RM${total()}</span>
          </div>
        </div>

        {/* Payment */}
        <div className="border border-[var(--border)] p-8">
          <h2 className="text-sm tracking-widest uppercase mb-6 font-semibold">
            Payment
          </h2>
          <p className="text-sm text-[var(--foreground)]/50 mb-8 leading-relaxed">
            You will be redirected to our secure payment provider (Stripe) to
            complete your purchase. We accept all major credit and debit cards.
          </p>

          {error && (
            <p className="text-red-400 text-sm mb-4 p-3 border border-red-400/30 bg-red-400/10">
              {error}
            </p>
          )}

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full bg-[var(--foreground)] text-[var(--background)] py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[var(--accent)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Redirecting..." : "Pay with Stripe →"}
          </button>

          <p className="text-xs text-[var(--foreground)]/30 mt-4 text-center">
            Secured by Stripe. Your card details are never stored.
          </p>
        </div>
      </div>
    </div>
  );
}
