"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Image from "next/image";
import TiltArrowIcon from "@/components/icons/TiltArrowIcon";
import Link from "next/link";
import { urlFor } from "@/sanity/caseStudies.image";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";
import { useState } from "react";
import { MotionEffect } from "@/components/effects/motion-effect";
import dynamic from "next/dynamic";

const WorkSlider = dynamic(() => import("@/components/ui/WorkSlider"), {
  ssr: false,
  loading: () => <div className="h-[42.5rem]" />, // placeholder height to prevent layout shift
});

// Reusable work section. Defaults reproduce the homepage copy exactly; other pages
// (e.g. the services hub) pass their own label/title/description. `label` is where the
// honest fallback wording lives: "Recent work" when the set is a fallback (no tag),
// "Related work" when the matches are genuinely tagged.
const Work = ({
  caseStudies,
  label = "Our Work",
  title = "Digital Done Right.",
  description = "We've crafted websites and brands that blend design, development, and strategy into measurable success.",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const mouse = useMousePosition();

  // Show the first three of whatever is passed, in order. Callers control the selection and order
  // (the homepage passes flagship case studies; service / solution / industry pages pass their curated
  // set), so no slug is hardcoded here and archive or unwanted work can never surface through this
  // component.
  const primaryCase = caseStudies[0];
  const secondaryCase = caseStudies[1];
  const tertiaryCase = caseStudies[2];

  const selectedCaseStudies = [primaryCase, secondaryCase, tertiaryCase];

  return (
    <>
      {mouse && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-[100] hidden h-[7rem] w-[7rem] items-center justify-center rounded-full bg-[#FF37B3] text-white opacity-0 xl:flex"
          animate={{
            x: mouse.x - 35,
            y: mouse.y - 35,
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 35,
          }}
        >
          <span className="text-[1.6rem] font-medium">View</span>
        </motion.div>
      )}

      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-[3rem] xl:flex-row">
            <div className="flex w-[30rem] flex-col items-center text-center md:w-[58.5rem] xl:items-start xl:text-left">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.1}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <div>
                  <SectionLabel text={label} textColor="#EE8D00" />
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.25}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <div className="mt-[5px] mb-[14px]">
                  <SectionTitle text={title} />
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.4}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <div>
                  <SectionDescription text={description} />
                </div>
              </MotionEffect>
            </div>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.4}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div className="hidden md:block">
                <PrimaryButton
                  text="View All Projects"
                  textColor="#FFFFFF"
                  href="/case-studies"
                  bGcolor="#FF37B3"
                />
              </div>
            </MotionEffect>
          </div>

          <div className="mt-[7.4rem] hidden w-full gap-[3rem] xl:flex">
            <div className="w-[79.1rem]">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.4}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <Link
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    boxShadow: "11px 11px 65px 0px #00000012",
                  }}
                  href={`/case-studies/${primaryCase.slug}`}
                  className="flex flex-col gap-[3.9rem] rounded-[3rem] bg-white px-[3rem] pt-[2rem] pb-[4rem]"
                >
                  <div className="flex h-[49.7rem] w-full overflow-hidden rounded-[2rem]">
                    <Image
                      src={urlFor(primaryCase.thumbnailImage)
                        ?.width(737)
                        .height(497)
                        .fit("crop")
                        .url()}
                      alt={primaryCase.title || "Case Study Thumbnail Image"}
                      width={737}
                      height={497}
                      className="size-full"
                      unoptimized
                    />
                  </div>

                  <div className="flex w-full flex-col">
                    <hr className="my-[3.2rem] w-full border-t border-black/20" />

                    <div className="flex h-full items-center justify-between">
                      <div className="flex flex-col items-start text-left">
                        <h4 className="text-[3.4rem] leading-[4.8rem] font-bold tracking-[-0.02em] text-[#312749]">
                          {primaryCase.title}
                        </h4>

                        <span className="text-[1.6rem] leading-[2.6rem] font-semibold text-[#625C70]">
                          {primaryCase.excerpt}
                        </span>
                      </div>

                      <i
                        style={{
                          background: primaryCase.iconBg,
                        }}
                        className="inline-flex size-[6rem] min-w-[6rem] items-center justify-center rounded-full"
                      >
                        <TiltArrowIcon color={primaryCase.iconColor} />
                      </i>
                    </div>
                  </div>
                </Link>
              </MotionEffect>
            </div>

            <div className="flex w-[40rem] flex-col gap-[2rem]">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.55}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <Link
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    boxShadow: "11px 11px 65px 0px #00000012",
                  }}
                  href={`/case-studies/${secondaryCase.slug}`}
                  className="flex w-full flex-col gap-[2rem] rounded-[3rem] bg-white px-[2rem] pt-[1.5rem] pb-[3rem]"
                >
                  <div className="flex h-[22.7rem] w-full overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={urlFor(secondaryCase.thumbnailImage)
                        ?.width(365)
                        .height(227)
                        .fit("crop")
                        .url()}
                      alt={secondaryCase.title || "Case Study Thumbnail Image"}
                      width={365}
                      height={227}
                      className="size-full"
                      unoptimized
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start text-left">
                      <h4 className="text-[2.6rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749]">
                        {secondaryCase.title}
                      </h4>

                      <span className="text-[1.6rem] leading-[2.6rem] font-semibold text-[#625C70]">
                        {secondaryCase.excerpt}
                      </span>
                    </div>

                    <i
                      style={{
                        background: secondaryCase.iconBg,
                      }}
                      className="inline-flex size-[6rem] min-w-[6rem] items-center justify-center rounded-full"
                    >
                      <TiltArrowIcon color={secondaryCase.iconColor} />
                    </i>
                  </div>
                </Link>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.7}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <Link
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    boxShadow: "11px 11px 65px 0px #00000012",
                  }}
                  href={`/case-studies/${tertiaryCase.slug}`}
                  className="flex w-full flex-col gap-[2rem] rounded-[3rem] bg-white px-[2rem] pt-[1.5rem] pb-[3rem]"
                >
                  <div className="flex h-[22.7rem] w-full overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={urlFor(tertiaryCase.thumbnailImage)
                        ?.width(365)
                        .height(227)
                        .fit("crop")
                        .url()}
                      alt={tertiaryCase.title || "Case Study Thumbnail Image"}
                      width={365}
                      height={227}
                      className="size-full"
                      unoptimized
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start text-left">
                      <h4 className="text-[2.6rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749]">
                        {tertiaryCase.title}
                      </h4>

                      <span className="text-[1.6rem] leading-[2.6rem] font-semibold text-[#625C70]">
                        {tertiaryCase.excerpt}
                      </span>
                    </div>

                    <i
                      style={{
                        background: tertiaryCase.iconBg,
                      }}
                      className="inline-flex size-[6rem] min-w-[6rem] items-center justify-center rounded-full"
                    >
                      <TiltArrowIcon color={tertiaryCase.iconColor} />
                    </i>
                  </div>
                </Link>
              </MotionEffect>
            </div>
          </div>

          {/* Responsive */}
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.6}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <div className="mt-[3rem] block w-full xl:hidden">
              <WorkSlider caseStudies={selectedCaseStudies} />

              <div className="mt-[3rem] flex items-center justify-center md:hidden">
                <PrimaryButton
                  text="View All Projects"
                  textColor="#FFFFFF"
                  href="/case-studies"
                  bGcolor="#FF37B3"
                />
              </div>
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};
export default Work;
