import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Calendar,
  Bot,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { openInmoBotTrial } from "../lib/site";

const features = [
  { icon: MessageCircle, label: "Respuesta < 1 min", sub: "24/7 WhatsApp" },
  { icon: Bot, label: "IA que califica", sub: "OpenAI GPT" },
  { icon: Calendar, label: "Agenda online", sub: "Google Calendar" },
  { icon: ShieldCheck, label: "API oficial Meta", sub: "E2E cifrado" },
];

const chatMessages = [
  { from: "user", text: "Hola, quería información sobre la propiedad de Palermo" },
  {
    from: "bot",
    text: "¡Hola! 👋 Genial, te paso info al instante.\n¿Es para compra, alquiler o inversión?",
    buttons: ["Compra", "Alquiler", "Inversión"],
  },
  { from: "user", text: "Compra" },
  {
    from: "bot",
    text: "Perfecto. ¿Cuál es tu presupuesto aproximado en USD?",
    buttons: ["$100k–$200k", "$200k–$400k", "$400k+"],
  },
];

const InmoBotCombo = () => {
  return (
    <section
      id="combo"
      data-testid="combo-section"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-black via-[#060807] to-black overflow-hidden"
    >
      {/* Spotlight */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#9EFF00]/8 blur-[160px]" />
      <div className="absolute inset-0 am-grid-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
              [ combo premium · 7 días gratis ]
            </div>
            <h2
              data-testid="combo-title"
              className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]"
            >
              Tu sistema incluye{" "}
              <span className="text-[#9EFF00] am-text-glow">InmoBot AI</span> —
              el asistente que <span className="italic font-light">vende por vos</span>{" "}
              en WhatsApp.
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-white/55 text-[15px] leading-relaxed">
              Cada cliente de Automatik Media activa InmoBot por{" "}
              <span className="text-white">7 días sin tarjeta</span>. Responde
              consultas, califica leads y agenda visitas{" "}
              <span className="text-[#9EFF00]">mientras dormís</span>.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left — Pitch + features + CTA */}
          <div className="lg:col-span-7 relative rounded-3xl glass p-8 sm:p-10 overflow-hidden">
            <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-[#9EFF00]/15 blur-[100px] pointer-events-none" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#9EFF00]/30 bg-[#9EFF00]/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[#9EFF00] mb-6 font-mono-am">
                <Zap size={11} /> Powered by InmoBot AI
              </div>

              <h3 className="font-display text-2xl sm:text-3xl tracking-tight font-semibold leading-tight">
                Marketing que trae el lead,{" "}
                <span className="text-[#9EFF00]">IA que lo cierra</span>.
              </h3>

              <ul className="mt-7 space-y-3">
                {[
                  "Activación incluida en tu plan — sin costo extra los primeros 7 días",
                  "Conectado a tu Google Calendar y CRM desde el día 1",
                  "Configurado para tu negocio (clínica, real estate, gastro, retail…)",
                  "Handoff automático cuando un lead pide humano",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-[14px] text-white/75"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-[#9EFF00] mt-0.5 shrink-0"
                    />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.02] p-3.5"
                    >
                      <Icon size={16} className="text-[#9EFF00] mb-2" />
                      <div className="text-[12.5px] text-white leading-tight">
                        {f.label}
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.16em] text-white/40 mt-1">
                        {f.sub}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={openInmoBotTrial}
                  data-testid="combo-cta-trial"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#9EFF00] text-black px-6 py-3.5 text-[14px] font-semibold hover:bg-[#b8ff3a] transition shadow-[0_0_30px_rgba(158,255,0,0.35)]"
                >
                  Probar InmoBot 7 días gratis
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
                <a
                  href="https://inmobot-ia.com/inicio?utm_source=automatikmedia&utm_medium=landing"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="combo-cta-learn"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3.5 text-[14px] font-medium text-white hover:bg-white/[0.06] hover:border-white/30 transition"
                >
                  Conocer más
                </a>
              </div>

              <div className="mt-5 text-[11px] uppercase tracking-[0.22em] text-white/35 font-mono-am">
                Sin tarjeta · Sin compromiso · Cancelás cuando quieras
              </div>
            </div>
          </div>

          {/* Right — Mock chat */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl glass-strong overflow-hidden h-full"
              data-testid="combo-chat-preview"
            >
              {/* WhatsApp-style header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5 bg-black/40">
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#9EFF00]/40 to-white/5 border border-[#9EFF00]/40 flex items-center justify-center">
                  <Bot size={18} className="text-[#9EFF00]" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#9EFF00] border-2 border-black" />
                </div>
                <div className="flex-1">
                  <div className="font-display text-white text-[14px]">
                    InmoBot
                  </div>
                  <div className="text-[10.5px] text-[#9EFF00] uppercase tracking-[0.18em]">
                    en línea
                  </div>
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/30 font-mono-am">
                  AI · 24/7
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-3.5 min-h-[420px] bg-gradient-to-b from-transparent to-black/30">
                {chatMessages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
                    className={`flex ${
                      m.from === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[13px] leading-snug whitespace-pre-line ${
                        m.from === "user"
                          ? "bg-[#9EFF00] text-black rounded-br-md"
                          : "bg-white/[0.06] text-white border border-white/10 rounded-bl-md"
                      }`}
                    >
                      {m.text}
                      {m.buttons && (
                        <div className="flex flex-wrap gap-1.5 mt-2.5">
                          {m.buttons.map((b) => (
                            <span
                              key={b}
                              className="text-[11px] px-2.5 py-1 rounded-full border border-[#9EFF00]/30 bg-[#9EFF00]/[0.06] text-[#9EFF00]"
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + chatMessages.length * 0.15, duration: 0.4 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/[0.06] border border-white/10 rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9EFF00] animate-bounce" />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#9EFF00] animate-bounce"
                      style={{ animationDelay: "0.15s" }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#9EFF00] animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InmoBotCombo;
