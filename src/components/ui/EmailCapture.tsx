"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="text-xs tracking-[0.4em] uppercase text-nile mb-3">The Moon Returns.</p>
        <p className="text-2xl font-black uppercase tracking-tighter text-moon">You&apos;re In The Cycle.</p>
        <p className="text-xs text-moon-dim tracking-widest mt-4">Check your email.</p>
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
        className="w-full bg-transparent border border-nile/20 px-5 py-4 text-sm text-moon placeholder:text-moon-faint focus:outline-none focus:border-nile/60 tracking-wide transition-colors"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full bg-transparent border border-nile/20 px-5 py-4 text-sm text-moon placeholder:text-moon-faint focus:outline-none focus:border-nile/60 tracking-wide transition-colors"
      />
      {error && (
        <p className="text-[10px] tracking-widest uppercase text-blood">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-nile text-obsidian py-4 text-xs tracking-[0.3em] uppercase font-black hover:bg-nile/90 transition-all duration-300 disabled:opacity-50"
      >
        {loading ? "Joining..." : "Join The Cycle"}
      </button>
      <p className="text-[10px] text-moon-faint tracking-wider text-center">
        No spam. Drops only.
      </p>
    </form>
  );
}
