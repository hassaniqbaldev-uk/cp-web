"use client";

import Image from "next/image";
import LineStroke33 from "@/assets/decorative-elements/line-stroke-33.svg";
import RatingStar from "@/assets/icons/rating-star.svg";

const FeedbackSection = ({
  title = "Imaginative vision. Outstanding Design.",
  description = `"From beginning to end, it was an incredible experience. Working with the entire team was enjoyable due to their creativity and expertise. They completely understood our goals as a studio with a very ambitious and distinctive website, from concept to design. We are quite happy with the outcome.”`,
  author = "Jake Lin",
  projectType = "Website & Branding Project",
  avatar = "/images/feedback-avatar.png",
  image = "/images/feedback-card-img.png",
  reverse = false, // optional layout flip
  background = "linear-gradient(0deg, #070707, #070707),linear-gradient(119.9deg, #070707 1.18%, #212121 49.71%, #070707 100%)",
}) => {
  return (
    <section
      style={{ background }}
      className="relative px-[3rem] py-[5rem] xl:px-[0rem] xl:py-[7rem]"
    >
      {/* Decorative line background */}
      <div className="absolute inset-0 z-[0]">
        <LineStroke33 className="absolute right-[-45rem] bottom-[-6.8rem] w-full" />
      </div>

      {/* Grid Layout */}
      <div
        className={`relative z-[1] mx-auto grid max-w-[80rem] grid-cols-1 items-center gap-[3.3rem] xl:h-[56rem] xl:max-w-[122.3rem] xl:grid-cols-2 ${
          reverse ? "xl:flex-row-reverse" : ""
        }`}
      >
        {/* Text Card */}
        <div className="feedback-card h-full w-full p-[2rem] md:px-[3.5rem] md:py-[4.4rem]">
          <RatingStar />

          <h4 className="mt-[2rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem]">
            {title}
          </h4>

          <p className="mt-[2rem] mb-[5rem] text-[1.8rem] leading-[2.6rem] font-normal text-white">
            {description}
          </p>

          <div className="flex items-center gap-[1.2rem] text-left">
            <div className="relative h-[5.6rem] min-w-[5.6rem] overflow-hidden rounded-full">
              <Image
                src={avatar}
                alt={author}
                width={56}
                height={56}
                className="size-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-[1.8rem] leading-[2.6rem] font-normal text-[#f6f6f6]">
                {author}
              </span>
              <span className="text-[1.6rem] leading-[2.4rem] font-medium text-[#f6f6f6]">
                {projectType}
              </span>
            </div>
          </div>
        </div>

        {/* Image Card */}
        <div className="feedback-card h-full w-full p-[2rem]">
          <Image
            src={image}
            width={585}
            height={520}
            alt={title}
            className="size-full rounded-[2rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
