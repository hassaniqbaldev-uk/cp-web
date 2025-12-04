"use client";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import ContactForm from "../common/ContactForm";
import CtaSection2 from "../common/CtaSection2";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { getCalApi } from "@calcom/embed-react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const ContactSection = () => {
  const container = useRef();

  useGSAP(
    () => {
      const splitHeading = new SplitText(
        container.current.querySelector(".contact-heading"),
        {
          type: "lines",
          linesClass: "line",
        },
      );

      // Timeline for heading
      const headingTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-heading",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      headingTl.fromTo(
        splitHeading.lines,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
        },
        "<0.3",
      );

      // Timeline for Card
      const cardTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-card",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      cardTl.fromTo(
        ".contact-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
        },
        "<0.3",
      );
      return () => {
        splitHeading.revert();
      };
    },
    { scope: container },
  );

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
    <section ref={container} className="relative py-[5rem] xl:py-[10rem]">
      <div className="relative z-[3] mx-auto flex max-w-[122.3rem] flex-col items-center px-[3rem] xl:px-[0rem]">
        <div className="contact-heading overflow-hidden text-center">
          <SectionTitle label="Ready to Start Working With Us?" />
        </div>

        <div className="w-full">
          <div className="mt-[4.5rem] mb-[3.7rem] grid grid-cols-1 items-center gap-[3.3rem] text-center md:grid-cols-2 xl:grid-cols-3">
            <div className="contact-details-bg contact-card !px-[2.2rem] !py-[5rem]">
              <Link
                href="tel:01618202667"
                className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FFC300]"
              >
                0161 820 2667
              </Link>
            </div>

            <div className="contact-details-bg contact-card !px-[2.2rem] !py-[5rem]">
              <Link
                href="mailto:hello@cp.agency"
                className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#3078FF]"
              >
                hello@cp.agency
              </Link>
            </div>

            <div className="contact-details-bg contact-card !px-[2.2rem] !py-[5rem] md:col-span-2 xl:col-span-1">
              <button
                data-cal-namespace="15min"
                data-cal-link="hassan-iqbal-mznzu9/15min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                className="cursor-pointer text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FC529F]"
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </div>

        <div className="contact-card w-full">
          <ContactForm />
        </div>
      </div>

      <div className="relative z-[3] mx-auto mt-[6.7rem] max-w-[120.3rem] px-[3rem] xl:px-[0rem]">
        <div className="">
          <CtaSection2 />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
