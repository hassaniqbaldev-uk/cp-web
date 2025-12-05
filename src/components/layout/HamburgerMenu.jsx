"use client";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { navLinksData } from "@/constants/globals";
import ConsultationCtaButton from "../common/ConsultationCtaButton";

const HamburgerMenu = ({ hamburgerOpen, setHamburgerOpen }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (hamburgerOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [hamburgerOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setHamburgerOpen(false); // auto-close
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(301.75deg, rgba(29, 29, 29, 0.9) 1.41%, rgba(29, 29, 29, 0.9) 95.05%)",
          backdropFilter: "blur(10px)",
        }}
        className={`fixed top-0 z-[999] flex h-screen w-full flex-col transition-all duration-300 ${hamburgerOpen ? "left-0" : "left-[200%]"}`}
      >
        <div className="flex items-center justify-between px-[2rem] py-[3rem] md:px-[4rem]">
          <Link href="/" onClick={() => setHamburgerOpen(false)}>
            <Image
              src="/assets/images/logo.svg"
              alt="Logo Image"
              width={170}
              height={66}
              className="h-[6.6rem] w-[14rem] md:w-[17rem]"
            />
          </Link>

          <div className="flex items-center gap-[1rem]">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  onMouseEnter={() => setOpen(true)}
                  className="relative inline-flex size-[4.6rem] items-center justify-center rounded-full border-none bg-[#32284A] shadow-none !ring-0 outline-none"
                >
                  <div className="outline-text absolute top-[2px] right-[2px] size-[.8rem] animate-pulse rounded-full bg-[#7EE972] outline-[3.5px]" />

                  <img src="/assets/icons/white-phone.svg" alt="Icon" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className="w-[20rem] border-none pt-[1rem] shadow-none outline-none"
              >
                <div className="header-popover-content bg-text flex flex-col overflow-hidden rounded-[2rem]">
                  <Link
                    href="tel:01618202667"
                    className="flex items-center gap-[1rem] border-b border-white/20 p-[1.6rem] text-[1.6rem] leading-[2.4rem] tracking-normal text-white"
                  >
                    <img src="/assets/icons/white-phone.svg" alt="Icon" />
                    <span>Call Now</span>
                  </Link>

                  <button
                    data-cal-namespace="15min"
                    data-cal-link="hassan-iqbal-mznzu9/15min"
                    data-cal-config='{"layout":"month_view","theme":"dark"}'
                    className="flex cursor-pointer items-center gap-[1rem] border-none p-[1.6rem] text-[1.6rem] leading-[2.4rem] tracking-normal text-white outline-none"
                  >
                    <img src="/assets/icons/google-meet.svg" alt="Icon" />
                    <span>Schedule a call</span>
                  </button>
                </div>
              </PopoverContent>
            </Popover>

            <button
              aria-label="Close menu"
              onClick={() => setHamburgerOpen(false)}
              className="inline-flex size-[4rem] items-center justify-center rounded-full border border-[#ffffff]"
            >
              <X aria-hidden="true" className="size-[2.3rem] text-white" />
            </button>
          </div>
        </div>

        <div className="overflow-x-hidden overflow-y-auto">
          <nav className="flex flex-col">
            {navLinksData.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setHamburgerOpen(false)}
                className="flex border-t border-white/20 px-[2.5rem] py-[1.5rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-white last:border-b"
              >
                {item.text}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-[2rem] pt-[2rem] pb-[4rem]">
          <div className="px-[2.5rem]">
            <ConsultationCtaButton />
          </div>

          <div className="flex flex-col gap-[2rem] px-[2.5rem] pt-[1rem]">
            <Link
              href="tel:01618202667"
              className="text-secondary-orange inline-flex text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em]"
            >
              0161 820 2667
            </Link>

            <Link
              href="mailto:hello@cp.agency"
              className="text-secondary-pink inline-flex text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em]"
            >
              hello@cp.agency
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
