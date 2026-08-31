export async function generateMetadata() {
  const title = "Free Website Audit | CreativePixels";
  const description =
    "A free, no-obligation website audit. A real person reviews your site's UX, SEO and speed and sends you a short video with the specific things worth fixing.";

  return {
    title,
    description,
    alternates: {
      canonical: "/audit", // <-- the route's own URL
    },
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/audit",
      siteName: "CreativePixels",
      images: [
        {
          url: "/images/og-image-assets/og-image-compressed.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/images/og-image-assets/og-image-compressed.jpg"],
    },
  };
}

import AuditHero from "@/components/sections/hero/AuditHero";
import AuditDetails from "@/components/sections/audit/AuditDetails";

// Free-audit landing page (the destination for every secondary CTA + the mega-menu, and the page most
// likely to take paid traffic). The audit form in the hero is the SINGLE conversion — no competing CTA.
// The body lowers the barrier rather than just collecting an email: what we review, how it works, who
// does it, honest proof, and an audit-specific FAQ. Generic site testimonials were removed in favour of
// proof that is true and specific to the audit (see AuditDetails + src/content/audit.js).
const AuditPage = () => {
  return (
    <>
      <AuditHero />
      <AuditDetails />
    </>
  );
};

export default AuditPage;
