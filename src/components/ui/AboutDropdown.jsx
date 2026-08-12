"use client";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import GroupIcon from "@/assets/icons/ui/group-icon.svg";
import TiltArrowIcon from "../icons/TiltArrowIcon";
import { COMPANY_ABOUT_NAV } from "@/contants";
import Link from "next/link";
import CardImg1 from "@/assets/images/cards/game-art-card-img.webp";
import CardImg2 from "@/assets/images/cards/ndifo-card-img.webp";

const AboutDropdown = () => {
  return (
    <NavigationMenu.Item value="about">
      <NavigationMenu.Trigger className="nav-link group inline-flex items-start justify-center gap-[.6rem] rounded-[.4rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">
        <span>About</span>{" "}
        <i className="relative top-[1rem] origin-center transition-all duration-200 group-data-[state=open]:-rotate-180">
          <ChevronDownIcon height="6" width="10" />
        </i>
      </NavigationMenu.Trigger>

      <NavigationMenu.Content className="absolute top-full left-1/2 z-[600] w-[127.2rem] -translate-x-1/2 pt-[4rem]">
        <div
          style={{
            clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
            background: "#ffffff",
            height: "2.3rem",
            width: "2.6rem",
          }}
          className="absolute top-[1.8rem] left-[68rem]"
        />

        <div
          style={{
            boxShadow: "11px 11px 65px 0px #00000040",
          }}
          className="flex w-full gap-[3.8rem] rounded-[3rem] bg-white px-[3.5rem] py-[4rem]"
        >
          <div className="flex w-full gap-[5.1rem]">
            <div className="flex min-w-[30.8rem] flex-col gap-[2.4rem]">
              <div className="flex items-center gap-[2rem] text-left">
                <i
                  style={{
                    boxShadow: "5px 5px 22px 0px #EE762199",
                  }}
                  className="inline-flex size-[5.5rem] items-center justify-center rounded-[1.5rem] bg-[#EE7621]"
                >
                  <Image
                    src={GroupIcon}
                    width={24}
                    height={24}
                    alt=""
                    aria-hidden="true"
                    unoptimized
                  />
                </i>

                <span className="text-left text-[1.6rem] leading-[2.4rem] font-bold tracking-[-0.02em] text-[#263238] uppercase">
                  company
                </span>
              </div>

              <ul className="flex flex-col gap-[1.5rem]">
                {COMPANY_ABOUT_NAV.map((item, idx) => (
                  <li
                    key={idx}
                    className="border-[#818181]/30 pb-[1.5rem] not-last:border-b"
                  >
                    <NavigationMenu.Link asChild>
                      <Link
                        href={item.href}
                        className="flex items-start justify-between gap-[1rem] rounded-[.4rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE7621]"
                      >
                        <div className="flex flex-col items-start text-left">
                          <h5 className="text-[1.8rem] leading-[2rem] font-semibold tracking-[-0.02em] text-[#263238]">
                            {item.label}
                          </h5>

                          <span className="text-[1.4rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70]">
                            {item.excerpt}
                          </span>
                        </div>

                        <i className="min-w-max">
                          <TiltArrowIcon color="#EE7621" width="12" height="12" />
                        </i>
                      </Link>
                    </NavigationMenu.Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid w-full grid-cols-2 gap-[2.1rem]">
              <NavigationMenu.Link asChild>
                <Link
                  href="/case-studies/game-art-brain"
                  className="relative flex h-[30.3rem] w-full items-end justify-end overflow-hidden rounded-[2rem] bg-amber-300 p-[1rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE7621]"
                >
                  <div className="absolute inset-0 z-[1]">
                    <Image
                      src={CardImg1}
                      alt="Game Art Brain case study"
                      width={411}
                      height={303}
                      className="size-full object-cover"
                      unoptimized
                    />
                  </div>

                  <div className="relative z-[2] inline-flex size-[4.2rem] items-center justify-center rounded-full bg-white">
                    <TiltArrowIcon width="14" height="14" />
                  </div>
                </Link>
              </NavigationMenu.Link>

              <NavigationMenu.Link asChild>
                <Link
                  href="/case-studies/ndifo-safari"
                  className="relative flex h-[30.3rem] w-full items-end justify-end overflow-hidden rounded-[2rem] bg-amber-300 p-[1rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE7621]"
                >
                  <div className="absolute inset-0 z-[1]">
                    <Image
                      src={CardImg2}
                      alt="Ndifo Safari case study"
                      width={411}
                      height={303}
                      className="size-full object-cover"
                      unoptimized
                    />
                  </div>

                  <div className="relative z-[2] inline-flex size-[4.2rem] items-center justify-center rounded-full bg-white">
                    <TiltArrowIcon width="14" height="14" />
                  </div>
                </Link>
              </NavigationMenu.Link>
            </div>
          </div>
        </div>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
};

export default AboutDropdown;
