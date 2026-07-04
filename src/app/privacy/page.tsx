import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — KHONS",
  description: "KHONS privacy policy. Learn how we collect, use, and protect your personal data.",
  keywords: ["privacy policy", "data protection", "KHONS"],
};

export default function PrivacyPage() {
  return (
    <div className="bg-black text-white pt-16 min-h-screen">
      {/* Header */}
      <div className="border-b border-white/5 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-3">Legal</p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
            Privacy Policy
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12 text-sm">
        <p className="text-white/40">
          <strong>Last Updated:</strong> July 3, 2026
        </p>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">1. Introduction</h2>
          <p className="text-white/40 leading-relaxed">
            KHONS ("we," "us," "our," or "Company") operates the website khonsestltd.vercel.app.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">2. Information We Collect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-white mb-2">Personal Data You Provide:</h3>
              <ul className="text-white/40 space-y-2 list-disc list-inside">
                <li>Name and email address (when joining The Order newsletter)</li>
                <li>Billing and shipping address (during checkout)</li>
                <li>Payment information (processed securely via Stripe — we do not store card details)</li>
                <li>Order history and preferences</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">Automatically Collected Data:</h3>
              <ul className="text-white/40 space-y-2 list-disc list-inside">
                <li>Browser type, IP address, pages visited, and time spent on pages</li>
                <li>Device type and operating system</li>
                <li>Referral source and search queries</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">3. How We Use Your Information</h2>
          <ul className="text-white/40 space-y-2 list-disc list-inside">
            <li>Process and fulfill your orders</li>
            <li>Send order confirmations and shipping updates via email</li>
            <li>Send marketing emails to newsletter subscribers (with opt-out option)</li>
            <li>Improve our website and user experience</li>
            <li>Prevent fraud and ensure security</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">4. Cookies & Tracking</h2>
          <p className="text-white/40 leading-relaxed">
            We use cookies and similar technologies to remember your preferences, track website analytics via Vercel Analytics,
            and maintain your shopping cart. You can disable cookies in your browser settings, but this may affect functionality.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">5. Payment Processing</h2>
          <p className="text-white/40 leading-relaxed">
            Payment processing is handled by Stripe. We do not store your credit card information.
            Stripe's privacy policy governs their use of your payment data:
            <a href="https://stripe.com/privacy" className="text-white hover:text-white/70 ml-1 underline">
              stripe.com/privacy
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">6. Third-Party Services</h2>
          <p className="text-white/40 leading-relaxed mb-3">
            We use the following third-party services:
          </p>
          <ul className="text-white/40 space-y-2 list-disc list-inside">
            <li><strong>Stripe</strong> — Payment processing</li>
            <li><strong>Resend</strong> — Email delivery for order confirmations and newsletters</li>
            <li><strong>Vercel</strong> — Website hosting and analytics</li>
          </ul>
          <p className="text-white/40 leading-relaxed mt-3">
            We are not responsible for their privacy practices. Please review their policies independently.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">7. Data Retention</h2>
          <p className="text-white/40 leading-relaxed">
            We retain your personal data for as long as necessary to fulfill our legal obligations, resolve disputes,
            and enforce our agreements. You can request deletion of your data by emailing support@khons.brand.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">8. Your Rights</h2>
          <p className="text-white/40 leading-relaxed">
            You have the right to access, correct, or delete your personal data. To exercise these rights,
            contact us at support@khons.brand. We will respond within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">9. Security</h2>
          <p className="text-white/40 leading-relaxed">
            We implement industry-standard security measures to protect your data. However, no internet transmission
            is 100% secure. If you suspect a breach, contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase tracking-widest mb-4">10. Contact Us</h2>
          <p className="text-white/40 leading-relaxed">
            For privacy-related questions, email: support@khons.brand
          </p>
        </section>
      </div>
    </div>
  );
}
