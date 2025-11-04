"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";

const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={() => lenis.scrollTo(0, { lerp: 0.1 })}
          className="shadow-01 fixed right-[3rem] bottom-[10rem] z-50 flex size-[5rem] items-center justify-center rounded-full bg-[#FFC300] transition-all duration-300 hover:bg-[#3078FF] hover:text-white"
        >
          <ArrowUp className="size-[2.5rem]" />
        </button>
      )}
    </>
  );
};

export default BackToTopBtn;
