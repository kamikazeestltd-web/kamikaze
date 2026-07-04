"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import KhonsMark from "@/components/ui/KhonsMark";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "The Cycle" },
  { href: "/contact", label: "Contact" },
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
            ? "bg-obsidian/95 backdrop-blur-md border-b border-line"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <KhonsMark size={28} className="text-moon group-hover:text-nile transition-colors" />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-moon">
              KHONS
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs tracking-[0.2em] uppercase text-moon-dim hover:text-moon transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <Link href="/cart" className="relative group">
              <ShoppingBag size={20} className="text-moon-dim group-hover:text-nile transition-colors" />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-nile text-obsidian text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
            <button
              className="md:hidden text-moon-dim hover:text-nile transition-colors"
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
        className={`fixed inset-0 z-40 bg-obsidian transition-all duration-500 flex flex-col justify-center px-8 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-6 text-moon-faint hover:text-nile"
        >
          <X size={24} />
        </button>
        <div className="space-y-8">
          {links.map((l, i) => (
            <div key={l.href} style={{ animationDelay: `${i * 0.1}s` }}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-4xl font-black uppercase tracking-widest text-moon-dim hover:text-nile transition-colors duration-300"
              >
                {l.label}
              </Link>
            </div>
          ))}
          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className="block text-4xl font-black uppercase tracking-widest text-moon-dim hover:text-nile transition-colors duration-300"
          >
            Cart {count > 0 && `(${count})`}
          </Link>
        </div>
        <p className="absolute bottom-12 left-8 text-xs tracking-[0.3em] uppercase text-moon-faint">
          The moon always returns.
        </p>
      </div>
    </>
  );
}
