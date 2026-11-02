"use client";

import { useRef, useState } from "react";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import Image from "next/image";
import { Play } from "lucide-react";

const foundersFilm = {
  src: "/images/black-friday/hassan-video.mp4",
  poster: "/images/home/hassan-about-img.png",
};

const stores = [
  {
    id: "smokey-carter",
    src: "/images/black-friday/smokey-carter-logo.png",
    alt: "The Smokey Carter",
    width: 45,
    height: 51,
  },
  {
    id: "ivy-duke",
    src: "/images/black-friday/ivy-duke-logo.png",
    alt: "Ivy & Duke",
    width: 68,
    height: 32,
  },
  {
    id: "fultons",
    src: "/images/black-friday/fultons-logo.png",
    alt: "Fultons Jewellery",
    width: 62,
    height: 27,
  },
  {
    id: "lola",
    src: "/images/black-friday/lola-logo.png",
    alt: "Lola & Blake",
    width: 45,
    height: 45,
  },
  {
    id: "tycoon",
    src: "/images/black-friday/tycoon-logo.png",
    alt: "Tycoon",
    width: 71,
    height: 15,
  },
];

const BlackFridayFounder = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Section id="black-friday-founder" className="py-[120px] max-bf-xl:py-[60px]">
      <Container className="max-bf-xl:px-[40px] max-bf-sm:px-[20px]">
        <div className="flex items-center justify-between gap-[60px] max-bf-xl:flex-col max-bf-xl:gap-[40px] max-bf-sm:gap-[30px]">
          <div className="w-[480px] shrink-0 max-bf-xl:w-full max-bf-xl:text-center">
            <p className="text-[22px] font-medium tracking-[-0.02em] text-black uppercase max-bf-sm:text-[14px]">
              You’ll work with
            </p>

            <h2 className="mt-[10px] text-[52px] leading-[55px] font-bold tracking-[-0.07em] text-black max-bf-xl:mx-auto max-bf-xl:max-w-[700px] max-bf-sm:text-[30px] max-bf-sm:leading-[34px]">
              Hassan Iqbal, founder of{" "}
              <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                CreativePixels.
              </span>
            </h2>

            <p className="mt-[30px] max-w-[420px] text-[22px] tracking-[-0.02em] text-black max-bf-xl:mx-auto max-bf-xl:max-w-[650px] max-bf-sm:mt-[20px] max-bf-sm:max-w-full max-bf-sm:text-[16px]">
              I started building websites at 13. 14 years on, I lead a team of
              15 and look at every partner job myself. Here’s how we work, in a
              minute.
            </p>
          </div>

          <div className="relative h-[400px] w-full overflow-hidden rounded-[20px] bg-[#D9D9D9] max-bf-xl:h-[500px] max-bf-sm:h-[240px]">
            <video
              ref={videoRef}
              playsInline
              preload="metadata"
              poster={foundersFilm.poster}
              controls={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="h-full w-full object-cover object-top-left"
            >
              <source src={foundersFilm.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <>
                <button
                  type="button"
                  onClick={() => videoRef.current?.play()}
                  aria-label="Play the one-minute intro"
                  className="absolute top-1/2 left-1/2 flex size-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-colors hover:bg-white/90"
                >
                  <Play size={24} className="ml-[3px] fill-black text-black" />
                </button>

                <span className="absolute bottom-[16px] left-[16px] flex items-center gap-[8px] rounded-full bg-black/50 px-[14px] py-[8px] backdrop-blur-[10px]">
                  <Play size={12} className="fill-white text-white" />

                  <span className="text-[12px] tracking-[-0.02em] text-white">
                    How we work
                  </span>
                </span>
              </>
            )}
          </div>
        </div>

        <div className="bg-grey/40 mt-[50px] flex items-center justify-between gap-[40px] rounded-full px-[50px] py-[20px] max-bf-xl:flex-col max-bf-xl:items-center max-bf-xl:gap-[25px] max-bf-xl:rounded-[20px] max-bf-xl:px-[40px] max-bf-xl:py-[30px] max-bf-sm:mt-[30px] max-bf-sm:px-[20px]">
          <p className="text-text-body shrink-0 text-[22px] font-medium tracking-[-0.02em] whitespace-nowrap uppercase max-bf-sm:text-[16px]">
            Stores we’ve built
          </p>

          <ul className="flex flex-1 items-center justify-center gap-[7px]">
            {stores.map(({ id, src, alt, width, height }) => (
              <li
                key={id}
                className="flex size-[100px] items-center justify-center rounded-full border border-black/5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] max-bf-sm:size-[52px]"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className="max-bf-sm:h-auto max-bf-sm:max-h-[26px] max-bf-sm:w-auto max-bf-sm:max-w-[38px] max-bf-sm:object-contain"
                />
              </li>
            ))}
          </ul>

          <p className="max-w-[260px] shrink-0 text-right text-[22px] font-extrabold tracking-[-0.04em] text-black max-bf-xl:max-w-full max-bf-xl:text-center max-bf-sm:text-[18px]">
            As heard on BBC Radio Manchester &amp; Lancashire
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default BlackFridayFounder;
