"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import RightArrowIcon from "@/assets/icons/right-arrow-icon.svg";

const LogoPopup = ({ logo, popupImage, title, href }) => {
  const [activePopup, setActivePopup] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * -10;

      gsap.to(card, {
        rotateX,
        rotateY,
        transformPerspective: 1000,
        ease: "power2.out",
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        ease: "power3.out",
        duration: 0.6,
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setActivePopup(true)}
      onMouseLeave={() => setActivePopup(false)}
    >
      {/* Logo button */}
      <button
        onClick={() => setActivePopup(!activePopup)}
        className={`cursor-pointer transition-all duration-300 ${
          activePopup ? "opacity-100 grayscale-0" : "opacity-70 grayscale-100"
        }`}
      >
        <img
          src={logo}
          alt={`${title} Logo`}
          className="size-full object-contain"
        />
      </button>

      {/* Popup */}
      <div
        className={`absolute bottom-full left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
          activePopup
            ? "pointer-events-auto visible pb-[1.6rem] opacity-100"
            : "pointer-events-none invisible pb-[0rem] opacity-0"
        }`}
      >
        <div
          ref={cardRef}
          className="w-[27.5rem] overflow-hidden rounded-[1.6rem] bg-white shadow-[0px_8px_20px_0px_#00000040]"
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-[1.6rem]">
            <Image
              src={popupImage}
              alt={`${title} Popup Image`}
              width={275}
              height={194}
            />
          </div>

          {/* Content */}
          <div className="px-[1.7rem] pt-[1.8rem] pb-[2.4rem]">
            <Link
              href={href}
              className="group inline-flex cursor-pointer items-center"
            >
              {/* Text */}
              <div className="bg-text-primary relative z-[2] h-[4.4rem] overflow-hidden rounded-full px-[2.4rem] text-[1.6rem] font-semibold text-white">
                <span className="flex size-full items-center justify-center transition-all duration-200 group-hover:-translate-y-full">
                  View Case Study
                </span>

                <span className="flex size-full items-center justify-center transition-all duration-200 group-hover:-translate-y-full">
                  View Case Study
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
                      fill="#070707"
                    />
                  </svg>
                </i>

                {/* Arrow Icon */}
                <div className="bg-text-primary relative size-[4.4rem] overflow-hidden rounded-full">
                  <i className="absolute top-0 left-0 flex size-full items-center justify-center transition-all duration-200 group-hover:left-full">
                    <RightArrowIcon className="fill-white" />
                  </i>

                  <i className="absolute top-0 -left-full flex size-full items-center justify-center transition-all duration-200 group-hover:-left-0">
                    <RightArrowIcon className="fill-white" />
                  </i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoPopup;
