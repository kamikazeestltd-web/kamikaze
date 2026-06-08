import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="text-xl font-bold tracking-[0.2em] uppercase mb-4">
            Kamikaze
          </p>
          <p className="text-sm text-[var(--foreground)]/50 leading-relaxed max-w-xs">
            Born from the intersection of streetwear and luxury. Designed for
            those who move with intent.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-[var(--foreground)]/40 mb-4">
            Navigate
          </p>
          <ul className="space-y-3">
            {[
              { href: "/shop", label: "Shop" },
              { href: "/about", label: "About" },
              { href: "/cart", label: "Cart" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-[var(--foreground)]/40 mb-4">
            Contact
          </p>
          <ul className="space-y-3 text-sm text-[var(--foreground)]/60">
            <li>info@kamikazebrand.com</li>
            <li>Instagram: @kamikazebrand</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border)] px-6 py-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--foreground)]/30">
        <p>© {new Date().getFullYear()} Kamikaze. All rights reserved.</p>
        <p>Crafted with intent.</p>
      </div>
    </footer>
  );
}
