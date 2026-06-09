import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1">
          <p className="text-lg font-black tracking-[0.25em] uppercase mb-4">
            KAMIKAZE
          </p>
          <p className="text-[11px] text-white/30 leading-relaxed max-w-xs tracking-wide">
            Built To Leave A Mark.
            <br />Premium streetwear from Malaysia.
          </p>
          <div className="flex gap-4 mt-6">
            {["IG", "TT", "TW"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-[10px] tracking-widest text-white/20 hover:text-white transition-colors"
              >
                {s}
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
              { label: "Movement", href: "/#movement" },
              { label: "FAQ", href: "#" },
              { label: "Shipping", href: "#" },
              { label: "Returns", href: "#" },
              { label: "Contact", href: "#" },
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
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <li key={l}>
                <a href="#" className="text-[11px] tracking-wide text-white/30 hover:text-white transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[10px] text-white/15 tracking-widest uppercase">
          © {new Date().getFullYear()} KAMIKAZE. All Rights Reserved.
        </p>
        <p className="text-[10px] text-white/15 tracking-widest uppercase">
          Malaysia
        </p>
      </div>
    </footer>
  );
}
