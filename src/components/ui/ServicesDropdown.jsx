"use client";
import { useRef } from "react";
import Image from "next/image";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import PrimaryButton from "./PrimaryButton";
import ServicesDropdownStroke from "@/assets/svgs/services-dropdown-stroke.svg";
import ServiceNavColumn from "./ServiceNavColumn";

const ServicesDropdown = ({
  className,
  isOpen,
  setIsOpen,
  onToggle,
  navData,
}) => {
  const triggerRef = useRef(null);
  const panelRef = useRef(null);

  // Column count + grouping are DATA-DRIVEN (the four pillars, resolved in
  // sanity/nav.js). Empty pillars are already dropped upstream, so this renders
  // exactly the pillars that have live services — add/remove a pillar column by
  // changing content, never this markup.
  const columns = navData?.serviceColumns ?? [];

  // Disclosure pattern: ArrowDown (or Enter/Space, handled natively by the
  // button) opens the panel; focus stays on the trigger and Tab moves into the
  // revealed links. Escape closes and returns focus to the trigger.
  const handleTriggerKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isOpen) onToggle();
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handlePanelKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  };

  // Close when focus leaves both the trigger and the panel (e.g. Tab out).
  const handleClose = (e) => {
    const next = e.relatedTarget;
    if (
      next &&
      (panelRef.current?.contains(next) || next === triggerRef.current)
    )
      return;
    setIsOpen(false);
  };

  return (
    <>
      <button
        ref={triggerRef}
        id="services-menu-trigger"
        aria-expanded={isOpen}
        aria-controls="services-menu-panel"
        onMouseEnter={onToggle}
        onClick={onToggle}
        onKeyDown={handleTriggerKeyDown}
        onBlur={handleClose}
        className={`inline-flex items-start justify-center gap-[.6rem] ${className}`}
      >
        <span>Services</span>{" "}
        <i
          className={`relative top-[1rem] origin-center transition-all duration-200 ${isOpen ? "-rotate-180" : "-rotate-0"}`}
        >
          <ChevronDownIcon height="6" width="10" />
        </i>
      </button>

      <div
        id="services-menu-panel"
        ref={panelRef}
        onKeyDown={handlePanelKeyDown}
        onBlur={handleClose}
        className={`absolute top-full left-1/2 z-[600] w-[127.2rem] -translate-x-1/2 transition-all duration-200 ${isOpen ? "pointer-events-auto visible pt-[4rem] opacity-100 select-auto" : "pointer-events-none invisible pt-[0rem] opacity-0 select-none"}`}
      >
        <div
          style={{
            clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
            background: "#ffffff",
            height: "2.3rem",
            width: "2.6rem",
          }}
          className="absolute top-[1.8rem] left-[33rem]"
        />

        <div
          onMouseLeave={() => setIsOpen(false)}
          style={{
            boxShadow: "11px 11px 65px 0px #00000040",
          }}
          className="flex w-full gap-[3.8rem] rounded-[3rem] bg-white px-[3.5rem] py-[4rem]"
        >
          {/* Pillar columns — one <ServiceNavColumn> per non-empty pillar. The number
              of columns comes from the data (PILLARS × live services), not the DOM. */}
          <div
            className="grid flex-1 gap-[3.8rem]"
            style={{
              gridTemplateColumns: `repeat(${Math.max(columns.length, 1)}, minmax(0, 1fr))`,
            }}
          >
            {columns.map((col, i) => (
              <ServiceNavColumn
                key={col.key}
                column={col}
                isLast={i === columns.length - 1}
                onSelect={() => setIsOpen(false)}
              />
            ))}
          </div>

          {/* <div className="h-[42rem] w-[34.8rem]">
            <div className="relative flex h-full flex-col items-start justify-between rounded-[2rem] bg-[#F5F5F5] px-[2.6rem] py-[2rem]">
              <div className="absolute inset-0 z-[1]">
                <Image
                  src={ServicesDropdownStroke}
                  width={348}
                  height={220}
                  alt=""
                  className="absolute bottom-[6rem] left-1/2 -translate-x-1/2"
                />
              </div>

              <div className="relative z-[10]">
                <h4 className="mb-[1.1rem] text-[3rem] leading-[3.2rem] font-bold tracking-[-0.02em] text-[#312749]">
                  Free Website Audit
                </h4>

                <p className="mb-[2.8rem] text-[1.6rem] leading-[2.5rem] font-normal tracking-normal text-[#625C70]">
                  Discover hidden opportunities to increase your traffic and
                  conversions.
                </p>
              </div>

              <div className="relative z-[10]" onClick={() => setIsOpen(false)}>
                <PrimaryButton
                  text="Get My Audit"
                  textColor="#312749"
                  bGcolor="#FFD900"
                  href="/audit"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ServicesDropdown;
