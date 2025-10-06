"use client";
import CLetter2 from "@/assets/decorative-elements/c-letter-2";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const AnAgencySection = () => {
  const container = useRef();

  useGSAP(
    () => {
      const splitHeading = new SplitText(
        container.current.querySelector(".an-agency-heading"),
        {
          type: "lines",
          linesClass: "line",
        },
      );
      const splitDesc1 = new SplitText(
        container.current.querySelector(".an-agency-description-1"),
        {
          type: "lines",
          linesClass: "line",
        },
      );
      const splitDesc2 = new SplitText(
        container.current.querySelector(".an-agency-description-2"),
        {
          type: "lines",
          linesClass: "line",
        },
      );

      // Timeline for heading
      const headingTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".an-agency-heading",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      headingTl
        .to(".an-agency-heading", {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        })
        .fromTo(
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

      // Timeline for desc 1
      const descTl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".an-agency-description-1",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      descTl1
        .to(".an-agency-description-1", {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        })
        .fromTo(
          splitDesc1.lines,
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

      // Timeline for desc 2
      const descTl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".an-agency-description-2",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      descTl2
        .to(".an-agency-description-2", {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        })
        .fromTo(
          splitDesc2.lines,
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

      return () => {
        splitHeading.revert();
        headingTl.kill();
        headingTl.scrollTrigger?.kill();
        splitDesc1.revert();
        descTl1.kill();
        descTl1.scrollTrigger?.kill();
        splitDesc2.revert();
        descTl2.kill();
        descTl2.scrollTrigger?.kill();
      };
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative px-[3rem] py-[5rem] xl:px-[0rem] xl:py-[8.8rem]"
    >
      {/* Bg Element */}
      <div className="absolute inset-0 z-[0] hidden overflow-hidden xl:block">
        <CLetter2 className="absolute top-[10rem] right-[-10rem] size-[26.8rem]" />
      </div>

      <div className="relative mx-auto flex max-w-[113rem] flex-col items-center gap-[2rem] text-center">
        <h2 className="an-agency-heading overflow-hidden text-[3.5rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#070707] opacity-0 md:text-[4.5rem] md:leading-[5.6rem] lg:text-[5.6rem] lg:leading-[6.4rem]">
          An agency, for your agency
        </h2>

        <p className="an-agency-description-1 max-w-[103rem] overflow-hidden text-[2.4rem] leading-[3.4rem] font-semibold tracking-[-0.02em] text-[#333333] opacity-0 md:text-[2.8rem] md:leading-[3.8rem] lg:text-[3.4rem] lg:leading-[4.8rem]">
          Expand your services, take on more clients, and deliver results, all
          without the overhead of hiring in-house.
        </p>

        <p className="an-agency-description-2 overflow-hidden text-[2.4rem] leading-[3.4rem] font-semibold tracking-[-0.02em] text-[#EE8D00] opacity-0 md:text-[2.8rem] md:leading-[3.8rem] lg:text-[3.4rem] lg:leading-[4.8rem]">
          Access web and graphics designers, developers, and long-term support
          all under your own brand.
        </p>
      </div>
    </section>
  );
};

export default AnAgencySection;
