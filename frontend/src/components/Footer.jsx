import React from "react";
import { LOGO_URL, openCalendly, openWhatsApp } from "../lib/site";
import { Instagram, MessageCircle, Linkedin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="relative border-t border-white/5 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={LOGO_URL}
                alt="Automatik Media"
                className="h-10 w-10 rounded-md object-cover ring-1 ring-white/10"
              />
              <div className="font-display text-xl">
                <span className="text-white">Automati</span>
                <span className="text-[#9EFF00]">k</span>{" "}
                <span className="text-white/70">Media</span>
              </div>
            </div>
            <p className="text-white/55 text-[14px] leading-relaxed max-w-md">
              Agencia de inteligencia artificial. Construimos sistemas de IA
              a medida que transforman operaciones y aceleran el crecimiento.
            </p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={openCalendly}
                data-testid="footer-cta-agendar"
                className="rounded-full bg-[#9EFF00] text-black px-5 py-2.5 text-[13px] font-semibold hover:bg-[#b8ff3a] transition"
              >
                Diagnóstico gratuito →
              </button>
              <button
                onClick={openWhatsApp}
                data-testid="footer-cta-whatsapp"
                className="rounded-full border border-white/15 px-5 py-2.5 text-[13px] text-white hover:bg-white/[0.05] transition"
              >
                WhatsApp
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/40 mb-4">
              Navegación
            </div>
            <ul className="space-y-2.5 text-[14px]">
              {[
                ["El problema", "problema"],
                ["Qué hacemos", "que-hacemos"],
                ["El proceso", "proceso"],
                ["Verticales", "verticales"],
                ["Casos", "casos"],
              ].map(([label, id]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-white/65 hover:text-[#9EFF00] transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/40 mb-4">
              Contacto
            </div>
            <a
              href="https://wa.me/5491168754798"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white hover:text-[#9EFF00] transition text-[14px] mb-1"
              data-testid="footer-phone"
            >
              +54 9 11 6875 4798
            </a>
            <div className="text-white/50 text-[13px]">Buenos Aires, Argentina</div>

            <div className="mt-6 flex gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#9EFF00] hover:border-[#9EFF00]/40 transition"
                aria-label="Instagram"
                data-testid="footer-instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/5491168754798"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#9EFF00] hover:border-[#9EFF00]/40 transition"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#9EFF00] hover:border-[#9EFF00]/40 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-white/40">
          <div>© {new Date().getFullYear()} Automatik Media. Todos los derechos reservados.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white/70 transition">Privacidad</a>
            <a href="#" className="hover:text-white/70 transition">Términos</a>
            <a
              href="#hero"
              className="inline-flex items-center gap-1 hover:text-[#9EFF00] transition"
            >
              Volver arriba <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
