"use client";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LineStroke31 from "@/assets/decorative-elements/line-stroke-31.svg";
import LineStroke32 from "@/assets/decorative-elements/line-stroke-32.svg";
import CheckIcon from "@/assets/icons/check-icon.svg";

const KeyBenefitSection3 = () => {
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
    <section
      ref={container}
      style={{
        background:
          "linear-gradient(119.9deg, #070707 1.18%, #212121 49.71%, #070707 100%)",
      }}
      className="relative my-[-5rem] overflow-hidden px-[3rem] py-[10rem] xl:px-[0rem]"
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke31 className="absolute top-[2rem] left-[-103.9rem] w-full" />
      </div>

      <div className="absolute inset-0 z-[1]">
        <LineStroke32 className="absolute top-[1rem] left-[40rem] w-full" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center justify-between gap-[4rem] lg:flex-row">
          <div className="flex w-full flex-col items-center text-center lg:w-[56.8rem] lg:items-start lg:text-left">
            <div ref={labelRef}>
              <SectionLabel2 text="Key Benefits" bgColor="bg-[#FF37B3]" />
            </div>

            <h2 className="mt-[2.4rem] mb-[2rem] text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] text-white md:text-[6rem] md:leading-[7.4rem]">
              Benefits of Branding Design Services
            </h2>

            <ul className="flex flex-col gap-[1.2rem]">
              {[
                "Vivamus sed mi eu nulla malesuada aliquet.",
                "Vivamus sed mi eu nulla malesuada aliquet.",
                "Vivamus sed mi eu nulla malesuada aliquet.",
                "Vivamus sed mi eu nulla malesuada aliquet.",
                "Vivamus sed mi eu nulla malesuada aliquet.",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-[1.5rem] text-[1.8rem] font-normal text-white"
                >
                  <i className="inline-flex h-[3.2rem] min-w-[3.2rem] items-center justify-center rounded-full bg-[#FF8630]">
                    <CheckIcon className="h-[1rem] w-[1.4rem] fill-white" />
                  </i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-[25rem] w-full overflow-hidden rounded-[2rem] bg-amber-300 md:h-[52rem] lg:w-[58.5rem]">
            <img
              src="/images/key-benefits-card-img-2.png"
              alt="Image"
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitSection3;
