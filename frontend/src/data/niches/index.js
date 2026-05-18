// Aggregator for niche configurations.
// Each niche lives in its own file under /data/niches/ for maintainability.
import clinicasEsteticas from "./clinicas-esteticas";
import cirujanos from "./cirujanos";
import odontologia from "./odontologia";
import inmobiliarias from "./inmobiliarias";
import disenadoresInteriores from "./disenadores-interiores";
import abogados from "./abogados";

export const NICHES = {
  "clinicas-esteticas": clinicasEsteticas,
  cirujanos,
  odontologia,
  inmobiliarias,
  "disenadores-interiores": disenadoresInteriores,
  abogados,
};

export const NICHE_LIST = Object.values(NICHES).map((n) => ({
  slug: n.slug,
  name: n.name,
  shortLabel: n.shortLabel,
  industry: n.industry,
}));

// Helper: get the current niche based on a pathname (e.g. for UTM-aware CTAs).
export const getNicheFromPath = (pathname) => {
  if (!pathname) return null;
  const slug = pathname.split("/").filter(Boolean)[0];
  return slug && NICHES[slug] ? NICHES[slug] : null;
};
