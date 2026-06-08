"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const count = useCartStore((s) => s.count());
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-[0.2em] uppercase">
          Kamikaze
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest uppercase text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingBag size={22} />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[var(--accent)] text-[var(--background)] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-lg tracking-widest uppercase"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
