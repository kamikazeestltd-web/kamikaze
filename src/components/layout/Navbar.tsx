"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/#movement", label: "Movement" },
];

export default function Navbar() {
  const count = useCartStore((s) => s.count());
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-black tracking-[0.3em] uppercase"
          >
            KAMIKAZE
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <Link href="/cart" className="relative group">
              <ShoppingBag size={20} className="text-white/70 group-hover:text-white transition-colors" />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-white text-black text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
            <button
              className="md:hidden text-white/70 hover:text-white transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-500 flex flex-col justify-center px-8 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-6 text-white/50 hover:text-white"
        >
          <X size={24} />
        </button>
        <div className="space-y-8">
          {links.map((l, i) => (
            <div key={l.href} style={{ animationDelay: `${i * 0.1}s` }}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-4xl font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors duration-300"
              >
                {l.label}
              </Link>
            </div>
          ))}
          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className="block text-4xl font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors duration-300"
          >
            Cart {count > 0 && `(${count})`}
          </Link>
        </div>
        <p className="absolute bottom-12 left-8 text-xs tracking-[0.3em] uppercase text-white/20">
          Built To Leave A Mark.
        </p>
      </div>
    </>
  );
}
