"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/cart";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[var(--accent)] mb-4">
          Your Cart
        </p>
        <h1 className="text-3xl font-bold uppercase tracking-tight mb-6">
          Your cart is empty
        </h1>
        <p className="text-[var(--foreground)]/40 mb-10 text-sm">
          Looks like you haven&apos;t added anything yet.
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

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-xs tracking-[0.4em] uppercase text-[var(--accent)] mb-2">
        Your Cart
      </p>
      <h1 className="text-3xl font-bold uppercase tracking-tight mb-12">
        Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div
              key={`${item.product.id}-${item.size}`}
              className="flex gap-6 border-b border-[var(--border)] pb-6"
            >
              <Link
                href={`/product/${item.product.slug}`}
                className="relative w-28 aspect-[3/4] flex-shrink-0 bg-[var(--muted)]"
              >
                <Image
                  src={item.product.images[0]}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                />
              </Link>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium tracking-wide">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-[var(--foreground)]/40 mt-1 uppercase tracking-wider">
                      Size: {item.size}
                    </p>
                  </div>
                  <p className="text-[var(--accent)] font-semibold">
                    RM${item.product.price * item.quantity}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border border-[var(--border)]">
                    <button
                      onClick={() =>
                        item.quantity > 1
                          ? updateQuantity(
                              item.product.id,
                              item.size,
                              item.quantity - 1
                            )
                          : removeItem(item.product.id, item.size)
                      }
                      className="px-3 py-1 text-lg hover:bg-[var(--muted)] transition-colors"
                    >
                      −
                    </button>
                    <span className="px-4 py-1 text-sm">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.size,
                          item.quantity + 1
                        )
                      }
                      className="px-3 py-1 text-lg hover:bg-[var(--muted)] transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id, item.size)}
                    className="text-xs tracking-widest uppercase text-[var(--foreground)]/30 hover:text-red-400 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="border border-[var(--border)] p-8 self-start sticky top-24">
          <h2 className="text-sm tracking-widest uppercase mb-6 font-semibold">
            Order Summary
          </h2>
          <div className="flex justify-between text-sm mb-3">
            <span className="text-[var(--foreground)]/60">Subtotal</span>
            <span>RM${total()}</span>
          </div>
          <div className="flex justify-between text-sm mb-3">
            <span className="text-[var(--foreground)]/60">Shipping</span>
            <span className="text-[var(--foreground)]/40">Calculated at checkout</span>
          </div>
          <div className="border-t border-[var(--border)] mt-6 pt-6 flex justify-between font-semibold">
            <span>Total</span>
            <span className="text-[var(--accent)]">RM${total()}</span>
          </div>
          <Link
            href="/checkout"
            className="block mt-8 bg-[var(--foreground)] text-[var(--background)] text-center py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[var(--accent)] transition-colors"
          >
            Checkout
          </Link>
          <Link
            href="/shop"
            className="block mt-3 text-center text-xs tracking-widest uppercase text-[var(--foreground)]/40 hover:text-[var(--foreground)] transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
