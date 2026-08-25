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
import Testimonials from "@/components/sections/testimonials/Testimonials";

// Lower-intent lead magnet: the audit form in the hero is the ONLY conversion.
// The "Start a project" Contact section was removed so the page does not compete
// with the higher-intent Start-a-project flow.
const AuditPage = () => {
  return (
    <>
      <AuditHero />
      <section className="bg-white px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Testimonials />
      </section>
    </>
  );
};

export default AuditPage;
