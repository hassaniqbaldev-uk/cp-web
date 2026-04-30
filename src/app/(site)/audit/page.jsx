export async function generateMetadata() {
  const title = "Free Website Audit & Conversion Review | Claim Yours Now";
  const description =
    "Get a free website audit covering UX, SEO, speed and conversions with a custom video report. Claim your free audit from CreativePixels online today now!";

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

import Contact from "@/components/sections/contact/Contact";
import AuditHero from "@/components/sections/hero/AuditHero";
import Testimonials from "@/components/sections/testimonials/Testimonials";

const AuditPage = () => {
  return (
    <>
      <AuditHero />
      <section className="bg-white px-[2rem] pt-[5rem] xl:px-[0rem] xl:pt-[10rem]">
        <Testimonials />
      </section>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Contact />
      </section>
    </>
  );
};

export default AuditPage;
