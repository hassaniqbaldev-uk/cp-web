"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/contact-hero-bg.webp";
import SectionLabel from "@/components/ui/SectionLabel";
import HeadphoneIcon from "@/assets/icons/ui/headphone-icon.svg";
import EmailIcon from "@/assets/icons/ui/email-icon.svg";
import TimelineIcon from "@/assets/icons/ui/timeline-icon.svg";
import Link from "next/link";
import SectionDescription from "@/components/ui/SectionDescription";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MotionEffect } from "@/components/effects/motion-effect";
import HomeHeroLogoShape1 from "@/components/decorative-elements/HomeHeroLogoShape1";
import HomeHeroLogoShape2 from "@/components/decorative-elements/HomeHeroLogoShape2";
import ContactHeroLogoShape1 from "@/components/decorative-elements/ContactHeroLogoShape1";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CallHero = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "cwh" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#FF37B3" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
        hideBranding: true, // This hides the Cal.com branding
      });
    })();
  }, []);

  return (
    <>
      <section className="relative w-full overflow-hidden px-[2rem] pt-[10rem] pb-[5rem] md:pt-[18rem] xl:px-[0rem] xl:pb-[8.3rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        {/*Background Element*/}
        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <HomeHeroLogoShape1 className="absolute top-[70px] left-[-10px] h-[8rem] w-[4rem] rotate-[25deg] md:top-[5.8px] md:h-[18.4rem] md:w-[9.1rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <HomeHeroLogoShape2 className="absolute top-[12rem] right-[2rem] h-[8rem] w-[4rem] rotate-[33deg] opacity-50 md:right-[8rem] md:h-[18.4rem] md:w-[9.1rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <ContactHeroLogoShape1 className="absolute bottom-[8rem] left-[-6rem] h-[10rem] w-[10rem] rotate-[33deg] opacity-50 md:h-[13.2rem] md:w-[14.2rem]" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center gap-[4rem]">
            <div className="flex flex-col items-center text-center">
              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                zoom
              >
                <h1 className="mb-[2rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[7rem] md:leading-[8.5rem]">
                  Book a call with Hassan
                </h1>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                zoom
                delay={0.15}
              >
                <div className="max-w-[62.8rem]">
                  <SectionDescription
                    text="Smart websites, standout branding, and ongoing support everything you need to grow."
                    textColor="#FFFFFF"
                  />
                </div>
              </MotionEffect>
            </div>

            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.3}
              className="w-full"
            >
              <div className="w-full">
                <Cal
                  namespace="cwh"
                  calLink="hassan-iqbal-mznzu9/cwh"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: "1.2rem",
                    overflow: "scroll",
                  }}
                  config={{
                    layout: "month_view",
                    theme: "dark",
                    hideBranding: true,
                  }}
                />
              </div>
            </MotionEffect>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallHero;
