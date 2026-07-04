import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sizing — KHONS — KAMIKAZE",
  description: "Find your perfect size. KAMIKAZE size guide with measurement tables for tops, bottoms, and how to measure yourself.",
  keywords: ["size guide", "KAMIKAZE sizing", "clothing measurements", "how to measure"],
};

export default function SizeGuidePage() {
  const tops = [
    { size: "XS", chest: "84–88", shoulder: "42", length: "68" },
    { size: "S",  chest: "88–93", shoulder: "44", length: "70" },
    { size: "M",  chest: "93–98", shoulder: "46", length: "72" },
    { size: "L",  chest: "98–104", shoulder: "48", length: "74" },
    { size: "XL", chest: "104–110", shoulder: "50", length: "76" },
    { size: "XXL", chest: "110–118", shoulder: "52", length: "78" },
  ];

  const bottoms = [
    { size: "XS", waist: "68–72", hip: "88–92", inseam: "78" },
    { size: "S",  waist: "72–76", hip: "92–96", inseam: "79" },
    { size: "M",  waist: "76–82", hip: "96–101", inseam: "80" },
    { size: "L",  waist: "82–88", hip: "101–107", inseam: "81" },
    { size: "XL", waist: "88–96", hip: "107–114", inseam: "82" },
  ];

  const thClass = "text-[9px] tracking-[0.3em] uppercase text-white/20 text-left py-3 pr-8 font-normal";
  const tdClass = "text-xs text-white/50 py-4 pr-8 border-t border-white/5";
  const tdFirstClass = "text-xs font-black text-white py-4 pr-8 border-t border-white/5";

  return (
    <div className="bg-black text-white pt-16 min-h-screen">

      {/* Header */}
      <div className="border-b border-white/5 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-3">Fit Guide</p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
            Sizing — KHONS
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        {/* Fit note */}
        <div className="border border-red-600/30 p-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-red-600 mb-3">Fit Note</p>
          <p className="text-sm text-white/50 leading-relaxed">
            KAMIKAZE pieces are cut with an intentional oversized silhouette. If you prefer a closer fit,
            size down by one. All measurements are in centimetres (cm) and represent body measurements, not garment measurements.
          </p>
        </div>

        {/* How to measure */}
        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-8">How To Measure</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "Chest", desc: "Measure around the fullest part of your chest, keeping the tape horizontal." },
              { label: "Waist", desc: "Measure around your natural waistline, just above your hip bone." },
              { label: "Inseam", desc: "Measure from the crotch seam down to the bottom of the leg." },
            ].map((m) => (
              <div key={m.label} className="border border-white/5 p-6">
                <p className="text-xs font-black uppercase tracking-widest mb-3">{m.label}</p>
                <p className="text-xs text-white/30 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tops table */}
        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6">
            Tops — Tees, Hoodies, Jackets
          </p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className={thClass}>Size</th>
                  <th className={thClass}>Chest (cm)</th>
                  <th className={thClass}>Shoulder (cm)</th>
                  <th className={thClass}>Length (cm)</th>
                </tr>
              </thead>
              <tbody>
                {tops.map((row) => (
                  <tr key={row.size}>
                    <td className={tdFirstClass}>{row.size}</td>
                    <td className={tdClass}>{row.chest}</td>
                    <td className={tdClass}>{row.shoulder}</td>
                    <td className={tdClass}>{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottoms table */}
        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6">
            Bottoms — Pants, Shorts
          </p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className={thClass}>Size</th>
                  <th className={thClass}>Waist (cm)</th>
                  <th className={thClass}>Hip (cm)</th>
                  <th className={thClass}>Inseam (cm)</th>
                </tr>
              </thead>
              <tbody>
                {bottoms.map((row) => (
                  <tr key={row.size}>
                    <td className={tdFirstClass}>{row.size}</td>
                    <td className={tdClass}>{row.waist}</td>
                    <td className={tdClass}>{row.hip}</td>
                    <td className={tdClass}>{row.inseam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Still unsure */}
        <div className="border-t border-white/5 pt-12 text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/20 mb-4">Still Unsure?</p>
          <p className="text-sm text-white/40 mb-6">
            Email us your measurements and the piece you want — we'll tell you exactly which size to get.
          </p>
          <a
            href="mailto:support@kamikazebrand.com"
            className="inline-block border border-white/20 px-8 py-3 text-xs tracking-[0.3em] uppercase text-white/50 hover:border-white/50 hover:text-white transition-all"
          >
            Ask Us
          </a>
        </div>

      </div>
    </div>
  );
}
