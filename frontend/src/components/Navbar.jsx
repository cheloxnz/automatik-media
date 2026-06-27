import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LOGO_URL, openCalendly } from "../lib/site";

const links = [
  { label: "Qué hacemos", id: "que-hacemos" },
  { label: "El proceso", id: "proceso" },
  { label: "Verticales", id: "verticales" },
  { label: "Casos", id: "casos" },
  { label: "FAQ", id: "faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      data-testid="navbar"
      style={{ top: "var(--am-banner-h, 0px)" }}
      className={`fixed inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <button
          onClick={() => go("hero")}
          data-testid="navbar-logo"
          className="flex items-center gap-2 group"
        >
          <img
            src={LOGO_URL}
            alt="Automatik Media"
            className="h-9 w-9 rounded-md object-cover ring-1 ring-white/10 group-hover:ring-[#9EFF00]/50 transition"
          />
          <div className="hidden sm:flex items-baseline gap-1 font-display text-[17px] tracking-tight">
            <span className="text-white">Automati</span>
            <span className="text-[#9EFF00] am-text-glow">k</span>
            <span className="text-white/70 ml-1 text-[15px]">Media</span>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              data-testid={`nav-link-${l.id}`}
              className="text-[13px] uppercase tracking-[0.18em] text-white/60 hover:text-[#9EFF00] transition"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={openCalendly}
            data-testid="navbar-cta-agendar"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#9EFF00] text-black px-5 py-2.5 text-[13px] font-semibold tracking-wide hover:bg-[#b8ff3a] transition shadow-[0_0_24px_rgba(158,255,0,0.35)]"
          >
            Diagnóstico gratuito
            <span className="text-base leading-none">→</span>
          </button>
          <button
            onClick={() => setOpen(!open)}
            data-testid="navbar-menu-toggle"
            className="lg:hidden text-white p-2 rounded-md border border-white/10"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden border-t border-white/5 bg-black/90 backdrop-blur-xl"
            data-testid="navbar-mobile-menu"
          >
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-3">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  data-testid={`mobile-nav-link-${l.id}`}
                  className="text-left text-white/80 hover:text-[#9EFF00] py-2 text-[14px] uppercase tracking-[0.18em]"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={openCalendly}
                data-testid="mobile-cta-agendar"
                className="mt-2 rounded-full bg-[#9EFF00] text-black px-5 py-3 text-sm font-semibold"
              >
                Agendar Reunión →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
