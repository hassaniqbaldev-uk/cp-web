"use client";

import Carousel from "@/components/ui/Carousel";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import Image from "next/image";

const Expertise3Slider = ({ service, getThemeColor }) => {
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
          <div
            style={{
              borderColor: theme.color,
            }}
            className="flex h-full w-full flex-col rounded-[3rem] border bg-white px-[3rem] pt-[3.1rem] pb-[2.8rem] transition-all duration-300"
          >
            {/* Icon */}
            <div className="relative size-[6.3rem]">
              <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                <Image
                  src={item.icon.asset.url}
                  alt="Icon"
                  width={35}
                  height={35}
                  unoptimized
                />
              </div>

              <div
                className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                style={{ backgroundColor: theme.color }}
              />
            </div>

            <h3 className="mt-[3rem] mb-[1rem] text-[2.6rem] font-semibold text-[#312749]">
              {item.title}
            </h3>

            <p className="text-[1.6rem] text-[#625C70]">{item.description}</p>

            {Array.isArray(item.listItem) && item.listItem.length > 0 && (
              <>
                <hr className="my-[2rem] w-full border-t border-[#E4E3E8]" />

                <ul className="flex flex-col items-start">
                  {item.listItem.map((list, idx) => (
                    <li
                      key={idx}
                      className="inline-flex items-center gap-[1.3rem] text-[1.6rem] leading-[2.8rem] tracking-normal text-[#625C70]"
                    >
                      <i>
                        <CheckMarkIcon color={theme.color} />
                      </i>
                      <span>{list.label}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        );
      }}
    />
  );
};

export default Expertise3Slider;
