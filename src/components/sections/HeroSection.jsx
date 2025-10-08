"use client";
import BookBadge from "../common/BookBadge";
import LogoPopup from "../common/LogoPopup";
import LineStroke01 from "@/assets/decorative-elements/line-stroke-01.svg";
import CommonBtn2 from "../common/CommonBtn2";
import ClientLogoSlider from "../common/ClientLogoSlider";
import { logoPopupsData } from "@/constants/globals";
import { useRef } from "react";
import gsap from "gsap";
import { useLoadingStore } from "@/store/useLoadingStore";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const HeroSection = () => {
  const { isLoading } = useLoadingStore();
  const lineRef = useRef(null);
  const container = useRef();

  useGSAP(
    () => {
      if (isLoading) return;

      const linePath = lineRef.current?.querySelector("path");
      const isMobile = window.innerWidth < 1280;

      // Auto-split the hero heading
      const splitHeading = new SplitText(".hero-heading", {
        type: "lines",
        linesClass: "split-line",
      });

      // Wrap each line in overflow container
      splitHeading.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.className = "overflow-hidden";
        line.parentNode.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

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

      // Faster master timeline (without SVG)
      const masterTl = gsap.timeline({ delay: 0.4 });

      // Book Badge - quick bounce
      masterTl.fromTo(
        ".book-badge",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        ">0.1",
      );

      // Hero Heading Opacity - FASTER (overlaps with split lines)
      masterTl.to(
        ".hero-heading",
        {
          opacity: 1,
          duration: 0.3, // Faster opacity
          ease: "power2.out",
        },
        ">0.05",
      );

      // Hero Heading Split Lines - STARTS DURING OPACITY
      masterTl.fromTo(
        ".split-line",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.2", // Start 0.2s BEFORE opacity completes
      );

      // Hero Description - tight overlap with heading
      masterTl.fromTo(
        ".hero-desc",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.08,
        },
        "-=0.4", // Stronger overlap
      );

      // CTA Button - quick entrance
      masterTl.fromTo(
        ".hero-cta",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.8)",
        },
        ">0.05",
      );

      // Logo Title - fast
      masterTl.fromTo(
        ".hero-logo-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        ">0.05",
      );

      // Desktop Logos - quick cascade
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

      // Mobile Logo Slider - quick
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
      dependencies: [isLoading],
    },
  );

  return (
    <section
      ref={container}
      className="hero-sec relative w-full overflow-hidden rounded-br-[5rem] rounded-bl-[5rem] px-[3rem] pt-[17.2rem] pb-[3.3rem] xl:px-[0rem]"
    >
      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[1] opacity-0">
        <LineStroke01 className="absolute bottom-[2.058rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[10] flex h-full w-full flex-col items-center justify-end gap-[4rem] xl:gap-[6rem]">
        {/* Main content */}
        <div className="flex w-full max-w-[106.5rem] flex-col items-center gap-[2rem] text-center md:gap-[2.7rem]">
          <div className="book-badge opacity-0">
            <BookBadge />
          </div>

          <h1 className="hero-heading w-full text-[2.2rem] leading-[3.2rem] font-semibold tracking-[-0.03em] text-white opacity-0 md:text-[4.5rem] md:leading-[5.5rem] md:font-bold lg:text-[6rem] lg:leading-[7rem] xl:text-[6.9rem] xl:leading-[8.3rem]">
            Grow your digital presence today with real{" "}
            <span className="bg-gradient-01 bg-clip-text text-transparent">
              human-led
            </span>{" "}
            strategy.
          </h1>

          <div
            aria-label="Smart websites, standout branding, and ongoing support everything you need…"
            className="max-w-[70rem] overflow-hidden text-[clamp(1.2rem,1.5vw,2.2rem)] leading-[clamp(2rem,2vw,3.2rem)] font-normal text-white md:font-medium"
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
