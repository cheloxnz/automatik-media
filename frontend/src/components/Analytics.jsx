import { useEffect } from "react";

// Analytics — only injects GA4 + Meta Pixel scripts if their env vars are set.
// To activate:
//   /app/frontend/.env
//      REACT_APP_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
//      REACT_APP_META_PIXEL_ID=1234567890123456
//   Then: sudo supervisorctl restart frontend

const GA4_ID = process.env.REACT_APP_GA4_MEASUREMENT_ID || "";
const PIXEL_ID = process.env.REACT_APP_META_PIXEL_ID || "";

let injected = false;

const inject = () => {
  if (typeof window === "undefined" || injected) return;
  injected = true;

  // ----- Google Analytics 4 -----
  if (GA4_ID) {
    const tag = document.createElement("script");
    tag.async = true;
    tag.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(tag);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA4_ID, { send_page_view: true });
  }

  // ----- Meta (Facebook) Pixel -----
  if (PIXEL_ID) {
    /* eslint-disable */
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    /* eslint-enable */
    window.fbq("init", PIXEL_ID);
    window.fbq("track", "PageView");
  }
};

const Analytics = () => {
  useEffect(() => {
    inject();
  }, []);
  return null;
};

// Expose a unified tracker — components can call this for custom events.
export const trackEvent = (name, params = {}) => {
  if (typeof window === "undefined") return;
  try {
    if (window.gtag) window.gtag("event", name, params);
    if (window.fbq) window.fbq("trackCustom", name, params);
  } catch {}
};

export default Analytics;
