export async function generateMetadata() {
  const title = "Free Website Audit";
  const description =
    "Get a free website audit from CreativePixels. We'll analyse your site's performance, SEO, and design and show you exactly what to improve.";

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/audit",
      siteName: "CreativePixels",
      images: [
        {
          url: "/images/og-image-assets/og-image.jpg",
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
      images: ["/images/og-image-assets/og-image.jpg"],
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
