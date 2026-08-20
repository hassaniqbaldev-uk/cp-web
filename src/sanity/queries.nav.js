// Data-driven navigation source (Step 3). Reads dedicated nav fields with a title
// fallback: navLabel -> title, navExcerpt -> "" (menu wording and page titles do
// different jobs, so the menu is not locked to the SEO title). navLabel/navExcerpt
// are DATA on the staging docs today; the matching field DEFINITIONS still need to be
// added to the separate Sanity Studio repo before editors can set them — see the
// Studio task in 00-context.md.
export const NAV_QUERY = `{
  "services": *[_type == "services" && !(_id in path("drafts.**")) && defined(slug.current) && defined(detailHero)] | order(title asc){
    "label": coalesce(navLabel, title),
    "excerpt": coalesce(navExcerpt, ""),
    "slug": slug.current,
    navOrder,
    pillar,
    specialist
  },
  "goalSolutions": *[_type == "solutions" && category == "goal" && !(_id in path("drafts.**")) && defined(slug.current)] | order(title asc){
    "label": coalesce(navLabel, title),
    "excerpt": coalesce(navExcerpt, ""),
    "slug": slug.current
  },
  "industries": *[_type == "industries" && hasPage == true && !(_id in path("drafts.**")) && defined(slug.current)] | order(title asc){
    "label": coalesce(navLabel, title),
    "excerpt": coalesce(navExcerpt, ""),
    "slug": slug.current
  }
}`;
