"use client";
import Link from "next/link";
import Logo from "../decorative-elements/Logo";
import Image from "next/image";
import CloseIcon from "@/assets/icons/ui/close-icon.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import DesignIcon from "@/assets/icons/ui/design-icon.svg";
import GrowthIcon from "@/assets/icons/ui/growth-icon.svg";
import SupportIcon from "@/assets/icons/ui/support-icon.svg";
import SuitcaseIcon from "@/assets/icons/ui/suitcase-icon.svg";
import PhoneIcon from "@/assets/icons/ui/phone-icon.svg";
import EmailIcon from "@/assets/icons/ui/email-icon.svg";
import HeadphoneIcon from "@/assets/icons/ui/headphone-icon.svg";
import FacebookDarkIcon from "@/assets/icons/social/facebook-dark-icon.svg";
import InstagramDarkIcon from "@/assets/icons/social/instagram-dark-icon.svg";
import LinkedinDarkIcon from "@/assets/icons/social/linkedin-dark-icon.svg";
import TiltArrowIcon from "../icons/TiltArrowIcon";
import {
  COMPANY_ABOUT_NAV,
  DESIGN_SERVICE_NAV,
  GOAL_SOLUTION_NAV,
  GROWTH_SERVICE_NAV,
  SECTOR_SOLUTION_NAV,
  SUPPORT_SERVICE_NAV,
} from "@/contants";
import PrimaryButton from "../ui/PrimaryButton";
import { useMenuStore } from "@/store/mobileMenuStore";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const MobileMenu = () => {
  const { isOpen, closeMenu } = useMenuStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    (async function () {
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
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[550] bg-black/50 transition-all duration-200 ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      />

      <div
        className={`no-scrollbar fixed top-0 z-[600] h-screen w-[95%] overflow-y-auto rounded-tr-[2.5rem] rounded-br-[2.5rem] bg-white py-[2.2rem] pr-[1.2rem] pb-[10rem] pl-[2.4rem] transition-all duration-200 md:w-[50%] ${isOpen ? "left-0" : "-left-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-[2rem]">
          <Link
            onClick={closeMenu}
            href="/"
            className="inline-flex items-center justify-center"
          >
            <Logo
              width="121"
              height="46"
              className="h-[3.6rem] w-[9.7rem] fill-black"
            />
          </Link>

          <div className="flex items-center gap-[.4rem]">
            <Link
              onClick={closeMenu}
              href="/audit"
              className="inline-flex h-[3.2rem] items-center justify-center rounded-[20rem] border border-white/20 bg-[#312749]/10 px-[2rem] py-[1rem] text-center text-[1.2rem] leading-[2.4rem] font-bold tracking-normal text-[#312749]"
            >
              Free Audit
            </Link>

            <button
              onClick={closeMenu}
              className="inline-flex size-[3.3rem] min-w-[3.3rem] items-center justify-center rounded-full bg-[#FF37B3] xl:hidden"
            >
              <Image
                src={CloseIcon}
                width={8.5}
                height={8.5}
                alt="Icon"
                unoptimized
              />
            </button>
          </div>
        </div>
        {/* Main */}
        <nav className="my-[2.2rem] w-full">
          <ul className="flex w-full flex-col items-start gap-[2.2rem] text-left">
            <li className="w-full">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] border-b border-[#818181]/30 pr-[.9rem] pb-[1.2rem]">
                    <span className="text-left text-[2.2rem] leading-[2.4rem] font-extrabold tracking-normal text-[#312749]">
                      Services
                    </span>

                    <i className="origin-center stroke-[#312749] transition-all duration-200 group-data-[state=open]:rotate-180">
                      <ChevronDownIcon />
                    </i>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col gap-[2rem] pt-[2rem]">
                      <li>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] overflow-visible pr-[.9rem]">
                              <div className="flex items-center gap-[1.6rem]">
                                <i className="inline-flex size-[3.7rem] items-center justify-center rounded-[.9rem] bg-[#ED910C]">
                                  <Image
                                    src={DesignIcon}
                                    width={20}
                                    height={20}
                                    alt="Icon"
                                    unoptimized
                                  />
                                </i>

                                <span className="text-left text-[2rem] leading-[2.4rem] font-semibold tracking-normal text-[#312749]">
                                  Design & Build
                                </span>
                              </div>

                              <i className="origin-center stroke-[#312749] transition-all duration-200 group-data-[state=open]:rotate-180">
                                <ChevronDownIcon />
                              </i>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="flex flex-col gap-[1.5rem] pt-[2.5rem]">
                                {DESIGN_SERVICE_NAV.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="w-full border-b border-[#818181]/30 pb-[1.6rem]"
                                  >
                                    <Link
                                      onClick={closeMenu}
                                      href={item.href}
                                      className="flex items-center justify-between gap-[1rem] pr-[1.1rem] pl-[.8rem] text-left text-[1.8rem] leading-[2.4rem] font-semibold tracking-[-0.02em] text-[#625C70]"
                                    >
                                      <span>{item.label}</span>

                                      <TiltArrowIcon
                                        color="#625C70"
                                        width="12"
                                        height="12"
                                      />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </li>

                      <li>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] overflow-visible pr-[.9rem]">
                              <div className="flex items-center gap-[1.6rem]">
                                <i className="inline-flex size-[3.7rem] items-center justify-center rounded-[.9rem] bg-[#FF37B3]">
                                  <Image
                                    src={GrowthIcon}
                                    width={20}
                                    height={20}
                                    alt="Icon"
                                    unoptimized
                                  />
                                </i>

                                <span className="text-left text-[2rem] leading-[2.4rem] font-semibold tracking-normal text-[#312749]">
                                  Growth
                                </span>
                              </div>

                              <i className="origin-center stroke-[#312749] transition-all duration-200 group-data-[state=open]:rotate-180">
                                <ChevronDownIcon />
                              </i>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="flex flex-col gap-[1.5rem] pt-[2.5rem]">
                                {GROWTH_SERVICE_NAV.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="w-full border-b border-[#818181]/30 pb-[1.6rem]"
                                  >
                                    <Link
                                      onClick={closeMenu}
                                      href={item.href}
                                      className="flex items-center justify-between gap-[1rem] pr-[1.1rem] pl-[.8rem] text-left text-[1.8rem] leading-[2.4rem] font-semibold tracking-[-0.02em] text-[#625C70]"
                                    >
                                      <span>{item.label}</span>

                                      <TiltArrowIcon
                                        color="#625C70"
                                        width="12"
                                        height="12"
                                      />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </li>

                      <li>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] overflow-visible pr-[.9rem]">
                              <div className="flex items-center gap-[1.6rem]">
                                <i className="inline-flex size-[3.7rem] items-center justify-center rounded-[.9rem] bg-[#F14A58]">
                                  <Image
                                    src={SupportIcon}
                                    width={20}
                                    height={20}
                                    alt="Icon"
                                    unoptimized
                                  />
                                </i>

                                <span className="text-left text-[2rem] leading-[2.4rem] font-semibold tracking-normal text-[#312749]">
                                  Support
                                </span>
                              </div>

                              <i className="origin-center stroke-[#312749] transition-all duration-200 group-data-[state=open]:rotate-180">
                                <ChevronDownIcon />
                              </i>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="flex flex-col gap-[1.5rem] pt-[2.5rem]">
                                {SUPPORT_SERVICE_NAV.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="w-full border-b border-[#818181]/30 pb-[1.6rem]"
                                  >
                                    <Link
                                      onClick={closeMenu}
                                      href={item.href}
                                      className="flex items-center justify-between gap-[1rem] pr-[1.1rem] pl-[.8rem] text-left text-[1.8rem] leading-[2.4rem] font-semibold tracking-[-0.02em] text-[#625C70]"
                                    >
                                      <span>{item.label}</span>

                                      <TiltArrowIcon
                                        color="#625C70"
                                        width="12"
                                        height="12"
                                      />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>

            <li className="w-full">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] border-b border-[#818181]/30 pr-[.9rem] pb-[1.2rem]">
                    <span className="text-left text-[2.2rem] leading-[2.4rem] font-extrabold tracking-normal text-[#312749]">
                      Solutions
                    </span>

                    <i className="origin-center stroke-[#312749] transition-all duration-200 group-data-[state=open]:rotate-180">
                      <ChevronDownIcon />
                    </i>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col gap-[2rem] pt-[2rem]">
                      <li>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] overflow-visible pr-[.9rem]">
                              <div className="flex items-center gap-[1.6rem]">
                                <i className="inline-flex size-[3.7rem] items-center justify-center rounded-[.9rem] bg-[#ED910C]">
                                  <Image
                                    src={SuitcaseIcon}
                                    width={20}
                                    height={20}
                                    alt="Icon"
                                    unoptimized
                                  />
                                </i>

                                <span className="text-left text-[2rem] leading-[2.4rem] font-semibold tracking-normal text-[#312749]">
                                  By Sector
                                </span>
                              </div>

                              <i className="origin-center stroke-[#312749] transition-all duration-200 group-data-[state=open]:rotate-180">
                                <ChevronDownIcon />
                              </i>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="flex flex-col gap-[1.5rem] pt-[2.5rem]">
                                {SECTOR_SOLUTION_NAV.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="w-full border-b border-[#818181]/30 pb-[1.6rem]"
                                  >
                                    <Link
                                      onClick={closeMenu}
                                      href={item.href}
                                      className="flex items-center justify-between gap-[1rem] pr-[1.1rem] pl-[.8rem] text-left text-[1.8rem] leading-[2.4rem] font-semibold tracking-[-0.02em] text-[#625C70]"
                                    >
                                      <span>{item.label}</span>

                                      <TiltArrowIcon
                                        color="#625C70"
                                        width="12"
                                        height="12"
                                      />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </li>

                      <li>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] overflow-visible pr-[.9rem]">
                              <div className="flex items-center gap-[1.6rem]">
                                <i className="inline-flex size-[3.7rem] items-center justify-center rounded-[.9rem] bg-[#FF37B3]">
                                  <Image
                                    src={GrowthIcon}
                                    width={20}
                                    height={20}
                                    alt="Icon"
                                    unoptimized
                                  />
                                </i>

                                <span className="text-left text-[2rem] leading-[2.4rem] font-semibold tracking-normal text-[#312749]">
                                  By Goal
                                </span>
                              </div>

                              <i className="origin-center stroke-[#312749] transition-all duration-200 group-data-[state=open]:rotate-180">
                                <ChevronDownIcon />
                              </i>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="flex flex-col gap-[1.5rem] pt-[2.5rem]">
                                {GOAL_SOLUTION_NAV.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="w-full border-b border-[#818181]/30 pb-[1.6rem]"
                                  >
                                    <Link
                                      onClick={closeMenu}
                                      href={item.href}
                                      className="flex items-center justify-between gap-[1rem] pr-[1.1rem] pl-[.8rem] text-left text-[1.8rem] leading-[2.4rem] font-semibold tracking-[-0.02em] text-[#625C70]"
                                    >
                                      <span>{item.label}</span>

                                      <TiltArrowIcon
                                        color="#625C70"
                                        width="12"
                                        height="12"
                                      />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>

            <li className="w-full border-b border-[#818181]/30 pb-[1.2rem]">
              <Link
                onClick={closeMenu}
                href="/case-studies"
                className="inline-flex items-start justify-start text-left text-[2.2rem] leading-[2.4rem] font-extrabold tracking-normal text-[#312749]"
              >
                Work
              </Link>
            </li>

            <li className="w-full border-b border-[#818181]/30 pb-[1.2rem]">
              <Link
                onClick={closeMenu}
                href="/blog"
                className="inline-flex items-start justify-start text-left text-[2.2rem] leading-[2.4rem] font-extrabold tracking-normal text-[#312749]"
              >
                Blog
              </Link>
            </li>

            {/* <li className="w-full border-b border-[#818181]/30 pb-[1.2rem]">
              <Link
                onClick={closeMenu}
                href=""
                className="inline-flex items-start justify-start text-left text-[2.2rem] leading-[2.4rem] font-extrabold tracking-normal text-[#312749]"
              >
                Pricing
              </Link>
            </li> */}

            <li className="w-full">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] border-b border-[#818181]/30 pr-[.9rem] pb-[1.2rem]">
                    <span className="text-left text-[2.2rem] leading-[2.4rem] font-extrabold tracking-normal text-[#312749]">
                      About Us
                    </span>

                    <i className="origin-center stroke-[#312749] transition-all duration-200 group-data-[state=open]:rotate-180">
                      <ChevronDownIcon />
                    </i>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col gap-[2rem] pt-[2rem]">
                      {COMPANY_ABOUT_NAV.map((item, idx) => (
                        <li
                          key={idx}
                          className="w-full border-b border-[#818181]/30 pb-[1.6rem]"
                        >
                          <Link
                            onClick={closeMenu}
                            href={item.href}
                            className="flex items-center justify-between gap-[1rem] pr-[1.1rem] pl-[.8rem] text-left text-[1.8rem] leading-[2.4rem] font-semibold tracking-[-0.02em] text-[#625C70]"
                          >
                            <span>{item.label}</span>

                            <TiltArrowIcon
                              color="#625C70"
                              width="12"
                              height="12"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          </ul>
        </nav>
        {/* Footer */}
        <div>
          <div>
            <PrimaryButton
              href="/contact"
              text="Contact Us"
              bGcolor="#FF37B3"
              textColor="#FFFFFF"
            />
          </div>

          <hr className="my-[3.3rem] border-t border-[#818181]/30" />

          <ul className="flex flex-col gap-[1.8rem]">
            <li>
              <Link
                onClick={closeMenu}
                href="tel:01618202667"
                className="flex items-center justify-start gap-[1.5rem]"
              >
                <i
                  style={{
                    boxShadow: "3.19px 3.19px 28.09px 0px #FF37B3CC",
                  }}
                  className="inline-flex size-[5.2rem] items-center justify-center rounded-[.9rem] bg-[#FF37B3]"
                >
                  <Image src={PhoneIcon} width={28} height={28} alt="Icon" />
                </i>

                <div className="flex flex-col items-start text-left">
                  <span className="text-[1.2rem] font-medium tracking-normal text-[#312749]">
                    Phone
                  </span>

                  <h4 className="text-[2rem] font-bold tracking-[-0.02em] text-[#312749]">
                    0161 820 2667
                  </h4>
                </div>
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                href="mailto:hello@cp.agency"
                className="flex items-center justify-start gap-[1.5rem]"
              >
                <i
                  style={{
                    boxShadow: "3.19px 3.19px 28.04px 0px #3078FFCC",
                  }}
                  className="inline-flex size-[5.2rem] items-center justify-center rounded-[.9rem] bg-[#3078FF]"
                >
                  <Image src={EmailIcon} width={28} height={28} alt="Icon" />
                </i>

                <div className="flex flex-col items-start text-left">
                  <span className="text-[1.2rem] font-medium tracking-normal text-[#312749]">
                    Email
                  </span>

                  <h4 className="text-[2rem] font-bold tracking-[-0.02em] text-[#312749]">
                    hello@cp.agency
                  </h4>
                </div>
              </Link>
            </li>

            <li>
              <button
                onClick={closeMenu}
                data-cal-namespace="15min"
                data-cal-link="hassan-iqbal-mznzu9/15min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                className="flex items-center justify-start gap-[1.5rem]"
              >
                <i
                  style={{
                    boxShadow: "3px 3px 26.41px 0px #ED910CCC",
                  }}
                  className="inline-flex size-[5.2rem] items-center justify-center rounded-[.9rem] bg-[#ED910C]"
                >
                  <Image
                    src={HeadphoneIcon}
                    width={28}
                    height={28}
                    alt="Icon"
                    unoptimized
                  />
                </i>

                <div className="flex flex-col items-start text-left">
                  <span className="text-[1.2rem] font-medium tracking-normal text-[#312749]">
                    Let&apos;s Talk
                  </span>

                  <h4 className="text-[2rem] font-bold tracking-[-0.02em] text-[#312749]">
                    Book a Call
                  </h4>
                </div>
              </button>
            </li>
          </ul>

          <hr className="my-[3.3rem] border-t border-[#818181]/30" />

          <ul className="flex items-center gap-[8px]">
            <li>
              <Link
                onClick={closeMenu}
                href="https://www.facebook.com/CPAgencyUK"
                className="inline-flex size-[3.9rem] items-center justify-center rounded-full bg-[#312749]/15"
              >
                <Image
                  src={FacebookDarkIcon}
                  width={23}
                  height={23}
                  alt="Icon"
                  unoptimized
                />
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                href="https://www.instagram.com/cpagencyuk/"
                className="inline-flex size-[3.9rem] items-center justify-center rounded-full bg-[#312749]/15"
              >
                <Image
                  src={InstagramDarkIcon}
                  width={23}
                  height={23}
                  alt="Icon"
                  unoptimized
                />
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                href="https://www.linkedin.com/company/creativepixels/"
                className="inline-flex size-[3.9rem] items-center justify-center rounded-full bg-[#312749]/15"
              >
                <Image
                  src={LinkedinDarkIcon}
                  width={23}
                  height={23}
                  alt="Icon"
                  unoptimized
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
