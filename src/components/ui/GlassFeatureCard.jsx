"use client";

import Link from "next/link";
import RightArrowIcon from "../icons/RightArrowIcon";

const GlassFeatureCard = ({
  color = "",
  shadow = "",
  icon,
  title = "",
  description = "",
  link = "",
  linkText = "",
  number = "",
}) => {
  return (
    <div className="relative h-full w-full rounded-[3rem]">
      {/* Gradient border layer */}
      <div
        aria-hidden
        style={{
          background:
            "linear-gradient(149.03deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 51.06%, rgba(255,255,255,0.6) 98.34%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
          borderRadius: "3rem",
        }}
        className="pointer-events-none absolute inset-0 z-[1]"
      />

      {/* Actual content */}
      <div className="relative z-[2] flex h-full w-full flex-col justify-between gap-[4rem] rounded-[3rem] bg-white/15 p-[3rem] transition-all duration-200">
        {/* Head */}
        <div className="flex flex-col items-start text-left">
          {icon && (
            <i
              style={{ backgroundColor: color, boxShadow: shadow }}
              className="relative inline-flex h-[5.8rem] w-[5.8rem] items-center justify-center rounded-[1.3rem]"
            >
              <img src={icon} className="h-[3rem] w-[3rem]" alt="Icon" />
            </i>
          )}

          {number && (
            <div
              style={{ backgroundColor: color, boxShadow: shadow }}
              className="relative inline-flex h-[5.8rem] w-[5.8rem] items-center justify-center rounded-[1.3rem]"
            >
              <span className="text-[2.6rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-white">
                {number}
              </span>
            </div>
          )}

          {title && (
            <h4 className="mt-[3rem] text-[2.4rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-white xl:text-[2.6rem] xl:leading-[3rem]">
              {title}
            </h4>
          )}

          {description && (
            <p className="mt-[1rem] text-[1.6rem] leading-[2.4rem] font-normal text-white">
              {description}
            </p>
          )}
        </div>

        {/* Footer */}
        {link && (
          <Link
            href={link}
            className="group inline-flex gap-[.8rem] text-[1.6rem] leading-[2rem] font-semibold tracking-normal text-white"
          >
            <span>{linkText}</span>
            <i className="relative top-[.5rem] left-[0rem] transition-all duration-200 group-hover:left-[.5rem]">
              <RightArrowIcon color="#ffffff" />
            </i>
          </Link>
        )}
      </div>
    </div>
  );
};

export default GlassFeatureCard;
