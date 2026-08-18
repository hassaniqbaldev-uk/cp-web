import { client } from "./client";
import { NAV_QUERY } from "./queries.nav";

// Maps a service's `category` to its mega-menu column. A service with no matching
// category (e.g. the taxonomy-only `ai-automation` stub) is intentionally left out of
// the menu.
const SERVICE_COLUMN = {
  "design-development": "designService",
  growth: "growthService",
  support: "supportService",
};

const EMPTY_NAV = {
  designService: [],
  growthService: [],
  supportService: [],
  goalSolution: [],
  sectorSolution: [],
  industries: [],
};

// Server-side. Fetches the nav source and shapes it into the arrays the menu
// consumes (same shape as the old hardcoded navigation.js constants), so the later
// rewire is a straight swap. Returns empty arrays on failure rather than throwing,
// so a nav-data outage never blanks the whole layout.
export async function getNavData() {
  let raw;
  try {
    raw = await client.fetch(NAV_QUERY, {}, { next: { revalidate: 3600 } });
  } catch (error) {
    console.error("Failed to fetch nav data:", error);
    return EMPTY_NAV;
  }

  const columns = { designService: [], growthService: [], supportService: [] };
  for (const s of raw?.services || []) {
    const col = SERVICE_COLUMN[s.category];
    if (!col) continue;
    columns[col].push({
      label: s.label,
      excerpt: s.excerpt,
      href: `/services/${s.slug}`,
    });
  }

  const goalSolution = (raw?.goalSolutions || []).map((s) => ({
    label: s.label,
    excerpt: s.excerpt,
    href: `/solutions/${s.slug}`,
  }));

  // Industries carry `hasPage` but have NO route until CP-08. Linking
  // /industries/<slug> now would 404 (the exact fault we just fixed in nav), so the
  // sector column stays EMPTY for now; the resolved data is exposed under `industries`
  // for CP-08 to switch on once the routes exist.
  const industries = (raw?.industries || []).map((s) => ({
    label: s.label,
    excerpt: s.excerpt,
    href: `/industries/${s.slug}`,
  }));

  return { ...columns, goalSolution, sectorSolution: [], industries };
}
