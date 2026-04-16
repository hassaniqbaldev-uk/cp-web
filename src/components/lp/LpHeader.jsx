"use client";

import Link from "next/link";
import Logo from "../decorative-elements/Logo";
import RightArrowIcon from "../icons/RightArrowIcon";
import SecondaryButton from "../ui/SecondaryButton";
import PhoneIcon from "../icons/PhoneIcon";
import { motion } from "framer-motion";
import { MotionEffect } from "../effects/motion-effect";
import { useEffect } from "react";

const LpHeader = () => {
  const slideUp = {
    initial: { y: "0%" },
    hover: { y: "-130%" },
  };

  const slideFromBottom = {
    initial: { y: "100%" },
    hover: { y: "0%" },
  };

  useEffect(() => {
    (async function () {
      const { getCalApi } = await import("@calcom/embed-react");
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#FF37B3" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      {/* Sticky Contact */}
      <Link
        href="tel:01618202667"
        className="absolute top-0 left-0 z-[500] block w-full bg-[#FF37B3] py-[.5rem] text-center text-[1.6rem] leading-[2.6rem] font-semibold text-white md:hidden"
      >
        Call Us: 0161 820 2667
      </Link>

      <header className="absolute top-[6rem] left-0 z-[500] w-full px-[2rem] md:top-[4rem] xl:px-[0rem]">
        <MotionEffect
          slide={{ direction: "down" }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          fade
          zoom
        >
          <div className="container flex w-full items-center justify-between gap-[4rem]">
            <div>
              <Logo
                width="230"
                height="90"
                className="logo h-[4rem] w-auto fill-white md:h-[6rem] xl:h-[9rem]"
              />
            </div>

            <div className="hidden items-center justify-between gap-[2rem] rounded-[3.8rem] bg-white/18 px-[2.6rem] py-[1.5rem] backdrop-blur-[10px] xl:flex">
              <div className="min-w-max">
                <SecondaryButton
                  text="Book Free Consultation"
                  bGcolor="#ffffff"
                  textColor="#000000"
                  data-cal-namespace="15min"
                  data-cal-link="hassan-iqbal-mznzu9/15min"
                  data-cal-config='{"layout":"month_view","theme":"dark"}'
                />
              </div>

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
              <div className="block min-w-max xl:hidden">
                <motion.div
                  initial="initial"
                  whileHover="hover"
                  className="inline-flex"
                >
                  <button
                    data-cal-namespace="15min"
                    data-cal-link="hassan-iqbal-mznzu9/15min"
                    data-cal-config='{"layout":"month_view","theme":"dark"}'
                    className="inline-flex items-center justify-center"
                  >
                    {/* TEXT PILL */}
                    <span className="relative inline-flex h-[3.5rem] items-center justify-center overflow-hidden rounded-[7rem] bg-[#ffffff] px-[2rem] text-[1.2rem] font-semibold text-[#000000] md:h-[4rem] md:px-[2.4rem] md:text-[1.4rem] md:font-bold">
                      <motion.span
                        variants={slideUp}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="block"
                      >
                        Book Free Consultation
                      </motion.span>

                      <motion.span
                        variants={slideFromBottom}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        Book Free Consultation
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
                        fill="#ffffff"
                      />
                    </svg>

                    {/* ARROW CIRCLE */}
                    <span className="relative hidden size-[4rem] items-center justify-center overflow-hidden rounded-full bg-[#ffffff] md:inline-flex">
                      {/* Arrow out */}
                      <motion.span
                        variants={slideUp}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <RightArrowIcon color="#000000" />
                      </motion.span>

                      {/* Arrow in */}
                      <motion.span
                        variants={slideFromBottom}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <RightArrowIcon color="#000000" />
                      </motion.span>
                    </span>
                  </button>
                </motion.div>
              </div>

              <div className="hidden min-w-max md:block xl:hidden">
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
    </>
  );
};

export default LpHeader;
