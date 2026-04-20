"use client";

import Link from "next/link";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import { useState } from "react";

const LightFeatureCard2 = ({
  color = "",
  shadow = "",
  hoverShadow = "",
  icon,
  title = "",
  description = "",
  points = [],
  link = "",
  linkText = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const activeShadow = isHovered && hoverShadow ? hoverShadow : shadow;

  const cardStyle = {
    ...(color && { border: `1px solid ${color}` }),
    ...((shadow || hoverShadow) && { boxShadow: activeShadow || "none" }),
  };

  return (
    <>
      <div
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex h-full w-full flex-col justify-between gap-[4rem] rounded-[3rem] bg-white p-[3rem] transition-all duration-200"
      >
        {/* Head */}
        <div className="flex flex-col items-start text-left">
          {icon && (
            <i className="relative h-[6.3rem] w-[6.3rem] rounded-[1.5rem]">
              <div className="absolute top-0 left-0 z-[1] inline-flex h-[5.8rem] w-[5.8rem] items-center justify-center rounded-[1.3rem] border-white/20 bg-white/35 backdrop-blur-[1rem]">
                <img src={icon} className="h-[3rem] w-[3rem]" alt="Icon" />
              </div>

              <div
                style={{
                  background: color,
                }}
                className="absolute right-0 bottom-0 z-[0] h-[5.8rem] w-[5.8rem] rounded-[1.5rem]"
              />
            </i>
          )}

          {title && (
            <h4 className="mt-[3rem] text-[2.4rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-[#312749] xl:text-[2.6rem] xl:leading-[3rem]">
              {title}
            </h4>
          )}

          {description && (
            <p className="mt-[1rem] mb-[1.5rem] text-[1.6rem] leading-[2.4rem] font-normal text-[#625C70]">
              {description}
            </p>
          )}

          {points.length > 0 && (
            <ul className="flex flex-col items-start">
              {points.map((point, idx) => (
                <li
                  key={idx}
                  className="inline-flex items-center gap-[1.3rem] text-[1.6rem] leading-[2.8rem] tracking-normal text-[#625C70]"
                >
                  <i>
                    <CheckMarkIcon color={color} />
                  </i>

                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Footer */}
        {link && (
          <Link
            href={link}
            style={{
              color: color,
            }}
            className="group inline-flex gap-[.8rem] text-[1.6rem] leading-[2rem] font-semibold tracking-normal"
          >
            <span>{linkText}</span>
            <i className="relative top-[.5rem] left-[0rem] transition-all duration-200 group-hover:left-[.5rem]">
              <RightArrowIcon color={color} />
            </i>
          </Link>
        )}
      </div>
    </>
  );
};

export default LightFeatureCard2;
