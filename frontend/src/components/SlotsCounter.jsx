import React, { useEffect, useState } from "react";

// Live "limited slots" counter — pseudo-random but stable per session.
// Decrements occasionally to evoke scarcity. Resets nightly.
const STORAGE_KEY = "am_slots_v1";

const getInitialSlots = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Reset if older than today
      const sameDay =
        new Date(parsed.date).toDateString() === new Date().toDateString();
      if (sameDay) return parsed.slots;
    }
  } catch {}
  // Start with realistic-feeling slot count between 3 and 5
  const slots = 3 + Math.floor(Math.random() * 3);
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ slots, date: new Date().toISOString() })
    );
  } catch {}
  return slots;
};

const persist = (slots) => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ slots, date: new Date().toISOString() })
    );
  } catch {}
};

const SlotsCounter = () => {
  const [slots, setSlots] = useState(5);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setSlots(getInitialSlots());
    // Random decrement every 45–90s while page is open, down to a floor of 2
    const tick = () => {
      setSlots((prev) => {
        if (prev <= 2) return prev;
        if (Math.random() > 0.6) {
          const next = prev - 1;
          persist(next);
          setPulse(true);
          setTimeout(() => setPulse(false), 1400);
          return next;
        }
        return prev;
      });
    };
    const intervalId = setInterval(tick, 45000 + Math.random() * 45000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      data-testid="slots-counter"
      className={`inline-flex items-center gap-3 rounded-full border border-[#9EFF00]/30 bg-black/60 backdrop-blur-md px-5 py-2.5 transition ${
        pulse ? "shadow-[0_0_30px_rgba(158,255,0,0.5)]" : ""
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#9EFF00] opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9EFF00]" />
      </span>
      <span className="font-mono-am text-[11px] uppercase tracking-[0.22em] text-white/70">
        Cupos este mes
      </span>
      <span className="font-display text-[#9EFF00] text-lg leading-none am-text-glow tabular-nums">
        {slots}
      </span>
      <span className="text-white/35 text-[12px]">/ 8</span>
    </div>
  );
};

export default SlotsCounter;
