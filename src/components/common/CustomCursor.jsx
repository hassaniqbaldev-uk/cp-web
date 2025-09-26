"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    const add = () => setActive(true);
    const remove = () => setActive(false);

    // watch links with .cursor-link class
    document.querySelectorAll(".cursor-link").forEach((el) => {
      el.addEventListener("mouseenter", add);
      el.addEventListener("mouseleave", remove);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll(".cursor-link").forEach((el) => {
        el.removeEventListener("mouseenter", add);
        el.removeEventListener("mouseleave", remove);
      });
    };
  }, []);

  return (
    <div
      className={`pointer-events-none absolute top-0 left-0 z-[9999] flex h-[100px] w-[100px] items-center justify-center rounded-full border-2 border-pink-500 bg-black/80 text-[14px] font-medium text-white uppercase transition-transform duration-200 ease-out ${
        active ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
      style={{
        transform: `translate(${pos.x - 50}px, ${pos.y - 50}px)`,
      }}
    >
      Visit Link
    </div>
  );
};

export default CustomCursor;
