"use client";
import Image from "next/image";
import Link from "next/link";
import NavigationLink from "../common/NavigationLink";
import NavigationDropdown from "../common/NavigationDropdown";
import HamburgerMenu from "./HamburgerMenu";
import { usePathname } from "next/navigation";
import CommonBtn1 from "../common/CommonBtn1";
import { useRef, useState } from "react";
import { Menu } from "lucide-react";
import ContactPopoverBtn from "../common/ContactPopoverBtn";
import gsap from "gsap";
import { useLoadingStore } from "@/store/useLoadingStore";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading } = useLoadingStore();
  const container = useRef();

  useGSAP(
    () => {
      if (isLoading) return;

      const isMobile = window.innerWidth < 1280;
      const elements = isMobile
        ? ".header-logo, .header-cta, .hamburger-button"
        : ".header-logo, .header-nav, .header-cta, .hamburger-button";

      const tl = gsap.timeline();

      tl.to(container.current, {
        opacity: 1,
        duration: 0.6,
        ease: "sine.out",
      })

        // Smooth curvy animation with bounce
        .fromTo(
          elements,
          {
            y: -60,
            opacity: 0,
            scale: 0.9, // Added scale for depth
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: {
              each: 0.15, // Smoother stagger
              from: "start", // Wave from left to right
              grid: "auto", // Better distribution
            },
            ease: "back.out(1.4)", // Nice bounce curve
          },
          "-=0.3", // Overlap with container fade
        );
    },
    {
      scope: container,
      dependencies: [isLoading],
    },
  );

  return (
    <header
      ref={container}
      className={`absolute top-0 left-0 z-[100] flex w-full items-center rounded-br-[2rem] rounded-bl-[2rem] px-[2rem] py-[3rem] opacity-0 md:px-[4rem] xl:px-[0rem] ${pathname === "/" || pathname === "/agencies" || pathname === "/call" || pathname === "/ui-ux" || pathname === "/wp-elementor" || pathname === "/sm-post" ? "" : "header-gradient-bg"}`}
    >
      <div className="relative mx-auto flex w-full max-w-[120.329rem] items-center justify-between overflow-hidden">
        <div className="header-logo">
          <Link href="/" className="relative flex">
            <Image
              src="/images/logo.svg"
              alt="Brand Logo"
              width={170}
              height={66}
              fetchPriority="high"
              className="w-[14rem] md:w-[17rem]"
            />
          </Link>
        </div>

        <div className="flex items-center justify-end gap-[2rem] xl:gap-[6rem]">
          <nav className="hidden items-center justify-center gap-[1rem] xl:flex">
            {/* Each child div will be staggered */}
            <div className="header-nav">
              <NavigationLink href="/">Home</NavigationLink>
            </div>
            <div className="header-nav">
              <NavigationLink href="/about">About</NavigationLink>
            </div>
            {/* <div>
              <NavigationDropdown />
            </div> */}
            <div className="header-nav">
              <NavigationLink href="/services">Services</NavigationLink>
            </div>
            <div className="header-nav">
              <NavigationLink href="/case-studies">Case Studies</NavigationLink>
            </div>
            <div className="header-nav">
              <NavigationLink href="/contact">Contact</NavigationLink>
            </div>
          </nav>

          <div className="hidden items-center gap-[1rem] xl:flex">
            <div className="header-cta">
              <ContactPopoverBtn />
            </div>

            <div className="header-cta">
              <CommonBtn1 />
            </div>
          </div>

          {/* Contact Cta for Responsive */}
          <div className="header-cta xl:hidden">
            <ContactPopoverBtn />
          </div>

          {/* Hamburger Button */}
          <div className="hamburger-button xl:hidden">
            <button
              aria-label="Open menu"
              onClick={() => setIsOpen(true)}
              className="inline-flex size-[4rem] items-center justify-center rounded-full border border-white"
            >
              <Menu aria-hidden="true" className="size-[2.3rem] text-white" />
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

export default Header;
