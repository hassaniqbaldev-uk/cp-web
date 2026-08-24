export const MAIN_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

export const COMPANY_ABOUT_NAV = [
  { label: "About Us", href: "/about" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Careers", href: "/careers" },
  { label: "Partner with us (White Label)", href: "/partner-with-us" },
];

export const DESIGN_SERVICE_NAV = [
  {
    label: "Branding",
    excerpt: "Identity & Strategy",
    href: "/services/branding",
  },
  {
    label: "UI/UX Design",
    excerpt: "Web & Product design",
    href: "/services/ui-ux-design",
  },
  {
    label: "Wordpress",
    excerpt: "Custom theme & plugins",
    href: "/services/wordpress",
  },
  {
    label: "Shopify",
    excerpt: "High-converting stores",
    href: "/services/shopify",
  },
  {
    label: "Custom App Development",
    excerpt: "React, Next.js & Automation",
    href: "/services/custom-app-development",
  },
];

export const GROWTH_SERVICE_NAV = [
  { label: "SEO", excerpt: "Rank higher on google", href: "/services/seo" },
  {
    label: "Paid Media",
    excerpt: "Google & Social Ads",
    href: "/services/paid-media",
  },
  { label: "CRO", excerpt: "Boost conversion rates", href: "/services/cro" },
  { label: "Email", excerpt: "Automated Flows", href: "/services/email" },
  {
    label: "Analytics",
    excerpt: "Data & tracking",
    href: "/services/analytics",
  },
];

export const SUPPORT_SERVICE_NAV = [
  {
    label: "Growth & Support",
    excerpt: "Ongoing care & maintenance",
    href: "/services/growth-and-support",
  },
  { label: "Speed", excerpt: "Core web vitals", href: "/services/speed" },
  {
    label: "Security",
    excerpt: "Audits & Protection",
    href: "/services/security",
  },
  {
    label: "Migrations",
    excerpt: "Replatforming safe",
    href: "/services/migrations",
  },
  {
    label: "Accessibility",
    excerpt: "WCAG Compliance",
    href: "/services/accessibility",
  },
];

// CP-00K: sector links removed. Those industries became routeless `industries`
// documents (hasPage flags preserved in the dataset); CP-08 builds their routes.
// "View all industries" -> /solutions/#sector was also removed: /solutions returns
// 200 but its sector section filters `category == "industry"`, which is empty
// post-migration, so that link was a live-but-empty dead-end.
// NOTE: this array is now empty. Consumers (SolutionsDropdown, Footer, MobileMenu)
// still render a "BY SECTOR" heading above it — see 00-context.md §14 dead-end note.
export const SECTOR_SOLUTION_NAV = [];

export const GOAL_SOLUTION_NAV = [
  {
    label: "Automate Operations",
    excerpt: "Get more qualified enquiries",
    href: "/solutions/automate-operations",
  },
  {
    label: "Increase Leads",
    excerpt: "Modernise your digital presence",
    href: "/solutions/increase-leads",
  },
  {
    label: "Launch New Product",
    excerpt: "Expand your reach & ROI",
    href: "/solutions/launch-new-product",
  },
  {
    label: "Replatform / Rebuild",
    excerpt: "Go-to-market strategy",
    href: "/solutions/replatform-rebuild",
  },
];
