"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="shadow-01 fixed right-[3rem] bottom-[3rem] z-50 flex size-[5rem] items-center justify-center rounded-full bg-[#FFC300] transition-all duration-300 hover:bg-[#3078FF] hover:text-white"
        >
          <ArrowUp className="size-[2.5rem]" />
        </button>
      )}
    </>
  );
};

export default BackToTopBtn;
