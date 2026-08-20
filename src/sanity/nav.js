import { client } from "./client";
import { NAV_QUERY } from "./queries.nav";

// Mega-menu columns are DATA-DRIVEN by the four pillars (CP-03). This registry defines
// the KNOWN pillars in display order, each with its heading and colour theme; the
// COLUMN COUNT comes from the DATA — a pillar with no live services is dropped, so an
// empty pillar renders nothing (heading included). Adding a service under a pillar makes
// its column appear; removing the last one makes it disappear — both are content changes.
// A genuinely new 5th pillar is the only thing that needs an entry here (+ a theme in
// ServiceNavColumn). Grouping is by the `pillar` field on the services document.
const PILLARS = [
  { key: "brand-experience", heading: "Brand & Experience", theme: "brand" },
  { key: "web-ecommerce", heading: "Web & Ecommerce", theme: "web" },
  { key: "growth-performance", heading: "Growth & Performance", theme: "growth" },
  { key: "ai-automation", heading: "AI & Automation", theme: "ai" },
];

const byNavOrder = (a, b) =>
  (a.navOrder ?? 9999) - (b.navOrder ?? 9999) || a.label.localeCompare(b.label);

const toItem = (s, base) => ({
  label: s.label,
  excerpt: s.excerpt,
  slug: s.slug,
  href: `${base}/${s.slug}`,
  // Only services carry `specialist`; undefined (falsy) for solutions/industries.
  specialist: s.specialist === true,
});

const EMPTY_NAV = { serviceColumns: [], goalSolution: [], sectorSolution: [], industries: [] };

// Server-side. Fetches the nav source and shapes it into the structures the menu
// consumes. Returns empty structures on failure rather than throwing, so a nav-data
// outage never blanks the whole layout.
export async function getNavData() {
  let raw;
  try {
    raw = await client.fetch(NAV_QUERY, {}, { next: { revalidate: 3600 } });
  } catch (error) {
    console.error("Failed to fetch nav data:", error);
    return EMPTY_NAV;
  }

  const services = raw?.services || [];
  const serviceColumns = PILLARS.map((col) => ({
    key: col.key,
    heading: col.heading,
    theme: col.theme,
    items: services
      .filter((s) => s.pillar === col.key)
      .sort(byNavOrder)
      .map((s) => toItem(s, "/services")),
  })).filter((col) => col.items.length > 0); // drop empty pillars (column count is data-driven)

  const goalSolution = (raw?.goalSolutions || [])
    .slice()
    .sort(byNavOrder)
    .map((s) => toItem(s, "/solutions"));

  // Industries carry `hasPage` but have NO route until CP-08. Linking
  // /industries/<slug> now would 404 (the fault we just fixed), so the sector column
  // stays EMPTY; the resolved data is exposed under `industries` for CP-08.
  const industries = (raw?.industries || []).map((s) => toItem(s, "/industries"));

  return { serviceColumns, goalSolution, sectorSolution: [], industries };
}
