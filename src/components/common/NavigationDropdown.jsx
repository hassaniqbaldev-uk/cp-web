"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { offerServicesDropdownData } from "@/constants/globals";
import DownArrowIcon from "@/assets/icons/down-arrow.svg";

const colors = ["#FED202", "#FF37B3", "#81F2B4"];

const NavigationDropdown = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const pathname = usePathname();

  return (
    <div
      onMouseEnter={() => setActiveDropdown(true)}
      onMouseLeave={() => setActiveDropdown(false)}
    >
      <Link
        href="/services"
        className={`inline-flex h-[4.6rem] min-w-[12.4rem] cursor-pointer items-center justify-center gap-[1rem] rounded-[6rem] px-[1.6rem] py-[1.1rem] text-[1.6rem] leading-[2.4rem] font-medium transition-all duration-300 ${activeDropdown || pathname === "/services" ? "text-text-primary bg-white" : "bg-white/15 text-white"}`}
      >
        <span>Services</span>

        <div
          className={`inline-flex size-[2.2rem] items-center justify-center rounded-full transition-all duration-300 ${
            pathname === "/services"
              ? "bg-text-primary -rotate-0" // active route → bg active, no rotation
              : activeDropdown
                ? "bg-text-primary -rotate-180" // dropdown open → bg + rotate
                : "-rotate-0 bg-white/15" // default
          }`}
        >
          <DownArrowIcon />
        </div>
      </Link>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 z-50 w-full transition-all duration-300 ${
          activeDropdown
            ? "pointer-events-auto visible pt-[1.6rem] opacity-100"
            : "pointer-events-none invisible pt-[0rem] opacity-0"
        }`}
      >
        <div className="dropdown-menu flex w-full py-[3rem] pr-[4.659rem] pl-[3.4rem]">
          {/* Tab list */}
          <div className="flex flex-col gap-[4.5rem] border-r border-white/80 pt-[1.7rem] pr-[3.2rem]">
            {offerServicesDropdownData.map((tab, idx) => (
              <button
                key={tab.name}
                onMouseEnter={() => setActiveTab(idx)}
                className={`dropdown-tab group inline-flex h-[10rem] w-[20rem] cursor-pointer items-center px-[2rem] py-[1.8rem] ${idx === 0 && activeTab === 0 ? "!bg-[#FED202]" : ""} ${idx === 1 && activeTab === 1 ? "!bg-[#FF37B3]" : ""} ${idx === 2 && activeTab === 2 ? "!bg-[#81F2B4]" : ""}`}
              >
                <span
                  className={`text-left text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white transition-all duration-300 ${idx === 0 && activeTab === 0 ? "!text-text-primary" : ""}`}
                >
                  {tab.name}
                </span>

                <div className="absolute right-[-.4rem] bottom-[-.4rem] inline-flex size-[2.4rem] items-center justify-center">
                  <tab.icon />
                </div>
              </button>
            ))}
          </div>

          {/* Active tab content */}
          <div className="flex flex-col">
            <div className="flex pb-[3.5rem] pl-[6rem]">
              {/* Columns */}
              {offerServicesDropdownData[activeTab].columns.map((col, idx) => (
                <div
                  key={col.title}
                  className={`flex flex-col gap-[3.1rem] pt-[3.5rem] ${idx === 1 && "mr-[4.5rem] ml-[6rem]"}`}
                >
                  <h5
                    className={`text-[1.8rem] leading-[2.6rem] font-normal ${activeTab !== null ? `text-[${colors[activeTab]}]` : "text-white"}`}
                  >
                    {col.title}
                  </h5>

                  <ul className="flex flex-col gap-[1.4rem]">
                    {col.links.map((link, idx) => (
                      <li key={idx}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-[1.2rem] text-[1.8rem] leading-[2.6rem] font-normal text-white"
                        >
                          <div
                            className={`size-[1rem] rounded-full border-2 ${activeTab !== null ? `border-[${colors[activeTab]}]` : "border-white"}`}
                          />{" "}
                          <span className="relative">
                            {link.label}

                            {/* Gradient underline */}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#ffe400] to-[#ff37b3] transition-all duration-200 group-hover:w-full" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="flex items-center justify-center">
                <Image
                  src={offerServicesDropdownData[activeTab].image}
                  alt="Showcase Image"
                  width={299.41}
                  height={337.12}
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex gap-[5.9rem] border-t border-white/80 pt-[3.2rem] pl-[6rem]">
              <div className="flex flex-col">
                <h6 className="text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
                  GIVE US A CALL
                </h6>

                <Link
                  href=""
                  className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FFC300]"
                >
                  0161 820 2667
                </Link>
              </div>

              <div className="flex flex-col">
                <h6 className="text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
                  EMAIL US
                </h6>

                <Link
                  href=""
                  className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FF37B3]"
                >
                  hello@cp.agency
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationDropdown;
