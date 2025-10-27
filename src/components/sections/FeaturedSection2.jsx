"use client";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CommonBtn3 from "../common/CommonBtn3";
import CheckIcon from "@/assets/icons/check-icon.svg";

const FeaturedSection2 = () => {
  const labelRef = useRef();
  const container = useRef();

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
    {
      scope: container,
    },
  );

  return (
    <section ref={container} className="relative">
      <div className="mx-auto flex max-w-[144rem] flex-col items-stretch overflow-hidden rounded-tl-[5rem] rounded-tr-[5rem] xl:flex-row">
        <div className="flex flex-col items-start bg-[#F7F0FE] px-[4rem] pt-[6.8rem] pb-[6.8rem] xl:w-[87.8rem] xl:pr-[7.1rem] xl:pb-[10rem] xl:pl-[11.9rem]">
          <div ref={labelRef}>
            <SectionLabel2
              text="Featured Categories"
              bgColor="bg-[#FFC300]"
              textColor="text-[#070707]"
            />
          </div>

          <h2 className="mt-[2.4rem] mb-[4rem] max-w-[110rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.03em] text-[#070707] md:text-[5.6rem] md:leading-[6.4rem]">
            Are you a well-established business in the UK or one that is just
            starting out? It makes no difference. We serve a variety of clients.
          </h2>

          <CommonBtn3
            label="About CreativePixels"
            href="/about"
            bgColor="#FF37B3"
          />
        </div>

        <div
          className="flex flex-col gap-[2rem] px-[4rem] pt-[6.8rem] pb-[10rem] xl:w-[56.2rem] xl:pt-[13.5rem] xl:pr-[15.6rem] xl:pb-[21.9rem] xl:pl-[6.5rem]"
          style={{
            background:
              "url('/images/ui-ux-hero-bg-gradient.webp') no-repeat center center/cover",
          }}
        >
          <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
            Our Website Capabilities
          </h4>

          <ul className="flex flex-wrap items-center gap-x-[2rem] gap-y-[1rem] xl:block">
            {[
              "Brand Personality",
              "Brand Guidelines",
              "Color Psychology",
              "Asset Creation",
              "Typography",
              "Competitor Analysis",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-[1.5rem]">
                <i className="inline-flex h-[2.4rem] min-w-[2.4rem] items-center justify-center rounded-full bg-white">
                  <CheckIcon className="h-[.75rem] w-[1.05rem] fill-black" />
                </i>

                <span className="text-[1.8rem] leading-[4.4rem] font-normal text-white">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection2;
