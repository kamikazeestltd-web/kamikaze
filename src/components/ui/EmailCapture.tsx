"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-3">You&apos;re In.</p>
        <p className="text-2xl font-black uppercase tracking-tighter">Welcome To The Order.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full bg-transparent border border-white/10 px-5 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 tracking-wide transition-colors"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full bg-transparent border border-white/10 px-5 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 tracking-wide transition-colors"
      />
      <button
        type="submit"
        className="w-full bg-red-600 text-white py-4 text-xs tracking-[0.3em] uppercase font-black hover:bg-red-700 transition-all duration-300"
      >
        Subscribe
      </button>
      <p className="text-[10px] text-white/20 tracking-wider text-center">
        No spam. Drops only.
      </p>
    </form>
  );
}
