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
import PrimaryButton from "../ui/PrimaryButton";
import Link from "next/link";
import {
  CLIENT_LOGO,
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
import { getCalApi } from "@calcom/embed-react";
import SecondaryButton from "../ui/SecondaryButton";

const Footer = () => {
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

        <div className="pointer-events-none absolute top-[25rem] left-1/2 z-[2] -translate-x-1/2 select-none">
          <FooterBgStroke className="w-dvw" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center gap-[13.6rem] xl:gap-[15rem]">
            <div className="flex flex-col items-center gap-[3rem] text-center md:gap-[4rem]">
              <h3 className="max-w-[89.6rem] text-[3rem] leading-[4rem] font-bold tracking-[-0.02em] text-white md:text-[3.4rem] md:leading-[4.8rem]">
                Book a free{" "}
                <span className="text-[#FF37B3]">15-minute call</span> – no hard
                sell, just a chance to see if working together makes sense.
              </h3>

              <SecondaryButton
                text="Get Free Consultation"
                textColor="#312749"
                bGcolor="#FFFFFF"
                data-cal-namespace="15min"
                data-cal-link="hassan-iqbal-mznzu9/15min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
              />
            </div>

            <div className="flex w-full flex-col">
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

              <div className="footer-nav my-[5rem] hidden grid-cols-4 xl:grid">
                <div className="flex flex-col gap-[2rem]">
                  <h5 className="text-[2.2rem] leading-[3.2rem] font-extrabold tracking-normal text-white">
                    Quick Links
                  </h5>

                  <ul>
                    {MAIN_NAV.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={item.href}
                          className="text-[1.8rem] leading-[4rem] font-medium tracking-normal text-white"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-[2rem]">
                  <h5 className="text-[2.2rem] leading-[3.2rem] font-extrabold tracking-normal text-white">
                    Services
                  </h5>

                  <div>
                    <Accordion type="single" collapsible>
                      <AccordionItem
                        value="item-1"
                        className="flex flex-col gap-[6px]"
                      >
                        <AccordionTrigger className="group flex items-center justify-start gap-[1rem] text-[1.8rem] leading-[4rem] font-medium tracking-normal text-white">
                          <span>Design and Build</span>{" "}
                          <i className="origin-center stroke-white transition-all duration-200 group-data-[state=open]:rotate-180">
                            <ChevronDownIcon />
                          </i>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-[1rem]">
                            {DESIGN_SERVICE_NAV.map((item, idx) => (
                              <li key={idx}>
                                <Link
                                  href={item.href}
                                  className="text-[1.6rem] font-light tracking-normal text-white"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-2"
                        className="flex flex-col gap-[6px]"
                      >
                        <AccordionTrigger className="group flex items-center justify-start gap-[1rem] text-[1.8rem] leading-[4rem] font-medium tracking-normal text-white">
                          <span>Growth</span>{" "}
                          <i className="origin-center stroke-white transition-all duration-200 group-data-[state=open]:rotate-180">
                            <ChevronDownIcon />
                          </i>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-[1rem]">
                            {GROWTH_SERVICE_NAV.map((item, idx) => (
                              <li key={idx}>
                                <Link
                                  href={item.href}
                                  className="text-[1.6rem] font-light tracking-normal text-white"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-3"
                        className="flex flex-col gap-[6px]"
                      >
                        <AccordionTrigger className="group flex items-center justify-start gap-[1rem] text-[1.8rem] leading-[4rem] font-medium tracking-normal text-white">
                          <span>Support</span>{" "}
                          <i className="origin-center stroke-white transition-all duration-200 group-data-[state=open]:rotate-180">
                            <ChevronDownIcon />
                          </i>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-[1rem]">
                            {SUPPORT_SERVICE_NAV.map((item, idx) => (
                              <li key={idx}>
                                <Link
                                  href={item.href}
                                  className="text-[1.6rem] font-light tracking-normal text-white"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <ul>
                      <li>
                        <Link
                          href="/agencies"
                          className="text-[1.8rem] leading-[4rem] font-medium tracking-normal text-white"
                        >
                          White-label / Agencies
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-[4rem]">
                  <div className="flex flex-col gap-[2rem]">
                    <h5 className="text-[2.2rem] leading-[3.2rem] font-extrabold tracking-normal text-white">
                      Legal
                    </h5>

                    <ul>
                      <li>
                        <Link
                          href="/legal"
                          className="text-[1.8rem] leading-[4rem] font-medium tracking-normal text-white"
                        >
                          Legal Hub
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/legal/privacy-policy"
                          className="text-[1.8rem] leading-[4rem] font-medium tracking-normal text-white"
                        >
                          Privacy Policy
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/legal/cookies-policy"
                          className="text-[1.8rem] leading-[4rem] font-medium tracking-normal text-white"
                        >
                          Cookies Policy
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-[2rem]">
                    <h5 className="text-[2.2rem] leading-[3.2rem] font-extrabold tracking-normal text-white">
                      Solution
                    </h5>

                    <div>
                      <Accordion type="single" collapsible>
                        <AccordionItem
                          value="item-1"
                          className="flex flex-col gap-[6px]"
                        >
                          <AccordionTrigger className="group flex items-center justify-start gap-[1rem] text-[1.8rem] leading-[4rem] font-medium tracking-normal text-white">
                            <span>By Sector</span>{" "}
                            <i className="origin-center stroke-white transition-all duration-200 group-data-[state=open]:rotate-180">
                              <ChevronDownIcon />
                            </i>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="flex flex-col gap-[1rem]">
                              {SECTOR_SOLUTION_NAV.map((item, idx) => (
                                <li key={idx}>
                                  <Link
                                    href={item.href}
                                    className="text-[1.6rem] font-light tracking-normal text-white"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                          value="item-2"
                          className="flex flex-col gap-[6px]"
                        >
                          <AccordionTrigger className="group flex items-center justify-start gap-[1rem] text-[1.8rem] leading-[4rem] font-medium tracking-normal text-white">
                            <span>By Goal</span>{" "}
                            <i className="origin-center stroke-white transition-all duration-200 group-data-[state=open]:rotate-180">
                              <ChevronDownIcon />
                            </i>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="flex flex-col gap-[1rem]">
                              {GOAL_SOLUTION_NAV.map((item, idx) => (
                                <li key={idx}>
                                  <Link
                                    href={item.href}
                                    className="text-[1.6rem] font-light tracking-normal text-white"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <h5 className="text-[2.2rem] leading-[3.2rem] font-extrabold tracking-normal text-white">
                    Ready to Start
                  </h5>

                  <div className="mt-[2rem] mb-[3.4rem] flex flex-col items-start text-left">
                    <h6 className="text-[1.8rem] leading-[4rem] font-medium tracking-normal text-[#3078FF]">
                      Address
                    </h6>

                    <p className="text-[2rem] leading-[2.4rem] font-medium tracking-normal text-white">
                      Bartle House, Oxford Court, Manchester, M2 3WQ
                    </p>
                  </div>

                  <div className="flex items-center gap-[8px]">
                    <div>
                      <Link
                        href="https://www.facebook.com/CPAgencyUK"
                        className="inline-flex size-[5.7rem] items-center justify-center rounded-full bg-white/15"
                      >
                        <Image
                          src={FacebookIcon}
                          width={34}
                          height={34}
                          alt="Icon"
                        />
                      </Link>
                    </div>

                    <div>
                      <Link
                        href="https://www.instagram.com/cpagencyuk/"
                        className="inline-flex size-[5.7rem] items-center justify-center rounded-full bg-white/15"
                      >
                        <Image
                          src={InstagramIcon}
                          width={34}
                          height={34}
                          alt="Icon"
                        />
                      </Link>
                    </div>

                    <div>
                      <Link
                        href="https://www.linkedin.com/company/creativepixels/"
                        className="inline-flex size-[5.7rem] items-center justify-center rounded-full bg-white/15"
                      >
                        <Image
                          src={LinkedinIcon}
                          width={34}
                          height={34}
                          alt="Icon"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsive */}
              <div className="footer-nav my-[3.6rem] block w-full xl:hidden">
                <Accordion
                  type="single"
                  className="flex flex-col gap-[1rem]"
                  collapsible
                >
                  <AccordionItem
                    value="item-1"
                    className="flex flex-col gap-[6px] border-b border-white/40 pb-[1rem]"
                  >
                    <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] text-[1.8rem] leading-[4rem] tracking-normal text-white">
                      <span>Quick Links</span>{" "}
                      <i className="origin-center stroke-white transition-all duration-200 group-data-[state=open]:rotate-180">
                        <ChevronDownIcon />
                      </i>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col gap-[1rem]">
                        {MAIN_NAV.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={item.href}
                              className="text-[1.6rem] font-light tracking-normal text-white"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-2"
                    className="flex flex-col gap-[6px] border-b border-white/40 pb-[1rem]"
                  >
                    <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] text-[1.8rem] leading-[4rem] tracking-normal text-white">
                      <span>Services</span>{" "}
                      <i className="origin-center stroke-white transition-all duration-200 group-data-[state=open]:rotate-180">
                        <ChevronDownIcon />
                      </i>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col gap-[1rem]">
                        {DESIGN_SERVICE_NAV.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={item.href}
                              className="text-[1.6rem] font-light tracking-normal text-white"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                        {GROWTH_SERVICE_NAV.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={item.href}
                              className="text-[1.6rem] font-light tracking-normal text-white"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                        {SUPPORT_SERVICE_NAV.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={item.href}
                              className="text-[1.6rem] font-light tracking-normal text-white"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href="/agencies"
                            className="text-[1.6rem] font-light tracking-normal text-white"
                          >
                            White-label / Agencies
                          </Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-3"
                    className="flex flex-col gap-[6px] border-b border-white/40 pb-[1rem]"
                  >
                    <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] text-[1.8rem] leading-[4rem] tracking-normal text-white">
                      <span>Solution</span>{" "}
                      <i className="origin-center stroke-white transition-all duration-200 group-data-[state=open]:rotate-180">
                        <ChevronDownIcon />
                      </i>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col gap-[1rem]">
                        {SECTOR_SOLUTION_NAV.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={item.href}
                              className="text-[1.6rem] font-light tracking-normal text-white"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                        {GOAL_SOLUTION_NAV.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={item.href}
                              className="text-[1.6rem] font-light tracking-normal text-white"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-4"
                    className="flex flex-col gap-[6px] border-b border-white/40 pb-[1rem]"
                  >
                    <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] text-[1.8rem] leading-[4rem] tracking-normal text-white">
                      <span>Legal</span>{" "}
                      <i className="origin-center stroke-white transition-all duration-200 group-data-[state=open]:rotate-180">
                        <ChevronDownIcon />
                      </i>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col gap-[1rem]">
                        <li>
                          <Link
                            href="/legal"
                            className="text-[1.6rem] font-light tracking-normal text-white"
                          >
                            Legal Hub
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/legal/privacy-policy"
                            className="text-[1.6rem] font-light tracking-normal text-white"
                          >
                            Privacy Policy
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/legal/cookies-policy"
                            className="text-[1.6rem] font-light tracking-normal text-white"
                          >
                            Cookies Policy
                          </Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <ul className="mb-[4.8rem] flex items-center justify-center gap-[8px] xl:hidden">
                <li>
                  <Link
                    href="https://www.facebook.com/CPAgencyUK"
                    className="inline-flex size-[5.7rem] items-center justify-center rounded-full bg-white/15"
                  >
                    <Image
                      src={FacebookIcon}
                      width={34}
                      height={34}
                      alt="Icon"
                    />
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://www.instagram.com/cpagencyuk/"
                    className="inline-flex size-[5.7rem] items-center justify-center rounded-full bg-white/15"
                  >
                    <Image
                      src={InstagramIcon}
                      width={34}
                      height={34}
                      alt="Icon"
                    />
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://www.linkedin.com/company/creativepixels/"
                    className="inline-flex size-[5.7rem] items-center justify-center rounded-full bg-white/15"
                  >
                    <Image
                      src={LinkedinIcon}
                      width={34}
                      height={34}
                      alt="Icon"
                    />
                  </Link>
                </li>
              </ul>

              <ul className="hidden grid-cols-6 gap-[2rem] xl:grid">
                {FOOTER_CARD.map((item, idx) => (
                  <li
                    key={idx}
                    className="group relative h-[6.3rem] w-full overflow-hidden rounded-[1rem] bg-white/16"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={item.logo}
                        width={item.width}
                        height={item.height}
                        alt={item.alt}
                      />
                    </div>

                    {/* <div className="absolute inset-0 flex items-center justify-center bg-white opacity-0 transition-all duration-200 group-hover:opacity-100">
                      <span className="text-[1.8rem] font-bold tracking-normal text-black">
                        80+ Reviews
                      </span>
                    </div> */}
                  </li>
                ))}
              </ul>

              {/* Responsive */}
              <div
                style={{
                  maskImage:
                    "linear-gradient(to right,rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%,rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
                }}
                className="block w-full xl:hidden"
              >
                <Marquee speed={50} pauseOnHover gradient={false}>
                  {FOOTER_CARD.map((item, idx) => (
                    <div
                      key={idx}
                      className="group relative mx-[1rem] inline-block h-[5.6rem] w-[16.4rem] overflow-hidden rounded-[1rem] bg-white/16"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src={item.logo}
                          width={item.width}
                          height={item.height}
                          alt={item.alt}
                          className={`${item.sizes}`}
                        />
                      </div>

                      {/* <div className="absolute inset-0 flex items-center justify-center bg-white opacity-0 transition-all duration-200 group-hover:opacity-100">
                        <span className="text-[1.8rem] font-bold tracking-normal text-black">
                          80+ Reviews
                        </span>
                      </div> */}
                    </div>
                  ))}
                </Marquee>
              </div>

              <div className="mt-[4rem] flex flex-col items-center justify-between gap-[2rem] text-center xl:flex-row xl:text-left">
                <p className="text-[1.6rem] leading-[2.6rem] font-semibold tracking-normal text-white md:text-[1.8rem]">
                  2026 © CP Agency Ltd. Trading as CreativePixels.
                </p>

                <div className="flex flex-col items-center justify-end gap-[1rem] md:gap-[3.2rem] xl:flex-row">
                  <h5 className="text-[1.8rem] leading-[3.2rem] font-bold tracking-normal text-white md:text-[2rem]">
                    Our Brands
                  </h5>

                  <ul className="flex items-center gap-[1.4rem] md:gap-[2rem]">
                    <li>
                      <Link href="https://creativehosting.io/">
                        <Image
                          src={HostingIcon}
                          width={73}
                          height={34}
                          alt="Logo"
                          className="h-[2.5rem] w-[5.4rem] md:h-[3.4rem] md:w-[7.3rem]"
                        />
                      </Link>
                    </li>

                    <li className="h-[24px] w-[1px] bg-white md:h-[32px]" />

                    <li>
                      <Link href="">
                        <Image
                          src={WpFixedIcon}
                          width={75}
                          height={31}
                          alt="Logo"
                          className="h-[2.3rem] w-[5.5rem] md:h-[3.1rem] md:w-[7.5rem]"
                        />
                      </Link>
                    </li>

                    <li className="h-[24px] w-[1px] bg-white md:h-[32px]" />

                    <li>
                      <Link href="">
                        <Image
                          src={MonthlyIcon}
                          width={137}
                          height={23}
                          alt="Logo"
                          className="h-[1.7rem] w-[10.2rem] md:h-[2.3rem] md:w-[13.7rem]"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
