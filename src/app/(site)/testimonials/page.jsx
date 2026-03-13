export const metadata = {
  title: "Client Testimonials",
  description:
    "See what clients say about working with CreativePixels. Real feedback from businesses across the UK, US, and Australia.",
};

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
