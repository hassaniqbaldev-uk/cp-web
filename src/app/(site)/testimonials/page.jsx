export async function generateMetadata() {
  const title = "Client Testimonials Web Design Agency | Real Results";
  const description =
    "Client testimonials from web design, branding and SEO projects, with real results and feedback. See the success stories behind CreativePixels.";

  return {
    title,
    description,
    alternates: {
      canonical: "/testimonials", // <-- the route's own URL
    },
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/testimonials",
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

import TestimonialsHero from "@/components/sections/hero/TestimonialsHero";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";

const TestimonialsPage = () => {
  return (
    <>
      <TestimonialsHero />
      <Testimonials2 />
    </>
  );
};

export default TestimonialsPage;
