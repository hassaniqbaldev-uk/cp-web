"use client";
import Image from "next/image";
import PitchDeckInput from "../common/PitchDeckInput";
import SectionTitle from "../common/SectionTitle";
import Link from "next/link";
import SectionLabel2 from "../common/SectionLabel2";
import { pitchDeckLogoData } from "@/constants/aboutPage";
import FilledMailIcon from "@/assets/icons/filled-mail-icon.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const PitchDeckSection = () => {
  const labelRef = useRef();
  const headingRef = useRef();
  const headingRef2 = useRef();
  const descRef = useRef();
  const formRef = useRef();
  const phoneImgRef = useRef();
  const logoRef = useRef();

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

    gsap.to(headingRef2.current, {
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

    gsap.to(formRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(phoneImgRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: phoneImgRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.fromTo(
      gsap.utils.toArray(logoRef.current.children),
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1, // 👈 Faster stagger
        ease: "power2.out",
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <section className="relative mx-auto flex max-w-[152rem] justify-end overflow-hidden">
      <div className="flex w-full max-w-[128rem] flex-col justify-between lg:flex-row 2xl:max-w-[132.1rem]">
        <div className="flex w-full flex-col items-center px-[3rem] py-[5rem] text-center lg:max-w-[55.6rem] lg:items-start lg:py-[8.9rem] lg:text-left xl:px-[0rem]">
          <div ref={labelRef} className="rotate-[-2deg]">
            <SectionLabel2
              text="Pitch Deck"
              bgColor="bg-[#FFC300]"
              textColor="text-black"
            />
          </div>

          <div
            ref={headingRef}
            className="mt-[1.1rem] opacity-0 lg:max-w-[54rem]"
          >
            <SectionTitle label="Get our agency pitch deck ready to share with your team." />
          </div>

          <div
            ref={descRef}
            className="mt-[2rem] mb-[2.6rem] text-[1.8rem] leading-[2.6rem] font-normal text-[#333333] opacity-0 lg:max-w-[60rem]"
          >
            Our pitch deck gives you the highlights: the projects we’ve
            delivered, the results we’ve driven, and what it’s like to work with
            us — all in one shareable PDF.
          </div>

          <form
            ref={formRef}
            action=""
            className="flex w-full flex-col gap-[1rem] opacity-0 md:flex-row"
          >
            <PitchDeckInput placeholder="Full Name" type="text" />

            <PitchDeckInput placeholder="Email Address" type="text" />

            <button
              type="submit"
              aria-label="Submit form"
              className="inline-flex h-[5rem] min-w-[6.2rem] cursor-pointer items-center justify-center rounded-[1.6rem] border-[2px] border-transparent bg-transparent [background:linear-gradient(#fff,#fff)padding-box,linear-gradient(90deg,#FFE400_0%,#FF37B3_100%)border-box] md:h-[6.2rem]"
            >
              <FilledMailIcon aria-hidden="true" />
            </button>
          </form>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-[3rem] bg-[#EAD9FB] p-[3rem] pr-[4rem] lg:max-w-[48.7rem] lg:items-end lg:gap-[4.3rem] lg:p-[0rem] lg:pr-[6rem]">
          <h3
            ref={headingRef2}
            className="text-[1.8rem] font-semibold text-[#FF37B3] opacity-0"
          >
            Trusted by:
          </h3>

          <div
            ref={logoRef}
            className="flex flex-wrap items-end justify-center gap-[6rem] md:flex-row lg:flex-col"
          >
            {pitchDeckLogoData.map((item, idx) => (
              <div key={idx} className="">
                <Link href={item.link}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={phoneImgRef}
        className="pointer-events-none absolute right-[18rem] bottom-[-0.2rem] hidden size-[45rem] opacity-0 select-none lg:block xl:right-[24.3rem] xl:size-[58rem]"
      >
        <Image
          src="/images/pitch-deck-phone-element.png"
          alt="Pitch Deck Phone Element"
          height={580}
          width={580}
          priority
        />
      </div>
    </section>
  );
};

export default PitchDeckSection;
