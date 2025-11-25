"use client";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LineStroke31 from "@/assets/decorative-elements/line-stroke-31.svg";
import LineStroke32 from "@/assets/decorative-elements/line-stroke-32.svg";
import CheckIcon from "@/assets/icons/check-icon.svg";
import Image from "next/image";

const KeyBenefitSection3 = () => {
  const labelRef = useRef();
  const container = useRef();
  const lineRef = useRef();
  const lineRef2 = useRef();

  useGSAP(
    () => {
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
              start: "top 200%",
              end: "bottom 20%",
              scrub: true,
            },
          });
        }
      }

      if (lineRef2.current) {
        const path = lineRef2.current.querySelector("path");
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
              trigger: lineRef2.current,
              start: "top 200%",
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
        ".key-benefit-section-3-left-col",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".key-benefit-section-3-left-col",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".key-benefit-section-3-right-col",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: ".key-benefit-section-3-right-col",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    {
      scope: container,
    },
  );

  return (
    <section
      ref={container}
      style={{
        background:
          "linear-gradient(119.9deg, #070707 1.18%, #212121 49.71%, #070707 100%)",
      }}
      className="relative my-[-5rem] overflow-hidden px-[3rem] py-[10rem] xl:px-[0rem]"
    >
      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[1]">
        <LineStroke31 className="absolute top-[2rem] left-[-103.9rem] w-full" />
      </div>

      <div ref={lineRef2} className="absolute inset-0 z-[1]">
        <LineStroke32 className="absolute top-[1rem] left-[40rem] w-full" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center justify-between gap-[4rem] lg:flex-row">
          <div className="key-benefit-section-3-left-col flex w-full flex-col items-center text-center lg:w-[56.8rem] lg:items-start lg:text-left">
            <div ref={labelRef}>
              <SectionLabel2 text="Key Benefits" bgColor="bg-[#FF37B3]" />
            </div>

            <h2 className="mt-[2.4rem] mb-[2rem] text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] text-white md:text-[6rem] md:leading-[7.4rem]">
              Benefits of Branding Design Services
            </h2>

            <ul className="flex flex-col gap-[1.2rem]">
              {[
                "Builds a memorable and distinctive brand presence.",
                "Creates trust and credibility with your audience.",
                "Improves customer recognition across all touchpoints.",
                "Strengthens your market positioning and competitiveness.",
                "Increases perceived value and supports long-term growth.",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-[1.5rem] text-left text-[1.6rem] font-normal text-white md:text-[1.8rem]"
                >
                  <i className="inline-flex h-[3.2rem] min-w-[3.2rem] items-center justify-center rounded-full bg-[#FF8630]">
                    <CheckIcon className="h-[1rem] w-[1.4rem] fill-white" />
                  </i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="key-benefit-section-3-right-col h-[25rem] w-full overflow-hidden rounded-[2rem] md:h-[52rem] lg:w-[58.5rem]">
            <Image
              src="/images/key-benefits-card-img-2.webp"
              alt="Image"
              className="size-full object-cover object-center"
              width={585}
              height={520}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitSection3;
