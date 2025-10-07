"use client";
import BookBadge from "../common/BookBadge";
import LogoPopup from "../common/LogoPopup";
import LineStroke01 from "@/assets/decorative-elements/line-stroke-01.svg";
import CommonBtn2 from "../common/CommonBtn2";
import ClientLogoSlider from "../common/ClientLogoSlider";
import { logoPopupsData } from "@/constants/globals";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useLoadingStore } from "@/store/useLoadingStore";
import { useGSAP } from "@gsap/react";

const HeroSection = () => {
  const badgeRef = useRef();
  const headingRef = useRef();
  const descRef = useRef();
  const ctaBtnRef = useRef();
  const headingRef2 = useRef();
  const logoRef = useRef();
  const logoSliderRef = useRef();
  const { isLoading } = useLoadingStore(); // 👈 access global loader state
  const lineRef = useRef(null);
  const container = useRef();

  // useEffect(() => {
  //   if (isLoading) return; // ⛔ don’t run until loader is done

  //   const splitHeading = new SplitText(headingRef.current, {
  //     type: "lines",
  //     linesClass: "line",
  //   });
  //   const splitDesc = new SplitText(descRef.current, {
  //     type: "lines",
  //     linesClass: "line",
  //   });

  //   const linePath = lineRef.current.querySelector("path");

  //   if (linePath) {
  //     gsap.fromTo(
  //       linePath,
  //       { drawSVG: "0%" }, // start hidden
  //       {
  //         drawSVG: "100%", // fully drawn
  //         duration: 5,
  //         ease: "power2.inOut",
  //       },
  //     );
  //   }

  //   const tl = gsap.timeline();

  //   tl.to(lineRef.current, {
  //     opacity: 1,
  //     duration: 0.6,
  //     ease: "power2.out",
  //   })

  //     // Header animation
  //     .to(badgeRef.current, {
  //       opacity: 1,
  //       duration: 0.6,
  //       ease: "power2.out",
  //       delay: 0.1,
  //     })

  //     // FASTER SEQUENCE STARTS HERE - Use position parameters to reduce delays
  //     .to(
  //       headingRef.current,
  //       {
  //         opacity: 1,
  //         duration: 0.4,
  //         ease: "power2.out",
  //       },
  //       ">0.1",
  //     ) // 👈 Only 0.1s delay after previous

  //     .fromTo(
  //       splitHeading.lines,
  //       { opacity: 0, y: 20 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.3,
  //         stagger: 0.1, // 👈 Faster stagger
  //         ease: "power2.out",
  //       },
  //       "<0.2", // 👈 Start 0.2s BEFORE the previous animation ends
  //     )

  //     .to(
  //       descRef.current,
  //       {
  //         opacity: 1,
  //         duration: 0.4,
  //         ease: "power2.out",
  //       },
  //       ">0.1",
  //     ) // 👈 Short delay

  //     .fromTo(
  //       splitDesc.lines,
  //       { opacity: 0, y: 20 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.3,
  //         stagger: 0.1, // 👈 Faster stagger
  //         ease: "power2.out",
  //       },
  //       "<0.2", // 👈 Overlap with previous animation
  //     )

  //     .to(
  //       ctaBtnRef.current,
  //       {
  //         opacity: 1,
  //         duration: 0.6,
  //         ease: "power2.out",
  //       },
  //       ">0.1",
  //     ) // 👈 Short delay

  //     .to(
  //       headingRef2.current,
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.6,
  //         ease: "power2.out",
  //       },
  //       ">0.1",
  //     ) // 👈 Short delay

  //     .to(
  //       logoSliderRef.current,
  //       {
  //         opacity: 1,
  //         duration: 0.4,
  //         ease: "power2.out",
  //       },
  //       ">0.1",
  //     ) // 👈 Short delay

  //     .to(
  //       logoRef.current,
  //       {
  //         opacity: 1,
  //         duration: 0.4,
  //         ease: "power2.out",
  //       },
  //       ">0.1",
  //     ) // 👈 Short delay

  //     .fromTo(
  //       gsap.utils.toArray(logoRef.current.children),
  //       { opacity: 0, y: -20 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.6,
  //         stagger: 0.1, // 👈 Faster stagger
  //         ease: "power2.out",
  //         clearProps: "all",
  //       },
  //       "<0.1",
  //     );
  // }, [isLoading]);

  useGSAP(
    () => {
      if (isLoading) return;

      const linePath = lineRef.current?.querySelector("path");
      const isMobile = window.innerWidth < 1280; // Your breakpoint

      if (linePath) {
        const svgTl = gsap.timeline();

        svgTl
          .to(lineRef.current, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          })
          .fromTo(
            linePath,
            { drawSVG: "0%" },
            {
              drawSVG: "100%",
              duration: 5,
              ease: "power2.inOut",
            },
            "<",
          );
      }

      const tl = gsap.timeline();

      tl.to(".book-badge", {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      tl.to(".hero-heading", {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      }).fromTo(
        ".hero-heading",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        },
      );

      tl.to(".hero-desc", {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      }).fromTo(
        ".hero-desc",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        },
      );

      tl.to(".hero-cta", {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      tl.to(".hero-logo-title", {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      }).fromTo(
        ".hero-logo-title",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        },
      );

      if (!isMobile) {
        tl.to(".hero-logo", {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        }).fromTo(
          ".hero-logo",
          { opacity: 0, y: 150 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
          },
        );
      }

      if (isMobile) {
        tl.to(".hero-logo-slider", {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    },
    {
      scope: container,
      dependencies: [isLoading],
    },
  );

  return (
    <section
      ref={container}
      className="hero-sec relative h-[70rem] w-full overflow-hidden rounded-br-[5rem] rounded-bl-[5rem] lg:h-[79rem]"
    >
      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[1] opacity-0">
        <LineStroke01 className="absolute bottom-[2.058rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[10] flex h-full w-full flex-col items-center justify-end gap-[4rem] pt-[15rem] pb-[4rem] xl:gap-[6rem]">
        {/* Main content */}
        <div className="flex w-full max-w-[106.5rem] flex-col items-center gap-[2rem] px-[2rem] text-center md:gap-[2.7rem] xl:px-[0rem]">
          <div className="book-badge opacity-0">
            <BookBadge />
          </div>

          <h1 className="w-full text-[clamp(2rem,5vw,7rem)] leading-[clamp(2.5rem,6vw,8.4rem)] font-semibold tracking-[-0.03em] text-white md:font-bold">
            <div className="overflow-hidden">
              <div className="hero-heading opacity-0">
                Grow your digital presence today
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="hero-heading opacity-0">
                with real{" "}
                <span className="bg-gradient-01 bg-clip-text text-transparent">
                  human-led
                </span>{" "}
                strategy.
              </div>
            </div>
          </h1>

          <div
            aria-label="Smart websites, standout branding, and ongoing support everything you need…"
            className="max-w-[70rem] overflow-hidden text-[clamp(1.4rem,1.5vw,2.2rem)] leading-[clamp(2.2rem,2vw,3.2rem)] font-normal text-white md:font-medium"
          >
            <div className="overflow-hidden">
              <div className="hero-desc opacity-0">
                Smart websites, standout branding, and ongoing support
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="hero-desc opacity-0">
                everything you need to grow with confidence.
              </div>
            </div>
          </div>

          <div className="hero-cta opacity-0">
            <CommonBtn2 />
          </div>
        </div>

        {/* Logos */}
        <div className="flex max-w-[120rem] flex-col items-center gap-[4rem] px-[3rem] text-center 2xl:max-w-[136rem] 2xl:px-[0rem]">
          <h3 className="text-[1.4rem] leading-[2.4rem] font-normal text-white md:text-[1.8rem] md:leading-[2.6rem]">
            <div className="overflow-hidden">
              <div className="hero-logo-title opacity-0">
                Trusted by brands in the UK, US & Australia
              </div>
            </div>
          </h3>

          <ul className="hidden h-[7rem] items-center gap-[3rem] xl:flex 2xl:gap-[5rem]">
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
        <div className="hero-logo-slider relative z-[200] block w-full opacity-0 xl:hidden">
          <ClientLogoSlider />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
