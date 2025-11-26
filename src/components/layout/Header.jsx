"use client";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import { usePathname } from "next/navigation";
import CommonBtn1 from "../common/CommonBtn1";
import { useEffect,  useState } from "react";
import { Menu } from "lucide-react";
import ContactPopoverBtn from "../common/ContactPopoverBtn";
import { useLenis } from "lenis/react";
import { useTransitionRouter } from "next-view-transitions";
import { slideInOutTransition } from "@/utils/pageTransition";
import { navigationLinksData } from "@/constants/globals";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();
  const router = useTransitionRouter();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setIsScrolled(window.scrollY > 80);

      if (currentScroll > lastScroll && currentScroll > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    const html = document.documentElement;

    if (isOpen) {
      html.style.overflow = "hidden"; // lock scroll
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
  }, [isOpen, lenis]);

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

  const currentPath = pathname || "/";

  if (!hasMounted) return null;

  return (
    <header>
      <div
        className={cn(
          "fixed top-0 left-0 z-[100] flex w-full items-center rounded-br-[2rem] rounded-bl-[2rem] px-[2rem] py-[3rem] transition-transform duration-300 md:px-[4rem] xl:px-[0rem]",
          isScrolled
            ? ""
            : noGradientPaths.includes(currentPath)
              ? ""
              : "header-gradient-bg",
          showHeader ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div
          className={cn(
            "relative mx-auto flex w-full max-w-[120.329rem] items-center justify-between overflow-hidden",
            isScrolled
              ? "shadow-01 rounded-full bg-black/30 px-[2rem] py-[1rem] backdrop-blur-[10px]"
              : "",
          )}
        >
          <a
            onClick={(e) => {
              e.preventDefault();

              router.push("/", {
                onTransitionReady: slideInOutTransition, // 🔥 GLOBAL ANIMATION
              });
            }}
            href="/"
            className={cn("relative flex")}
          >
            {isScrolled ? (
              <Image
                src="/images/sticky-header-logo.svg"
                alt="Brand Logo"
                width={170}
                height={66}
                fetchPriority="high"
                className="h-[6.6rem] w-[14rem] md:w-[17rem]"
              />
            ) : (
              <Image
                src="/images/logo.svg"
                alt="Brand Logo"
                width={170}
                height={66}
                fetchPriority="high"
                className={cn("w-[14rem] md:w-[17rem]")}
              />
            )}
          </a>

          <div
            className={cn(
              "flex items-center justify-end gap-[2rem] xl:gap-[6rem]",
            )}
          >
            <nav
              className={cn(
                "hidden items-center justify-center gap-[1rem] xl:flex",
              )}
            >
              {navigationLinksData.map((item) => (
                <a
                  key={item.id}
                  onClick={(e) => {
                    e.preventDefault();

                    router.push(item.href, {
                      onTransitionReady: slideInOutTransition, // 🔥 GLOBAL ANIMATION
                    });
                  }}
                  href={item.href}
                  className={cn(
                    "inline-flex h-[4.6rem] items-center justify-center rounded-[6rem] px-[1.6rem] py-[1.1rem] text-[1.6rem] leading-[2.4rem] font-medium transition-all duration-300",
                    pathname === item.href
                      ? "text-text-primary bg-white"
                      : "navigation-link bg-white/15 text-white",
                  )}
                >
                  {/* Gradient Layer */}
                  <div className={cn("gradient-layer")} />

                  {/* Text Layer */}
                  {item.label}
                </a>
              ))}
            </nav>

            <div className={cn("hidden items-center gap-[1rem] xl:flex")}>
              <ContactPopoverBtn />

              <CommonBtn1 />
            </div>

            {/* Contact Cta for Responsive */}
            <div className={cn("xl:hidden")}>
              <ContactPopoverBtn />
            </div>

            {/* Hamburger Button */}
            <div className={cn("xl:hidden")}>
              <button
                aria-label="Open menu"
                onClick={() => setIsOpen(true)}
                className={cn(
                  "inline-flex size-[4rem] items-center justify-center rounded-full border border-white",
                )}
              >
                <Menu
                  aria-hidden="true"
                  className={cn("size-[2.3rem] text-white")}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      {/*<div*/}
      {/*  className={`fixed left-0 z-[998] w-full p-[1rem] transition-transform duration-300 md:p-[2rem] ${*/}
      {/*    isVisible ? "translate-y-0" : "-translate-y-full"*/}
      {/*  }`}*/}
      {/*>*/}
      {/*  <div className="shadow-01 relative mx-auto flex w-full max-w-[120.329rem] items-center justify-between rounded-full bg-black/30 px-[2rem] py-[1rem] backdrop-blur-[10px]">*/}
      {/*    <a*/}
      {/*      onClick={(e) => {*/}
      {/*        e.preventDefault();*/}

      {/*        router.push("/", {*/}
      {/*          onTransitionReady: slideInOutTransition, // 🔥 GLOBAL ANIMATION*/}
      {/*        });*/}
      {/*      }}*/}
      {/*      href="/"*/}
      {/*      className="relative"*/}
      {/*    >*/}
      {/*      <Image*/}
      {/*        src="/images/sticky-header-logo.svg"*/}
      {/*        alt="Brand Logo"*/}
      {/*        width={170}*/}
      {/*        height={66}*/}
      {/*        fetchPriority="high"*/}
      {/*        className="h-[6.6rem] w-[14rem] md:w-[17rem]"*/}
      {/*      />*/}
      {/*    </a>*/}

      {/*    <div className="flex items-center justify-end gap-[2rem] xl:gap-[6rem]">*/}
      {/*      <nav className="hidden items-center justify-center gap-[1rem] xl:flex">*/}
      {/*        <NavigationLink href="/">Home</NavigationLink>*/}
      {/*        <NavigationLink href="/about">About </NavigationLink>*/}
      {/*        <NavigationLink href="/services">Services</NavigationLink>*/}
      {/*        /!* <NavigationDropdown /> *!/*/}
      {/*        <NavigationLink href="/case-studies">Case Studies</NavigationLink>*/}
      {/*        <NavigationLink href="/contact">Contact</NavigationLink>*/}
      {/*      </nav>*/}

      {/*      <div className="hidden items-center gap-[1rem] overflow-hidden xl:flex">*/}
      {/*        <ContactPopoverBtn />*/}

      {/*        /!* CTA Button *!/*/}
      {/*        <CommonBtn1 />*/}
      {/*      </div>*/}

      {/*      /!* Contact Cta for Responsive *!/*/}
      {/*      <div className="xl:hidden">*/}
      {/*        <ContactPopoverBtn />*/}
      {/*      </div>*/}

      {/*      /!* Hamburger Button *!/*/}
      {/*      <div className="xl:hidden">*/}
      {/*        <button*/}
      {/*          onClick={() => setIsOpen(true)}*/}
      {/*          className="inline-flex size-[4rem] items-center justify-center rounded-full border border-white"*/}
      {/*        >*/}
      {/*          <Menu className="size-[2.3rem] text-white" />*/}
      {/*        </button>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* Hamburger Menu */}
      <div className="xl:hidden">
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
