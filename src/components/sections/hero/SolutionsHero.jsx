"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/audit-hero-bg.webp";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Link from "next/link";
import { motion } from "framer-motion";
import { MotionEffect } from "@/components/effects/motion-effect";
import HomeHeroLogoShape1 from "@/components/decorative-elements/HomeHeroLogoShape1";
import HomeHeroLogoShape2 from "@/components/decorative-elements/HomeHeroLogoShape2";
import ContactHeroLogoShape1 from "@/components/decorative-elements/ContactHeroLogoShape1";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const SolutionsHero = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#FF37B3" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      <section className="relative w-full overflow-hidden px-[2rem] pt-[19rem] pb-[13rem] xl:px-[0rem]">
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
          <div className="flex flex-col items-center text-center">
            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
            >
              <div>
                <SectionLabel text="Tailored Expertise" textColor="#FF37B3" />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
              delay={0.15}
            >
              <h1 className="mt-[1.5rem] mb-[2.5rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[7rem] md:leading-[8rem]">
                Solutions <br /> tailored to your Reality.
              </h1>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.3}
            >
              <div className="mb-[4rem] max-w-[74rem]">
                <SectionDescription
                  text="One size fits no one. We adapt our high-performance strategies to your specific industry challenges and growth goals."
                  textColor="#625C70"
                />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.45}
            >
              <div className="flex flex-wrap items-center justify-center gap-[1.8rem]">
                <PrimaryButton
                  text="See Case Studies"
                  textColor="#FFFFFF"
                  bGcolor="#312749"
                  href="/case-studies"
                />

                <motion.button
                  data-cal-namespace="15min"
                  data-cal-link="hassan-iqbal-mznzu9/15min"
                  data-cal-config='{"layout":"month_view","theme":"dark"}'
                  initial="initial"
                  whileHover="hover"
                  className="relative inline-flex h-[4rem] items-center justify-center overflow-hidden rounded-[60px] border-2 border-[#312749]/40 px-[30px] py-[8px] text-center text-[1.4rem] font-semibold tracking-normal text-[#312749] md:h-[5rem] md:text-[1.8rem]"
                >
                  <motion.span
                    variants={{
                      initial: { y: "0%" },
                      hover: { y: "-130%" },
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="block"
                  >
                    Book a Strategy Call
                  </motion.span>
                  <motion.span
                    variants={{
                      initial: { y: "100%" },
                      hover: { y: "0%" },
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    Book a Strategy Call
                  </motion.span>
                </motion.button>
              </div>
            </MotionEffect>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsHero;
