"use client";

import RightArrowIcon from "@/assets/icons/right-arrow-icon.svg";
import Link from "next/link";
import LineStroke30 from "@/assets/decorative-elements/line-stroke-30.svg";
import ContactForm from "@/components/common/ContactForm";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CallPage = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#FF37B3" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
        hideBranding: true, // This hides the Cal.com branding
      });
    })();
  }, []);

  return (
    <>
      <div className="hero-sec relative w-full rounded-br-[5rem] rounded-bl-[5rem] px-[3rem] pt-[14.1rem] pb-[44.7rem] xl:px-[0rem]">
        {/* Decorative stroke line */}
        <div className="absolute inset-0 z-[1]">
          <LineStroke30 className="absolute top-[60rem] left-1/2 w-full -translate-x-1/2 xl:top-[52rem]" />
        </div>

        <div className="relative z-[3] mx-auto flex max-w-[60.5rem] flex-col items-center gap-[1.2rem] text-center">
          <h1 className="text-[3rem] leading-[5rem] font-semibold tracking-[-0.02em] text-white md:text-[5.6rem] md:leading-[6.4rem]">
            Book a call with Hassan
          </h1>

          <h4 className="text-[1.8rem] leading-[2.8rem] font-medium text-white md:text-[2.2rem] md:leading-[3.2rem]">
            Smart websites, standout branding, and ongoing support everything
            you need to grow.
          </h4>

          <Link
            href="https://creativepixels.agency/?utm_source=hassan-call&utm_medium=referral&utm_campaign=lead"
            className="common-btn-1-parent inline-flex cursor-pointer items-center"
          >
            <div className={`common-btn-1 overflow-hidden whitespace-nowrap`}>
              {/* Gradient Layer */}
              <div className="gradient-layer" />

              {/* Fill Layer (background animation) */}
              <div className="fill-layer" />

              {/* Text Layer */}
              <span className="relative z-10">See our new website</span>
            </div>

            <i className="relative z-[0] mx-[-.3rem]">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.475586 0C1.85901 2.39049 4.44175 4 7.40234 4C10.3629 4 12.9457 2.39049 14.3291 0H16.4023V18H14.3291C12.9457 15.6095 10.3629 14 7.40234 14C4.44175 14 1.85901 15.6095 0.475586 18H0.402344V0H0.475586Z"
                  fill="#FF37B3"
                />
              </svg>
            </i>

            <div className={`common-btn-arrow-1 overflow-hidden`}>
              {/* Gradient Layer */}
              <div className="gradient-layer" />

              {/* Fill Layer (background animation) */}
              <div className="fill-layer" />

              <i className="relative z-10">
                <RightArrowIcon className="fill-white" />
              </i>
            </div>
          </Link>
        </div>
      </div>

      <div className="mt-[-41rem] mb-[5rem] px-[2rem] md:mt-[-38.7rem] md:mb-[10rem] xl:px-[0rem]">
        <div className="call-glass-card p-[2rem] md:p-[4rem]">
          <Cal
            namespace="30min"
            calLink="hassan-iqbal-mznzu9/30min"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "1.2rem",
              overflow: "scroll",
            }}
            config={{
              layout: "month_view",
              theme: "dark",
              hideBranding: true,
            }}
          />
        </div>
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem] px-[3rem] pb-[10rem] xl:px-[0rem]">
        <ContactForm />
      </div>
    </>
  );
};

export default CallPage;
