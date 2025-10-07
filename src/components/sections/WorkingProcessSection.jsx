"use client";
import SectionLabel2 from "../common/SectionLabel2";
import SectionTitle from "../common/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import UpArrowIcon from "@/assets/icons/up-arrow-dark.svg";
import { accordionData } from "@/constants/agenciesPage";
import CommonBtn3 from "../common/CommonBtn3";
import LineStroke25 from "@/assets/decorative-elements/line-stroke-25.svg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const WorkingProcessSection = () => {
  const labelRef = useRef();
  const container = useRef();

  useGSAP(
    () => {
      const splitHeading = new SplitText(
        container.current.querySelector(".working-process-heading"),
        {
          type: "lines",
          linesClass: "line",
        },
      );
      const splitDesc1 = new SplitText(
        container.current.querySelector(".working-process-description-1"),
        {
          type: "lines",
          linesClass: "line",
        },
      );
      const splitDesc2 = new SplitText(
        container.current.querySelector(".working-process-description-2"),
        {
          type: "lines",
          linesClass: "line",
        },
      );

      // Wobble/shake animation
      gsap.fromTo(
        labelRef.current,
        { rotate: "-2deg" },
        {
          rotation: "+=3", // Rotate 3 degrees back and forth
          duration: 0.15, // Very short duration for quick wobble
          yoyo: true, // Go back and forth
          repeat: -1, // Infinite repeat
          ease: "sine.inOut", // Best ease for wobble effects
          repeatDelay: 0.5, // Small pause between wobbles
        },
      );

      // Timeline for heading
      const headingTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".working-process-heading",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      headingTl.fromTo(
        splitHeading.lines,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
        },
        "<0.3",
      );

      // Timeline for description1
      const descTl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".working-process-description-1",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      descTl1.fromTo(
        splitDesc1.lines,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
        },
        "<",
      );

      // Timeline for description2
      const descTl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".working-process-description-2",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      descTl2.fromTo(
        splitDesc2.lines,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
        },
        "<",
      );

      // Timeline for Accordion
      const accordionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".working-process-accordion",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      accordionTl.fromTo(
        ".working-process-accordion",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
        },
        "<",
      );

      // Independent Label Animation
      gsap.fromTo(
        labelRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: labelRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      // Independent Cta Animation
      gsap.fromTo(
        ".working-process-cta",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: ".working-process-cta",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative px-[3rem] pt-[5rem] pb-[5rem] xl:px-[0rem] xl:pt-[14.7rem] xl:pb-[6.8rem]"
    >
      <div className="pointer-events-none absolute inset-0 z-[0] select-none">
        <LineStroke25 className="absolute top-[50rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center text-center">
          <div ref={labelRef}>
            <SectionLabel2
              text="Our Working Process"
              bgColor="bg-[#FFC300]"
              textColor="text-black"
            />
          </div>

          <div className="working-process-heading mt-[2rem] mb-[3.6rem] overflow-hidden">
            <SectionTitle label="How We Work With Agencies" />
          </div>

          <p className="working-process-description-1 max-w-[114.2rem] overflow-hidden text-[2.2rem] leading-[3.2rem] font-medium text-[#070707]">
            Every agency works differently with their own systems, tools, and
            workflows. Some partner with us for{" "}
            <span className="text-[#FF37B3]">
              white label web design, others for WordPress development,
            </span>{" "}
            and many for both. Whether you need{" "}
            <span className="text-[#EE8D00]">
              outsourced production or long-term agency growth support,
            </span>{" "}
            we adapt to your way of working, not the other way around.
          </p>
        </div>

        <div className="mt-[3.6rem]">
          <Accordion type="single" collapsible className="">
            {accordionData.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="working-process-accordion !border-b border-[#9C9C9C] px-[2rem] py-[2rem] opacity-0 transition-all duration-200 data-[state=open]:rounded-[2rem] data-[state=open]:bg-[#FFE500] md:px-[2.8rem] md:py-[3rem]"
              >
                <AccordionTrigger className="group flex w-full items-center justify-between">
                  <div className="flex items-center gap-[3rem] md:gap-[6rem]">
                    <i className="relative inline-flex items-center justify-center">
                      <item.icon className="h-[4rem] min-w-[4rem] md:h-[5.8rem] md:min-w-[5.8rem]" />
                    </i>

                    <span className="text-left text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[4.8rem] md:leading-[6rem]">
                      {item.number}
                    </span>

                    <span className="text-left text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[2.6rem] md:leading-[3.2rem]">
                      {item.title}
                    </span>
                  </div>

                  <i className="relative inline-flex size-[1.6rem] rotate-180 items-center justify-center opacity-40 transition-all duration-200 group-data-[state=open]:rotate-0 group-data-[state=open]:opacity-100">
                    <UpArrowIcon />
                  </i>
                </AccordionTrigger>

                <AccordionContent>
                  <p className="mx-auto mt-[2rem] max-w-[66rem] text-[1.4rem] leading-[2.2rem] font-medium text-[#070707] md:text-[1.6rem] md:leading-[2.4rem] xl:max-w-[75.2rem]">
                    {item.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-[5rem] flex flex-col items-center gap-[3rem] text-center">
          <p className="working-process-description-2 overflow-hidden text-[2.2rem] leading-[3.2rem] font-medium text-[#070707]">
            With CreativePixels, the process isn't fixed - it's flexible. We're
            your white label agency partner, ready to scale design, development,
            or strategy support around your needs.
          </p>

          <div className="working-process-cta">
            <CommonBtn3
              textColor="#FFFFFF"
              bgColor="#FF37B3"
              label="Get Free Consultation"
              href="/contact"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;
