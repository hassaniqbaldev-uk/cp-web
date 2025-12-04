"use client";
import Link from "next/link";
import Image from "next/image";
import { navLinksData } from "@/constants/globals";
import { usePathname } from "next/navigation";
import BookCtaButton from "@/components/common/BookCTAButton";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import HamburgerMenu from "./HamburgerMenu";
import { useLenis } from 'lenis/react';

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    let lastScrollY = 0;
    const header = document.querySelector("header");
    let ticking = false;

    const updateHeader = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 50) {
        header.classList.add("sticky-header");
      } else {
        header.classList.remove("sticky-header");
      }

      if (currentScroll > lastScrollY && currentScroll > 50) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }

      lastScrollY = currentScroll;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;

    if (hamburgerOpen) {
      html.style.overflow = "hidden"; 
      html.style.height = "100%"; // optional: prevents iOS overscroll
      lenis?.stop?.(); // ✅ optional chaining in case lenis not ready yet
    } else {
      html.style.overflow = "";
      html.style.height = "";
      lenis?.start?.();
    }

    // Cleanup (optional, but safe)
    return () => {
      html.style.overflow = "";
      html.style.height = "";
      lenis?.start?.();
    };
  }, [hamburgerOpen, lenis]);

  const noGradientPaths = [
    "/",
    "/agencies",
    "/call",
    "/ui-ux",
    "/wp-elementor",
    "/sm-post",
    "/maintenance-growth",
    "/branding",
  ];

  return (
    <>
      <header
        className={`site-header px-[2rem] lg:px-[3rem] py-[3rem] ${
          noGradientPaths.includes(pathname) ? "" : "gradient"
        }`}
      >
        <div className="site-header-container relative z-[10] mx-auto flex max-w-[120rem] items-center justify-between transition-all duration-300">
          <Link href="/">
            <Image
              src="/assets/images/logo.svg"
              alt="Logo Image"
              width={170}
              height={66}
              className="h-[6.6rem] w-[14rem] md:w-[17rem]"
            />
          </Link>

          <nav className="hidden items-center justify-center gap-[1rem] xl:flex">
            {navLinksData.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={`nav-link ${pathname === item.href ? "active" : ""}`}
              >
                {item.text}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-[1rem]">
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

            <div className="xl:hidden">
              <button
                onClick={() => setHamburgerOpen(true)}
                className="inline-flex size-[4rem] items-center justify-center rounded-full border border-white"
              >
                <Menu
                  className="size-[2.3rem] text-white"
                />
              </button>
            </div>

            <div className="hidden xl:block">
              <BookCtaButton />
            </div>
          </div>
        </div>
      </header>

       {/* Hamburger Menu */}
      <div className="xl:hidden">
        <HamburgerMenu hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen} />
      </div>
    </>
  );
};
export default Header;
