import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { openWhatsApp } from "../lib/site";

const WhatsAppFloat = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex items-end gap-3"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="hidden sm:block mb-1 rounded-2xl glass-strong px-4 py-3 shadow-xl max-w-[230px]"
          >
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#9EFF00] mb-1">
              ¿Hablamos?
            </div>
            <div className="text-[13px] text-white leading-snug">
              Respondemos en minutos por WhatsApp.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={openWhatsApp}
        data-testid="whatsapp-float"
        aria-label="Hablar por WhatsApp"
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#9EFF00] text-black flex items-center justify-center shadow-[0_10px_30px_rgba(158,255,0,0.45)] hover:scale-105 transition"
      >
        <span className="am-pulse-ring" />
        <MessageCircle size={26} />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
