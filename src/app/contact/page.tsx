import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — KHONS — KHONS",
  description: "Got questions? Contact KHONS support or check our FAQ for shipping, returns, sizing, and ordering.",
  keywords: ["contact KHONS", "FAQ", "shipping info", "returns policy", "customer support"],
};

export default function ContactPage() {
  const faqs = [
    {
      q: "How long does shipping take?",
      a: "Orders are processed within 1–2 business days. Delivery within Malaysia takes 2–4 business days via Pos Laju or J&T. You will receive a tracking number once your order ships.",
    },
    {
      q: "Do you ship internationally?",
      a: "Currently we ship within Malaysia only. International shipping is coming soon — join The Order to be notified first.",
    },
    {
      q: "What is your return policy?",
      a: "We accept returns within 30 days of delivery. Items must be unworn, unwashed, and in original condition with tags attached. Sale items are final sale.",
    },
    {
      q: "How do I start a return or exchange?",
      a: "Email us at support@khons.brand with your order number and reason. We will respond within 24–48 hours with instructions.",
    },
    {
      q: "My order hasn't arrived — what do I do?",
      a: "Check your tracking link first. If there's no movement after 7 business days, email us at support@khons.brand with your order number and we'll investigate immediately.",
    },
    {
      q: "Can I change or cancel my order?",
      a: "We process orders quickly. Contact us within 2 hours of placing your order and we will do our best to accommodate changes. Once shipped, we cannot cancel.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit and debit cards (Visa, Mastercard), as well as FPX online banking via our secure Stripe checkout.",
    },
    {
      q: "Are the products limited edition?",
      a: "Yes. KHONS operates on a drop model — each collection is produced in limited quantities. Once a piece sells out, it's gone. Join The Order to get early access.",
    },
  ];

  return (
    <div className="bg-black text-white pt-16 min-h-screen">

      {/* Header */}
      <div className="border-b border-white/5 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-3">The Cycle</p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
            Contact — KHONS
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* Contact info */}
        <div className="lg:col-span-1">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-8">Get In Touch</p>
          <div className="space-y-8">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 mb-2">Email</p>
              <a
                href="mailto:support@khons.brand"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                support@khons.brand
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 mb-2">Response Time</p>
              <p className="text-sm text-white/40">Within 24–48 hours</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 mb-2">Business Hours</p>
              <p className="text-sm text-white/40">Mon – Fri, 10am – 6pm MYT</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 mb-2">Social</p>
              <div className="flex gap-5 mt-1">
                {[
                  { label: "Instagram", href: "https://instagram.com/__khons__" },
                  { label: "TikTok", href: "https://tiktok.com/@__khons__" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="text-xs tracking-widest uppercase text-white/30 hover:text-white transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="lg:col-span-2">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-8">
            Frequently Asked Questions
          </p>
          <div className="divide-y divide-white/5">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <p className="text-sm font-bold tracking-wide mb-3">{faq.q}</p>
                <p className="text-sm text-white/40 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
