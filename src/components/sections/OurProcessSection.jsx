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

const OurProcessSection = () => {
  const container = useRef();
  const labelRef = useRef();

  // 🔹 Floating GSAP label animation
  useGSAP(
    () => {
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
    },
    { scope: container },
  );

  const [openIndex, setOpenIndex] = useState(null); // Track which popover is open

  return (
    <section
      ref={container}
      className="relative overflow-hidden py-[10rem]"
      style={{
        background:
          "url('/images/our-process-gradient-bg.png') no-repeat center center/cover",
      }}
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
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

          <h4 className="mt-[2rem] mb-[.7rem] max-w-[103.1rem] text-center text-[6rem] leading-[7.4rem] font-bold tracking-[-0.03em] text-white">
            A simple, collaborative design process that delivers results
          </h4>

          <p className="max-w-[73rem] text-[1.8rem] leading-[2.6rem] font-normal text-white">
            We keep our workflow transparent and efficient. From first call to
            final handoff, everything is designed in Figma and prepared for
            smooth development — saving you time and reducing costly revisions.
          </p>
        </div>

        <div className="mt-[6rem] grid h-[29rem] grid-cols-5">
          {ourProcessData.map((item, idx) => (
            <ProcessStep
              key={idx}
              item={item}
              index={idx}
              isOpen={openIndex === idx}
              onOpenChange={(open) => setOpenIndex(open ? idx : null)}
            />
          ))}
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
