"use client";
import Image from "next/image";
import OurServiesMarquee from "../common/OurServicesMarquee";
import Link from "next/link";
import SectionLabel2 from "../common/SectionLabel2";
import LineStroke10 from "@/assets/decorative-elements/line-stroke-10.svg";
import LineStroke11 from "@/assets/decorative-elements/line-stroke-11.svg";
import CommonBtn3 from "../common/CommonBtn3";
import LineStroke12 from "@/assets/decorative-elements/line-stroke-12.svg";
import {
  offerServicesDesignData,
  offerServicesMaintenanceData,
  offerServicesWebData,
} from "@/constants/globals";
import ClickArrowPinkIcon from "@/assets/icons/click-arrow-pink.svg";
import ClickArrowYellowIcon from "@/assets/icons/click-arrow-yellow.svg";
import ClickArrowGreenIcon from "@/assets/icons/click-arrow-green.svg";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import CLetter2 from "@/assets/decorative-elements/c-letter-2";
import { useLoadingStore } from "@/store/useLoadingStore";
import { getCalApi } from "@calcom/embed-react";

const OurServicesSection = () => {
  const labelRef = useRef();
  const headingRef = useRef();
  const cardRef = useRef();
  const gridCardRef1 = useRef();
  const gridCardRef2 = useRef();
  const gridCardRef3 = useRef();
  const gridCardRef4 = useRef();
  const gridCardRef5 = useRef();
  const gridCardRef6 = useRef();
  const lineRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const { isLoading } = useLoadingStore(); // 👈 access global loader state

  useEffect(() => {
    if (isLoading) return; // ⛔ don’t run until loader is done

    const splitHeading = new SplitText(headingRef.current, {
      type: "lines",
      linesClass: "line",
    });
    const gridCardRefs = [
      gridCardRef1,
      gridCardRef2,
      gridCardRef3,
      gridCardRef4,
      gridCardRef5,
      gridCardRef6,
    ];

    const line = lineRef.current.querySelector("path");

    if (line) {
      gsap.fromTo(
        line,
        { drawSVG: "0%" }, // start hidden
        {
          drawSVG: "100%", // fully drawn
          duration: 5,
          ease: "power2.inOut",
        },
      );
    }

    // Wobble/shake animation
    gsap.to(labelRef.current, {
      rotation: "+=3", // Rotate 3 degrees back and forth
      duration: 0.15, // Very short duration for quick wobble
      yoyo: true, // Go back and forth
      repeat: -1, // Infinite repeat
      ease: "sine.inOut", // Best ease for wobble effects
      repeatDelay: 0.5, // Small pause between wobbles
    });

    const tl = gsap.timeline();

    tl.to(headingRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    })

      .fromTo(
        splitHeading.lines,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.1, // 👈 Faster stagger
          ease: "power2.out",
        },
      )

      .to(cardRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
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
            delay: index * 0.1, // Stagger the start of each grid animation
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

    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 800 && y < 3500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

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
    <section className="relative overflow-hidden pt-[20.6rem]">
      {/* Bg Element */}
      <div className="absolute inset-0 z-[0] overflow-hidden">
        {/* <CLetter className="absolute top-[16rem] right-[-1rem] hidden w-[20rem] rotate-[-80deg] lg:block" /> */}
        <CLetter2 className="absolute top-[16rem] right-[-1rem] hidden w-[20rem] rotate-[-80deg] lg:block" />
      </div>

      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[0]">
        <LineStroke10 className="absolute top-[15.4rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      {showButton && (
        <button
          data-cal-namespace="15min"
          data-cal-link="hassan-iqbal-mznzu9/15min"
          data-cal-config='{"layout":"month_view","theme":"dark"}'
          className="animation-duration-[20s] hover:paused fixed top-[15rem] right-[3rem] z-[100] hidden size-[16rem] animate-spin cursor-pointer items-center justify-center transition-opacity duration-300 md:inline-flex"
        >
          <Image
            src="/images/talk-expert-btn-img.png"
            width={190}
            height={190}
            alt="Button Images"
            className="size-full object-cover"
          />
        </button>
      )}

      <div className="relative z-[1] mx-auto flex max-w-[120rem] flex-col items-center gap-[2rem] px-[3rem] text-center xl:items-start xl:px-[0rem] xl:text-left">
        <div ref={labelRef} className="rotate-[-2deg]">
          <SectionLabel2
            text="Our Services"
            bgColor="bg-[#FFC300]"
            textColor="text-black"
          />
        </div>

        <h2
          ref={headingRef}
          className="text-[3.5rem] leading-[5rem] font-semibold tracking-[-0.03em] opacity-0 md:text-[7rem] md:leading-[8.4rem] md:font-bold"
        >
          Our <span className="text-[#44B276]">design</span>,{" "}
          <span className="text-[#ffc300]">web</span> and{" "}
          <span className="text-[#FF37B3]">support services.</span>
        </h2>
      </div>

      <div
        ref={cardRef}
        className="mt-[4.3rem] mb-[5rem] opacity-0 xl:mb-[8rem]"
      >
        <OurServiesMarquee />
      </div>

      <div
        id="design-branding"
        className="our-services-sec relative px-[3rem] py-[5rem] xl:px-[0rem] xl:pt-[6.3rem] xl:pb-[7.063rem]"
      >
        <div className="absolute inset-0 z-[0]">
          <LineStroke11 className="absolute top-[40rem] left-1/2 w-full -translate-x-1/2 md:top-[59rem]" />
        </div>

        <div className="relative z-[1] mx-auto flex max-w-[120rem] flex-col gap-[4.9rem] 2xl:max-w-[121.6rem]">
          <div
            ref={gridCardRef1}
            className="flex flex-col items-center gap-[2rem] text-center xl:items-start xl:text-left"
          >
            <h3 className="relative max-w-[66.4rem] text-[4rem] leading-[5rem] font-semibold tracking-[-0.03em] text-white md:text-[7rem] md:leading-[8.4rem] md:font-bold">
              Design and Branding{" "}
              <div className="absolute top-[-1.2rem] right-[1rem] inline-flex size-[4rem] items-center justify-center md:right-[-3.3rem]">
                <ClickArrowGreenIcon />
              </div>
            </h3>

            <p className="max-w-[90rem] text-[1.8rem] leading-[2.8rem] font-medium text-white md:text-[2.2rem] md:leading-[3.2rem] 2xl:max-w-[113.9rem]">
              Your brand deserves more than a logo. We create visual identities,
              brand guidelines, and digital assets that help you stand out and
              connect with your audience.
            </p>
          </div>

          <div
            ref={gridCardRef2}
            className="flex flex-col gap-[2rem] xl:flex-row xl:gap-[4.8rem]"
          >
            <div className="relative w-full overflow-hidden rounded-[2rem] xl:h-[45rem] xl:w-[57.4rem]">
              <Image
                src="/images/design-branding-img.png"
                alt="Design Branding Image"
                width={574}
                height={461.37}
                priority
                className="size-full"
              />
            </div>

            <div className="flex flex-col items-center gap-[4.463rem] xl:items-start">
              <div className="flex w-full flex-col justify-between md:flex-row lg:w-auto lg:gap-[20rem] xl:gap-[10rem]">
                {offerServicesDesignData.columns.map((col, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col gap-[3.1rem] pt-[4rem]`}
                  >
                    <h4 className="text-[2.2rem] leading-[3.2rem] font-medium text-[#44B276]">
                      {col.title}
                    </h4>

                    <ul className="flex flex-col gap-[1.4rem]">
                      {col.links.map((link, idx) => (
                        <li key={idx}>
                          <Link
                            href={link.href}
                            className="group flex items-center gap-[1.2rem] text-[2.2rem] leading-[3.2rem] font-medium text-white"
                          >
                            <div className="size-[1rem] rounded-full border-2 border-[#EE8D00]" />{" "}
                            <span className="relative">
                              {link.label}

                              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#ffe400] to-[#ff37b3] transition-all duration-200 group-hover:w-full" />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <CommonBtn3
                label="See how we helped Unicef?"
                href=""
                bgColor="#44B276"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        id="website-development"
        className="relative px-[3rem] pt-[10rem] pb-[5rem] xl:px-[0rem] xl:pt-[18.8rem] xl:pb-[8rem]"
      >
        <div className="mx-auto max-w-[120.6rem]">
          <div
            ref={gridCardRef3}
            className="flex flex-col items-center gap-[2rem] text-center xl:items-end xl:text-right"
          >
            <h3 className="relative max-w-[70.2rem] text-[4rem] leading-[5rem] font-semibold tracking-[-0.03em] md:text-[7rem] md:leading-[8.4rem] md:font-bold">
              Website Development
              <div className="absolute bottom-full left-1/2 inline-flex size-[4rem] -translate-x-1/2 items-center justify-center">
                <ClickArrowYellowIcon />
              </div>
            </h3>

            <p className="max-w-[92.7rem] text-[1.8rem] leading-[2.8rem] font-medium md:text-[2.2rem] md:leading-[3.2rem]">
              We build custom WordPress websites that are fast, SEO-friendly,
              and designed to convert. From e-commerce to brochure, our sites
              are tailored to your business goals.
            </p>
          </div>

          <div
            ref={gridCardRef4}
            className="mt-[4rem] flex flex-col items-center gap-[2rem] md:gap-[4.7rem] xl:mt-[1rem] xl:flex-row xl:items-start"
          >
            <div className="relative w-full md:h-[60rem] lg:h-[80rem] xl:h-[51.7rem] xl:w-[59.5rem]">
              <Image
                src="/images/website-development-img.png"
                alt="Website Development Image"
                width={595}
                height={517}
                priority
                className="size-full"
              />
            </div>

            <div className="flex w-full flex-col items-center gap-[4.463rem] lg:w-auto xl:items-start">
              <div className="flex w-full flex-col justify-between md:flex-row lg:justify-start lg:gap-[20rem] xl:gap-[10rem]">
                {offerServicesWebData.columns.map((col, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col gap-[3.1rem] pt-[4rem]`}
                  >
                    <h4 className="text-[2.2rem] leading-[3.2rem] font-medium text-[#FED202]">
                      {col.title}
                    </h4>

                    <ul className="flex flex-col gap-[1.4rem]">
                      {col.links.map((link, idx) => (
                        <li key={idx}>
                          <Link
                            href={link.href}
                            className="group flex items-center gap-[1.2rem] text-[2.2rem] leading-[3.2rem] font-medium"
                          >
                            <div className="size-[1rem] rounded-full border-2 border-[#FED202]" />{" "}
                            <span className="relative">
                              {link.label}{" "}
                              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#ffe400] to-[#ff37b3] transition-all duration-200 group-hover:w-full" />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="whitespace-nowrap">
                <CommonBtn3
                  label="See how we helped Games Art Talent"
                  href="/case-studies/game-art-brain-studio"
                  bgColor="#FFE400"
                  textColor="#070707"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="maintenance-growth"
        className="our-services-sec relative px-[3rem] py-[5rem] xl:px-[0rem] xl:pt-[9rem] xl:pb-[7.882rem]"
      >
        <div className="absolute inset-0 z-[0]">
          <LineStroke12 className="absolute -top-[23.7rem] right-[-89.294rem] w-full" />
        </div>

        <div className="relative z-[1] mx-auto max-w-[120.3rem]">
          <div
            ref={gridCardRef5}
            className="flex flex-col items-center gap-[2rem] text-center xl:items-start xl:text-left"
          >
            <h3 className="relative max-w-[80.7rem] text-[4rem] leading-[5rem] font-semibold tracking-[-0.03em] text-white md:text-[7rem] md:leading-[8.4rem] md:font-bold">
              Maintenance and Growth
              <div className="absolute top-[-2rem] right-[-2.6rem] inline-flex size-[4rem] items-center justify-center">
                <ClickArrowPinkIcon />
              </div>
            </h3>

            <p className="max-w-[82.4rem] text-[1.8rem] leading-[2.8rem] font-medium text-white md:text-[2.2rem] md:leading-[3.2rem]">
              Our work doesn’t stop at launch. We provide website maintenance,
              performance updates, and long-term support to keep your site
              secure, scalable, and ready for growth.
            </p>
          </div>

          <div
            ref={gridCardRef6}
            className="mt-[3.6rem] flex flex-col gap-[2rem] md:gap-[4.6rem] xl:flex-row"
          >
            <div className="relative xl:h-[48.318rem] xl:w-[45.4rem]">
              <Image
                src="/images/maintainance-growth-img.png"
                alt="Maintanence Growth Image"
                width={454}
                height={483.18}
                priority
                className="size-full"
              />
            </div>

            <div className="flex flex-col items-center gap-[4.463rem] xl:items-start">
              <div className="flex w-full flex-col justify-between md:flex-row lg:w-auto lg:justify-start lg:gap-[10rem] xl:gap-[5rem]">
                {offerServicesMaintenanceData.columns.map((col, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col gap-[3.1rem] pt-[2.4rem]`}
                  >
                    <h4 className="text-[2.2rem] leading-[3.2rem] font-medium text-[#FF37B3]">
                      {col.title}
                    </h4>

                    <ul className="flex flex-col gap-[1.4rem]">
                      {col.links.map((link, idx) => (
                        <li key={idx}>
                          <Link
                            href={link.href}
                            className="group flex items-center gap-[1.2rem] text-[2.2rem] leading-[3.2rem] font-medium text-white"
                          >
                            <div className="size-[1rem] rounded-full border-2 border-[#FED202]" />{" "}
                            <span className="relative">
                              {link.label}{" "}
                              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#ffe400] to-[#ff37b3] transition-all duration-200 group-hover:w-full" />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <CommonBtn3
                label="See how we helped Ndifo"
                href="/case-studies/ndifo-safari"
                bgColor="#FF37B3"
                textColor="#070707"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
