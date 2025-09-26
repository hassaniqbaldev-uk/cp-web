"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CaseStudiesGrid = ({
  image,
  title,
  description,
  tags,
  technologies,
  className = "",
  slug,
}) => {
  const cursorRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const link = linkRef.current;

    // Initial cursor position
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Move the custom cursor
    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Animate cursor position with GSAP
    const updateCursor = () => {
      // Calculate new position with a slight delay for smoothness
      cursorX = gsap.utils.interpolate(cursorX, mouseX, 0.1);
      cursorY = gsap.utils.interpolate(cursorY, mouseY, 0.1);

      // Apply the new position
      gsap.set(cursor, {
        x: cursorX - cursor.offsetWidth / 2,
        y: cursorY - cursor.offsetHeight / 2,
      });

      requestAnimationFrame(updateCursor);
    };

    // Handle mouse enter on the case study item
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        width: "100px",
        height: "100px",
        duration: 0.3,
        ease: "power2.out",
      });

      // Show the text with a slight delay
      gsap.to(".cursor-text", {
        opacity: 1,
        delay: 0.1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    // Handle mouse leave on the case study item
    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 0,
        width: "20px",
        height: "20px",
        duration: 0.3,
        ease: "power2.out",
      });

      // Hide the text immediately
      gsap.to(".cursor-text", {
        opacity: 0,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    // Set up event listeners
    window.addEventListener("mousemove", moveCursor);
    if (link) {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    }

    // Start the animation loop
    updateCursor();

    // Clean up
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (link) {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      {/* Custom Cursor with Text Inside */}
      <div
        ref={cursorRef}
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-50 hidden items-center justify-center rounded-full bg-black/50 opacity-0 xl:flex"
      >
        {/* Gradient Layer */}
        <div className="gradient-layer" />

        <span className="cursor-text text-center text-[1.4rem] leading-tight font-medium text-white opacity-0">
          View Case
          <br />
          Study
        </span>
      </div>

      {/* Case Study Grid Item */}
      <Link href={`/case-studies/${slug}`} className="relative" ref={linkRef}>
        <div
          className={`case-studies-grid grid w-full grid-cols-1 items-center gap-[7rem] lg:grid-cols-2 ${className}`}
        >
          {/* Left Image  */}
          <div className="shadow-03 relative block w-full overflow-hidden rounded-[1.4rem] md:h-[38rem]">
            <Image
              src={image}
              alt="Case Study Image"
              height={345}
              width={488}
              priority
              className="size-full"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Tags */}
            <ul className="flex flex-wrap gap-[1rem]">
              {tags.map((tag) => (
                <li
                  key={tag.id}
                  className="bg-text-primary inline-flex h-[4rem] items-center justify-center gap-[.8rem] rounded-[1rem] px-[1.2rem] py-[.8rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase"
                >
                  <span>{tag.name}</span>
                </li>
              ))}
            </ul>

            {/* Title */}
            <h3 className="text-text-primary my-[1.8rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] md:text-[3.4rem] md:leading-[4.8rem]">
              {title}
            </h3>

            {/* Description */}
            <p className="text-text-primary text-[1.8rem] leading-[2.6rem] font-normal">
              {description}
            </p>

            {/* Technologies */}
            <div className="mt-[2rem] flex w-full flex-col gap-[2rem]">
              <span className="text-text-primary/60 text-[1.6rem] leading-[2.4rem] font-medium uppercase">
                TECHNOLOGY USED
              </span>

              <ul className="flex w-full flex-wrap items-center justify-center gap-[3.3rem] border-y border-[#424242]/50 py-[1.8rem] md:flex-row lg:justify-start">
                {technologies.map((tech) => (
                  <li key={tech.id}>
                    {tech.logo && (
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="h-[2.2rem]"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CaseStudiesGrid;
