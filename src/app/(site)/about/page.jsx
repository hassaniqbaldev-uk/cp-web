import Cta from "@/components/sections/cta/Cta";
import Estimate from "@/components/sections/estimate/Estimate";
import AboutHero from "@/components/sections/hero/AboutHero";
import Stats from "@/components/sections/stats/Stats";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Values from "@/components/sections/values/Values";

export async function generateMetadata() {
  const title = "About Us";
  const description =
    "Learn about CreativePixels — our story, values, and the team behind your next project. A Manchester-based agency built on creativity and results.";

  const ogImage = `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | CreativePixels`,
      description,
      url: "https://creativepixels.agency/about",
      siteName: "CreativePixels",
      images: [
        {
          url: "/images/og-image-assets/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${title} | CreativePixels`,
        },
      ],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | CreativePixels`,
      description,
      images: [ogImage],
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
