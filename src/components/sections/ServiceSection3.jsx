"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SectionLabel2 from "../common/SectionLabel2";
import { useRef } from "react";
import Image from "next/image";
import LineStroke35 from "@/assets/decorative-elements/line-stroke-35.svg";

const ServiceSection3 = () => {
  const container = useRef();
  const labelRef = useRef();

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
      className="relative px-[3rem] py-[8rem] pb-[8.5rem] xl:px-[0rem] xl:py-[10rem]"
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke35 className="absolute top-[6rem] left-[-95rem] w-full" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center gap-[2rem] text-center">
          <div ref={labelRef}>
            <SectionLabel2
              text="Web Design Services"
              bgColor="bg-[#FF37B3]"
              textColor="text-[#ffffff]"
            />
          </div>

          <h4 className="text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] text-[#070707] md:text-[6rem] md:leading-[7.4rem]">
            Designs for Social Media
          </h4>
        </div>

        <div className="mt-[5rem] grid grid-cols-1 grid-rows-1 gap-[2rem] md:h-[45rem] md:grid-cols-4 md:grid-rows-2 lg:h-[55rem] xl:h-[66.9rem] xl:gap-[3.3rem]">
          <div className="size-full rounded-[2rem] md:col-span-2 md:row-span-2">
            <Image
              src="/images/web-design-service-3-card-img-1.png"
              width={585}
              height={669}
              priority
              alt="Image"
              className="size-full"
            />
          </div>

          <div className="size-full rounded-[2rem]">
            <Image
              src="/images/web-design-service-3-card-img-2.png"
              width={276}
              height={318}
              priority
              alt="Image"
              className="size-full"
            />
          </div>

          <div className="size-full rounded-[2rem]">
            <Image
              src="/images/web-design-service-3-card-img-3.png"
              width={276}
              height={318}
              priority
              alt="Image"
              className="size-full"
            />
          </div>

          <div className="size-full rounded-[2rem]">
            <Image
              src="/images/web-design-service-3-card-img-4.png"
              width={276}
              height={318}
              priority
              alt="Image"
              className="size-full"
            />
          </div>

          <div className="size-full rounded-[2rem]">
            <Image
              src="/images/web-design-service-3-card-img-5.png"
              width={276}
              height={318}
              priority
              alt="Image"
              className="size-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection3;
