"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import Image from "next/image";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import { LP_SERVICES_CARD } from "@/contants";
import { MotionEffect } from "@/components/effects/motion-effect";
import ClientReviewBg from "@/assets/images/backgrounds/client-review-bg.webp";
import AboutHeroLogoShape1 from "../decorative-elements/AboutHeroLogoShape1";
import ContactHeroLogoShape1 from "../decorative-elements/ContactHeroLogoShape1";
import dynamic from "next/dynamic";
import useServiceStore from "@/store/useServiceStore";

const LpServicesSlider = dynamic(() => import("./LpServicesSlider"), {
  ssr: false,
  loading: () => <div className="h-[48.7rem]" />, // placeholder to prevent layout shift
});

const LpServicesSection = () => {
  const { setSelectedService } = useServiceStore();

  return (
    <>
      <section className="relative px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        {/*Background Image*/}
        <Image
          src={ClientReviewBg}
          alt="Background Image"
          fill
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        {/*Background Element*/}
        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <AboutHeroLogoShape1 className="pointer-events-none absolute top-[0rem] right-[25rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 select-none md:right-[10rem] md:h-[22.5rem] md:w-[11.2rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <ContactHeroLogoShape1 className="absolute right-[20rem] bottom-[1rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 md:right-[170rem] md:bottom-[5rem] md:h-[11.2rem] md:w-[12rem]" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center text-center">
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.1}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <SectionLabel text="our services" textColor="#FF37B3" />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.25}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div className="mt-[.5rem] mb-[1.4rem]">
                <SectionTitle
                  text="Our WordPress Web Design Services"
                  textColor="#ffffff"
                />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.4}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <SectionDescription
                  text="We provide a complete suite of WordPress services tailored to fix your problems and help your business succeed online."
                  textColor="#ffffff"
                />
              </div>
            </MotionEffect>
          </div>

          <div className="mt-[5rem] hidden grid-cols-3 gap-[2rem] xl:grid">
            {LP_SERVICES_CARD.map((item, idx) => (
              <MotionEffect
                key={idx}
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.45 + idx * 0.15}
                transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
              >
                <div
                  style={{
                    boxShadow: item.boxShadow,
                    border: `1px solid ${item.color}`,
                  }}
                  className="flex h-full w-full flex-col justify-between gap-[4rem] rounded-[3rem] bg-white p-[3rem] transition-all duration-200"
                >
                  {/* Head */}
                  <div className="flex flex-col items-start text-left">
                    <i className="relative h-[6.3rem] w-[6.3rem] rounded-[1.5rem]">
                      <div className="absolute top-0 left-0 z-[1] inline-flex h-[5.8rem] w-[5.8rem] items-center justify-center rounded-[1.3rem] border-white/20 bg-white/35 backdrop-blur-[1rem]">
                        <img
                          src={item.icon}
                          className="h-[3rem] w-[3rem]"
                          alt="Icon"
                        />
                      </div>

                      <div
                        style={{
                          background: item.color,
                        }}
                        className="absolute right-0 bottom-0 z-[0] h-[5.8rem] w-[5.8rem] rounded-[1.5rem]"
                      />
                    </i>

                    <h4 className="mt-[3rem] text-[2.4rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-[#312749] xl:text-[2.6rem] xl:leading-[3rem]">
                      {item.title}
                    </h4>

                    <p className="mt-[1rem] text-[1.6rem] leading-[2.4rem] font-normal text-[#625C70]">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <button
                    onClick={() => {
                      setSelectedService(item.value);
                      document
                        .getElementById("audit")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{
                      color: item.color,
                    }}
                    className="group inline-flex gap-[.8rem] text-[1.6rem] leading-[2rem] font-semibold tracking-normal"
                  >
                    {item.linkText}{" "}
                    <i className="relative top-[.5rem] left-[0rem] transition-all duration-200 group-hover:left-[.5rem]">
                      <RightArrowIcon color={item.color} />
                    </i>
                  </button>
                </div>
              </MotionEffect>
            ))}
          </div>

          {/* Responsive */}
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.5}
            transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
          >
            <div className="mt-[5rem] block w-full xl:hidden">
              <LpServicesSlider LP_SERVICES_CARD={LP_SERVICES_CARD} />
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};
export default LpServicesSection;
