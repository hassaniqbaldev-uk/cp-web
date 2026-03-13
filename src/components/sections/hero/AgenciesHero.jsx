"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/audit-hero-bg.webp";
import SectionDescription from "@/components/ui/SectionDescription";
import { motion } from "framer-motion";
import HomeHeroLogoShape1 from "@/components/decorative-elements/HomeHeroLogoShape1";
import AboutHeroLogoShape1 from "@/components/decorative-elements/AboutHeroLogoShape1";
import ContactHeroLogoShape1 from "@/components/decorative-elements/ContactHeroLogoShape1";
import Logo from "@/components/decorative-elements/Logo";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { MotionEffect } from "@/components/effects/motion-effect";

const AgenciesHero = () => {
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
      <section className="relative w-full overflow-hidden px-[2rem] pt-[15rem] pb-[10rem] md:pt-[20rem] xl:px-[0rem]">
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
          <HomeHeroLogoShape1 className="absolute top-[5.8px] left-[12px] h-[8rem] w-[4rem] rotate-[25deg] opacity-50 md:h-[18.4rem] md:w-[9.1rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <AboutHeroLogoShape1 className="absolute top-[12rem] right-[3rem] h-[8rem] w-[4rem] rotate-[40deg] opacity-50 md:h-[18.5rem] md:w-[7.2rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <ContactHeroLogoShape1 className="absolute right-[20rem] bottom-[1rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 md:right-[90rem] md:bottom-[5rem] md:h-[11.2rem] md:w-[12rem]" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-between gap-[4rem] xl:flex-row">
            <div className="flex w-full flex-col items-center justify-center gap-[3rem] text-center md:w-[60rem] xl:items-start xl:text-left">
              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                zoom
              >
                <h1 className="text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[5rem] md:leading-[6rem]">
                  <span className="block">White Label</span>
                  <span className="bg-gradient-yellow-pink block bg-clip-text text-transparent">
                    Web Design & Branding
                  </span>
                </h1>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                delay={0.15}
              >
                <SectionDescription
                  text="Since 2014, CreativePixels has supported agencies across the UK, US & Australia with WordPress websites, branding, and ongoing support all delivered under your brand."
                  textColor="#312749"
                />
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                delay={0.3}
              >
                <SecondaryButton
                  data-cal-namespace="15min"
                  data-cal-link="hassan-iqbal-mznzu9/15min"
                  data-cal-config='{"layout":"month_view","theme":"dark"}'
                  text="Book with Hassan"
                />
              </MotionEffect>
            </div>

            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.45}
              className="h-[25rem] w-full md:h-[35rem] md:w-[52rem]"
            >
              <div className="relative flex h-[25rem] w-full items-center justify-center rounded-[2rem] border-[1.6rem] border-black bg-white md:h-[35rem] md:w-[52rem]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0.3] }}
                  transition={{
                    duration: 2.5,
                    delay: 1,
                    times: [0, 0.3, 0.6, 1],
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    initial={{ filter: "blur(0px)" }}
                    animate={{
                      filter: ["blur(0px)", "blur(0px)", "blur(8px)"],
                    }}
                    transition={{
                      duration: 2.5,
                      delay: 1,
                      times: [0, 0.6, 1],
                      ease: "easeInOut",
                    }}
                  >
                    <Logo
                      className="h-auto w-[20rem] fill-black md:h-[12.5rem] md:w-[34.1rem]"
                      height="125"
                      width="341"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  animate={{ opacity: 1, scale: 1, rotate: -12 }}
                  transition={{ duration: 0.8, delay: 3, ease: "easeOut" }}
                  className="your-logo-here-gradient-border absolute top-1/2 left-1/2 flex size-[14rem] -translate-1/2 rotate-[0deg] items-center justify-center px-[4rem] py-[2.8rem] text-center md:size-[19.8rem]"
                >
                  <span className="text-[2rem] leading-[3rem] font-extrabold tracking-[-0.02em] text-[#070707] uppercase md:text-[4rem] md:leading-[4.6rem]">
                    Your Logo Here
                  </span>
                </motion.div>
              </div>
            </MotionEffect>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgenciesHero;
