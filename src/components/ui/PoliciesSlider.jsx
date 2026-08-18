"use client";

import Carousel from "@/components/ui/Carousel";
import RightArrowIcon from "../icons/RightArrowIcon";
import Link from "next/link";
import Image from "next/image";

const PoliciesSlider = ({ legal }) => {
  return (
    <Carousel
      items={legal}
      breakpoints={{
        767: { slidesPerView: 2, spaceBetween: 0 },
        1024: { slidesPerView: 3, spaceBetween: 0 },
      }}
      slideClassName="!flex !h-auto !items-center !justify-center px-[1rem] pb-[10rem]"
      renderItem={(item) => (
        <div
          style={{
            borderColor: item.color,
          }}
          className="flex h-full w-full flex-col justify-between rounded-[3rem] border bg-white px-[3rem] pt-[3.1rem] pb-[2.8rem] transition-all duration-300"
        >
          <div className="flex flex-col items-start">
            {/* Icon */}
            <div className="relative size-[6.3rem]">
              <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                <Image
                  src={item.icon.asset.url}
                  alt={item.title}
                  width={30}
                  height={30}
                  unoptimized
                />
              </div>

              <div
                className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                style={{ backgroundColor: item.color }}
              />
            </div>

            <h3 className="mt-[3rem] text-[2.6rem] font-semibold text-[#312749]">
              {item.title}
            </h3>

            <p className="mt-[1rem] mb-[3.5rem] text-[1.6rem] text-[#625C70]">
              {item.excerpt}
            </p>
          </div>

          <Link
            href={`/legal/${item.slug.current}`}
            className="inline-flex items-center gap-[.8rem] text-[1.6rem] font-semibold"
            style={{ color: item.color }}
          >
            More Details
            <RightArrowIcon color={item.color} />
          </Link>
        </div>
      )}
    />
  );
};

export default PoliciesSlider;
