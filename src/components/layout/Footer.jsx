"use clinet";
import Image from "next/image";
import Link from "next/link";
import FooterLinkCard from "../common/FooterLinkCard";
import LogoPopup from "../common/LogoPopup";
import LineStroke06 from "@/assets/decorative-elements/line-stroke-06.svg";
import CLetter from "@/assets/decorative-elements/c-letter.svg";
import PLetter from "@/assets/decorative-elements/p-letter.svg";
import FooterAccordion from "../common/FooterAccordion";
import ClientLogoSlider from "../common/ClientLogoSlider";
import {
  footerLinksCardData,
  logoPopupsData,
  socialLinks,
} from "@/constants/globals";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import CLetter2 from "@/assets/decorative-elements/c-letter-2";
import PLetter2 from "@/assets/decorative-elements/p-letter-2";
import CommonBtn3 from "../common/CommonBtn3";

const Footer = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current.querySelector("path");

    if (line) {
      gsap.fromTo(
        line,
        { drawSVG: "0%" },
        {
          drawSVG: "100%",
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 90%", // when line enters viewport
            end: "bottom 80%", // when line leaves viewport
            scrub: true, // tie progress to scroll
          },
        },
      );
    }
  }, []);

  return (
    <footer className="footer relative w-full pt-[5rem] pb-[2.764rem] xl:pt-[6.2rem]">
      {/* Decorative stroke line */}
      <div
        ref={lineRef}
        className="pointer-events-none absolute inset-0 z-[1] select-none"
      >
        <LineStroke06 className="absolute top-[-19.3rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[0] overflow-hidden select-none">
        {/* <CLetter className="absolute bottom-[3rem] left-[-3rem] w-[8.4rem]" /> */}
        <CLetter2 className="absolute bottom-[6rem] left-[-3rem] w-[8.4rem] md:bottom-[3rem]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[0] hidden overflow-hidden select-none xl:block">
        {/* <PLetter className="absolute top-[43.5rem] right-[-3rem]" /> */}
        <PLetter2 className="absolute top-[43.5rem] right-[-3rem]" />
      </div>

      <div className="overflow-hidden">
        <div className="px-[2rem] xl:px-[0rem]">
          <div className="relative z-[3] mx-auto flex max-w-[120rem] flex-col items-center justify-between gap-[4rem] rounded-[1.6rem] border-[2px] border-white bg-white/20 px-[4.5rem] pt-[2.3rem] pb-[3rem] backdrop-blur-[30px] lg:flex-row lg:gap-[0rem]">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Link
                href="tel:01618202667"
                className="relative text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[linear-gradient(90deg,#FFE400_0%,#FF37B3_100%)] after:transition-all after:duration-300 hover:after:w-full md:text-[4.8rem] md:leading-[6rem]"
              >
                0161 820 2667
              </Link>

              <h5 className="text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-white md:max-w-[45rem] md:text-[2.6rem] md:leading-[3.2rem]">
                UseSpace, Paddock Street, Manchester, M12 6PN
              </h5>
            </div>

            <div className="flex flex-col items-center gap-[.658rem] text-center lg:items-end lg:text-right">
              <Link
                href="mailto:hello@cp.agency"
                className="relative text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[linear-gradient(90deg,#FFE400_0%,#FF37B3_100%)] after:transition-all after:duration-300 hover:after:w-full md:text-[4.8rem] md:leading-[6rem]"
              >
                hello@cp.agency
              </Link>

              <div className="flex items-center justify-end gap-[.7rem]">
                {socialLinks.map((item, idx) => (
                  <Link
                    key={idx}
                    aria-label={item.name} // 👈 accessible name
                    href={item.href}
                    className="inline-flex size-[4.5rem] items-center justify-center rounded-[1.6rem] bg-white/15 transition-all duration-200 hover:-translate-y-2 md:size-[5rem]"
                  >
                    <item.icon aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-[3] mx-auto mt-[5.7rem] hidden max-w-[118.4rem] justify-between px-[2rem] xl:flex xl:px-[0rem]">
          <div className="flex flex-col gap-[8.7rem]">
            {footerLinksCardData
              .filter((item) => item.title === "Quick Links")
              .map((item, idx) => (
                <FooterLinkCard
                  key={idx}
                  title={item.title}
                  links={item.links}
                />
              ))}
          </div>

          <div className="flex flex-col gap-[8.7rem]">
            {footerLinksCardData
              .filter((item) => item.title === "Services")
              .map((item, idx) => (
                <FooterLinkCard
                  key={idx}
                  title={item.title}
                  links={item.links}
                />
              ))}
          </div>

          <div className="flex flex-col gap-[8.7rem]">
            {footerLinksCardData
              .filter((item) => item.title === "Legal")
              .map((item, idx) => (
                <FooterLinkCard
                  key={idx}
                  title={item.title}
                  links={item.links}
                />
              ))}
          </div>

          <div className="flex flex-col gap-[2rem]">
            <h5 className="text-[2.2rem] leading-[3.2rem] font-medium text-white">
              Ready to Start
            </h5>

            <ul className="flex flex-col gap-[1.5rem]">
              <li className="flex flex-col">
                <span className="text-[1.6rem] leading-[2.4rem] font-medium text-[#FFC300]">
                  Give Us Call
                </span>{" "}
                <a
                  href="tel:016182026671"
                  className="text-[1.8rem] leading-[2.6rem] font-normal text-white"
                >
                  0161 820 26671
                </a>
              </li>

              <li className="flex flex-col">
                <span className="text-[1.6rem] leading-[2.4rem] font-medium text-[#FF37B3]">
                  Email Us
                </span>{" "}
                <a
                  href="mailto:hello@cp.agency"
                  className="text-[1.8rem] leading-[2.6rem] font-normal text-white"
                >
                  hello@cp.agency
                </a>
              </li>

              <li className="flex flex-col">
                <span className="text-[1.6rem] leading-[2.4rem] font-medium text-[#3078FF]">
                  Address
                </span>{" "}
                <span className="max-w-[30rem] text-[1.8rem] leading-[2.6rem] font-normal text-white">
                  UseSpace, Paddock Street, Manchester, M12 6PN
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative z-[3] mx-auto mt-[5.7rem] flex max-w-[118.4rem] flex-col gap-[2rem] px-[2rem] xl:hidden xl:px-[0rem]">
          {footerLinksCardData.map((item, idx) => (
            <div key={idx} className="border-b border-white pb-[2rem]">
              <FooterAccordion
                title={item.title}
                value={item.title}
                links={item.links}
              />
            </div>
          ))}
        </div>

        <div className="relative z-[3] mx-auto mt-[5.7rem] mb-[4.6rem] hidden max-w-[120rem] flex-col items-center justify-center gap-[2rem] rounded-[1.6rem] bg-white/15 p-[2rem] px-[2rem] xl:flex">
          <h5 className="text-[2rem] leading-[2.6rem] font-medium text-white">
            Trusted By
          </h5>

          <div className="flex items-center gap-[3rem]">
            <div className="flex w-full items-center justify-items-center gap-[2rem]">
              {logoPopupsData.map((item, idx) => (
                <div key={idx}>
                  <LogoPopup
                    logo={item.logo}
                    popupImage={item.popupImage}
                    title={item.title}
                    href={item.href}
                    logoWidth={item.logoWidth}
                    logoHeight={item.logoHeight}
                  />
                </div>
              ))}
            </div>

            <CommonBtn3 label="Book a Call" href="/contact" bgColor="#1E5ACC" />
          </div>
        </div>

        {/* Mobile Logos */}
        <div className="relative z-[3] my-[4rem] flex w-full flex-col gap-[2rem] text-center xl:hidden">
          <h5 className="text-[2rem] leading-[2.6rem] font-medium text-white">
            Trusted By
          </h5>

          <ClientLogoSlider />
        </div>

        <div className="relative z-[3] mx-auto flex max-w-[120rem] flex-col items-center justify-between gap-[2rem] px-[2rem] text-center lg:flex-row lg:gap-[0rem] lg:text-left xl:px-[0rem]">
          <p className="max-w-[32rem] text-[1.8rem] leading-[2.6rem] font-normal text-white md:max-w-fit">
            2025 (C) CP Agency Ltd. Trading as CreativePixels.
          </p>

          <div className="flex flex-col items-center justify-end gap-[3rem] text-center lg:flex-row lg:text-left">
            <h5 className="text-[1.8rem] leading-[2.6rem] font-medium text-white">
              Our Brands
            </h5>

            <ul className="flex items-center justify-end">
              <li>
                <Link href="https://creativehosting.io/">
                  <Image
                    src="/images/creative-hosting-logo.png"
                    width={73.11}
                    height={34.03}
                    alt="Creative Hosting" // 👈 meaningful alt text
                  />
                </Link>
              </li>

              <li className="mx-[2rem] h-[3.293rem] w-[0.5px] bg-white" />

              <li>
                <Image
                  src="/images/wp-fixed-logo.png"
                  width={75.48}
                  height={31.7}
                  alt=""
                />
              </li>

              <li className="mx-[2rem] h-[3.293rem] w-[0.5px] bg-white" />

              <li>
                <Image
                  src="/images/monthly-designs-logo.png"
                  width={137.95}
                  height={23.91}
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
