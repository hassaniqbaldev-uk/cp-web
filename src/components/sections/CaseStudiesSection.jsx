"use client";
import CaseStudiesGrid from "../common/CaseStudiesGrid";
import SectionDescription from "../common/SectionDescription";
import SectionTitle from "../common/SectionTitle";
import SectionLabel2 from "../common/SectionLabel2";
import CaseStudiesSlider from "../common/CaseStudiesSlider";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import CtaSection1 from "../common/CtaSection1";
import LineStroke04 from "@/assets/decorative-elements/line-stroke-04.svg";

const CaseStudiesSection = ({ caseStudies }) => {
  const labelRef = useRef();
  const container = useRef();
  const lineRef = useRef();

  useGSAP(
    () => {
      const splitHeading = new SplitText(".case-study-heading", {
        type: "lines",
        linesClass: "split-line",
      });
      const splitDesc = new SplitText(".case-study-desc", {
        type: "lines",
        linesClass: "split-line-2",
      });

      splitHeading.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.className = "overflow-hidden";
        line.parentNode.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      splitDesc.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.className = "overflow-hidden";
        line.parentNode.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

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
              start: "top -100%",
              end: "bottom 50%",
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
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
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
        ".split-line",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: {
            each: 0.1,
            from: "start",
          },
          scrollTrigger: {
            trigger: ".case-study-heading",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".split-line-2",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: {
            each: 0.1,
            from: "start",
          },
          scrollTrigger: {
            trigger: ".case-study-desc",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".case-grid-card-animate",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".case-grid-card-animate",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".case-cta-card-animate",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".case-cta-card-animate",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: container },
  );
  return (
    <section ref={container} className="relative py-[5rem] xl:py-[10rem]">
      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[0]">
        <LineStroke04 className="absolute bottom-0 left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative mx-auto max-w-[120rem] px-[3rem] xl:px-[0rem]">
        <div className="top-[6rem] flex flex-col items-center gap-[2rem] text-center xl:sticky">
          <div ref={labelRef}>
            <SectionLabel2 text="Case Studies" textColor="text-black" />
          </div>

          <div className="case-study-heading">
            <SectionTitle label="Digital Done Right" />
          </div>

          <div className="case-study-desc max-w-[76.5rem]">
            <SectionDescription label="We’ve crafted websites and brands that blend design, development, and strategy into measurable success." />
          </div>
        </div>

        {/* Cards */}
        <div className="mt-20 hidden flex-col gap-[4rem] xl:flex">
          {caseStudies.slice(0, 4).map((cs, idx) => (
            <div
              key={idx}
              className="case-grid-card-animate sticky top-[35rem] xl:top-[28rem]" // 👈 adjust this to your header height
              style={{ zIndex: idx + 1 }}
            >
              <CaseStudiesGrid
                key={idx}
                className={idx % 2 === 1 ? "case-studies-grid-reverse" : ""}
                image={cs.image}
                title={cs.title}
                description={cs.description}
                slug={cs.slug}
                tags={cs.tags}
                technologies={cs.technologies}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Cards */}
      <div className="case-cta-card-animate mt-10 block w-full overflow-hidden lg:mt-20 xl:hidden">
        {/* <CaseStudiesMarquee /> */}
        <CaseStudiesSlider caseStudies={caseStudies} />
      </div>

      <div className="mx-auto mt-[5rem] max-w-[120rem] px-[2rem] xl:mt-[9rem] xl:px-[0rem]">
        <CtaSection1 />
      </div>
    </section>
  );
};

export default CaseStudiesSection;
