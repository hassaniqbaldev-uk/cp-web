"use client";
import Image from "next/image";
import LineStroke03 from "@/assets/decorative-elements/line-stroke-03.svg";
import CommonBtn3 from "../common/CommonBtn3";
import SectionLabel2 from "../common/SectionLabel2";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

const WhatWeOfferSection = () => {
  const labelRef = useRef();
  const gridCardRef1 = useRef();
  const gridCardRef2 = useRef();
  const lineRef = useRef(null);
  const cursorRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const gridCardRefs = [gridCardRef1, gridCardRef2];

    const line = lineRef.current.querySelector("path");

    if (line) {
      gsap.fromTo(
        line,
        { drawSVG: "0%" },
        {
          drawSVG: "100%",
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 50%",
            end: "bottom 20%",
            scrub: true,
            markers: false,
          },
        },
      );
    }

    // Wobble/shake animation
    gsap.to(labelRef.current, {
      rotation: "+=3",
      duration: 0.15,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      repeatDelay: 0.5,
    });

    gridCardRefs.forEach((ref, index) => {
      if (ref.current) {
        gsap.fromTo(
          gsap.utils.toArray(ref.current.children),
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            delay: index * 0.1,
            clearProps: "all",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });

    const cursor = cursorRef.current;

    // Initial cursor position
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Get all card links
    const links = document.querySelectorAll(".offer-grid-card");

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateCursor = () => {
      cursorX = gsap.utils.interpolate(cursorX, mouseX, 0.1);
      cursorY = gsap.utils.interpolate(cursorY, mouseY, 0.1);

      gsap.set(cursor, {
        x: cursorX - cursor.offsetWidth / 2,
        y: cursorY - cursor.offsetHeight / 2,
      });

      requestAnimationFrame(updateCursor);
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        width: "100px",
        height: "100px",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(".cursor-text", { opacity: 1, delay: 0.1, duration: 0.2 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 0,
        width: "20px",
        height: "20px",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(".cursor-text", { opacity: 0, duration: 0.1 });
    };

    // Attach listeners to all cards
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);
    updateCursor();

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor with Text Inside */}
      <div
        ref={cursorRef}
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-50 hidden items-center justify-center rounded-full bg-black/50 opacity-0 xl:flex"
      >
        {/* Gradient Layer */}
        <div className="gradient-layer" />

        <span className="cursor-text text-center text-[1.4rem] leading-tight font-medium text-white opacity-0">
          Learn More
        </span>
      </div>

      <section className="offer-sec relative pt-[5rem] pb-[5rem] xl:pt-[8rem] xl:pb-[10rem]">
        {/* Decorative stroke line */}
        <div
          ref={lineRef}
          className="pointer-events-none absolute inset-0 z-[1] select-none"
        >
          <LineStroke03 className="absolute bottom-[-8rem] left-1/2 w-full -translate-x-1/2 xl:bottom-[-6.7rem]" />
        </div>

        <div className="relative z-[3] flex flex-col items-center gap-[4rem] px-[3rem] md:gap-[7.6rem] xl:px-[0rem]">
          <div ref={labelRef} className="rotate-[2deg]">
            <SectionLabel2
              text="What We Offer"
              bgColor="bg-[#FFC300]"
              textColor="text-[#070707]"
            />
          </div>

          <div
            ref={gridCardRef1}
            className="mx-auto grid w-full max-w-[132rem] grid-cols-1 justify-items-center gap-x-[6rem] gap-y-[25rem] lg:grid-cols-2 xl:grid-cols-3 xl:justify-items-normal"
          >
            {/* Card 1 with yellow cursor */}
            <Link
              href="/services#website-development"
              className="offer-grid-card group flex h-[36.4rem] flex-col items-center text-center hover:!border-[#ffc300] hover:!bg-[#ffc300] xl:text-left"
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

              <div className="pointer-events-none relative top-[-2rem] z-[10] xl:top-[-4rem]">
                <Image
                  src="/images/offer-web-img.png"
                  alt="offer web image"
                  width={363}
                  height={316}
                  priority
                />
              </div>
            </Link>

            {/* Card 2 with blue cursor */}
            <Link
              ref={lineRef}
              href="/services#design-branding"
              className="offer-grid-card group flex h-[36.4rem] flex-col items-center text-center hover:!border-[#44B276] hover:!bg-[#44B276] xl:text-left"
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

              <div className="pointer-events-none relative top-[-4rem] z-[10] xl:top-[-5rem]">
                <Image
                  src="/images/offer-design-img.png"
                  alt="offer web image"
                  width={324}
                  height={337}
                  priority
                />
              </div>
            </Link>

            {/* Card 3 with red cursor */}
            <Link
              href="/case-studies"
              className="offer-grid-card group flex h-[36.4rem] flex-col items-center text-center hover:!border-[#FF37B3] hover:!bg-[#FF37B3] lg:col-span-2 xl:col-span-1 xl:text-left"
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
                  src="/images/offer-maintenance-img.png"
                  alt="offer web image"
                  width={209}
                  height={241}
                  priority
                />
              </div>
            </Link>
          </div>
        </div>

        <div
          ref={gridCardRef2}
          className="mt-[18rem] px-[3rem] md:mt-[22.8rem] xl:px-[0rem]"
        >
          <div className="offer-cta-card mx-auto flex max-w-[130rem] rounded-[2rem]">
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
