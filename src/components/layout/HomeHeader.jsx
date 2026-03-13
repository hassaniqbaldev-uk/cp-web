"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import HamburgerIcon from "@/assets/icons/ui/hamburger-icon.svg";
import { useMenuStore } from "@/store/mobileMenuStore";
import ServicesDropdown from "../ui/ServicesDropdown";
import SolutionsDropdown from "../ui/SolutionsDropdown";
import AboutDropdown from "../ui/AboutDropdown";
import { motion } from "framer-motion";
import SecondaryButton from "../ui/SecondaryButton";
import { getCalApi } from "@calcom/embed-react";
import LoaderLogo from "../decorative-elements/LoaderLogo";

const HomeHeader = ({ transition }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-[500] w-full px-[2rem] pt-[1.3rem] transition-transform duration-300 ease-out md:pt-[2.5rem] xl:px-[0rem] ${isHidden ? "-translate-y-full" : "translate-y-0"} ${transition ? "" : "h-screen"}`}
      >
        <div className="mx-auto h-full max-w-[104rem]">
          <div
            className={`header-container relative ${
              isSticky
                ? "sticky-header"
                : "header-primary !bg-transparent !backdrop-blur-[0]"
            } ${transition ? "!h-[5.1rem] md:!h-[7.6rem]" : "!h-full"}`}
          >
            <div className="h-[3.6rem] w-[9.7rem] md:h-[4.6rem] md:w-[12.1rem]">
              {transition ? (
                <motion.div
                  layoutId="logo"
                  className="absolute top-[.8rem] left-[1.2rem] inline-flex items-center justify-center md:top-[1.4rem] md:left-[2.4rem]"
                >
                  <LoaderLogo className="logo h-[3.6rem] w-[9.7rem] md:h-[4.6rem] md:w-[12.1rem]" />
                </motion.div>
              ) : (
                <motion.div
                  layoutId="logo"
                  className="absolute top-1/2 left-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                >
                  <LoaderLogo className="logo h-[8rem] w-[20rem]" draw />
                </motion.div>
              )}
            </div>

            <motion.nav
              initial={{
                opacity: 0,
              }}
              animate={
                transition
                  ? {
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                    }
              }
              transition={{ type: "tween", duration: 0.4, delay: 0.3 }}
              className="mx-[4.8rem] hidden items-center justify-center gap-[3rem] xl:flex"
            >
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
            </motion.nav>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={
                transition
                  ? {
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                    }
              }
              transition={{ type: "tween", duration: 0.4, delay: 0.3 }}
              className="flex items-center justify-end gap-[4px] xl:gap-[0px]"
            >
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
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={
                transition
                  ? {
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                    }
              }
              transition={{ type: "tween", duration: 0.4, delay: 0.3 }}
              className="hidden xl:block"
              onClick={closeAllDropdowns}
            >
              <SecondaryButton
                text="Book a Call"
                textColor="#FFFFFF"
                bGcolor="#FF37B3"
                data-cal-namespace="15min"
                data-cal-link="hassan-iqbal-mznzu9/15min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
              />
            </motion.div>
          </div>
        </div>
      </header>
    </>
  );
};
export default HomeHeader;
