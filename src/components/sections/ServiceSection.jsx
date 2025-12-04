"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import { logoPopupsData } from "@/constants/globals";
import LogoPopup from "../common/LogoPopup";
import ClientLogoSlider from "../common/ClientLogoSlider";
import ServiceSlider1 from "../common/ServiceSlider1";
import LineStroke31 from "@/assets/decorative-elements/line-stroke-31.svg";

const ServiceSection = () => {
  const container = useRef();
  const labelRef = useRef();
  const lineRef = useRef();

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 1280;

      if (lineRef.current) {
        const path = lineRef.current.querySelector("path");
        if (path) {
          const length = path.getTotalLength();

          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 250%",
              end: "bottom 20%",
              scrub: true,
            },
          });
        }
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

      gsap.fromTo(
        labelRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: labelRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".service-heading",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".service-heading",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".service-slider",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".service-slider",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      if (!isMobile) {
        gsap.fromTo(
          ".service-logo",
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
              trigger: ".service-logo",
              start: "top 80%",
              toggleActions: "play none none none",
            },
            ease: "power2.out",
          },
        );
      }

      if (isMobile) {
        gsap.fromTo(
          ".service-logo-slider",
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".service-logo-slider",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    },
    {
      scope: container,
    },
  );

  return (
    <section
      ref={container}
      className="relative overflow-hidden px-[3rem] pt-[8rem] pb-[7rem] xl:px-[0rem] xl:pt-[9.2rem]"
      style={{
        background:
          "url('/images/web-design-service-gradient-bg.png') no-repeat center center/cover",
      }}
    >
      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[1]">
        <LineStroke31 className="absolute top-[-5.8rem] left-[-103.9rem] w-full" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center gap-[2.2rem] text-center">
          <div ref={labelRef}>
            <SectionLabel2
              text="Web Design Services"
              bgColor="bg-[#FF37B3]"
              textColor="text-[#ffffff]"
            />
          </div>

          <h4 className="service-heading text-center text-[4rem] leading-[5rem] font-bold tracking-[-0.03em] text-white md:text-[6rem] md:leading-[7.4rem]">
            Full-Stack Web Design Services
          </h4>
        </div>

        <div className="service-slider mt-[5rem] w-full">
          <ServiceSlider1 />
        </div>

        <ul className="relative z-[100] mt-[8rem] hidden h-[7rem] items-center gap-[3rem] xl:flex 2xl:gap-[5rem]">
          {logoPopupsData.map((item, idx) => (
            <li key={idx} className="service-logo">
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
      <div className="service-logo-slider relative z-[200] mt-[8rem] block w-full xl:hidden">
        <ClientLogoSlider />
      </div>
    </section>
  );
};

export default ServiceSection;
