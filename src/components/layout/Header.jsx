"use client";
import Image from "next/image";
import Link from "next/link";
import NavigationLink from "../common/NavigationLink";
import NavigationDropdown from "../common/NavigationDropdown";
import HamburgerMenu from "./HamburgerMenu";
import { usePathname } from "next/navigation";
import CommonBtn1 from "../common/CommonBtn1";
import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import ContactPopoverBtn from "../common/ContactPopoverBtn";
import gsap from "gsap";
import { useLoadingStore } from "@/store/useLoadingStore";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef();
  const logoRef = useRef();
  const navRef = useRef();
  const contactRef = useRef();
  const { isLoading } = useLoadingStore(); // 👈 access global loader state

  useEffect(() => {
    if (isLoading) return; // ⛔ don’t run until loader is done

    gsap.to(headerRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(logoRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.fromTo(
      gsap.utils.toArray(navRef.current.children),
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all",
      },
    );

    gsap.to(contactRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  }, [isLoading]);

  return (
    <header
      ref={headerRef}
      className={`absolute top-0 left-0 z-[100] flex w-full items-center rounded-br-[2rem] rounded-bl-[2rem] px-[2rem] py-[3rem] opacity-0 md:px-[4rem] xl:px-[0rem] ${pathname === "/" ? "" : "header-gradient-bg"}`}
    >
      <div className="relative mx-auto flex w-full max-w-[120.329rem] items-center justify-between">
        <div ref={logoRef} className="opacity-0">
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
          <nav
            ref={navRef}
            className="hidden items-center justify-center gap-[1rem] xl:flex"
          >
            {/* Each child div will be staggered */}
            <div>
              <NavigationLink href="/">Home</NavigationLink>
            </div>
            <div>
              <NavigationLink href="/about">About</NavigationLink>
            </div>
            {/* <div>
              <NavigationDropdown />
            </div> */}
            <div>
              <NavigationLink href="/services">Services</NavigationLink>
            </div>
            <div>
              <NavigationLink href="/case-studies">Case Studies</NavigationLink>
            </div>
            <div>
              <NavigationLink href="/contact">Contact</NavigationLink>
            </div>
          </nav>

          <div
            ref={contactRef}
            className="hidden items-center gap-[1rem] opacity-0 xl:flex"
          >
            <ContactPopoverBtn />

            <div>
              <CommonBtn1 />
            </div>
          </div>

          {/* Contact Cta for Responsive */}
          <div className="xl:hidden">
            <ContactPopoverBtn />
          </div>

          {/* Hamburger Button */}
          <div className="xl:hidden">
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
