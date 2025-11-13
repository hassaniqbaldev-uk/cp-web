"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import LineStroke01 from "@/assets/decorative-elements/line-stroke-01.svg";
import SectionLabel2 from "../common/SectionLabel2";
import CommonBtn2 from "../common/CommonBtn2";
import { logoPopupsData } from "@/constants/globals";
import LogoPopup from "../common/LogoPopup";
import ClientLogoSlider from "../common/ClientLogoSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { heroSlideData } from "@/constants/uiUxPage";
import Image from "next/image";

const UiUxHeroSection = () => {
  const lineRef = useRef(null);
  const container = useRef();
  const labelRef = useRef();

  useGSAP(
    () => {
      const linePath = lineRef.current?.querySelector("path");
      const isMobile = window.innerWidth < 1280;

      // SVG Animation - COMPLETELY INDEPENDENT
      if (linePath) {
        gsap.to(lineRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        });

        gsap.fromTo(
          linePath,
          { drawSVG: "0%" },
          {
            drawSVG: "100%",
            duration: 4,
            ease: "power2.inOut",
          },
        );
      }

      gsap.fromTo(
        labelRef.current,
        { rotate: "-2deg" },
        {
          rotation: "+=3",
          duration: 0.15,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          repeatDelay: 0.5,
        },
      );

      const masterTl = gsap.timeline({ delay: 0.4 });

      masterTl.fromTo(
        ".left-col",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        ">0.1",
      );
      masterTl.fromTo(
        ".right-col",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        ">0.2",
      );

      if (!isMobile) {
        masterTl.fromTo(
          ".hero-logo",
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: {
              each: 0.1,
              from: "center",
            },
            ease: "power2.out",
          },
          ">0.05",
        );
      }

      if (isMobile) {
        masterTl.fromTo(
          ".hero-logo-slider",
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          ">0.05",
        );
      }
    },
    {
      scope: container,
      dependencies: [],
    },
  );

  return (
    <section
      ref={container}
      className="relative w-full overflow-hidden rounded-br-[5rem] rounded-bl-[5rem] px-[3rem] pt-[16.7rem] pb-[3.3rem] xl:px-[0rem] xl:pt-[17.2rem]"
      style={{
        background:
          "url('/images/ui-ux-hero-bg-gradient.webp') no-repeat center center/cover",
      }}
    >
      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[1] opacity-0">
        <LineStroke01 className="absolute bottom-[2.058rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center justify-between gap-[4rem] xl:flex-row">
          <div className="left-col flex w-full flex-col items-center text-center opacity-0 xl:w-[51.5rem] xl:items-start xl:text-left">
            <div ref={labelRef}>
              <SectionLabel2
                text="Our Services"
                bgColor="bg-[#FFC300]"
                textColor="text-[#070707]"
              />
            </div>

            <h1 className="mt-[2.9rem] text-[3rem] leading-[3rem] font-bold tracking-[-0.03em] text-white md:text-[4.5rem] md:leading-[5.5rem] lg:text-[6rem] lg:leading-[7rem] xl:text-[6.9rem] xl:leading-[8.3rem]">
              UI/UX Design
            </h1>

            <p className="mt-[1.2rem] mb-[2.5rem] max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-normal text-white md:text-[1.8rem] md:leading-[2.6rem]">
              We design in Figma to create websites, apps, and dashboards that
              are intuitive, responsive, and built to convert. From wireframes
              to polished interfaces, every detail is crafted for clarity and
              results.
            </p>

            <CommonBtn2 />
          </div>

          <div
            className="right-col h-[27rem] w-full overflow-hidden rounded-[1rem] opacity-0 md:h-[52.3rem] md:w-[62.5rem] md:rounded-[2rem]"
            style={{
              boxShadow: "-24px 18px 40px 0px #07070799",
              background:
                "url('/images/ui-ux-hero-card-img.png') center center / 100% 100% no-repeat",
            }}
          >
            <Swiper
              className="mySwiper"
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
            >
              {heroSlideData.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="!flex !h-auto !items-center !justify-center"
                >
                  <div className="relative size-full px-[2rem] pt-[5rem] pb-[2rem] md:pt-[7.2rem]">
                    <Image
                      src={item.img}
                      width={585}
                      height={431}
                      alt={item.alt}
                      className="size-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <ul className="mt-[5rem] hidden h-[7rem] items-center gap-[3rem] xl:flex 2xl:gap-[5rem]">
          {logoPopupsData.map((item, idx) => (
            <li key={idx} className="hero-logo opacity-0">
              <LogoPopup
                logo={item.logo}
                popupImage={item.popupImage}
                title={item.title}
                href={item.href}
                logoWidth={item.logoWidth}
                logoHeight={item.logoHeight}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Logos */}
      <div className="hero-logo-slider relative z-[200] mt-[5rem] block w-full opacity-0 xl:hidden">
        <ClientLogoSlider />
      </div>
    </section>
  );
};

export default UiUxHeroSection;
