"use client";
import Image from "next/image";
import LineStroke03 from "@/assets/decorative-elements/line-stroke-03.svg";
import CommonBtn3 from "../common/CommonBtn3";
import SectionLabel2 from "../common/SectionLabel2";

import { useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { useGSAP } from "@gsap/react";

const WhatWeOfferSection = () => {
  const labelRef = useRef();
  const container = useRef();
  const lineRef = useRef();

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
              start: "top 80%",
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
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
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
        ".offer-grid-card-animate",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: {
            each: 0.2,
            from: "start",
          },
          scrollTrigger: {
            trigger: ".offer-grid-card-animate",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".offer-cta-card-animate",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".offer-cta-card-animate",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: container },
  );

  useGSAP(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      gsap.to("#cursor2", {
        x: clientX - 90 / 2,
        y: clientY - 90 / 2,
        duration: 1,
        delay: 0,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <>
      <div
        id="cursor2"
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-50 size-[9rem] items-center justify-center rounded-full bg-black/50 p-[1rem] opacity-0 xl:flex"
      >
        {/* Gradient Layer */}
        <div className="gradient-layer" />

        <span className="cursor-text text-center text-[1.2rem] leading-tight font-medium text-white">
          Learn More
        </span>
      </div>

      <section
        ref={container}
        className="relative pt-[5rem] pb-[5rem] xl:pt-[8rem] xl:pb-[10rem]"
        style={{
          background:
            "url('/images/offer-bg-gradient.webp') no-repeat center center/cover",
        }}
      >
        {/* Decorative stroke line */}
        <div
          ref={lineRef}
          className="pointer-events-none absolute inset-0 z-[1] select-none"
        >
          <LineStroke03 className="absolute bottom-[-8rem] left-1/2 w-full -translate-x-1/2 xl:bottom-[-6.7rem]" />
        </div>

        <div className="relative z-[3] flex flex-col items-center gap-[4rem] px-[3rem] md:gap-[7.6rem] xl:px-[0rem]">
          <div ref={labelRef}>
            <SectionLabel2
              text="What We Offer"
              bgColor="bg-[#FFC300]"
              textColor="text-[#070707]"
            />
          </div>

          <div className="mx-auto grid w-full max-w-[132rem] grid-cols-1 justify-items-center gap-x-[6rem] gap-y-[25rem] lg:grid-cols-2 xl:grid-cols-3 xl:justify-items-normal">
            {/* Card 1 with yellow cursor */}
            <Link
              onMouseEnter={() => {
                gsap.to("#cursor2", { opacity: 1, duration: 0.3 });
                gsap.to(".cursor-text", { opacity: 1, duration: 0.3 }); // 🧠 add this line
              }}
              onMouseLeave={() => {
                gsap.to("#cursor2", { opacity: 0, duration: 0.3 });
                gsap.to(".cursor-text", { opacity: 0, duration: 0.3 }); // and hide again
              }}
              href="/services#website-development"
              className="offer-grid-card offer-grid-card-animate group flex h-[36.4rem] cursor-none flex-col items-center text-center hover:!border-[#ffc300] hover:!bg-[#ffc300] xl:text-left"
            >
              <div className="flex flex-col gap-[1.4rem] p-[2rem] md:p-[3rem]">
                <h3 className="relative w-full text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-white transition-all duration-300 group-hover:text-black">
                  <span>
                    Website <br /> Development
                  </span>
                </h3>

                <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white transition-all duration-300 group-hover:text-black">
                  We build custom WordPress websites that are fast,
                  SEO-friendly, and designed to convert. From e-commerce to
                  brochure, our sites are tailored to your business goals.
                </p>
              </div>

              <div className="pointer-events-none relative z-[10]">
                <Image
                  src="/images/offer-web-img.webp"
                  alt="offer web image"
                  width={332}
                  height={247}
                  priority
                  unoptimized
                />
              </div>
            </Link>

            {/* Card 2 with blue cursor */}
            <Link
              onMouseEnter={() => {
                gsap.to("#cursor2", { opacity: 1, duration: 0.3 });
                gsap.to(".cursor-text", { opacity: 1, duration: 0.3 }); // 🧠 add this line
              }}
              onMouseLeave={() => {
                gsap.to("#cursor2", { opacity: 0, duration: 0.3 });
                gsap.to(".cursor-text", { opacity: 0, duration: 0.3 }); // and hide again
              }}
              href="/services#design-branding"
              className="offer-grid-card group offer-grid-card-animate mb-[-5rem] flex h-[36.4rem] cursor-none flex-col items-center text-center hover:!border-[#44B276] hover:!bg-[#44B276] md:mb-0 xl:text-left"
            >
              <div className="flex flex-col gap-[1.4rem] p-[2rem] md:p-[3rem]">
                <h3 className="relative w-full text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-white transition-all duration-300 group-hover:text-black">
                  <span>
                    Design and <br /> Branding
                  </span>
                </h3>

                <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white transition-all duration-300 group-hover:text-black">
                  Your brand deserves more than a logo. We create visual
                  identities, brand guidelines, and digital assets that help you
                  stand out and connect with your audience.
                </p>
              </div>

              <div className="pointer-events-none relative z-[10]">
                <Image
                  src="/images/offer-design-img.webp"
                  alt="offer web image"
                  width={327}
                  height={196}
                  priority
                  unoptimized
                />
              </div>
            </Link>

            {/* Card 3 with red cursor*/}
            <Link
              onMouseEnter={() => {
                gsap.to("#cursor2", { opacity: 1, duration: 0.3 });
                gsap.to(".cursor-text", { opacity: 1, duration: 0.3 }); // 🧠 add this line
              }}
              onMouseLeave={() => {
                gsap.to("#cursor2", { opacity: 0, duration: 0.3 });
                gsap.to(".cursor-text", { opacity: 0, duration: 0.3 }); // and hide again
              }}
              href="/case-studies"
              className="offer-grid-card group offer-grid-card-animate flex h-[36.4rem] cursor-none flex-col items-center text-center hover:!border-[#FF37B3] hover:!bg-[#FF37B3] lg:col-span-2 xl:col-span-1 xl:text-left"
            >
              <div className="flex flex-col gap-[1.4rem] p-[2rem] md:p-[3rem]">
                <h3 className="relative w-full text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-white transition-all duration-300 group-hover:text-black">
                  <span>
                    Maintenance <br /> and Growth
                  </span>
                </h3>

                <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white transition-all duration-300 group-hover:text-black">
                  Our work doesn’t stop at launch. We provide website
                  maintenance, performance updates, and long-term support to
                  keep your site secure, scalable, and ready for growth.
                </p>
              </div>

              <div className="pointer-events-none relative z-[10]">
                <Image
                  src="/images/offer-maintenance-img.webp"
                  alt="offer web image"
                  width={331}
                  height={212}
                  priority
                  unoptimized
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-[18rem] px-[3rem] md:mt-[22.8rem] xl:px-[0rem]">
          <div className="offer-cta-card offer-cta-card-animate mx-auto flex max-w-[130rem] rounded-[2rem]">
            <div className="flex w-full flex-col items-center justify-center gap-[2rem] text-center md:flex-row md:justify-between md:text-left">
              <p className="text-[2.4rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
                Want a website and brand that actually grows your business?
              </p>

              <div className="min-w-max">
                <CommonBtn3
                  href="/contact"
                  label="Let's make it happen"
                  bgColor="#EE8D00"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeOfferSection;

//
