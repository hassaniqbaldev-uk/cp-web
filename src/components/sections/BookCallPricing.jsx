import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import Starfield from "../ui/Starfield";
import { Headphones, PenTool, ShoppingBag, Tag } from "lucide-react";

const plans = [
  {
    id: "conversion-fixes",
    price: "£500",
    icon: Tag,
    title: "Conversion fixes",
    description: "The quick wins from your review",
  },
  {
    id: "websites",
    price: "£1,500",
    icon: PenTool,
    title: "Websites",
    description: "Small sites and landing pages",
  },
  {
    id: "shopify-builds",
    price: "£3,500",
    icon: ShoppingBag,
    title: "Shopify builds",
    description: "New or rebuilt stores",
  },
  {
    id: "support-care",
    price: "£300",
    unit: "/mo",
    icon: Headphones,
    title: "Support & care",
    description: "Updates, fixes and speed checks",
  },
];

const PlanCard = ({ price, unit, icon: Icon, title, description }) => (
  <div className="overflow-hidden rounded-[20px] bg-[#E9E9E9] p-[10px]">
    {/* Dark top with the starry card background */}
    <div className="relative h-[170px] overflow-hidden rounded-[14px]">
      <Image
        src="/images/store-review/prices-card-bg.png"
        alt=""
        fill
        sizes="(max-width: 1024px) 50vw, 280px"
        className="object-cover"
      />

      <div className="relative flex h-full flex-col justify-between p-[20px]">
        <div className="flex items-start justify-between">
          <span className="text-[14px] tracking-[-0.02em] text-white/70">
            From
          </span>

          <span className="flex size-[70px] items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-[4px]">
            <Icon
              size={40}
              strokeWidth={2}
              className="max-bf-sm:size-[30px] size-[40px]"
            />
          </span>
        </div>

        <div className="flex items-end gap-[2px]">
          <span className="text-[34px] leading-none font-extrabold tracking-[-0.04em] text-white">
            {price}
          </span>

          {unit && (
            <span className="pb-[3px] text-[16px] font-semibold text-white/70">
              {unit}
            </span>
          )}
        </div>
      </div>
    </div>

    {/* Grey footer */}
    <div className="px-[20px] py-[18px]">
      <h3 className="text-[16px] font-bold tracking-[-0.02em] text-black">
        {title}
      </h3>

      <p className="text-text-body mt-[4px] text-[13px] leading-[18px] tracking-[-0.02em]">
        {description}
      </p>
    </div>
  </div>
);

const BookCallPricing = () => {
  return (
    <Section id="prices" className="max-bf-sm:py-[60px] bg-white py-[100px]">
      <Container className="max-bf-xl:px-[40px] max-bf-sm:px-[20px]">
        <p className="max-bf-sm:text-[13px] text-center text-[22px] font-medium tracking-[-0.02em] text-black uppercase">
          Fixed prices
        </p>

        <h2 className="max-bf-sm:text-[30px] max-bf-sm:leading-[34px] mt-[14px] text-center text-[52px] leading-[56px] font-extrabold tracking-[-0.07em] text-black">
          You’ll know the price
          <br />
          <span className="text-black/40">before anything starts.</span>
        </h2>

        {/* Gradient guarantee box */}
        <div className="relative mt-[40px] overflow-hidden rounded-[20px] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)]">
          <Starfield className="absolute top-0 left-0 z-0 h-full w-[280px] mask-[radial-gradient(ellipse_at_left,#000_30%,transparent_80%)]" />
          <Starfield className="absolute top-0 right-0 z-0 h-full w-[280px] mask-[radial-gradient(ellipse_at_right,#000_30%,transparent_80%)]" />

          <div className="max-bf-sm:flex-col max-bf-sm:gap-[16px] max-bf-sm:px-[24px] max-bf-sm:py-[28px] max-bf-sm:text-center relative z-10 flex items-center justify-center gap-[30px] px-[50px] py-[36px]">
            <Image
              src="/images/store-review/glass-shield.png"
              alt=""
              width={130}
              height={148}
              className="h-[148px] w-auto shrink-0"
            />

            <p className="max-bf-sm:text-[20px] max-bf-sm:leading-[26px] max-w-[583px] text-[45px] leading-[54px] font-bold tracking-[-0.07em] text-white">
              Fixed price, agreed scope, and we put it right within 30 days.
            </p>
          </div>
        </div>

        {/* Price cards */}
        <div className="max-bf-lg:grid-cols-2 max-bf-sm:grid-cols-1 mt-[36px] grid grid-cols-4 gap-[30px]">
          {plans.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default BookCallPricing;
