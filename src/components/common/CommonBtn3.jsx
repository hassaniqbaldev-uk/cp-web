"use client";
import Link from "next/link";
import RightArrowIcon from "@/assets/icons/right-arrow-icon.svg";

const CommonBtn3 = ({
  href,
  label,
  bgColor = "#141414",
  textColor = "#ffffff",
}) => {
  return (
    <Link href={href} className="group inline-flex cursor-pointer items-center">
      {/* Text */}
      <div
        className="relative z-[2] h-[4rem] min-w-max overflow-hidden rounded-[6rem] px-[2rem] text-[1.6rem] font-semibold md:h-[5rem] md:px-[3rem] md:text-[2rem]"
        style={{ background: bgColor, color: textColor }}
      >
        <span className="flex size-full items-center justify-center transition-all duration-200 group-hover:-translate-y-full">
          {label}
        </span>

        <span className="flex size-full items-center justify-center transition-all duration-200 group-hover:-translate-y-full">
          {label}
        </span>
      </div>

      {/* Wrapper (animated arrow) */}
      <div className="relative flex items-center justify-center">
        {/* Subtract Icon */}
        <i className="mx-[-.5rem]">
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.47559 0C3.85901 2.39049 6.44175 4 9.40234 4C12.3629 4 14.9457 2.39049 16.3291 0H18.4023V18H16.3291C14.9457 15.6095 12.3629 14 9.40234 14C6.44175 14 3.85901 15.6095 2.47559 18H0.402344V0H2.47559Z"
              fill={bgColor}
            />
          </svg>
        </i>

        {/* Arrow Icon */}
        <div
          className="relative size-[4rem] overflow-hidden rounded-full md:size-[5rem]"
          style={{ background: bgColor }}
        >
          <i className="absolute top-0 left-0 flex size-full items-center justify-center transition-all duration-200 group-hover:left-full">
            <RightArrowIcon style={{ fill: textColor }} />
          </i>

          <i className="absolute top-0 -left-full flex size-full items-center justify-center transition-all duration-200 group-hover:-left-0">
            <RightArrowIcon style={{ fill: textColor }} />
          </i>
        </div>
      </div>
    </Link>
  );
};

export default CommonBtn3;
