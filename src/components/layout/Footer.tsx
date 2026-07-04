import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1">
          <p className="text-lg font-black tracking-[0.25em] uppercase mb-4">
            KHONS
          </p>
          <p className="text-[11px] text-moon-dim leading-relaxed max-w-xs tracking-wide">
            Streetwear from the land of the two Niles.
            <br />The moon always returns.
          </p>
          <div className="flex gap-4 mt-6">
            {[
              { label: "Instagram", href: "https://instagram.com/__khons__" },
              { label: "TikTok", href: "https://tiktok.com/@__khons__" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-widest text-moon-dim hover:text-moon transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[9px] tracking-[0.4em] uppercase text-white/20 mb-5">Shop</p>
          <ul className="space-y-3">
            {["New Arrivals", "Best Sellers", "Tops", "Bottoms", "Outerwear", "Accessories"].map((l) => (
              <li key={l}>
                <Link href="/shop" className="text-[11px] tracking-wide text-white/30 hover:text-white transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[9px] tracking-[0.4em] uppercase text-white/20 mb-5">Info</p>
          <ul className="space-y-3">
            {[
              { label: "About", href: "/about" },
              { label: "Size Guide", href: "/size-guide" },
              { label: "Shipping & Returns", href: "/shipping" },
              { label: "FAQ", href: "/contact" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-[11px] tracking-wide text-white/30 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[9px] tracking-[0.4em] uppercase text-white/20 mb-5">Legal</p>
          <ul className="space-y-3">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-[11px] tracking-wide text-white/30 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[10px] text-white/15 tracking-widest uppercase">
          © {new Date().getFullYear()} KHONS. All Rights Reserved.
        </p>
        <p className="text-[10px] text-white/15 tracking-widest uppercase">
          Malaysia
        </p>
      </div>
    </footer>
  );
}
