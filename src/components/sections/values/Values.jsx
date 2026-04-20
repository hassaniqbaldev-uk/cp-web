"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import Image from "next/image";
import { MotionEffect } from "@/components/effects/motion-effect";
import ValuesCardImg from "@/assets/images/cards/values-card-img.png";
import LightFeatureCard1 from "@/components/ui/LightFeatureCard1";

export const valuesData = [
  {
    title: "People First",
    description:
      "Technology is just a tool. We focus on the humans who will actually use the products we build.",
    icon: "/icons/group-icon.svg",
    color: "#3078FF",
    boxShadow: "4px 12px 30px 0px #3078FF1C",
  },
  {
    title: "Outcome Driven",
    description:
      "We don't care about vanity metrics. We care about leads, sales, and measurable growth for your business.",
    icon: "/icons/computer-icon.svg",
    color: "#FF37B3",
    boxShadow: "4px 12px 30px 0px #FF37B31C",
  },
  {
    title: "Move Fast",
    description:
      "The digital world changes daily. We build agile workflows that allow us to ship, test, and iterate quickly.",
    icon: "/icons/fast-timeline-icon-2.svg",
    color: "#EE8D00",
    boxShadow: "4px 12px 30px 0px #EE76211C",
  },
  {
    title: "Radical Transparency",
    description:
      "No hidden fees, no tech jargon. We explain what we're doing and why, every step of the way.",
    icon: "/icons/heart-icon-2.svg",
    color: "#44B276",
    boxShadow: "4px 12px 30px 0px #44B2761C",
  },
];

const Values = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F0F6FF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.1}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <SectionLabel text="Our Values" textColor="#FF37B3" />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.25}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div className="mt-[5px] mb-[14px]">
                <SectionTitle text="Our Core Values" />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.4}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <SectionDescription text="The principles that guide every decision we make." />
              </div>
            </MotionEffect>
          </div>

          <div className="mt-[5rem] flex flex-col items-center justify-center gap-[4rem] xl:flex-row xl:items-stretch">
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.1}
              transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              className="h-full w-full overflow-hidden rounded-[3rem] md:w-[58rem]"
            >
              <Image
                src={ValuesCardImg}
                width={580}
                height={677}
                alt="Card Image"
                className="size-full object-cover object-center"
                unoptimized
              />
            </MotionEffect>

            <div className="grid w-full gap-[3.3rem] md:grid-cols-2 xl:w-[58.5rem]">
              {valuesData.map((item, idx) => (
                <MotionEffect
                  key={idx}
                  slide={{ direction: "down" }}
                  fade
                  inView
                  delay={0.1 + idx * 0.15}
                  transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
                >
                  <LightFeatureCard1
                    icon={item.icon}
                    color={item.color}
                    hoverShadow={item.boxShadow}
                    title={item.title}
                    description={item.description}
                  />
                </MotionEffect>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Values;
