import SectionLabel from "@/components/ui/SectionLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";

// Services hub hero + positioning statement (CP-06 items 1 & 2).
// ALL COPY HERE IS PLACEHOLDER — final wording is CP-04. No Cal.com / Book a Call
// (D40); the single primary CTA is "Start a project" → the enquiry flow.
const ServicesHubHero = () => {
  return (
    <section className="relative overflow-hidden px-[2rem] pt-[16rem] pb-[6rem] xl:px-[0rem] xl:pt-[20rem] xl:pb-[8rem]">
      <div className="container">
        <div className="mx-auto flex max-w-[92rem] flex-col items-center text-center">
          <SectionLabel text="Services" textColor="#EE8D00" />

          {/* PLACEHOLDER headline — CP-04 */}
          <h1 className="mt-[1.5rem] text-[3.4rem] leading-[4rem] font-bold tracking-[-0.03em] text-[#1a1430] md:text-[6rem] md:leading-[6.6rem]">
            [Placeholder headline — CP-04] One team across brand, web, growth and
            automation.
          </h1>

          {/* PLACEHOLDER positioning statement — CP-04 */}
          <p className="mt-[2.4rem] max-w-[68rem] text-[1.7rem] leading-[2.8rem] font-normal text-[#625C70] md:text-[2rem] md:leading-[3.2rem]">
            [Placeholder positioning — CP-04] A short statement that tells a visitor
            what CreativePixels is within seconds, weighted toward the web and
            ecommerce work that is the core of what we do.
          </p>

          <div className="mt-[4rem] flex flex-col items-center gap-[1.4rem]">
            <PrimaryButton
              text="Start a project"
              href="/contact"
              bGcolor="#FF37B3"
              textColor="#ffffff"
              ctaPosition="services-hero"
            />
            {/* PLACEHOLDER reassurance microcopy — CP-04 (D7) */}
            <span className="text-[1.4rem] leading-[2.2rem] font-medium text-[#625C70]">
              [Placeholder reassurance — CP-04] No obligation, just a conversation.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHubHero;
