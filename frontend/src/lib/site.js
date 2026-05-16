// Shared constants for Automatik Media landing
export const WHATSAPP_NUMBER = "5491168754798";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola! Quiero más información sobre los servicios de Automatik Media."
)}`;
export const CALENDLY_URL = "https://calendly.com/cheloxnz/30min";

// InmoBot — included in the Automatik Media combo (7-day free trial)
export const INMOBOT_SIGNUP_URL =
  "https://inmobot-ia.com/signup?utm_source=automatikmedia&utm_medium=landing&utm_campaign=combo";
export const INMOBOT_HOME_URL =
  "https://inmobot-ia.com/inicio?utm_source=automatikmedia&utm_medium=landing";

export const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_990b7577-7a34-4de2-bd3d-b0129aaa80c1/artifacts/p6kfrgkw_d7ac7b2c-d6fe-4a78-b85c-090880d5dfb3.jpg";
export const HERO_VIDEO_URL =
  "https://customer-assets.emergentagent.com/job_990b7577-7a34-4de2-bd3d-b0129aaa80c1/artifacts/q8ox84ni_Presentaci%C3%B3n%20Automatik%20Media.mp4";
export const FINAL_CTA_BG =
  "https://static.prod-images.emergentagent.com/jobs/990b7577-7a34-4de2-bd3d-b0129aaa80c1/images/5f3c8bca7f3d29ee82015097544679d65072faef19e220b09419ef67ab0fac14.png";

export const openCalendly = () => {
  window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
};
export const openWhatsApp = () => {
  window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
};
export const openInmoBotTrial = () => {
  window.open(INMOBOT_SIGNUP_URL, "_blank", "noopener,noreferrer");
};

// One-two punch: ask the user if they also want personal WhatsApp onboarding
// while opening the InmoBot trial. Dispatches a global event that the
// TrialIntentModal listens to. Components should call this instead of
// directly opening the trial.
export const TRIAL_INTENT_EVENT = "automatik:trial-intent";

export const requestInmoBotTrial = (origin = "unknown") => {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(TRIAL_INTENT_EVENT, { detail: { origin } })
  );
};

export const TRIAL_WHATSAPP_MESSAGE =
  "Hola! Acabo de empezar mi trial de InmoBot desde Automatik Media. ¿Me ayudás a configurarlo para mi negocio?";

export const openInmoBotPlusWhatsApp = () => {
  // Open WhatsApp first (more likely to be blocked otherwise), then trial.
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    TRIAL_WHATSAPP_MESSAGE
  )}`;
  window.open(waUrl, "_blank", "noopener,noreferrer");
  // Small delay so both popups pass the browser popup-allowance
  setTimeout(() => {
    window.open(INMOBOT_SIGNUP_URL, "_blank", "noopener,noreferrer");
  }, 120);
};
