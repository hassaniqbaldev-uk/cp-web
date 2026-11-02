import { Container } from "../ui/Container";
import Section from "../ui/Section";
import Image from "next/image";

// Horizontal anchors (% of the row width) for each step. These match the
// troughs of wave-line.png, so each number, dot and text block lines up with
// the point where the wave dips under it.
const ANCHORS = [15.0, 49.6, 82.9];

const steps = [
  {
    num: "01",
    title: "Answer 5 quick questions",
    description: "So we know your store is a fit before anyone’s time is used.",
  },
  {
    num: "02",
    title: "Pick a time for your call",
    description: "30 minutes on Google Meet, at a time that suits you.",
  },
  {
    num: "03",
    title: "Get your video before the call",
    description:
      "Recorded for your store, so the call is about fixes, not discovery.",
  },
];

const numberClass =
  "bg-[linear-gradient(180deg,#A8C6FF_-32.95%,rgba(168,198,255,0)_134.08%)] bg-clip-text font-extrabold tracking-[-0.07em] text-transparent";

const Dot = () => (
  <span
    style={{ boxShadow: "0px 4px 15px 0px #3078FF66" }}
    className="flex size-[45px] items-center justify-center rounded-full bg-white"
  >
    <span className="bg-blue size-[25px] rounded-full" />
  </span>
);

const StoreReviewHowItWorks = () => {
  return (
    <Section
      id="how-it-works"
      className="max-bf-sm:py-[60px] bg-blue/10 py-[100px]"
    >
      <Container className="max-bf-xl:px-[40px] max-bf-sm:px-[20px]">
        <p className="max-bf-sm:text-[13px] text-center text-[22px] font-medium tracking-[-0.02em] text-black uppercase">
          How it works
        </p>

        <h2 className="max-bf-sm:text-[30px] max-bf-sm:leading-[34px] mt-[14px] text-center text-[52px] leading-[56px] font-extrabold tracking-[-0.07em] text-black">
          Three steps.
          <br />
          <span className="text-black/40">About a minute of your time.</span>
        </h2>

        {/* Desktop: numbers + wave + dots + text, anchored to the wave troughs */}
        <div className="max-bf-xl:hidden relative mt-[80px]">
          {/* Big faint numbers */}
          <div className="relative h-[135px]">
            {steps.map(({ num }, i) => (
              <span
                key={num}
                style={{ left: `${ANCHORS[i]}%` }}
                className={`${numberClass} absolute bottom-0 -translate-x-1/2 pr-[12px] text-[135px] leading-none`}
              >
                {num}
              </span>
            ))}
          </div>

          {/* Wave line pulled up to cross the lower part of the numbers, with a
              dot on each trough */}
          <div className="relative -mt-[58px]">
            <Image
              src="/images/store-review/wave-line.png"
              alt=""
              width={1200}
              height={97}
              className="h-auto w-full"
            />

            {ANCHORS.map((a, i) => (
              <span
                key={i}
                style={{ left: `${a}%`, top: "83%" }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <Dot />
              </span>
            ))}
          </div>

          {/* Titles + descriptions */}
          <div className="relative mt-[26px] h-[160px]">
            {steps.map(({ num, title, description }, i) => (
              <div
                key={num}
                style={{ left: `${ANCHORS[i]}%` }}
                className="absolute top-0 w-[240px] -translate-x-1/2 text-center"
              >
                <h3 className="text-[30px] leading-[36px] font-bold tracking-[-0.07em] text-black">
                  {title}
                </h3>

                <p className="text-text-body mt-[8px] text-[18px] leading-[21px] tracking-[-0.02em]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: simple stacked steps (no wave) */}
        <div className="max-bf-xl:mt-[40px] max-bf-xl:flex max-bf-xl:flex-col max-bf-xl:items-center max-bf-xl:gap-[40px] hidden">
          {steps.map(({ num, title, description }) => (
            <div key={num} className="max-w-[300px] text-center">
              <span
                className={`${numberClass} pr-[12px] text-[90px] leading-none`}
              >
                {num}
              </span>

              <div className="my-[12px] flex justify-center">
                <Dot />
              </div>

              <h3 className="text-[20px] leading-[26px] font-bold tracking-[-0.04em] text-black">
                {title}
              </h3>

              <p className="text-text-body mt-[8px] text-[14px] tracking-[-0.02em]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default StoreReviewHowItWorks;
