"use client";

import Carousel from "@/components/ui/Carousel";

const ProcessSlider = ({ PROCESS_CARD }) => {
  return (
    <Carousel
      items={PROCESS_CARD}
      breakpoints={{
        767: { slidesPerView: 2, spaceBetween: 0 },
        1024: { slidesPerView: 3, spaceBetween: 0 },
      }}
      slideClassName="!flex !h-auto !justify-center pt-[8rem] pb-[5rem]"
      renderItem={(item) => (
        <div className="flex h-full flex-col items-center gap-[3.8rem]">
          <div className="process-card flex flex-col justify-center gap-[3.5rem]">
            <div
              style={{
                boxShadow: item.boxShadow,
                backgroundColor: item.color,
              }}
              className="absolute top-[-3rem] left-[2.8rem] z-[10] inline-flex size-[5.9rem] items-center justify-center rounded-[1.6rem] text-center text-[2.6rem] font-extrabold tracking-[-0.02em] text-white"
            >
              0{item.step}
            </div>

            <div className="flex h-full flex-col items-start px-[2.8rem] py-[3rem] text-left">
              <h5
                style={{ color: item.color }}
                className="mt-[12px] mb-[8px] text-[1.8rem] leading-[2.6rem] font-bold"
              >
                {item.title}
              </h5>

              <p className="text-[1.6rem] leading-[2.4rem] font-normal text-white">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default ProcessSlider;
