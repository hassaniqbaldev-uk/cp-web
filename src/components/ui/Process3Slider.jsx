"use client";

import Carousel from "@/components/ui/Carousel";
import Image from "next/image";

const Process3Slider = ({ PROCESS_3_CARD }) => {
  return (
    <Carousel
      items={PROCESS_3_CARD}
      breakpoints={{
        767: { slidesPerView: 2, spaceBetween: 0 },
        1024: { slidesPerView: 3, spaceBetween: 0 },
      }}
      slideClassName="!flex !h-auto !justify-center pb-[5rem]"
      renderItem={(item) => (
        <div className="flex w-full flex-col items-center gap-[3.8rem]">
          <div className="relative flex w-full justify-center">
            <hr className="absolute top-1/2 z-[0] w-full -translate-y-1/2 border-t-2 border-[#F1F1F3]" />

            <div
              style={{
                boxShadow: "0px 12px 30px 0px #0000002E",
                borderColor: item.color,
              }}
              className="relative z-[1] inline-flex size-[4.8rem] items-center justify-center rounded-full border-2 bg-white text-center text-[1.8rem] font-semibold tracking-[-0.02em] text-[#312749]"
            >
              0{item.step}
            </div>
          </div>

          <div className="flex w-full flex-col items-center text-center">
            <i
              style={{
                background: item.color,
                boxShadow: item.boxShadow,
              }}
              className="inline-flex size-[6.4rem] items-center justify-center rounded-[1.6rem]"
            >
              <Image
                src={item.icon}
                width={item.iconWidth}
                height={item.iconHeight}
                alt=""
                unoptimized
              />
            </i>

            <h4 className="mt-[3rem] mb-[2.2rem] text-[1.8rem] leading-[2.4rem] font-bold tracking-[-0.02em] text-[#312749]">
              {item.title}
            </h4>

            <p className="max-w-[30rem] text-[1.6rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70]">
              {item.description}
            </p>
          </div>
        </div>
      )}
    />
  );
};

export default Process3Slider;
