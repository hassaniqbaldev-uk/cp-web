import TestimonialsHero from "@/components/sections/hero/TestimonialsHero";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import TestingTestimonials2 from "@/components/sections/testimonials/TestingTestimonials2";

export const metadata = {
  robots: { index: false, follow: false },
};

const TestingTestimonialsPage = () => {
  return (
    <>
      <TestimonialsHero />
      <TestingTestimonials2 />
    </>
  );
};

export default TestingTestimonialsPage;
