"use client";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { urlFor } from "@/sanity/caseStudies.image";
import { MotionEffect } from "@/components/effects/motion-effect";

const CaseStudiesDetailHero = ({ caseStudy }) => {
  return (
    <>
      <section className="relative px-[2rem] pt-[21.4rem] pb-[14.4rem] xl:px-[0rem]">
        {/*Background Image*/}
        {caseStudy.detailHero?.heroImage && (
          <Image
            src={urlFor(caseStudy.detailHero.heroImage)
              .width(1440)
              .height(900)
              .fit("crop")
              .url()}
            alt={caseStudy.title}
            fill
            priority
            unoptimized
            className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
          />
        )}

        {/* Background Element */}
        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          {caseStudy.detailHero?.heroElement && (
            <Image
              src={urlFor(caseStudy.detailHero.heroElement)
                .width(287)
                .height(173)
                .url()}
              alt={caseStudy.title}
              width={287}
              height={173}
              unoptimized
              className="absolute right-[-6rem] bottom-[-4rem] w-[15rem] md:right-[-9rem] md:h-[17.3rem] md:w-[28.7rem]"
            />
          )}
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center text-center xl:items-start xl:text-left">
            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
            >
              <div>
                <SectionLabel
                  text="case studies"
                  textColor={caseStudy.primaryColor}
                />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
              delay={0.15}
            >
              <h1 className="mt-[1rem] mb-[3rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[7rem] md:leading-[8rem]">
                {caseStudy.title}
              </h1>
            </MotionEffect>

            {caseStudy.detailHero?.ctaButton && (
              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                delay={0.3}
              >
                <div>
                  <PrimaryButton
                    target="_blank"
                    href={caseStudy.detailHero.ctaButton.url}
                    bGcolor={caseStudy.primaryColor}
                    text={caseStudy.detailHero.ctaButton.label}
                    textColor="#05020B"
                  />
                </div>
              </MotionEffect>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesDetailHero;
