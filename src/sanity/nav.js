import { client } from "./client";
import { NAV_QUERY } from "./queries.nav";

// Mega-menu columns are DATA-DRIVEN: this config defines the grouping (which field
// value maps to which column, its heading and colour theme, in order). The number of
// columns and their grouping come from here + the data, not from the DOM — so CP-03's
// switch from the old service categories to the four pillars is a change to THIS config
// (and the theme map in ServiceNavColumn), NOT another pass through the mega-menu markup.
// A column with no resolved items is dropped entirely (empty-state handled downstream).
const SERVICE_COLUMNS = [
  { key: "design-development", heading: "Design & Build", theme: "design" },
  { key: "growth", heading: "Growth", theme: "growth" },
  { key: "support", heading: "Support", theme: "support" },
];

const byNavOrder = (a, b) =>
  (a.navOrder ?? 9999) - (b.navOrder ?? 9999) || a.label.localeCompare(b.label);

const toItem = (s, base) => ({
  label: s.label,
  excerpt: s.excerpt,
  slug: s.slug,
  href: `${base}/${s.slug}`,
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
  const serviceColumns = SERVICE_COLUMNS.map((col) => ({
    key: col.key,
    heading: col.heading,
    theme: col.theme,
    items: services
      .filter((s) => s.category === col.key)
      .sort(byNavOrder)
      .map((s) => toItem(s, "/services")),
  })).filter((col) => col.items.length > 0); // drop empty columns

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
