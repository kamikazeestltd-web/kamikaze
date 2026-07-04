import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — KHONS",
  description: "KHONS terms of service. Read our policies for purchasing, shipping, returns, and website usage.",
  keywords: ["terms of service", "KHONS", "terms and conditions"],
};

export default function TermsPage() {
  return (
    <div className="bg-black text-white pt-16 min-h-screen">
      {/* Header */}
      <div className="border-b border-white/5 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-3">Legal</p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
            Terms of Service
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12 text-sm">
        <p className="text-white/40">
          <strong>Last Updated:</strong> July 3, 2026
        </p>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">1. Agreement to Terms</h2>
          <p className="text-white/40 leading-relaxed">
            By accessing and using KHONS's website (khonsestltd.vercel.app), you accept and agree to be bound by
            these Terms of Service. If you do not agree to these terms, do not use this website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">2. Use License</h2>
          <p className="text-white/40 leading-relaxed mb-3">
            You are granted a limited, non-exclusive, non-transferable license to access and view this website for lawful purposes only.
            You may not:
          </p>
          <ul className="text-white/40 space-y-2 list-disc list-inside">
            <li>Modify or copy any content without permission</li>
            <li>Use this site for any illegal purpose</li>
            <li>Harass, abuse, or harm any person</li>
            <li>Interfere with the site's functionality or security</li>
            <li>Attempt to gain unauthorized access to any part of the site</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">3. Product Information</h2>
          <p className="text-white/40 leading-relaxed">
            We strive to provide accurate product descriptions, images, and prices. However, we do not warrant that
            product descriptions, pricing, or images are error-free. We reserve the right to correct any inaccuracies.
            All products are subject to availability.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">4. Ordering & Payment</h2>
          <div className="space-y-4 text-white/40">
            <p>
              <strong>Orders:</strong> By placing an order, you are offering to purchase items at the stated price.
              We reserve the right to accept or reject any order at our discretion.
            </p>
            <p>
              <strong>Payment:</strong> Payment must be received before your order is processed. We accept credit/debit cards
              and online banking via Stripe. All transactions are in Malaysian Ringgit (RM).
            </p>
            <p>
              <strong>Confirmation:</strong> You will receive an order confirmation email. This email confirms that we have
              received your order, not that it has been accepted or shipped.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">5. Shipping & Delivery</h2>
          <div className="space-y-4 text-white/40">
            <p>
              <strong>Processing Time:</strong> Orders are processed within 1–2 business days before shipment.
            </p>
            <p>
              <strong>Shipping Methods:</strong> We ship via Pos Laju or J&T. Delivery typically takes 2–4 business days
              within Malaysia. You will receive a tracking number via email.
            </p>
            <p>
              <strong>Risk of Loss:</strong> Once shipped, the risk of loss or damage transfers to you. We recommend
              purchasing shipping insurance for high-value orders.
            </p>
            <p>
              <strong>Delays:</strong> We are not liable for delays caused by shipping carriers or customs.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">6. Returns & Refunds</h2>
          <div className="space-y-4 text-white/40">
            <p>
              <strong>Return Window:</strong> Items may be returned within 30 days of delivery in unworn, unwashed condition
              with all original tags attached.
            </p>
            <p>
              <strong>Non-Returnable Items:</strong> Sale items, limited-edition pieces, and accessories (for hygiene reasons)
              are final sale and cannot be returned.
            </p>
            <p>
              <strong>Return Shipping:</strong> Customers are responsible for return shipping costs. Refunds are processed
              within 5–7 business days of receiving the returned item.
            </p>
            <p>
              <strong>Damaged Items:</strong> If an item arrives damaged, contact us within 7 days with photos. We will send
              a replacement or issue a full refund at no cost.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">7. Intellectual Property</h2>
          <p className="text-white/40 leading-relaxed">
            All content on this website — including logos, designs, text, images, and product names — is owned by or licensed
            to KHONS and protected by Malaysian and international copyright law. You may not reproduce, distribute, or
            display this content without written permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">8. Limitation of Liability</h2>
          <p className="text-white/40 leading-relaxed">
            To the maximum extent permitted by law, KHONS shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising from your use of this site or our products, even if we have been
            advised of the possibility of such damages.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">9. Disclaimer of Warranties</h2>
          <p className="text-white/40 leading-relaxed">
            This website and all products are provided "as is" without warranty of any kind. We disclaim all warranties,
            express or implied, including merchantability, fitness for a particular purpose, and non-infringement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">10. Indemnification</h2>
          <p className="text-white/40 leading-relaxed">
            You agree to indemnify and hold harmless KHONS, its owners, and employees from any claims, damages,
            or losses arising from your use of this site or violation of these terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">11. Modifications to Terms</h2>
          <p className="text-white/40 leading-relaxed">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.
            Your continued use of the site constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">12. Governing Law</h2>
          <p className="text-white/40 leading-relaxed">
            These terms are governed by the laws of Malaysia, without regard to its conflict of laws principles.
            Any disputes shall be resolved in the courts of Malaysia.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">13. Contact</h2>
          <p className="text-white/40 leading-relaxed">
            For questions about these terms, contact us at: support@khons.brand
          </p>
        </section>
      </div>
    </div>
  );
}
