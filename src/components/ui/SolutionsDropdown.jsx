"use client";
import Image from "next/image";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import SuitcaseIcon from "@/assets/icons/ui/suitcase-icon.svg";
import GrowthIcon from "@/assets/icons/ui/growth-icon.svg";
import TiltArrowIcon from "../icons/TiltArrowIcon";
import { GOAL_SOLUTION_NAV, SECTOR_SOLUTION_NAV } from "@/contants";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import ServicesDropdownStroke from "@/assets/svgs/services-dropdown-stroke.svg";

const SolutionsDropdown = ({ className, isOpen, setIsOpen, onToggle }) => {
  return (
    <>
      <button
        onMouseEnter={onToggle}
        onClick={onToggle}
        className={`inline-flex items-start justify-center gap-[.6rem] ${className}`}
      >
        <span>Solutions</span>{" "}
        <i
          className={`relative top-[1rem] origin-center transition-all duration-200 ${isOpen ? "-rotate-180" : "-rotate-0"}`}
        >
          <ChevronDownIcon height="6" width="10" />
        </i>
      </button>

      <div
        className={`absolute top-full left-1/2 z-[600] w-[127.2rem] -translate-x-1/2 transition-all duration-200 ${isOpen ? "pointer-events-auto visible pt-[4rem] opacity-100 select-auto" : "pointer-events-none invisible pt-[0rem] opacity-0 select-none"}`}
      >
        <div
          style={{
            clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
            background: "#ffffff",
            height: "2.3rem",
            width: "2.6rem",
          }}
          className="absolute top-[1.8rem] left-[44.5rem]"
        />

        <div
          onMouseLeave={() => setIsOpen(false)}
          style={{
            boxShadow: "11px 11px 65px 0px #00000040",
          }}
          className="flex w-full gap-[3.8rem] rounded-[3rem] bg-white px-[3.5rem] py-[4rem]"
        >
          <div className="grid flex-1 grid-cols-2 gap-[3.8rem]">
            <div className="flex w-full flex-col gap-[2.4rem] border-r border-[#818181]/30 pr-[3.8rem]">
              <div className="flex items-center gap-[2rem] text-left">
                <i
                  style={{
                    boxShadow: "5px 5px 22px 0px #3078FF99",
                  }}
                  className="inline-flex size-[5.5rem] items-center justify-center rounded-[1.5rem] bg-[#3078FF]"
                >
                  <Image
                    src={SuitcaseIcon}
                    width={24}
                    height={24}
                    alt="Icon"
                    unoptimized
                  />
                </i>

                <span className="text-left text-[1.6rem] leading-[2.4rem] font-bold tracking-[-0.02em] text-[#263238] uppercase">
                  by sector
                </span>
              </div>

              <ul className="flex flex-col gap-[1.5rem]">
                {SECTOR_SOLUTION_NAV.map((item, idx) => (
                  <li
                    key={idx}
                    className="border-[#818181]/30 pb-[1.5rem] not-last:border-b"
                  >
                    <Link
                      onClick={() => setIsOpen(false)}
                      href={item.href}
                      className="flex items-start justify-between gap-[1rem]"
                    >
                      <div className="flex flex-col items-start text-left">
                        <h5 className="text-[1.8rem] leading-[2rem] font-semibold tracking-[-0.02em] text-[#263238]">
                          {item.label}
                        </h5>
                      </div>

                      <i className="min-w-max">
                        <TiltArrowIcon color="#3078FF" width="12" height="12" />
                      </i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex w-full flex-col gap-[2.4rem]">
              <div className="flex items-center gap-[2rem] text-left">
                <i
                  style={{
                    boxShadow: "5px 5px 22px 0px #EE762199",
                  }}
                  className="inline-flex size-[5.5rem] items-center justify-center rounded-[1.5rem] bg-[#EE7621]"
                >
                  <Image
                    src={GrowthIcon}
                    width={24}
                    height={24}
                    alt="Icon"
                    unoptimized
                  />
                </i>

                <span className="text-left text-[1.6rem] leading-[2.4rem] font-bold tracking-[-0.02em] text-[#263238] uppercase">
                  By goal
                </span>
              </div>

              <ul className="flex flex-col gap-[1.5rem]">
                {GOAL_SOLUTION_NAV.map((item, idx) => (
                  <li
                    key={idx}
                    className="border-[#818181]/30 pb-[1.5rem] not-last:border-b"
                  >
                    <Link
                      onClick={() => setIsOpen(false)}
                      href={item.href}
                      className="flex items-start justify-between gap-[1rem]"
                    >
                      <div className="flex flex-col items-start text-left">
                        <h5 className="text-[1.8rem] leading-[2rem] font-semibold tracking-[-0.02em] text-[#263238]">
                          {item.label}
                        </h5>
                      </div>

                      <i className="min-w-max">
                        <TiltArrowIcon color="#EE7621" width="12" height="12" />
                      </i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-[42rem] w-[34.8rem]">
            <div className="relative flex h-full flex-col items-start justify-between rounded-[2rem] bg-[#F5F5F5] px-[2.6rem] py-[2rem]">
              <div className="absolute inset-0 z-[1]">
                <Image
                  src={ServicesDropdownStroke}
                  width={348}
                  height={220}
                  alt="Bg Stroke"
                  className="absolute bottom-[6rem] left-1/2 -translate-x-1/2"
                />
              </div>

              <div className="relative z-[10]">
                {/* <span className="inline-flex h-[2.8rem] items-center justify-center rounded-[2rem] bg-[#ff37b3]/20 px-[1.2rem] text-center text-[1.4rem] leading-[2.4rem] font-bold tracking-normal text-[#FF37B3] uppercase">
                  Special offer
                </span> */}

                <h4 className="mb-[1.1rem] text-[3rem] leading-[3.2rem] font-bold tracking-[-0.02em] text-[#312749]">
                  Free Website Audit
                </h4>

                <p className="mb-[2.8rem] text-[1.6rem] leading-[2.5rem] font-normal tracking-normal text-[#625C70]">
                  Discover hidden opportunities to increase your traffic and
                  conversions.
                </p>
              </div>

              <div className="relative z-[10]" onClick={() => setIsOpen(false)}>
                <PrimaryButton
                  text="Get My Audit"
                  textColor="#312749"
                  bGcolor="#FFD900"
                  href="/audit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsDropdown;
