"use client";

import Carousel from "@/components/ui/Carousel";

const PartnerWithUs2Slider = ({ getThemeColor, service }) => {
  return (
    <Carousel
      items={service.card}
      breakpoints={{
        767: { slidesPerView: 2, spaceBetween: 0 },
        1024: { slidesPerView: 3, spaceBetween: 0 },
      }}
      slideClassName="!flex !h-auto !items-center !justify-center px-[1rem] pt-[.5rem] pb-[10rem]"
      renderItem={(item, idx) => {
        const theme = getThemeColor(idx);
        return (
          <div className="partner-with-us-2-card">
            <div className="flex h-full flex-col items-start p-[3rem] text-left">
              <div
                style={{
                  boxShadow: theme.shadow,
                  background: theme.color,
                }}
                className="inline-flex size-[4.8rem] min-w-max items-center justify-center rounded-[1rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white"
              >
                {idx + 1}
              </div>

              <h4 className="mt-[2rem] text-[2.2rem] leading-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                {item.title}
              </h4>

              <p className="mt-[1rem] mb-[2rem] text-[1.6rem] leading-[2.4rem] font-normal tracking-normal text-white">
                {item.description}
              </p>
            </div>
          </div>
        );
      }}
    />
  );
};

export default PartnerWithUs2Slider;
