"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/audit-hero-bg.webp";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { MotionEffect } from "@/components/effects/motion-effect";
import HomeHeroLogoShape1 from "@/components/decorative-elements/HomeHeroLogoShape1";
import HomeHeroLogoShape2 from "@/components/decorative-elements/HomeHeroLogoShape2";
import ContactHeroLogoShape1 from "@/components/decorative-elements/ContactHeroLogoShape1";

// Service-detail hero, shared by every /services/[slug] page.
// CP-05 refactor (21 Aug 2026):
//  - Book a Call / Cal.com REMOVED (D40). The single primary CTA is now "Start a project" → /contact,
//    the enquiry flow, on all service pages. "See Case Studies" stays as a secondary link when the doc
//    provides caseStudiesLink.
//  - heroImage is OPTIONAL. With an image the layout is the two-column treatment (unchanged for the 16
//    existing pages). Without one the hero centres, matching the services-hub hero.
//  - The label is content-driven (detailHero.label) with the current "Our Expertise" as the default,
//    so existing pages render identically.
const SPRING = { type: "spring", stiffness: 120, damping: 20 };

const ServicesDetailHero = ({ service }) => {
  const hasImage = Boolean(service?.heroImage?.asset?.url);
  const label = service?.label || "Our Expertise";

  return (
    <section className="relative w-full overflow-hidden px-[2rem] pt-[15rem] pb-[5rem] md:pt-[20rem] md:pb-[10rem] xl:px-[0rem]">
      {/*Background Image*/}
      <Image
        src={HeroBg}
        alt="Background Image"
        fill
        priority
        className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        unoptimized
      />

      {/*Background Element*/}
      <div className="pointer-events-none absolute inset-0 z-[2] select-none">
        <HomeHeroLogoShape1 className="absolute top-[2rem] left-[2rem] h-[8rem] w-[4rem] rotate-[33deg] opacity-50 md:h-[17rem] md:w-[8.4rem]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[2] select-none">
        <HomeHeroLogoShape2 className="absolute bottom-[10rem] left-[4rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 md:left-[10rem] md:h-[17rem] md:w-[8.5rem]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[2] select-none">
        <ContactHeroLogoShape1 className="absolute top-[15rem] right-[5rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 md:h-[12.4rem] md:w-[13.3rem]" />
      </div>

      <div className="relative z-[10] container">
        <div
          className={
            hasImage
              ? "flex w-full flex-col items-center justify-between gap-[4rem] text-center xl:flex-row xl:text-left"
              : "mx-auto flex max-w-[92rem] flex-col items-center text-center"
          }
        >
          <div className={hasImage ? "w-full md:w-[54rem]" : "w-full"}>
            <MotionEffect
              slide={{ direction: "down" }}
              transition={SPRING}
              fade
              zoom
            >
              <SectionLabel text={label} textColor="#FF37B3" />
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              transition={SPRING}
              fade
              zoom
              delay={0.15}
            >
              <h1 className="mt-[1.5rem] mb-[2.5rem] max-w-[89rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[7rem] md:leading-[8rem]">
                {service.title}
              </h1>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              transition={SPRING}
              fade
              delay={0.3}
            >
              <div
                className={
                  hasImage
                    ? "mt-[1.5rem] mb-[4rem] max-w-[76rem]"
                    : "mx-auto mt-[1.5rem] mb-[4rem] max-w-[76rem]"
                }
              >
                <SectionDescription
                  text={service.description}
                  textColor="#625C70"
                />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              transition={SPRING}
              fade
              delay={0.45}
            >
              <div
                className={`flex w-full flex-wrap items-center gap-[1.8rem] ${
                  hasImage ? "justify-center xl:justify-start" : "justify-center"
                }`}
              >
                <PrimaryButton
                  text="Start a project"
                  href="/contact"
                  bGcolor="#FF37B3"
                  textColor="#ffffff"
                  ctaPosition="service-detail-hero"
                />

                {service.caseStudiesLink && (
                  <PrimaryButton
                    text="See Case Studies"
                    textColor="#FFFFFF"
                    bGcolor="#312749"
                    href={service.caseStudiesLink}
                    ctaPosition="service-detail-hero-work"
                  />
                )}
              </div>
            </MotionEffect>
          </div>

          {hasImage && (
            <MotionEffect
              slide={{ direction: "down" }}
              transition={SPRING}
              fade
              delay={0.45}
              className="w-full md:w-[50rem]"
            >
              <div className="flex items-center justify-center overflow-hidden rounded-[4rem]">
                <Image
                  src={service.heroImage.asset.url}
                  width={1098}
                  height={960}
                  alt="Card Image"
                  unoptimized
                />
              </div>
            </MotionEffect>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailHero;
