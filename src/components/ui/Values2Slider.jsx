"use client";

import Carousel from "@/components/ui/Carousel";
import Image from "next/image";

const Values2Slider = ({ valuesCards }) => {
  return (
    <Carousel
      items={valuesCards}
      breakpoints={{
        767: { slidesPerView: 2, spaceBetween: 0 },
        1024: { slidesPerView: 3, spaceBetween: 0 },
      }}
      slideClassName="!flex !h-auto !justify-center px-[1rem] pb-[5rem]"
      renderItem={(item) => (
        <div
          style={{
            boxShadow: item.boxShadow,
            borderColor: item.color,
          }}
          className="flex h-full w-full flex-col items-start justify-between rounded-[3rem] border bg-white px-[3rem] pt-[3.1rem] pb-[2.8rem] text-left backdrop-blur-[10px] transition-all duration-200"
        >
          <div className="relative size-[6.3rem]">
            <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
              <i>
                <Image
                  src={item.icon}
                  alt="Icon"
                  width={30}
                  height={30}
                  unoptimized
                />
              </i>
            </div>
            <div
              style={{
                background: item.color,
              }}
              className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
            />
          </div>

          <div>
            <h3 className="mt-[3rem] mb-[1rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-[#312749]">
              {item.title}
            </h3>

            <p className="text-[1.6rem] leading-[2.4rem] font-normal text-[#625C70]">
              {item.description}
            </p>
          </div>
        </div>
      )}
    />
  );
};

export default Values2Slider;
