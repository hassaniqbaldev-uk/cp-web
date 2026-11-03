"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";

// Before / after breakdown shown in the review. BEFORE is from the reference;
// AFTER is a placeholder until its copy + laptop image are provided.
const tabs = {
  before: {
    image: "/images/store-review/before-review-img.png",
    imageAlt: "Before the review: a plain product page on a MacBook",
    groups: [
      {
        heading: "Design:",
        type: "bullets",
        items: [
          "Plain product shot with no lifestyle appeal",
          "Empty star rating and weak price hierarchy",
        ],
      },
      {
        heading: "Development:",
        type: "bullets",
        items: [
          "Stacked buttons pushing key actions below fold",
          "Long, scattered product details hard to scan",
        ],
      },
      {
        heading: "Sales:",
        type: "stats",
        items: [
          { label: "Conversion rate:", value: "0.8%" },
          { label: "Cart abandonment:", value: "78%" },
          { label: "Average order value:", value: "£42" },
          { label: "Mobile load time:", value: "5.6s" },
        ],
      },
    ],
  },
  after: {
    image: "/images/store-review/after-review-img.png",
    imageAlt: "After the review: an improved product page on a MacBook",
    groups: [
      {
        heading: "Design:",
        type: "bullets",
        items: [
          "Lifestyle model image that sells the look",
          "Bold price and visible star rating upfront",
        ],
      },
      {
        heading: "Development:",
        type: "bullets",
        items: [
          "Add to Cart and Buy Now side by side",
          "Clean accordions and grid layout for details",
        ],
      },
      {
        heading: "Sales:",
        type: "stats",
        items: [
          { label: "Conversion rate:", value: "2.4%" },
          { label: "Average order value", value: "£58" },
          { label: "Cart abandonment:", value: "52%" },
          { label: "Mobile load time:", value: "1.8s" },
        ],
      },
    ],
  },
};

const DashedArrow = () => (
  <svg
    width="46"
    height="12"
    viewBox="0 0 46 12"
    fill="none"
    className="max-bf-xl:hidden mt-[7px] shrink-0 text-black"
    aria-hidden="true"
  >
    <line
      x1="0"
      y1="6"
      x2="38"
      y2="6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeDasharray="4 4"
    />
    <path
      d="M38 1 L45 6 L38 11"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

const Bullet = ({ children }) => (
  <li className="flex items-start gap-[10px]">
    <span className="bg-blue mt-[8px] size-[9px] shrink-0 rounded-full" />
    <span className="text-text-body text-[16px] leading-[22px] tracking-[-0.02em]">
      {children}
    </span>
  </li>
);

const Group = ({ group }) => (
  <div className="flex items-start gap-[20px]">
    {/* <DashedArrow /> */}

    <div className="flex-1">
      <h3 className="text-[25px] leading-[36px] font-bold tracking-[-0.07em] text-black">
        {group.heading}
      </h3>

      {group.type === "bullets" ? (
        <ul className="mt-[5px] flex flex-col gap-[8px]">
          {group.items.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      ) : (
        <div className="max-bf-sm:grid-cols-1 mt-[12px] grid grid-cols-2 gap-x-[30px] gap-y-[12px]">
          {group.items.map(({ label, value }) => (
            <div key={label} className="flex items-center gap-[10px]">
              <span className="bg-blue size-[7px] shrink-0 rounded-full" />
              <span className="text-text-body text-[15px] tracking-[-0.02em]">
                {label} <span className="font-bold text-black">{value}</span>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const StoreReviewWhatYouGet = () => {
  const [tab, setTab] = useState("before");
  const active = tabs[tab];

  return (
    <Section
      id="what-you-get"
      className="max-bf-xl:py-[60px] bg-white py-[120px]"
    >
      <Container className="max-bf-xl:px-[40px] max-bf-sm:px-[20px]">
        <p className="max-bf-sm:text-[14px] text-center text-[22px] font-medium tracking-[-0.02em] text-black uppercase">
          What you get
        </p>

        <h2 className="max-bf-sm:text-[30px] max-bf-sm:leading-[34px] mt-[14px] text-center text-[52px] leading-[56px] font-extrabold tracking-[-0.07em] text-black">
          A real look at your store,
          <br />
          <span className="text-black/50">not an AI report</span>
        </h2>

        {/* Before / after tabs */}
        <div className="mt-[55px] flex justify-center">
          <div className="flex w-full max-w-[640px] overflow-hidden rounded-t-[14px] border-b-2 border-white">
            {[
              { id: "before", label: "Before review" },
              { id: "after", label: "After review" },
            ].map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setTab(id)}
                aria-pressed={tab === id}
                className={`max-bf-sm:text-[13px] flex-1 py-[13px] text-[22px] font-medium tracking-[-0.02em] uppercase transition-colors ${
                  tab === id
                    ? "bg-black text-white"
                    : "bg-grey text-black hover:text-black"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Panel: laptop + breakdown */}
        <div className="max-bf-sm:p-[20px] bg-grey max-bf-sm:rounded-[0px] max-bf-sm:rounded-bl-[14px] max-bf-sm:rounded-br-[14px] rounded-[24px] p-[40px]">
          <div className="max-bf-xl:flex-col flex items-center gap-[40px]">
            {/* Laptop mockup with the review screenshot inside the screen. The
                inset percentages match the white screen area of the mockup. */}
            <div className="max-bf-xl:w-full relative w-[670px] shrink-0">
              <Image
                src="/images/store-review/laptop-mockup.png"
                alt=""
                width={670}
                height={390}
                className="h-auto w-full"
              />

              {/* Percentage insets (not px) so the screenshot keeps matching the
                  mockup's screen area at every width — e.g. when the column goes
                  full-width below 1280 and the mockup scales up. Values are the
                  original px insets over the 670x390 mockup. */}
              <div className="max-bf-sm:rounded-[5px] absolute top-[5.64%] right-[13.13%] bottom-[13.85%] left-[12.24%] overflow-hidden rounded-[10px] bg-white">
                {active.image ? (
                  <Image
                    src={active.image}
                    alt={active.imageAlt}
                    fill
                    sizes="(max-width: 1280px) 100vw, 46vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-text-body/40 text-[13px] tracking-[-0.02em]">
                      After screenshot coming soon
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Breakdown */}
            <div className="flex flex-1 flex-col">
              {active.groups.length > 0 ? (
                active.groups.map((group, i) => (
                  <div
                    key={group.heading}
                    className={
                      i > 0
                        ? "mt-[24px] border-t border-black/10 pt-[24px]"
                        : ""
                    }
                  >
                    <Group group={group} />
                  </div>
                ))
              ) : (
                <p className="text-text-body/60 text-[15px] tracking-[-0.02em]">
                  “After review” content coming soon.
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default StoreReviewWhatYouGet;
