"use client";
import { MotionEffect } from "@/components/effects/motion-effect";
import dynamic from "next/dynamic";
import LightFeatureCard1 from "@/components/ui/LightFeatureCard1";

const LightFeatureCardSlider1 = dynamic(
  () => import("@/components/ui/LightFeatureCardSlider1"),
  {
    ssr: false,
  },
);

export const valuesCards = [
  {
    title: "People Over Output",
    description:
      "Great work comes from people who actually enjoy what they do. We keep things lean, collaborative, and free from the nonsense that drains good teams. No micromanagement. No politics. Just good people doing meaningful work.",
    icon: "/icons/group-icon.svg",
    color: "#FF37B3",
    boxShadow: "4px 12px 30px 0px #FF37B31C",
  },
  {
    title: "Invested in Your Growth",
    description:
      "We take craft seriously here. Whether it's a course, a conference, or a book you've had your eye on, we back it. The better you get, the better our work gets. Simple as that.",
    icon: "/icons/cup-icon.svg",
    color: "#EE8D00",
    boxShadow: "4px 12px 30px 0px #EE76211C",
  },
  {
    title: "Work Without Boundaries",
    description:
      "Our home is Manchester. Our team is wherever the best people are. We focus on outcomes, not office hours. If you do good work, we trust you to decide where and how you do it.",
    icon: "/icons/friends-icon.svg",
    color: "#3078FF",
    boxShadow: "4px 12px 30px 0px #3078FF1C",
  },
];

const Values2 = () => {
  const slideData = valuesCards.map((item, idx) => {
    return {
      id: idx,
      icon: item.icon,
      title: item.title,
      description: item.description,
      color: item.color,
    };
  });

  return (
    <>
      <section className="relative overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="hidden grid-cols-3 gap-[3.3rem] xl:grid">
            {valuesCards.map((item, idx) => (
              <MotionEffect
                key={idx}
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.4 + idx * 0.15}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <LightFeatureCard1
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  color={item.color}
                  hoverShadow={item.boxShadow}
                />
              </MotionEffect>
            ))}
          </div>

          {/* Responsive */}
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.4}
            transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
            className="w-full"
          >
            <div className="block w-full xl:hidden">
              <LightFeatureCardSlider1 slideData={slideData} />
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};
export default Values2;
