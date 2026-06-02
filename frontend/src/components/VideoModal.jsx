import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import { HERO_YOUTUBE_ID } from "../lib/site";

const VideoModal = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          data-testid="video-modal"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden glass-strong am-ring-border"
          >
            <button
              onClick={onClose}
              data-testid="video-modal-close"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/15 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#9EFF00] hover:text-black hover:border-transparent transition"
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>

            <div className="absolute top-4 left-5 z-10 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/70 font-mono-am">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9EFF00] animate-pulse" />
              automatik / presentación.mp4
            </div>

            <iframe
              src={`https://www.youtube.com/embed/${HERO_YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
              className="w-full aspect-video bg-black"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              title="Automatik Media"
              data-testid="video-modal-player"
            />

            <div className="px-6 sm:px-8 py-5 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="font-display text-white text-lg">
                  ¿Querés un sistema así para tu negocio?
                </div>
                <div className="text-white/55 text-[13px] mt-0.5">
                  Agendamos una llamada de diagnóstico gratuita.
                </div>
              </div>
              <button
                onClick={() => {
                  onClose();
                  window.open(
                    "https://cal.com/marcelo-del-valle-bcgavl/30min",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                data-testid="video-modal-cta"
                className="inline-flex items-center gap-2 rounded-full bg-[#9EFF00] text-black px-5 py-2.5 text-[13px] font-semibold hover:bg-[#b8ff3a] transition"
              >
                <Play size={14} /> Agendar Reunión
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
