"use client";

import Link from "next/link";
import Logo from "../decorative-elements/Logo";
import RightArrowIcon from "../icons/RightArrowIcon";
import SecondaryButton from "../ui/SecondaryButton";
import { motion } from "framer-motion";
import PhoneIcon from "../icons/PhoneIcon";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

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
      <header className="absolute top-[4rem] left-0 z-[500] w-full">
        <div className="container flex w-full items-center justify-between gap-[4rem]">
          <div className="w-[23rem]">
            <Logo
              width="230"
              height="90"
              className="logo h-[3.6rem] w-[9.7rem] fill-white md:h-[9rem] md:w-[23rem]"
            />
          </div>

          <div className="flex items-center justify-between gap-[2rem] rounded-[3.8rem] bg-white/18 px-[2.6rem] py-[1.5rem] backdrop-blur-[10px]">
            <div className="min-w-max">
              <SecondaryButton
                data-cal-namespace="15min"
                data-cal-link="hassan-iqbal-mznzu9/15min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                text="Book Free Consultation"
                bGcolor="#ffffff"
                textColor="#000000"
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
        </div>
      </header>
    </>
  );
};

export default LpHeader;
