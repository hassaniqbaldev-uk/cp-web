"use client";
import SectionDescription from "../common/SectionDescription";
import Image from "next/image";
import LineStroke07 from "@/assets/decorative-elements/line-stroke-07.svg";
import SectionLabel2 from "../common/SectionLabel2";
import CommonBtn3 from "../common/CommonBtn3";
import { whoWeAreCardData } from "@/constants/aboutPage";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useLoadingStore } from "@/store/useLoadingStore";

const WhoWeAreSection = () => {
  const labelRef = useRef();
  const headingRef = useRef();
  const descRef = useRef();
  const descRef2 = useRef();
  const gridCardRef = useRef();
  const btnRef = useRef();
  const lineRef = useRef(null);
  const { isLoading } = useLoadingStore(); // 👈 access global loader state

  useEffect(() => {
    if (isLoading) return; // ⛔ don’t run until loader is done

    const splitHeading = new SplitText(headingRef.current, {
      type: "lines",
      linesClass: "line",
    });
    const splitDesc2 = new SplitText(descRef2.current, {
      type: "lines",
    });

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

      .to(descRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      })

      .fromTo(
        gsap.utils.toArray(gridCardRef.current.children),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all",
        },
      );

    gsap.fromTo(
      splitDesc2.lines,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: descRef2.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.to(btnRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: btnRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, [isLoading]);

  return (
    <section className="relative px-[3rem] pt-[20rem] pb-[5rem] xl:px-[0rem] xl:pb-[9rem]">
      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[0]">
        <LineStroke07 className="absolute top-[14.8rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[3] mx-auto max-w-[120rem] 2xl:max-w-[141.6rem]">
        <div className="flex flex-col items-center gap-[2.1rem] text-center">
          <div ref={labelRef} className="rotate-[-2deg]">
            <SectionLabel2
              text="Who We Are"
              bgColor="bg-[#FFC300]"
              textColor="text-black"
            />
          </div>

          <h1
            ref={headingRef}
            className="text-text-primary max-w-[100rem] overflow-hidden text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] opacity-0 md:text-[5rem] md:leading-[6rem] lg:text-[7rem] lg:leading-[8.4rem]"
          >
            About Creative Pixels
          </h1>

          <div ref={descRef} className="translate-y-10 transform opacity-0">
            <SectionDescription label="We believe great work starts with people. That’s why we build lasting partnerships, not just websites and brands." />
          </div>
        </div>

        <div
          ref={gridCardRef}
          className="my-[5rem] flex flex-col gap-[1.2rem] xl:mt-[8rem] xl:mb-[10.5rem] xl:flex-row"
        >
          {whoWeAreCardData.slice(0, 1).map((item, idx) => (
            <div
              key={idx}
              className="relative h-[23rem] w-full overflow-hidden rounded-[2rem] md:h-[50rem] lg:h-[70rem] xl:h-[58.8rem] xl:w-[69.2rem]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={692}
                height={588}
                className="size-full object-center"
              />
            </div>
          ))}

          <div className="flex flex-row gap-[1.2rem] xl:flex-col">
            {whoWeAreCardData.slice(1, 3).map((item, idx) => (
              <div
                key={idx}
                className="relative h-[15rem] w-1/2 overflow-hidden rounded-[2rem] md:h-[30rem] lg:h-[40rem] xl:h-[28.8rem] xl:w-[35.6rem]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={356}
                  height={288}
                  className="size-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          {whoWeAreCardData.slice(3, 4).map((item, idx) => (
            <div
              key={idx}
              className="relative h-[23rem] w-full overflow-hidden rounded-[2rem] md:h-[50rem] lg:h-[70rem] xl:h-[58.8rem] xl:w-[34.4rem]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={344}
                height={588}
                className="size-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-[4rem] text-center">
          <h2
            ref={descRef2}
            className="max-w-[125rem] overflow-hidden text-[2rem] leading-[3.5rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[2.8rem] md:leading-[4rem] lg:text-[3.4rem] lg:leading-[4.8rem] xl:[&>*:nth-child(3)]:mb-[2rem] md:[&>*:nth-child(4)]:mb-[2rem] [&>*:nth-child(7)]:mb-[2rem]"
          >
            <div>
              At CreativePixels, design isn’t just about looks — it’s about
              impact. We combine strategy, design, and development to create
              digital experiences that not only stand out but also support the
              people running them.
            </div>
            <div>
              Our approach is simple: build with clarity, care, and long-term
              growth in mind.
            </div>
          </h2>

          <div ref={btnRef} className="opacity-0">
            <CommonBtn3
              href="/contact"
              label="Work With Us"
              bgColor="#FF37B3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
