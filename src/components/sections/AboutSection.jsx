"use client";
import Image from "next/image";
import CommonBtn3 from "../common/CommonBtn3";
import { useRef } from "react";
import { aboutCardData } from "@/constants/homePage";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import CLetter2 from "@/assets/decorative-elements/c-letter-2";
import { useGSAP } from "@gsap/react";

const AboutSection = () => {
  const container = useRef();

  useGSAP(
    () => {
      const splitDesc = new SplitText(".about-desc", {
        type: "lines",
        linesClass: "split-line",
      });

      splitDesc.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.className = "overflow-hidden";
        line.parentNode.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

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
            trigger: ".about-desc",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".about-cta",
        { opacity: 0 },
        {
          opacity: 1,

          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-cta",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".about-grid-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: {
            each: 0.2,
            from: "start",
          },
          scrollTrigger: {
            trigger: ".about-grid-card",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );
      return () => {
        splitDesc.revert();
      };
    },
    { scope: container },
  );

  return (
    <section ref={container} className="relative py-[5rem] xl:py-[8rem]">
      {/* Bg Element */}
      <div className="absolute inset-0 z-[0] hidden overflow-hidden xl:block">
        <CLetter2 className="absolute top-[3.1rem] right-[-18.341rem] h-[60.3rem] w-[56rem]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[120rem] flex-col items-center px-[3rem] xl:items-start xl:px-[0rem]">
        <p className="about-desc mb-[3rem] max-w-[99rem] text-center text-[1.4rem] leading-[2rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[3rem] md:leading-[4rem] lg:text-[3.4rem] lg:leading-[4.8rem] xl:text-left">
          We believe every website and brand should work harder for the people
          behind it. Since 2014, <br />
          <span className="mt-[1rem] inline-flex text-[#EE8D00] md:mt-[2rem]">
            Creative Pixels
          </span>{" "}
          has delivered WordPress web design, creative branding, and ongoing
          support for <span className="text-[#3078FF]">businesses</span> in the
          UK, US, and Australia building{" "}
          <span className="text-[#FF37B3]">digital experiences</span> that are
          easy to use, simple to manage, and designed for lasting growth.
        </p>

        <div className="about-cta">
          <CommonBtn3 href="/about" label="About CreativePixels" />
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-[5rem] flex max-w-[120rem] flex-col gap-[1.8rem] px-[3rem] lg:mt-[10rem] xl:flex-row xl:px-[0rem] 2xl:max-w-[136rem]">
        <div className="about-grid-card relative -translate-y-8 transform overflow-hidden opacity-0 xl:w-[62.9rem]">
          <div className="relative z-[1] flex h-full flex-col justify-between gap-[2rem] overflow-hidden rounded-[2rem]">
            <h3 className="absolute top-[1rem] left-1/2 z-[10] w-full -translate-x-1/2 text-center text-[2.2rem] leading-[2.6rem] font-semibold tracking-[-0.02em] text-white md:top-[5rem] md:text-[3.4rem] md:leading-[4rem] xl:top-[3rem] xl:left-[4rem] xl:-translate-x-0 xl:text-left">
              We create <br /> exceptional websites
            </h3>

            <Image
              src="/images/about-main-img.png"
              width={629}
              height={611}
              alt="Image"
              className="size-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[1.5rem] md:grid-cols-2 xl:w-[70.5rem]">
          {aboutCardData.map((item, idx) => (
            <div
              key={idx}
              className="about-card about-grid-card flex flex-col items-center justify-between gap-[2rem] transition-colors duration-300 xl:items-start"
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = item.hoverColor)
              }
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
            >
              <item.icon className="size-[5.5rem]" />

              <h4 className="max-w-[22rem] text-center text-[2.8rem] leading-[3.8rem] font-semibold tracking-[-0.02em] md:text-[2.5rem] md:leading-[3.5rem] xl:text-left">
                {item.title}
              </h4>

              <p className="text-center xl:text-left">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
