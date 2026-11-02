import StoreReviewHero from "@/components/sections/StoreReviewHero";
import StoreReviewWhatYouGet from "@/components/sections/StoreReviewWhatYouGet";
import StoreReviewHowItWorks from "@/components/sections/StoreReviewHowItWorks";
import StoreReviewLiveStores from "@/components/sections/StoreReviewLiveStores";
import StoreReviewTestimonials from "@/components/sections/StoreReviewTestimonials";
import StoreReviewPricing from "@/components/sections/StoreReviewPricing";
import StoreReviewFaqs from "@/components/sections/StoreReviewFaqs";
import StoreReviewCta from "@/components/sections/StoreReviewCta";
import StoreReviewFooter from "@/components/layout/StoreReviewFooter";

const title = "Free Store Review | CreativePixels";
const description =
  "Get a free, no-obligation review of your online store from the CreativePixels team.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/store-review" },

  openGraph: {
    title,
    description,
    url: "/store-review",
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

// Store Review — Meta ads landing page.
const StoreReview = () => {
  return (
    <main>
      <StoreReviewHero />
      <StoreReviewWhatYouGet />
      <StoreReviewHowItWorks />
      <StoreReviewLiveStores />
      <StoreReviewTestimonials />
      <StoreReviewPricing />
      <StoreReviewFaqs />
      <StoreReviewCta />
      <StoreReviewFooter />
    </main>
  );
};

export default StoreReview;
