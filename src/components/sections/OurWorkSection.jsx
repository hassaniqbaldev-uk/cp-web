"use client";

import SectionDescription from "../common/SectionDescription";
import SectionTitle from "../common/SectionTitle";
import CaseStudiesGrid from "../common/CaseStudiesGrid";
import LineStroke15 from "@/assets/decorative-elements/line-stroke-15.svg";
import LineStroke16 from "@/assets/decorative-elements/line-stroke-16.svg";
import LineStroke17 from "@/assets/decorative-elements/line-stroke-17.svg";
import SectionLabel2 from "../common/SectionLabel2";
import OurWorkCardSlider from "../common/OurWorkCardSlider";
import CaseStudiesSlider from "../common/CaseStudiesSlider";
import DownArrowIcon from "@/assets/icons/down-arrow.svg";
import SubtractDarkIcon from "@/assets/icons/subtract-dark.svg";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useLoadingStore } from "@/store/useLoadingStore";
import { getCalApi } from "@calcom/embed-react";

const OurWorkSection = ({ caseStudies }) => {
  const labelRef = useRef();
  const headingRef = useRef();
  const descRef = useRef();
  const cardRef = useRef();
  const titleRef = useRef();
  const gridRef = useRef();
  const lineRef1 = useRef(null);
  const lineRef2 = useRef(null);
  const lineRef3 = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const { isLoading } = useLoadingStore(); // 👈 access global loader state

  useEffect(() => {
    if (isLoading) return; // ⛔ don’t run until loader is done
    const line1 = lineRef1.current.querySelector("path");

    if (line1) {
      gsap.fromTo(
        line1,
        { drawSVG: "0%" }, // start hidden
        {
          drawSVG: "100%", // fully drawn
          duration: 5,
          ease: "power2.inOut",
        },
      );
    }

    const line2 = lineRef2.current.querySelector("path");

    if (line2) {
      gsap.fromTo(
        line2,
        { drawSVG: "0%" },
        {
          drawSVG: "100%",
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: lineRef2.current,
            start: "top 50%", // when line enters viewport
            end: "bottom 20%", // when line leaves viewport
            scrub: true, // tie progress to scroll
          },
        },
      );
    }

    const line3 = lineRef3.current.querySelector("path");

    if (line3) {
      gsap.fromTo(
        line2,
        { drawSVG: "0%" },
        {
          drawSVG: "100%",
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: lineRef3.current,
            start: "top 50%", // when line enters viewport
            end: "bottom 20%", // when line leaves viewport
            scrub: true, // tie progress to scroll
          },
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
      delay: 0.2,
    })

      .to(descRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      })

      .fromTo(
        gsap.utils.toArray(cardRef.current.children),
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1, // 👈 Faster stagger
          ease: "power2.out",
        },
      );

    gsap.to(titleRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(gridRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
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

  // 👇 Show 3 case studies at first
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4); // show +3 each click
  };

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

  useEffect(() => {
    if (isLoading) return; // ⛔ don’t run until loader is done

    const numbers = gsap.utils.toArray(cardRef.current.querySelectorAll("h3"));

    numbers.forEach((number) => {
      // Store original text and symbol
      const originalText = number.textContent.trim();
      let symbol = "";
      let target = parseInt(originalText.replace(/\D/g, ""), 10);

      if (originalText.includes("+")) symbol = "+";
      if (originalText.includes("%")) symbol = "%";

      number.textContent = "0" + symbol;

      gsap.to(
        { val: 0 },
        {
          val: target,
          duration: 2,
          ease: "power1.out",
          onUpdate: function () {
            number.textContent = Math.floor(this.targets()[0].val) + symbol;
          },
        },
      );
    });
  }, [isLoading]);

  return (
    <section className="pt-[18rem] md:pt-[20.6rem]">
      {/* Decorative stroke line */}
      <div ref={lineRef1} className="absolute inset-0 z-[0]">
        <LineStroke15 className="absolute top-[15.4rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div ref={lineRef2} className="absolute inset-0 z-[0]">
        <LineStroke16 className="absolute top-[92.9rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div ref={lineRef3} className="absolute inset-0 z-[0]">
        <LineStroke17 className="absolute top-[281.6rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      {showButton && (
        <button
          data-cal-namespace="15min"
          data-cal-link="hassan-iqbal-mznzu9/15min"
          data-cal-config='{"layout":"month_view","theme":"dark"}'
          className="animation-duration-[20s] hover:paused fixed top-[5rem] right-[3rem] z-[100] hidden size-[16rem] animate-spin cursor-pointer items-center justify-center transition-opacity duration-300 md:inline-flex"
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

      <div className="relative z-[1] mx-auto max-w-[120.3rem] px-[3rem] xl:px-[0rem]">
        <div className="flex flex-col items-center gap-[2rem] text-center xl:items-start xl:text-left">
          <div ref={labelRef} className="rotate-[2deg]">
            <SectionLabel2
              text="Our Work"
              bgColor="bg-[#FFC300]"
              textColor="text-black"
            />
          </div>

          <div className="flex w-full flex-col items-center justify-between gap-[2rem] xl:flex-row xl:gap-[0rem]">
            <div ref={headingRef} className="max-w-[40rem] opacity-0">
              <SectionTitle label="Real projects. Real results." />
            </div>

            <div ref={descRef} className="max-w-[50rem] opacity-0">
              <SectionDescription label="We’ve partnered with clients from startups to global brands, designing websites and brands that drive growth and lasting impact." />
            </div>
          </div>
        </div>

        <div
          ref={cardRef}
          className="relative mt-[6.8rem] hidden grid-cols-3 gap-[3.3rem] xl:grid"
        >
          {/* <Link
            href="/contact"
            className="animation-duration-[20s] hover:paused absolute bottom-[-14.5rem] left-[-8.7rem] z-[100] inline-flex animate-spin items-center justify-center"
          >
            <Image
              src="/images/talk-expert-btn-img.png"
              width={190}
              height={190}
              alt="Button  Images"
            />
          </Link> */}

          <div className="rounded-[3rem] bg-[#FFC300]">
            <h3 className="inline-flex items-start pt-[3.4rem] pb-[.7rem] pl-[5rem] text-[11rem] leading-[13rem] font-bold tracking-[-0.02em]">
              95 <span className="text-[5rem] leading-[8rem]">%</span>
            </h3>

            <hr className="h-[1px] w-full border-0 bg-black/40" />

            <p className="pt-[2rem] pb-[3.1rem] pl-[5rem] text-[2.2rem] leading-[3.2rem] font-medium">
              Client Satisfaction Rate
            </p>
          </div>

          <div className="rounded-[3rem] bg-[#FF37B3]">
            <h3 className="inline-flex items-start pt-[3.4rem] pb-[.7rem] pl-[5rem] text-[11rem] leading-[13rem] font-bold tracking-[-0.02em]">
              200 <span className="text-[5rem] leading-[8rem]">+</span>
            </h3>

            <hr className="h-[1px] w-full border-0 bg-black/40" />

            <p className="max-w-[27.3rem] pt-[2rem] pb-[3.1rem] pl-[5rem] text-[2.2rem] leading-[3.2rem] font-medium">
              Projects Delivered
            </p>
          </div>

          <div className="rounded-[3rem] bg-[#F14A58]">
            <h3 className="inline-flex items-start pt-[3.4rem] pb-[.7rem] pl-[5rem] text-[11rem] leading-[13rem] font-bold tracking-[-0.02em]">
              65 <span className="text-[5rem] leading-[8rem]">%</span>
            </h3>

            <hr className="h-[1px] w-full border-0 bg-black/40" />

            <p className="max-w-[32rem] pt-[2rem] pb-[3.1rem] pl-[5rem] text-[2.2rem] leading-[3.2rem] font-medium">
              Faster Launch Times
            </p>
          </div>
        </div>

        <div className="mt-[4rem] block w-full xl:hidden">
          <OurWorkCardSlider />
        </div>
      </div>

      <div className="relative z-[1] mx-auto mt-[5rem] max-w-[120.3rem] px-[3rem] xl:mt-[10rem] xl:px-[0rem]">
        <div
          ref={titleRef}
          className="mx-auto max-w-[82.6rem] text-center opacity-0"
        >
          <SectionTitle label="Trusted by business across the UK, US and Australia." />
        </div>

        <div
          ref={gridRef}
          className="mt-[4rem] hidden flex-col gap-[5rem] opacity-0 xl:flex"
        >
          {caseStudies.slice(0, visibleCount).map((cs, idx) => (
            <CaseStudiesGrid
              key={cs.id}
              className={idx % 2 === 1 ? "case-studies-grid-reverse" : ""}
              image={cs.image}
              title={cs.title}
              description={cs.description}
              slug={cs.slug}
              tags={cs.tags}
              technologies={cs.technologies}
            />
          ))}
        </div>

        <div className="block w-full overflow-hidden xl:hidden">
          <CaseStudiesSlider caseStudies={caseStudies} />
        </div>

        {/* Load More button only if more to show */}
        {visibleCount < caseStudies.length && (
          <button
            onClick={handleLoadMore}
            className="mt-[5rem] hidden w-full cursor-pointer items-center xl:inline-flex"
          >
            <span className="inline-flex h-[5.6rem] w-full items-center justify-center rounded-[6rem] border border-[#141414] bg-[#141414] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
              Load More
            </span>
            <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
              <SubtractDarkIcon />
            </i>
            <i className="inline-flex size-[5.6rem] items-center justify-center rounded-full border border-[#141414] bg-[#141414]">
              <DownArrowIcon />
            </i>
          </button>
        )}
      </div>
    </section>
  );
};

export default OurWorkSection;
