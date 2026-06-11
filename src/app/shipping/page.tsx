import Link from "next/link";

export default function ShippingPage() {
  return (
    <div className="bg-black text-white pt-16 min-h-screen">

      {/* Header */}
      <div className="border-b border-white/5 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-3">Policies</p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
            Shipping & Returns
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">

        {/* Shipping */}
        <section>
          <p className="text-[10px] tracking-[0.4em] uppercase text-red-600 mb-6">Shipping</p>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest mb-3">Processing Time</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                All orders are processed within 1–2 business days (Monday to Friday, excluding public holidays).
                You will receive an email with your tracking number once your order has been dispatched.
              </p>
            </div>

            <div className="border border-white/5 divide-y divide-white/5">
              {[
                { method: "Standard (Pos Laju / J&T)", time: "2–4 business days", cost: "RM8" },
                { method: "Express (same-day KL/PJ area)", time: "Same day if ordered before 12pm", cost: "RM20" },
                { method: "Free Shipping", time: "2–4 business days", cost: "Free on orders over RM200" },
              ].map((row) => (
                <div key={row.method} className="grid grid-cols-3 px-5 py-4">
                  <p className="text-xs text-white/60 col-span-1">{row.method}</p>
                  <p className="text-xs text-white/40 col-span-1">{row.time}</p>
                  <p className="text-xs text-white font-black col-span-1 text-right">{row.cost}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-widest mb-3">International Shipping</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                We currently ship within Malaysia only. International shipping to Singapore, Indonesia,
                and other Southeast Asian countries is coming soon. Join The Order to be notified when it launches.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-white/5" />

        {/* Returns */}
        <section>
          <p className="text-[10px] tracking-[0.4em] uppercase text-red-600 mb-6">Returns & Exchanges</p>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest mb-3">Return Window</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                We accept returns within <strong className="text-white">30 days</strong> of the delivery date.
                Items must be unworn, unwashed, and in their original condition with all tags still attached.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-widest mb-3">How To Return</h3>
              <ol className="space-y-3">
                {[
                  `Email support@kamikazebrand.com with your order number and reason for return.`,
                  `We will respond within 24–48 hours with a return authorisation and address.`,
                  `Pack the item securely and ship it back. Return shipping costs are covered by the customer.`,
                  `Once received and inspected, your refund will be processed within 5–7 business days to your original payment method.`,
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 text-sm text-white/40 leading-relaxed">
                    <span className="text-[10px] tracking-widest text-white/20 pt-0.5 shrink-0">0{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-widest mb-3">Non-Returnable Items</h3>
              <ul className="space-y-2">
                {[
                  "Sale and discounted items (final sale)",
                  "Items marked as limited edition at the time of purchase",
                  "Items that have been worn, washed, or altered",
                  "Accessories (caps, bags) for hygiene reasons",
                ].map((item) => (
                  <li key={item} className="text-sm text-white/40 flex gap-3">
                    <span className="text-white/20">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-widest mb-3">Exchanges</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                We do not hold stock for exchanges. If you need a different size, return your item for a refund
                and place a new order. Given our limited quantities, this ensures you secure the size you need.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-white/5" />

        {/* Damaged / wrong */}
        <section>
          <p className="text-[10px] tracking-[0.4em] uppercase text-red-600 mb-6">Wrong or Damaged Item</p>
          <p className="text-sm text-white/40 leading-relaxed mb-6">
            If you received the wrong item or something arrived damaged, we sincerely apologise.
            Email us at{" "}
            <a href="mailto:support@kamikazebrand.com" className="text-white hover:text-white/70 transition-colors">
              support@kamikazebrand.com
            </a>{" "}
            within 7 days of delivery with a photo and your order number. We will send a replacement or
            full refund at no cost to you.
          </p>
        </section>

        {/* CTA */}
        <div className="border-t border-white/5 pt-12 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-block border border-white/20 px-8 py-3 text-xs tracking-[0.3em] uppercase text-white/50 hover:border-white/50 hover:text-white transition-all text-center"
          >
            Contact Support
          </Link>
          <Link
            href="/shop"
            className="inline-block bg-white text-black px-8 py-3 text-xs tracking-[0.3em] uppercase font-black hover:bg-white/90 transition-all text-center"
          >
            Back To Shop
          </Link>
        </div>

      </div>
    </div>
  );
}
