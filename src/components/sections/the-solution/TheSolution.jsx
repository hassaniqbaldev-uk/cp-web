"use client";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionDescription from "@/components/ui/SectionDescription";
import AlertLogo from "@/assets/icons/ui/alert-icon.svg";
import Image from "next/image";
import { urlFor } from "@/sanity/caseStudies.image";
import { MotionEffect } from "@/components/effects/motion-effect";

const TheSolution = ({ caseStudy }) => {
  return (
    <>
      <section
        style={{
          background: caseStudy.secondaryColor,
        }}
        className="px-[2rem] pt-[5rem] xl:px-[0rem] xl:pt-[8rem]"
      >
        <div className="container">
          <div className="flex flex-col-reverse items-center justify-center gap-[5rem] text-center xl:flex-row xl:items-end xl:gap-[10rem] xl:text-left">
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.1}
              transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
            >
              <div className="flex w-full items-center justify-center md:w-[51.1rem]">
                <Image
                  src={urlFor(caseStudy.theSolution.cardImage)
                    .width(511)
                    .height(495)
                    .url()}
                  alt={caseStudy.theSolution.title}
                  width={511}
                  height={495}
                  unoptimized
                />
              </div>
            </MotionEffect>

            <div className="w-full md:w-[51.6rem] xl:pb-[4rem]">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.1}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-[2.3rem] leading-[3rem] font-bold tracking-[-0.03em] text-white md:text-[4.8rem] md:leading-[6rem]">
                  {caseStudy.theSolution.title}
                </h2>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.25}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <div className="mt-[1.9rem] mb-[5.5rem]">
                  <SectionDescription
                    text={caseStudy.theSolution.description}
                    textColor="#FFFFFF"
                  />
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.4}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <div>
                  <PrimaryButton
                    href="/call"
                    text="Book a Call"
                    textColor="#05020B"
                    bGcolor={caseStudy.primaryColor}
                  />
                </div>
              </MotionEffect>
            </div>
          </div>
        </div>
      </section>

      <div className="px-[2rem] xl:px-[0rem]">
        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          delay={0.1}
          transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
        >
          <div className="mx-auto mt-[3rem] flex max-w-[120rem] flex-col items-start justify-start gap-[3.5rem] rounded-[1.5rem] bg-[#f14a58]/15 px-[3rem] py-[2.5rem] md:mt-[5rem] md:flex-row md:items-center md:px-[4.5rem]">
            <div className="relative size-[6.3rem] min-w-[6.3rem]">
              <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                <Image src={AlertLogo} alt="Icon" width={32} height={32} />
              </div>

              <div
                className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                style={{ backgroundColor: "#F14A58" }}
              />
            </div>

            <p className="text-[1.8rem] leading-[3rem] font-bold tracking-normal text-[#625C70] md:text-[2.2rem] md:leading-[3.7rem]">
              All visuals used in these case studies are provided by our clients
              or their partners. All such images remain the property of their
              respective owners and may be subject to copyright.
            </p>
          </div>
        </MotionEffect>
      </div>
    </>
  );
};

export default TheSolution;
