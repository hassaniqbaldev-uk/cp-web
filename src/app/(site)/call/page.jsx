export const metadata = {
  title: "Book a Call",
  description:
    "Book a free discovery call with CreativePixels. We'll talk through your project, goals, and how we can help you grow.",
};

import Contact from "@/components/sections/contact/Contact";
import CallHero from "@/components/sections/hero/CallHero";

const CallPage = () => {
  return (
    <>
      <CallHero />
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Contact />
      </section>
    </>
  );
};

export default CallPage;
