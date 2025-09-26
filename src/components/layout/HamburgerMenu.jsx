"use client";
import { X } from "lucide-react";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerAccordion from "../common/HamburgerAccordion";
import ContactPopoverBtn from "../common/ContactPopoverBtn";
import CommonBtn2 from "../common/CommonBtn2";

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setIsOpen(false); // auto-close
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`hamburger-menu fixed top-0 z-[100] flex h-screen w-full flex-col transition-all duration-300 ${isOpen ? "left-0" : "left-[200%]"}`}
      >
        <div className="flex items-center justify-between px-[2rem] py-[3rem] md:px-[4rem]">
          <Link
            onClick={() => setIsOpen(false)}
            href="/"
            className="relative overflow-hidden"
          >
            <Image
              src="/images/logo.svg"
              alt="Brand Logo"
              width={170}
              height={66}
              fetchPriority="high"
              className="w-[14rem] md:w-[17rem]"
            />
          </Link>

          <div className="flex items-center gap-[2rem]">
            {/* Contact Cta for Responsive */}
            <ContactPopoverBtn />

            <button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="inline-flex size-[4rem] items-center justify-center rounded-full border border-[#ffffff]"
            >
              <X aria-hidden="true" className="size-[2.3rem] text-white" />
            </button>
          </div>
        </div>

        <div className="overflow-x-hidden overflow-y-auto">
          <nav className="flex flex-col gap-[2rem] py-[2rem] text-white md:py-[4rem]">
            <div className="relative border-b border-white/20 pb-[2rem] md:px-[4rem]">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="relative flex text-[3rem] leading-[4rem] font-semibold capitalize before:absolute before:bottom-[-2.1rem] before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-gradient-to-r before:from-[#FFE400] before:to-[#FF37B3] before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 md:text-[4rem] md:leading-[5rem]"
              >
                <span className="px-[2rem]">Home</span>
              </Link>
            </div>

            <div className="relative border-b border-white/20 pb-[2rem] md:px-[4rem]">
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="relative flex text-[3rem] leading-[4rem] font-semibold capitalize before:absolute before:bottom-[-2.1rem] before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-gradient-to-r before:from-[#FFE400] before:to-[#FF37B3] before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 md:text-[4rem] md:leading-[5rem]"
              >
                <span className="px-[2rem]">About</span>
              </Link>
            </div>

            <div className="relative border-b border-white/20 pb-[2rem] md:px-[4rem]">
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="relative flex text-[3rem] leading-[4rem] font-semibold capitalize before:absolute before:bottom-[-2.1rem] before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-gradient-to-r before:from-[#FFE400] before:to-[#FF37B3] before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 md:text-[4rem] md:leading-[5rem]"
              >
                <span className="px-[2rem]">Services</span>
              </Link>
            </div>

            {/* <div className="border-b border-white px-[2rem] pb-[2rem] md:px-[4rem]">
              <HamburgerAccordion setIsOpen={setIsOpen} />
            </div> */}

            <div className="relative border-b border-white/20 pb-[2rem] md:px-[4rem]">
              <Link
                href="/case-studies"
                onClick={() => setIsOpen(false)}
                className="relative flex text-[3rem] leading-[4rem] font-semibold capitalize before:absolute before:bottom-[-2.1rem] before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-gradient-to-r before:from-[#FFE400] before:to-[#FF37B3] before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 md:text-[4rem] md:leading-[5rem]"
              >
                <span className="px-[2rem]">Case Studies</span>
              </Link>
            </div>

            <div className="relative border-b border-white/20 pb-[2rem] md:px-[4rem]">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="relative flex text-[3rem] leading-[4rem] font-semibold capitalize before:absolute before:bottom-[-2.1rem] before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-gradient-to-r before:from-[#FFE400] before:to-[#FF37B3] before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 md:text-[4rem] md:leading-[5rem]"
              >
                <span className="px-[2rem]">Contact</span>
              </Link>
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-[2rem] pb-[6rem]">
          <div className="px-[2.5rem]">
            <CommonBtn2 />
          </div>

          <div className="flex flex-col gap-[2rem] px-[2.5rem] pt-[1rem]">
            <div className="flex flex-col">
              <h5 className="text-[1.6rem] leading-[2.4rem] font-medium text-white">
                GIVE US A CALL
              </h5>

              <Link
                href="tel:01618202667"
                className="inline-flex text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FFC300]"
              >
                0161 820 2667
              </Link>
            </div>

            <div className="flex flex-col">
              <h5 className="text-[1.6rem] leading-[2.4rem] font-medium text-white">
                EMAIL US
              </h5>

              <Link
                href="mailto:hello@cp.agency"
                className="inline-flex text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FF37B3]"
              >
                hello@cp.agency
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
