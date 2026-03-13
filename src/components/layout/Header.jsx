"use client";
import Link from "next/link";
import Logo from "../decorative-elements/Logo";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HamburgerIcon from "@/assets/icons/ui/hamburger-icon.svg";
import { useMenuStore } from "@/store/mobileMenuStore";
import ServicesDropdown from "../ui/ServicesDropdown";
import SolutionsDropdown from "../ui/SolutionsDropdown";
import AboutDropdown from "../ui/AboutDropdown";
import { motion } from "framer-motion";
import SecondaryButton from "../ui/SecondaryButton";
import { getCalApi } from "@calcom/embed-react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const { toggleMenu } = useMenuStore();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
    setIsSolutionsOpen(false);
    setIsAboutOpen(false);
  };

  const toggleSolutions = () => {
    setIsSolutionsOpen((prev) => !prev);
    setIsServicesOpen(false);
    setIsAboutOpen(false);
  };

  const toggleAbout = () => {
    setIsAboutOpen((prev) => !prev);
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
  };

  const closeAllDropdowns = () => {
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsAboutOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsServicesOpen(false);
      setIsSolutionsOpen(false);
      setIsAboutOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // sticky after 50px
      setIsSticky(currentScrollY > 50);

      // hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const headerSecondaryPaths = [
    "/blog",
    "/audit",
    "/case-studies",
    "/services",
    "/solutions",
    "/legal",
    "/testimonials",
    "/agencies",
    "/hassan-test",
  ];

  const isHeaderSecondary = headerSecondaryPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

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

  const hiddenHeaderPaths = ["/"];
  const isHeaderHidden = hiddenHeaderPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

  if (isHeaderHidden) return null;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 z-[500] w-full px-[2rem] pt-[1.3rem] transition-transform duration-300 ease-out md:pt-[2.5rem] xl:px-[0rem] ${isHidden ? "-translate-y-full" : "translate-y-0"} `}
      >
        <div className="mx-auto max-w-[104rem]">
          <div
            className={`header-container ${
              isHeaderSecondary
                ? "header-secondary"
                : isSticky
                  ? "sticky-header"
                  : "header-primary"
            }`}
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center"
              onClick={closeAllDropdowns}
            >
              <Logo
                width="121"
                height="46"
                className="logo h-[3.6rem] w-[9.7rem] md:h-[4.6rem] md:w-[12.1rem]"
              />
            </Link>

            <nav className="mx-[4.8rem] hidden items-center justify-center gap-[3rem] xl:flex">
              <ServicesDropdown
                className="nav-link"
                isOpen={isServicesOpen}
                setIsOpen={setIsServicesOpen}
                onToggle={toggleServices}
              />

              <SolutionsDropdown
                className="nav-link"
                isOpen={isSolutionsOpen}
                setIsOpen={setIsSolutionsOpen}
                onToggle={toggleSolutions}
              />

              <Link
                href="/case-studies"
                className="nav-link"
                onClick={closeAllDropdowns}
              >
                Work
              </Link>

              <Link
                href="/blog"
                className="nav-link"
                onClick={closeAllDropdowns}
              >
                Blog
              </Link>

              {/* <Link href="" className="nav-link" onClick={closeAllDropdowns}>
                Pricing
              </Link> */}

              <AboutDropdown
                className="nav-link"
                isOpen={isAboutOpen}
                setIsOpen={setIsAboutOpen}
                onToggle={toggleAbout}
              />
            </nav>

            <div className="flex items-center justify-end gap-[4px] xl:gap-[0px]">
              <motion.div initial="initial" whileHover="hover">
                <Link
                  href="/audit"
                  className="nav-btn relative overflow-hidden"
                  onClick={closeAllDropdowns}
                >
                  <motion.span
                    variants={{
                      initial: { y: "0%" },
                      hover: { y: "-130%" },
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="block"
                  >
                    Free Audit
                  </motion.span>
                  <motion.span
                    variants={{
                      initial: { y: "100%" },
                      hover: { y: "0%" },
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    Free Audit
                  </motion.span>
                </Link>
              </motion.div>

              {/* Hamburger Button */}
              <button
                onClick={toggleMenu}
                className="inline-flex size-[3.3rem] min-w-[3.3rem] items-center justify-center rounded-full bg-[#FF37B3] xl:hidden"
              >
                <Image src={HamburgerIcon} width={12} height={9} alt="Icon" />
              </button>
            </div>

            <div className="hidden xl:block" onClick={closeAllDropdowns}>
              <SecondaryButton
                text="Book a Call"
                textColor="#FFFFFF"
                bGcolor="#FF37B3"
                data-cal-namespace="15min"
                data-cal-link="hassan-iqbal-mznzu9/15min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
              />
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
};
export default Header;
