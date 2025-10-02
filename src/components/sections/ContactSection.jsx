"use client";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import ContactForm from "../common/ContactForm";
import CtaSection2 from "../common/CtaSection2";
import TextMarquee from "../common/TextMarquee";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { getCalApi } from "@calcom/embed-react";

const ContactSection = () => {
  const titleRef = useRef();
  const cardRef1 = useRef();
  const cardRef2 = useRef();

  useEffect(() => {
    const cardRefs = [cardRef1, cardRef2];

    gsap.to(titleRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    cardRefs.forEach((ref, index) => {
      if (ref.current) {
        gsap.fromTo(
          gsap.utils.toArray(ref.current.children),
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            delay: index * 0.2, // Stagger the start of each grid animation
            clearProps: "all",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });
  }, []);

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
    <section className="relative py-[5rem] xl:py-[10rem]">
      <div className="relative z-[3] mx-auto flex max-w-[122.3rem] flex-col items-center px-[3rem] xl:px-[0rem]">
        <div ref={titleRef} className="text-center opacity-0">
          <SectionTitle label="Ready to Start Working With Us?" />
        </div>

        <div ref={cardRef1} className="w-full">
          <div className="mt-[4.5rem] mb-[3.7rem] grid grid-cols-1 items-center gap-[3.3rem] text-center md:grid-cols-2 xl:grid-cols-3">
            <div className="contact-details-bg !px-[2.2rem] !py-[5rem]">
              <Link
                href="tel:01618202667"
                className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FFC300]"
              >
                0161 820 2667
              </Link>
            </div>

            <div className="contact-details-bg !px-[2.2rem] !py-[5rem]">
              <Link
                href="mailto:hello@cp.agency"
                className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#3078FF]"
              >
                hello@cp.agency
              </Link>
            </div>

            <div className="contact-details-bg !px-[2.2rem] !py-[5rem] md:col-span-2 xl:col-span-1">
              <button
                data-cal-namespace="15min"
                data-cal-link="hassan-iqbal-mznzu9/15min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                className="cursor-pointer text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FC529F]"
              >
                Schedule a Quick Call
              </button>
            </div>
          </div>
        </div>

        <div ref={cardRef2} className="w-full">
          <ContactForm />
        </div>
      </div>

      <div className="relative z-[3] mt-[4rem] mb-[6.7rem]">
        <TextMarquee />
      </div>

      <div className="relative z-[3] mx-auto max-w-[120.3rem] px-[3rem] xl:px-[0rem]">
        <div className="">
          <CtaSection2 />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
// hello
