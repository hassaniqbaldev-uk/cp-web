"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SectionLabel2 from "../common/SectionLabel2";
import { useRef } from "react";
import CommonBtn3 from "../common/CommonBtn3";
import Image from "next/image";
import ServiceSlider2 from "../common/ServiceSlider2";
import LogoPopup from "../common/LogoPopup";
import { logoPopupsData } from "@/constants/globals";
import ClientLogoSlider from "../common/ClientLogoSlider";

const ServiceSection2 = () => {
  const container = useRef();
  const labelRef = useRef();

  useGSAP(() => {
    const isMobile = window.innerWidth < 1280;

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

    gsap.fromTo(
      ".service-section-2-left-col-card",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".service-section-2-left-col-card",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".service-section-2-right-col-card",
      { opacity: 0 },
      {
        opacity: 1,
        delay: 0.2,
        duration: 0.6,
        ease: "power2.out",

        scrollTrigger: {
          trigger: ".service-section-2-right-col-card",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      },
    );

    if (!isMobile) {
      gsap.fromTo(
        ".service-section-2-logo",
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
          scrollTrigger: {
            trigger: ".service-section-2-logo",
            start: "top 80%",
            toggleActions: "play none none none",
          },
          ease: "power2.out",
        },
      );
    }

    if (isMobile) {
      gsap.fromTo(
        ".service-section-2-logo-slider",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".service-section-2-logo-slider",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );
    }
  });

  return (
    <section className="overflow-hidden">
      <div
        className="relative px-[3rem] pt-[8rem] pb-[8.5rem] xl:px-[0rem] xl:pt-[12.7rem]"
        style={{
          background:
            "url('/images/web-design-service-gradient-bg.png') no-repeat center center/cover",
        }}
      >
        <div className="absolute inset-0 z-[1]">
          <Image
            src="/images/full-stack-wordpress-bg-img.png"
            fill
            className="size-full object-cover object-center xl:object-contain"
            priority
            alt="Bg Image"
          />
        </div>

        <div className="relative z-[10] mx-auto max-w-[144rem] overflow-hidden xl:pl-[12rem]">
          <div className="flex flex-col items-center justify-between gap-[4rem] xl:flex-row xl:items-start">
            <div className="service-section-2-left-col-card flex flex-col items-center gap-[2.2rem] text-center xl:w-[29rem] xl:items-start xl:text-left">
              <div ref={labelRef}>
                <SectionLabel2
                  text="Web Design Services"
                  bgColor="bg-[#FF37B3]"
                  textColor="text-[#ffffff]"
                />
              </div>

              <h4 className="text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] text-white md:text-[6rem] md:leading-[7.4rem]">
                Full-Stack WordPress Services
              </h4>

              <CommonBtn3
                label="Let Get Started"
                href="/call"
                bgColor="#FF37B3"
              />
            </div>

            <div className="service-section-2-right-col-card flex w-full gap-[2.2rem] overflow-hidden xl:min-w-[110rem]">
              <ServiceSlider2 />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#3078FF] py-[3.5rem]">
        <ul className="mx-auto hidden h-[7rem] w-full max-w-[120rem] items-center gap-[5rem] xl:flex">
          {logoPopupsData.map((item, idx) => (
            <li key={idx} className="service-section-2-logo">
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

        <div className="service-section-2-logo-slider relative z-[200] block w-full xl:hidden">
          <ClientLogoSlider />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection2;
