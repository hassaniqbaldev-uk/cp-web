"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationLink from "../common/NavigationLink";
import NavigationDropdown from "../common/NavigationDropdown";
import CommonBtn1 from "../common/CommonBtn1";
import HamburgerMenu from "./HamburgerMenu";
import { Menu } from "lucide-react";
import ContactPopoverBtn from "../common/ContactPopoverBtn";

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always hide header when at top of page (scrollY <= 100)
      if (currentScrollY <= 100) {
        setIsVisible(false);
        prevScrollY.current = currentScrollY;
        return;
      }

      // Only show/hide behavior when scrolled beyond 100px
      if (currentScrollY > prevScrollY.current) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }

      // Update previous scroll position
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 z-[999] w-full p-[1rem] transition-transform duration-300 md:p-[2rem] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="shadow-01 relative mx-auto flex w-full max-w-[120.329rem] items-center justify-between rounded-full bg-black/30 px-[2rem] py-[1rem] backdrop-blur-[10px]">
        <Link href="/" className="relative">
          <Image
            src="/images/logo.svg"
            alt="Brand Logo"
            width={170}
            height={66}
            fetchPriority="high"
            className="h-[6.6rem] w-[14rem] md:w-[17rem]"
          />
        </Link>

        <div className="flex items-center justify-end gap-[2rem] xl:gap-[6rem]">
          <nav className="hidden items-center justify-center gap-[1rem] xl:flex">
            <NavigationLink href="/">Home</NavigationLink>
            <NavigationLink href="/about">About CP</NavigationLink>
            <NavigationLink href="/services">Services</NavigationLink>
            {/* <NavigationDropdown /> */}
            <NavigationLink href="/case-studies">Case Studies</NavigationLink>
            <NavigationLink href="/contact">Contact Us</NavigationLink>
          </nav>

          <div className="hidden items-center gap-[1rem] overflow-hidden xl:flex">
            <ContactPopoverBtn />

            {/* CTA Button */}
            <CommonBtn1 />
          </div>

          {/* Contact Cta for Responsive */}
          <div className="xl:hidden">
            <ContactPopoverBtn />
          </div>

          {/* Hamburger Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex size-[4rem] items-center justify-center rounded-full border border-white"
            >
              <Menu className="size-[2.3rem] text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className="xl:hidden">
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default StickyHeader;
