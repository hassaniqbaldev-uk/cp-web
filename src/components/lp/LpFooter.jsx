"use client";
import FooterBg from "@/assets/images/backgrounds/footer-bg.webp";
import PhoneIcon from "@/assets/icons/ui/phone-icon.svg";
import EmailIcon from "@/assets/icons/ui/email-icon.svg";
import HeadphoneIcon from "@/assets/icons/ui/headphone-icon.svg";
import FacebookIcon from "@/assets/icons/social/facebook-icon.svg";
import InstagramIcon from "@/assets/icons/social/instagram-icon.svg";
import LinkedinIcon from "@/assets/icons/social/linkedin-icon.svg";
import HostingIcon from "@/assets/svgs/footer-hosting-logo.svg";
import WpFixedIcon from "@/assets/svgs/footer-wp-fixed-logo.svg";
import MonthlyIcon from "@/assets/svgs/footer-monthly-logo.svg";
import Image from "next/image";
import Link from "next/link";
import {
  DESIGN_SERVICE_NAV,
  FOOTER_CARD,
  GOAL_SOLUTION_NAV,
  GROWTH_SERVICE_NAV,
  MAIN_NAV,
  SECTOR_SOLUTION_NAV,
  SUPPORT_SERVICE_NAV,
} from "@/contants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FooterBgStroke from "../decorative-elements/FooterBgStroke";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";
import SecondaryButton from "../ui/SecondaryButton";
import Logo from "../decorative-elements/Logo";

const LpFooter = () => {
  useEffect(() => {
    (async function () {
      const { getCalApi } = await import("@calcom/embed-react");
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#FF37B3" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      <footer
        id="site-footer"
        className="relative overflow-hidden px-[2rem] pt-[5rem] pb-[3.5rem] xl:px-[0rem] xl:pt-[8.5rem]"
      >
        {/*Background Image*/}
        <Image
          src={FooterBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        <div className="pointer-events-none absolute top-[15rem] left-1/2 z-[2] -translate-x-1/2 select-none">
          <FooterBgStroke className="w-dvw" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center gap-[13.6rem] xl:gap-[15rem]">
            <div className="flex w-full flex-col items-center gap-[6rem]">
              <div>
                <Logo
                  width="230"
                  height="90"
                  className={`logo h-[6rem] w-auto fill-white transition-all duration-200 ease-out md:h-[8rem]`}
                />
              </div>

              <div className="flex w-full flex-wrap justify-center gap-[1.6rem] md:gap-[2rem]">
                <Link
                  href="tel:01618202667"
                  className="group flex h-[9rem] w-full items-center justify-start gap-[1.5rem] overflow-hidden rounded-[1.6rem] border border-white/20 bg-white/10 px-[2rem] backdrop-blur-[10px] transition-all duration-400 hover:-translate-y-2 md:h-[14rem] md:w-[37.9rem] md:justify-center md:gap-[2.4rem] md:px-[0rem]"
                >
                  <i className="relative inline-flex size-[5.2rem] min-w-max items-center justify-center md:size-[8.2rem]">
                    <div
                      style={{
                        boxShadow: "5px 5px 44px 0px #FF37B3CC",
                      }}
                      className="absolute inset-0 z-[1] rounded-[.9rem] bg-[#FF37B3] transition-all duration-800 group-hover:scale-[12] md:rounded-[1.5rem]"
                    />

                    <Image
                      src={PhoneIcon}
                      width={45}
                      height={45}
                      alt="Icon"
                      className="absolute z-[10] size-[2.8rem] md:size-[4.5rem]"
                    />
                  </i>

                  <div className="relative z-[100] flex flex-col items-start text-left">
                    <span className="text-[1.2rem] font-medium tracking-normal text-white md:text-[1.8rem]">
                      Phone
                    </span>

                    <h4 className="text-[2rem] font-bold tracking-[-0.02em] text-white md:text-[3.2rem]">
                      0161 820 2667
                    </h4>
                  </div>
                </Link>

                <Link
                  href="mailto:hello@cp.agency"
                  className="group flex h-[9rem] w-full items-center justify-start gap-[1.5rem] overflow-hidden rounded-[1.6rem] border border-white/20 bg-white/10 px-[2rem] backdrop-blur-[10px] transition-all duration-400 hover:-translate-y-2 md:h-[14rem] md:w-[43rem] md:justify-center md:gap-[2.4rem] md:px-[0rem]"
                >
                  <i className="relative inline-flex size-[5.2rem] min-w-max items-center justify-center md:size-[8.2rem]">
                    <div
                      style={{
                        boxShadow: "5px 5px 44px 0px #3078FFCC",
                      }}
                      className="absolute inset-0 z-[1] rounded-[.9rem] bg-[#3078FF] transition-all duration-800 group-hover:scale-[12] md:rounded-[1.5rem]"
                    />
                    <Image
                      src={EmailIcon}
                      width={45}
                      height={45}
                      alt="Icon"
                      className="absolute z-[10] h-[2.2rem] w-[2.8rem] md:h-[4.5rem] md:w-[4.5rem]"
                    />
                  </i>

                  <div className="relative z-[100] flex flex-col items-start text-left">
                    <span className="text-[1.2rem] font-medium tracking-normal text-white md:text-[1.8rem]">
                      Email
                    </span>

                    <h4 className="text-[2rem] font-bold tracking-[-0.02em] text-white md:text-[3.2rem]">
                      hello@cp.agency
                    </h4>
                  </div>
                </Link>

                <button
                  data-cal-namespace="15min"
                  data-cal-link="hassan-iqbal-mznzu9/15min"
                  data-cal-config='{"layout":"month_view","theme":"dark"}'
                  className="group flex h-[9rem] w-full items-center justify-start gap-[1.5rem] overflow-hidden rounded-[1.6rem] border border-white/20 bg-white/10 px-[2rem] backdrop-blur-[10px] transition-all duration-400 hover:-translate-y-2 md:h-[14rem] md:w-[33.4rem] md:justify-center md:gap-[2.4rem] md:px-[0rem]"
                >
                  <i className="relative inline-flex size-[5.2rem] min-w-max items-center justify-center md:size-[8.2rem]">
                    <div
                      style={{
                        boxShadow: "5px 5px 44px 0px #ED910CCC",
                      }}
                      className="absolute inset-0 z-[1] rounded-[.9rem] bg-[#ED910C] transition-all duration-800 group-hover:scale-[12] md:rounded-[1.5rem]"
                    />
                    <Image
                      src={HeadphoneIcon}
                      width={45}
                      height={45}
                      alt="Icon"
                      className="absolute z-[10] size-[2.4rem] md:size-[4.5rem]"
                    />
                  </i>

                  <div className="relative z-[100] flex flex-col items-start text-left">
                    <span className="text-[1.2rem] font-medium tracking-normal text-white md:text-[1.8rem]">
                      Let&apos;s talk
                    </span>

                    <h4 className="text-[2rem] font-bold tracking-[-0.02em] text-white md:text-[3.2rem]">
                      Book a Call
                    </h4>
                  </div>
                </button>
              </div>

              <p className="text-center text-[1.6rem] leading-[2.6rem] font-semibold tracking-normal text-white md:text-[1.8rem]">
                2026 © CP Agency Ltd. <br className="block md:hidden" /> Trading
                as CreativePixels.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default LpFooter;
