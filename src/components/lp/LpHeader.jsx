"use client";

import Link from "next/link";
import Logo from "../decorative-elements/Logo";
import RightArrowIcon from "../icons/RightArrowIcon";
import PhoneIcon from "../icons/PhoneIcon";
import { motion } from "framer-motion";
import { MotionEffect } from "../effects/motion-effect";
import { useEffect, useState } from "react";

const LpHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const slideUp = {
    initial: { y: "0%" },
    hover: { y: "-130%" },
  };

  const slideFromBottom = {
    initial: { y: "100%" },
    hover: { y: "0%" },
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // sticky after 50px
      setIsSticky(currentScrollY > 50);

      // hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 z-[500] w-full transition-all duration-200 ease-out ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* Sticky Contact */}
      <Link
        href="tel:01618202667"
        className="absolute top-0 left-0 z-[500] block w-full bg-[#FF37B3] py-[.5rem] text-center text-[1.6rem] leading-[2.6rem] font-semibold text-white md:hidden"
      >
        Call Us: 0161 820 2667
      </Link>

      <header className="w-full px-[2rem] pt-[6rem] md:pt-[4rem] xl:px-[0rem]">
        <MotionEffect
          slide={{ direction: "down" }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          fade
          zoom
        >
          <div
            className={`container flex items-center justify-between gap-[4rem] transition-all duration-200 ease-out ${isSticky ? "w-full rounded-[20rem] bg-[white] px-[1rem] py-[1rem] shadow-[4px_8px_36px_0px_#0000001f] md:w-[60rem] md:px-[2rem] xl:w-[80rem]" : " w-full bg-[transparent] px-[0rem] py-[0rem] shadow-none"}`}
          >
            <div>
              <Logo
                width="230"
                height="90"
                className={`logo h-[4rem] w-auto transition-all duration-200 ease-out ${isSticky ? "fill-black md:h-[5rem] xl:h-[7rem]" : " fill-white md:h-[6rem] xl:h-[9rem]"}`}
              />
            </div>

            <div
              className={`hidden items-center justify-between gap-[2rem] rounded-[3.8rem] bg-white/18 backdrop-blur-[10px] transition-all duration-200 ease-out xl:flex ${isSticky ? "px-[0rem] py-[0rem]" : "px-[2.6rem] py-[1.5rem]"}`}
            >
              <div className="min-w-max">
                <motion.div
                  initial="initial"
                  whileHover="hover"
                  className="inline-flex"
                >
                  <Link
                    href="tel:01618202667"
                    className="inline-flex items-center justify-center"
                  >
                    {/* TEXT PILL */}
                    <span className="relative inline-flex h-[4rem] items-center justify-center overflow-hidden rounded-[7rem] bg-[#FF37B3] px-[2.4rem] text-[1.4rem] font-bold text-white md:h-[4.6rem] md:px-[2.7rem] md:text-[2.2rem]">
                      <motion.span
                        variants={slideUp}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="block"
                      >
                        0161 820 2667
                      </motion.span>

                      <motion.span
                        variants={slideFromBottom}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        0161 820 2667
                      </motion.span>
                    </span>

                    {/* CONNECTOR SVG */}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-[-3px] md:mx-[-2px]"
                    >
                      <path
                        d="M1.5752 0C2.62647 1.81667 4.58995 3.04004 6.83984 3.04004C9.08953 3.03987 11.0523 1.81654 12.1035 0H13.6787V13.6787H12.1035C11.0523 11.8621 9.08956 10.6388 6.83984 10.6387C4.58992 10.6387 2.62646 11.862 1.5752 13.6787H0V0H1.5752Z"
                        fill="#FF37B3"
                      />
                    </svg>

                    {/* ARROW CIRCLE */}
                    <span className="relative inline-flex size-[4rem] items-center justify-center overflow-hidden rounded-full bg-[#FF37B3] md:size-[4.6rem]">
                      {/* Arrow out */}
                      <motion.span
                        variants={slideUp}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <PhoneIcon color="#ffffff" />
                      </motion.span>

                      {/* Arrow in */}
                      <motion.span
                        variants={slideFromBottom}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <PhoneIcon color="#ffffff" />
                      </motion.span>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Responsive */}
            <div className="flex items-center justify-end gap-[1rem] xl:hidden">
              <div className="min-w-max md:block">
                <motion.div
                  initial="initial"
                  whileHover="hover"
                  className="inline-flex"
                >
                  <Link
                    href="tel:01618202667"
                    className="inline-flex items-center justify-center"
                  >
                    {/* TEXT PILL */}
                    <span className="relative inline-flex h-[3.5rem] items-center justify-center overflow-hidden rounded-[7rem] bg-[#FF37B3] px-[2rem] text-[1.2rem] font-semibold text-[#ffffff] md:h-[4rem] md:px-[2.4rem] md:text-[1.4rem] md:font-bold">
                      <motion.span
                        variants={slideUp}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="block"
                      >
                        0161 820 2667
                      </motion.span>

                      <motion.span
                        variants={slideFromBottom}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        0161 820 2667
                      </motion.span>
                    </span>

                    {/* CONNECTOR SVG */}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-[-3px] hidden md:mx-[-2px] md:block"
                    >
                      <path
                        d="M1.5752 0C2.62647 1.81667 4.58995 3.04004 6.83984 3.04004C9.08953 3.03987 11.0523 1.81654 12.1035 0H13.6787V13.6787H12.1035C11.0523 11.8621 9.08956 10.6388 6.83984 10.6387C4.58992 10.6387 2.62646 11.862 1.5752 13.6787H0V0H1.5752Z"
                        fill="#FF37B3"
                      />
                    </svg>

                    {/* ARROW CIRCLE */}
                    <span className="relative hidden size-[4rem] items-center justify-center overflow-hidden rounded-full bg-[#FF37B3] md:inline-flex">
                      {/* Arrow out */}
                      <motion.span
                        variants={slideUp}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <PhoneIcon color="#ffffff" height="14" width="14" />
                      </motion.span>

                      {/* Arrow in */}
                      <motion.span
                        variants={slideFromBottom}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <PhoneIcon color="#ffffff" height="14" width="14" />
                      </motion.span>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </MotionEffect>
      </header>
    </div>
  );
};

export default LpHeader;
