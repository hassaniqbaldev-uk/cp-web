export async function generateMetadata() {
  const title = "Client Testimonials";
  const description =
    "See what clients say about working with CreativePixels. Real feedback from businesses across the UK, US, and Australia.";

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/testimonials",
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
