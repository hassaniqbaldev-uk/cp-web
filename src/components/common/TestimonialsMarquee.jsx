"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import RatingStar from "@/assets/icons/rating-star.svg";
import {
  testimonialsCardData,
  testimonialsCardData2,
} from "@/constants/globals";

const TestimonialsMarquee = () => {
  return (
    <>
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        direction="right"
        className="testimonials-marquee overflow-hidden"
      >
        {testimonialsCardData2.map((item, idx) => (
          <div
            key={idx}
            className="testimonials-card mx-[1.65rem] flex h-full w-[30rem] flex-col justify-between md:w-[40rem]"
          >
            <div>
              {/* Rating Stars */}
              <div className="relative h-[2.042rem] w-[11.379rem]">
                <RatingStar />
              </div>

              {/* Review Text */}
              <p className="mt-[1.958rem] mb-[4.042rem] text-[1.8rem] leading-[2.6rem] font-normal text-white">
                {item.review}
              </p>
            </div>

            {/* Author Info */}
            <div className="flex flex-col gap-[1.2rem]">
              <div className="relative size-[5.6rem] overflow-hidden rounded-full">
                <Image
                  src={item.authorImage}
                  alt={item.authorName}
                  width={56}
                  height={56}
                  className="size-full object-contain object-center"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-[1.8rem] leading-[2.6rem] font-normal text-[#f6f6f6]">
                  {item.authorName}
                </span>
                <span className="text-[1.6rem] leading-[2.4rem] font-medium text-[#f6f6f6]/50">
                  {item.authorRole}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default TestimonialsMarquee;
