"use client";
import CheckMarkIcon3 from "@/components/icons/CheckMarkIcon3";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import { MotionEffect } from "@/components/effects/motion-effect";

export const growthData = {
  heading: "Expand your services, take on more clients.",
  description:
    "Deliver results without the overhead of hiring in-house. Access web and graphics designers, developers, and long-term support all under your own brand.",

  features: [
    {
      title: "Expertise on Demand",
      description:
        "Tap into senior designers, developers, and strategists when you need them.",
    },
    {
      title: "Scalable Capacity",
      description:
        "Scale up or down instantly based on client demand. No idle staff costs.",
    },
    {
      title: "Seamless Branding",
      description:
        "Every project delivered strictly under your agency's name and email domain.",
    },
  ],

  stats: [
    {
      value: "8+",
      label: "Partner Agencies",
    },
    {
      value: "500+",
      label: "White Label Projects",
    },
  ],

  comparison: [
    {
      label: "Cost Efficiency",
      value: "Save ~60% vs In-House",
    },
    {
      label: "Turnaround Time",
      value: "2x Faster Delivery",
    },
    {
      label: "Client Retention",
      value: "Higher (Expanded Services)",
    },
  ],
};

const Growth = () => {
  const { heading, description, features, stats, comparison } = growthData;

  return (
    <>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-[5.7rem] xl:flex-row">
            <div className="flex w-full flex-col items-center gap-[3rem] text-center md:w-[61rem] xl:items-start xl:text-left">
              <div className="flex flex-col gap-[1rem]">
                <MotionEffect
                  slide={{ direction: "down" }}
                  fade
                  zoom
                  inView
                  delay={0.1}
                  transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
                >
                  <SectionTitle text={heading} textColor="#312749" />
                </MotionEffect>

                <MotionEffect
                  slide={{ direction: "down" }}
                  fade
                  zoom
                  inView
                  delay={0.25}
                  transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
                >
                  <SectionDescription text={description} textColor="#625C70" />
                </MotionEffect>
              </div>

              <div className="flex flex-col gap-[2rem] text-left">
                {features.map((item, idx) => (
                  <MotionEffect
                    key={idx}
                    slide={{ direction: "down" }}
                    fade
                    inView
                    delay={0.4 + idx * 0.15}
                    transition={{
                      type: "tween",
                      duration: 1.0,
                      ease: "easeOut",
                    }}
                  >
                    <div className="flex items-start gap-[1.7rem]">
                      <i className="inline-flex size-[24px] min-w-[24px] items-center justify-center rounded-[6px] bg-[#ee8d00]/10">
                        <CheckMarkIcon3 fillColor="#EE8D00" />
                      </i>

                      <div className="flex flex-col gap-[5px]">
                        <h4 className="text-[2rem] leading-[2.4rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.2rem] md:leading-[2.6rem]">
                          {item.title}
                        </h4>

                        <span className="text-[1.6rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70]">
                          {item.description}
                        </span>
                      </div>
                    </div>
                  </MotionEffect>
                ))}
              </div>
            </div>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.4}
              transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
            >
              <div
                style={{
                  boxShadow: "0px 12px 40px 0px #00000014",
                }}
                className="flex w-full flex-col items-center justify-center gap-[5rem] rounded-[3rem] border border-[#E4E3E8] bg-white p-[2rem] backdrop-blur-[10px] md:w-[53.6rem] md:p-[3rem]"
              >
                <div className="flex items-start justify-center gap-[10rem]">
                  {stats.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center gap-[6px] text-center"
                    >
                      <h4 className="text-[4rem] leading-[5rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[4.8rem] md:leading-[6rem]">
                        {item.value}
                      </h4>

                      <span className="text-[1.4rem] leading-[1.8rem] font-semibold tracking-normal md:text-[1.6rem]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex w-full flex-col gap-[2.4rem] rounded-[1.6rem] bg-[#ED910C] px-[1rem] py-[2rem] md:px-[3rem] md:py-[4rem]">
                  {comparison.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between ${idx === 2 ? "border-b-0 border-[transparent] pb-[0rem]" : "border-b border-white/40 pb-[2.3rem]"}`}
                    >
                      <h5 className="text-[1.4rem] leading-[2.4rem] font-black tracking-normal text-white md:text-[1.8rem] md:leading-[2.8rem]">
                        {item.label}
                      </h5>

                      <span className="text-right text-[1.2rem] leading-[2.4rem] font-medium tracking-normal text-white md:text-[1.8rem] md:leading-[2.8rem]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionEffect>
          </div>
        </div>
      </section>
    </>
  );
};

export default Growth;
