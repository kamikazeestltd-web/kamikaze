"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculateTime = () => {
      const now = new Date();
      const target = new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000); // 90 days from now

      const diff = target.getTime() - now.getTime();
      if (diff > 0) {
        setTime({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="grid grid-cols-4 gap-4 max-w-xs mx-auto">
      {[
        { value: time.days, label: "Days" },
        { value: time.hours, label: "Hours" },
        { value: time.minutes, label: "Minutes" },
        { value: time.seconds, label: "Seconds" },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div className="bg-black border border-red-600/50 px-3 py-4 mb-2">
            <p className="text-2xl md:text-3xl font-black text-white">
              {String(item.value).padStart(2, "0")}
            </p>
          </div>
          <p className="text-[9px] tracking-[0.3em] uppercase text-white/30">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
