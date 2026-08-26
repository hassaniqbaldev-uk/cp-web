import { getTestimonials } from "@/sanity/testimonials";
import Testimonials from "./Testimonials";

// Server wrapper: fetches testimonials (cached) and hands them to the client Testimonials section.
// Used by every server page that shows the reviews block. The homepage is a client component, so it
// receives the same data as a prop from (home)/page.jsx instead of using this wrapper.
export default async function TestimonialsSection() {
  const testimonials = await getTestimonials();
  return <Testimonials testimonials={testimonials} />;
}
