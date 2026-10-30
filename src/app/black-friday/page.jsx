import BlackFridayHero from "@/components/sections/BlackFridayHero";
import BlackFridayFounder from "@/components/sections/BlackFridayFounder";
import BlackFridayObjections from "@/components/sections/BlackFridayObjections";
import BlackFridayCompare from "@/components/sections/BlackFridayCompare";
import BlackFridayPricing from "@/components/sections/BlackFridayPricing";
import BlackFridayProcess from "@/components/sections/BlackFridayProcess";
import BlackFridayWork from "@/components/sections/BlackFridayWork";
import BlackFridayReference from "@/components/sections/BlackFridayReference";
import BlackFridayFaqs from "@/components/sections/BlackFridayFaqs";
import BlackFridayCta from "@/components/sections/BlackFridayCta";
import BlackFridayFooter from "@/components/layout/BlackFridayFooter";
import Image from "next/image";

const title = "Black Friday: 25% Off for 6 Months | CreativePixels";
const description =
  "Agencies this Black Friday, get 25% off CreativePixels for 6 months. Senior WordPress, WooCommerce, Shopify and design help from $30/hr. Limited spots.";
const ogImage = "/images/og-image-assets/og-image-compressed.jpg";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/black-friday" },

  openGraph: {
    title,
    description,
    url: "/black-friday",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 2400,
        height: 1260,
        alt: "CreativePixels Black Friday — 25% off for 6 months",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },

  // Keep this page out of search engines while it's only deployed for testing.
  // Remove (or set index: true) before the real launch.
  robots: { index: false, follow: false },
};

const BlackFriday = () => {
  return (
    <main>
      <BlackFridayHero />
      <BlackFridayFounder />
      <BlackFridayObjections />
      <BlackFridayCompare />
      <BlackFridayPricing />
      <BlackFridayProcess />
      <BlackFridayWork />
      <BlackFridayReference />
      <BlackFridayFaqs />

      <div className="relative overflow-hidden bg-black">
        <Image
          src="/images/black-friday/footer-gradient-bg.png"
          alt=""
          width={1440}
          height={758}
          className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-full -translate-x-1/2"
        />

        <div className="relative z-10">
          <BlackFridayCta />
          <BlackFridayFooter />
        </div>
      </div>
    </main>
  );
};

export default BlackFriday;
