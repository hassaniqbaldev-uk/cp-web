import Cta from "@/components/sections/cta/Cta";
import Estimate from "@/components/sections/estimate/Estimate";
import AboutHero from "@/components/sections/hero/AboutHero";
import Stats from "@/components/sections/stats/Stats";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Values from "@/components/sections/values/Values";

export async function generateMetadata() {
  const title = "About CreativePixels | Manchester Digital Agency That Cares";
  const description =
    "Manchester digital agency for web design, WordPress & growth-focused solutions. Learn how we work & book your free strategy call with CreativePixels today!";

  return {
    title,
    description,
    alternates: {
      canonical: "/about", // <-- the route's own URL
    },
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/about",
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

const AboutPage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <AboutHero />
        <Stats />
      </div>
      <Estimate />
      <Values />
      <section className="overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Cta />
      </section>
      <section className="bg-[#ed910c]/10 px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Testimonials />
      </section>
    </>
  );
};
export default AboutPage;
