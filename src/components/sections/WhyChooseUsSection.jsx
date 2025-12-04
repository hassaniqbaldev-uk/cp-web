"use client";
import SectionTitle from "../common/SectionTitle";
import SectionLabel2 from "../common/SectionLabel2";
import CommonBtn3 from "../common/CommonBtn3";
import WhyChooseUsCardSlider from "../common/WhyChooseUsCardSlider";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const WhyChooseUsSection = () => {
  const labelRef = useRef();
  const headingRef = useRef();
  const descRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    const cards = gsap.utils.toArray(".rotated-card");

    // Wobble/shake animation
    gsap.to(labelRef.current, {
      rotation: "+=3", // Rotate 3 degrees back and forth
      duration: 0.15, // Very short duration for quick wobble
      yoyo: true, // Go back and forth
      repeat: -1, // Infinite repeat
      ease: "sine.inOut", // Best ease for wobble effects
      repeatDelay: 0.5, // Small pause between wobbles
    });

    gsap.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(descRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: descRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

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

    // Set initial stacked position (all cards on top of each other)
    gsap.set(cards, {
      opacity: 0,
      scale: 0.8,
      x: -100, // Start slightly off-screen to the left
      y: -50, // Start slightly above
      rotation: -15, // Slight rotation for deck effect
      zIndex: 10, // All cards stacked high initially
    });

    // Deal cards to their final positions with stagger
    cards.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotation: index === 0 ? 12.19 : index === 1 ? -9.32 : 5.82,
        top: index === 0 ? "2.2rem" : index === 1 ? "auto" : "auto",
        left: index === 0 ? "120.33px" : index === 1 ? "1.9rem" : "auto",
        bottom: index === 0 ? "auto" : index === 1 ? "1.9rem" : "1.2rem",
        right: index === 0 ? "auto" : index === 1 ? "auto" : "-5rem",
        zIndex: index === 0 ? 3 : index === 1 ? 2 : 1, // 🔥 top → bottom
        duration: 1.2,
        delay: index * 0.4,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card.parentElement,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <section className="why-choose-us-sec relative px-[3rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="mx-auto flex max-w-[120rem] flex-col items-center gap-[3.6rem] xl:flex-row 2xl:max-w-[124rem]">
        <div className="flex flex-col items-center text-center xl:w-[58rem] xl:items-start xl:text-left">
          <div className="flex flex-col items-center gap-[2.1rem] xl:items-start">
            <div ref={labelRef} className="rotate-[2deg]">
              <SectionLabel2
                text="Why Choose Us"
                bgColor="bg-[#FFE400]"
                textColor="text-text-primary"
              />
            </div>

            <div ref={headingRef} className="opacity-0">
              <SectionTitle
                label="Why Clients Choose Creative Pixels"
                textColor="text-white"
              />
            </div>
          </div>

          <div className="mt-[3rem] mb-[4rem] overflow-hidden text-[1.8rem] leading-[2.6rem] font-normal text-white">
            <div ref={descRef} className="opacity-0">
              We don’t just build websites and brands — we build partnerships.
              Here’s what sets us apart from the typical agency experience.
            </div>
          </div>

          <div ref={btnRef} className="opacity-0">
            <CommonBtn3 href="/contact" label="Request a Callback" />
          </div>
        </div>

        <div className="relative hidden flex-col gap-[2rem] md:flex md:h-[53rem] md:w-[62rem]">
          <div className="rotated-card top-[2.2rem] left-[120.33px] flex w-[30rem] flex-col justify-center gap-[1.6rem] rounded-[1.557rem] bg-[#FFC300] p-[2rem] md:absolute md:rotate-[12.19deg]">
            <span className="text-[2.2rem] leading-[3.2rem] font-medium">
              01
            </span>

            <h3 className="max-w-[20.539rem] text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em]">
              Strategy-First Design
            </h3>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              Every project starts with a clear plan. From WordPress web design
              to branding, we design with purpose so your site isn’t just
              beautiful – it works for your business.
            </p>
          </div>

          <div className="rotated-card bottom-[1.9rem] left-[1.9rem] z-[1] flex w-[30rem] flex-col justify-center gap-[1.6rem] rounded-[1.557rem] bg-[#FF8630] p-[2rem] pb-[3rem] md:absolute md:rotate-[-9.32deg]">
            <span className="text-[2.2rem] leading-[3.2rem] font-medium">
              02
            </span>

            <h3 className="max-w-[20.539rem] text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em]">
              Tailored to You
            </h3>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              No templates, no shortcuts. Every brand is unique, and so are our
              solutions – whether it’s a custom website, visual identity, or
              growth strategy.
            </p>
          </div>

          <div className="rotated-card right-[-5rem] bottom-[1.2rem] z-[3] flex w-[30rem] flex-col justify-center gap-[1.6rem] rounded-[1.557rem] bg-[#F14A58] p-[2rem] pb-[3rem] md:absolute md:rotate-[5.82deg]">
            <span className="text-[2.2rem] leading-[3.2rem] font-medium">
              03
            </span>

            <h3 className="max-w-[17.776rem] text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em]">
              Support That Lasts
            </h3>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              Our job doesn’t end at launch. With ongoing support, updates, and
              maintenance, we’re here to keep your digital presence strong for
              the long run.
            </p>
          </div>
        </div>

        <div className="block w-full md:hidden">
          <WhyChooseUsCardSlider />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
