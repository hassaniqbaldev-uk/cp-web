"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import ServicesDropdown from "../ui/ServicesDropdown";
import SolutionsDropdown from "../ui/SolutionsDropdown";
import AboutDropdown from "../ui/AboutDropdown";

// The site's primary navigation, built on Radix NavigationMenu so it is fully
// keyboard operable (arrow keys move between items, Enter/Space opens a mega
// panel, Escape closes, Tab moves into the open panel) with correct ARIA. This
// replaces the previous mouse-only, ARIA-less dropdowns and is intended to be
// the base the rebuilt navigation extends, not a throwaway patch.
const MainNav = ({ className = "" }) => {
  const [value, setValue] = useState("");

  // Close any open panel on scroll, preserving the previous nav behaviour.
  useEffect(() => {
    const onScroll = () => setValue("");
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <NavigationMenu.Root
      aria-label="Main"
      value={value}
      onValueChange={setValue}
      className={className}
    >
      <NavigationMenu.List className="flex items-center justify-center gap-[3rem]">
        <ServicesDropdown />
        <SolutionsDropdown />

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/case-studies"
              className="nav-link rounded-[.4rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              Work
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/blog"
              className="nav-link rounded-[.4rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              Blog
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <AboutDropdown />
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default MainNav;
