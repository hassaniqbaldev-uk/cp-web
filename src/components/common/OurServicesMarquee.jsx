"use client";

import { ourServicesCardData } from "@/constants/servicesPage";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const OurServiesMarquee = () => {
  const containerRef = useRef(null);
  const draggableRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !draggableRef.current) return;

    const container = containerRef.current;
    const draggable = draggableRef.current;
    const cards = draggable.children;
    const cardCount = cards.length;
    const cardWidth = 300 + 14.7; // width + margin
    const totalWidth = cardCount * cardWidth;

    // Double the content for seamless looping
    draggable.innerHTML += draggable.innerHTML;

    // Set initial position
    gsap.set(draggable, { x: 0 });

    let draggableInstance;

    const setupDraggable = () => {
      draggableInstance = Draggable.create(draggable, {
        type: "x",
        inertia: true,
        throwProps: true,
        cursor: "grab",
        activeCursor: "grabbing",
        onPress: function () {
          gsap.to(this.target, { scale: 0.98, duration: 0.2 });
          // Pause auto-scroll when user interacts
          if (animationRef.current) {
            animationRef.current.pause();
          }
        },
        onRelease: function () {
          gsap.to(this.target, { scale: 1, duration: 0.2 });
          // Resume auto-scroll after a delay
          setTimeout(() => {
            if (animationRef.current) {
              animationRef.current.resume();
            }
          }, 3000);
        },
        onDrag: function () {
          checkLoopPosition();
        },
        onThrowUpdate: function () {
          checkLoopPosition();
        },
      })[0];
    };

    const checkLoopPosition = () => {
      const x = draggableInstance.x;
      const threshold = totalWidth / 2;

      if (x <= -totalWidth) {
        // Jump to the beginning when reaching the end of duplicated content
        gsap.set(draggable, { x: x + totalWidth });
        draggableInstance.update();
      } else if (x >= 0) {
        // Jump to the end when going before the beginning
        gsap.set(draggable, { x: x - totalWidth });
        draggableInstance.update();
      }
    };

    // Auto-scroll animation
    const startAutoScroll = () => {
      animationRef.current = gsap.to(draggable, {
        x: `-=${totalWidth / 2}`,
        duration: 20,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            let xNum = parseFloat(x);
            // Reset position when reaching the loop point
            if (xNum <= -totalWidth) {
              xNum += totalWidth;
            }
            return xNum;
          }),
        },
      });
    };

    setupDraggable();
    startAutoScroll();

    // Cleanup
    return () => {
      if (draggableInstance) {
        draggableInstance.kill();
      }
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="cursor-grab overflow-hidden">
      <div ref={draggableRef} className="inline-flex will-change-transform">
        {/* Original content */}
        {ourServicesCardData.map((item, idx) => (
          <div key={`original-${idx}`} className="mx-[.735rem] flex-shrink-0">
            <Link
              href={item.href}
              className="group relative inline-block h-[22rem] w-[30rem] overflow-hidden rounded-[2rem] md:h-[32.6rem] md:w-[47rem]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={470}
                height={326}
                priority
                className="size-full transition-all duration-300 group-hover:scale-[1.05]"
              />
            </Link>
          </div>
        ))}

        {/* Duplicated content for seamless loop */}
        {ourServicesCardData.map((item, idx) => (
          <div key={`duplicate-${idx}`} className="mx-[.735rem] flex-shrink-0">
            <Link
              href={item.href}
              className="group relative inline-block h-[22rem] w-[30rem] overflow-hidden rounded-[2rem] md:h-[32.6rem] md:w-[47rem]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={470}
                height={326}
                priority
                className="size-full transition-all duration-300 group-hover:scale-[1.05]"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServiesMarquee;
