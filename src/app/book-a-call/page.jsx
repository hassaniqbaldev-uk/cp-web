import BookCallHero from "@/components/sections/BookCallHero";
import BookCallFounder from "@/components/sections/BookCallFounder";
import BookCallHowItWorks from "@/components/sections/BookCallHowItWorks";
import BookCallLiveStores from "@/components/sections/BookCallLiveStores";
import BookCallTestimonials from "@/components/sections/BookCallTestimonials";
import BookCallPricing from "@/components/sections/BookCallPricing";
import BookCallFaqs from "@/components/sections/BookCallFaqs";
import BookCallCta from "@/components/sections/BookCallCta";
import BookCallFooter from "@/components/layout/BookCallFooter";
import Image from "next/image";

const title = "Book a Call | CreativePixels";
const description =
  "Book a quick call with the CreativePixels team to talk through your project.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/book-a-call" },

  openGraph: {
    title,
    description,
    url: "/book-a-call",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
  },

  // Meta ads landing page — keep out of search engines while it's being built.
  // Remove (or set index: true) before the real launch.
  robots: { index: false, follow: false },
};

// Book a Call — Meta ads landing page.
const BookACall = () => {
  return (
    <main>
      <BookCallHero />
      <BookCallFounder />
      <BookCallHowItWorks />
      <BookCallLiveStores />
      <BookCallTestimonials />
      <BookCallPricing />
      <BookCallFaqs />

      <div className="relative overflow-hidden bg-black">
        <Image
          src="/images/black-friday/footer-gradient-bg.png"
          alt=""
          width={1440}
          height={758}
          className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-full -translate-x-1/2"
        />

        <div className="relative z-10">
          <BookCallCta />
          <BookCallFooter />
        </div>
      </div>
    </main>
  );
};

export default BookACall;
