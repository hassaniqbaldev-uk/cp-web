"use client";
import LineStroke31 from "@/assets/decorative-elements/line-stroke-31.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import {
  arrow,
  FloatingArrow,
  useClick,
  useFloating,
  useInteractions,
  offset,
  flip,
  shift,
  FloatingPortal,
} from "@floating-ui/react";
import LightBgPlus from "@/assets/icons/light-bg-plus.svg";
import { ourProcessData } from "@/constants/uiUxPage";
import OurProcessSlider from "../common/OurProcessSlider";

const OurProcessSection = () => {
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
        ".our-process-heading",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".our-process-heading",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".our-process-desc",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".our-process-desc",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      if (!isMobile) {
        gsap.fromTo(
          ".our-process-card",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: {
              each: 0.2,
              from: "start",
            },
            scrollTrigger: {
              trigger: ".our-process-card",
              start: "top 60%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      if (isMobile) {
        gsap.fromTo(
          ".our-process-slider",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".our-process-slider",
              start: "top 60%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    },
    { scope: container },
  );

  const [openIndex, setOpenIndex] = useState(null); // Track which popover is open

  return (
    <section
      ref={container}
      className="relative overflow-hidden px-[3rem] py-[8rem] xl:px-[0rem] xl:py-[10rem]"
      style={{
        background:
          "url('/images/our-process-gradient-bg.png') no-repeat center center/cover",
      }}
    >
      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[1]">
        <LineStroke31 className="absolute top-[-5.8rem] left-[-103.9rem] w-full" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center text-center">
          <div ref={labelRef}>
            <SectionLabel2
              text="Our Process"
              bgColor="bg-[#F14A58]"
              textColor="text-[#ffffff]"
            />
          </div>

          <h4 className="our-process-heading mt-[2rem] mb-[.7rem] max-w-[103.1rem] text-center text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] text-white md:text-[6rem] md:leading-[7.4rem]">
            A simple, collaborative design process that delivers results
          </h4>

          <p className="our-process-desc max-w-[73rem] text-[1.8rem] leading-[2.6rem] font-normal text-white">
            We keep our workflow transparent and efficient. From first call to
            final handoff, everything is designed in Figma and prepared for
            smooth development — saving you time and reducing costly revisions.
          </p>
        </div>

        <div className="mt-[6rem] hidden h-[29rem] grid-cols-5 md:grid">
          {ourProcessData.map((item, idx) => (
            <div key={idx} className="our-process-card">
              <ProcessStep
                item={item}
                index={idx}
                isOpen={openIndex === idx}
                onOpenChange={(open) => setOpenIndex(open ? idx : null)}
              />
            </div>
          ))}
        </div>

        <div className="our-process-slider mt-[6rem] block w-full md:hidden">
          <OurProcessSlider />
        </div>
      </div>
    </section>
  );
};

// Separate component for each process step with its own popover
const ProcessStep = ({ item, isOpen, onOpenChange }) => {
  const arrowRef = useRef(null);

  // ✅ Each popover has its own floating configuration
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: onOpenChange,
    placement: "bottom",
    middleware: [
      offset(15),
      flip(),
      shift({ padding: 8 }),
      arrow({ element: arrowRef }),
    ],
  });

  const click = useClick(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([click]);

  return (
    <div className="flex h-full w-full flex-col items-center border-l border-white/40 text-center nth-last-1:border-r">
      <span className="text-[1.6rem] leading-[2.4rem] font-medium text-white/50 uppercase">
        {item.step}
      </span>

      <div
        className="relative flex w-full flex-col gap-[4.6rem]"
        style={{ top: item.topValue }}
      >
        <span className="text-[1.8rem] leading-[2.6rem] font-normal text-white capitalize">
          {item.title}
        </span>

        {/* Reference element */}
        <div
          ref={refs.setReference}
          {...getReferenceProps()}
          className="flex h-[3.2rem] w-full cursor-pointer items-center justify-center rounded-[20rem]"
          style={{
            background: item.backgroundColor,
          }}
        >
          <LightBgPlus className="size-[2.2rem]" />
        </div>

        {/* Floating popover in portal */}
        {isOpen && (
          <FloatingPortal>
            <div
              ref={refs.setFloating}
              style={{
                ...floatingStyles, // Spread the floating styles
                boxShadow: "0px 4px 4px 0px #00000040", // Add your custom shadow
              }}
              {...getFloatingProps()}
              className="z-50 rounded-[2.5rem] bg-white px-[1.7rem] py-[3.3rem]"
            >
              <FloatingArrow ref={arrowRef} context={context} fill="white" />
              <p className="max-w-[22.5rem] text-center text-[1.6rem] leading-[2.4rem] font-medium text-[#070707]">
                {item.description}
              </p>
            </div>
          </FloatingPortal>
        )}
      </div>
    </div>
  );
};

export default OurProcessSection;
