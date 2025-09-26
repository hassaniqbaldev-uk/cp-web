"use client";
import CaseStudiesGrid from "../common/CaseStudiesGrid";
import SectionDescription from "../common/SectionDescription";
import SectionTitle from "../common/SectionTitle";
import SectionLabel2 from "../common/SectionLabel2";
import CaseStudiesSlider from "../common/CaseStudiesSlider";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const CaseStudiesSection = ({ caseStudies }) => {
  const labelRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const gridRef = useRef();

  useEffect(() => {
    // Wobble/shake animation
    gsap.to(labelRef.current, {
      rotation: "+=3", // Rotate 3 degrees back and forth
      duration: 0.15, // Very short duration for quick wobble
      yoyo: true, // Go back and forth
      repeat: -1, // Infinite repeat
      ease: "sine.inOut", // Best ease for wobble effects
      repeatDelay: 0.5, // Small pause between wobbles
    });

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

    gsap.to(descRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: descRef.current,
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
  }, []);
  return (
    <section className="relative pt-[5rem] xl:pt-[10rem]">
      <div className="relative mx-auto max-w-[120rem] px-[3rem] xl:px-[0rem]">
        <div className="top-[6rem] flex flex-col items-center gap-[2rem] text-center xl:sticky">
          <div ref={labelRef} className="rotate-[-2deg]">
            <SectionLabel2 text="Case Studies" textColor="text-black" />
          </div>

          <div ref={titleRef} className="opacity-0">
            <SectionTitle label="Digital Done Right" />
          </div>

          <div ref={descRef} className="max-w-[76.5rem] opacity-0">
            <SectionDescription label="We’ve crafted websites and brands that blend design, development, and strategy into measurable success." />
          </div>
        </div>

        {/* Cards */}
        <div
          ref={gridRef}
          className="mt-20 hidden flex-col gap-[4rem] opacity-0 xl:flex"
        >
          {caseStudies.slice(0, 4).map((cs, idx) => (
            <div
              key={idx}
              className="sticky top-[35rem] xl:top-[28rem]" // 👈 adjust this to your header height
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
      <div className="mt-10 block w-full overflow-hidden lg:mt-20 xl:hidden">
        {/* <CaseStudiesMarquee /> */}
        <CaseStudiesSlider caseStudies={caseStudies} />
      </div>
    </section>
  );
};

export default CaseStudiesSection;
