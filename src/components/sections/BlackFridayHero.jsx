import { Container } from "../ui/Container";
import Section from "../ui/Section";
import Starfield from "../ui/Starfield";
import BlackFridayQuoteForm from "./BlackFridayQuoteForm";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import ScrollLink from "../ui/ScrollLink";

const checklist = [
  "Flexible milestones, low risk for both",
  "Pay only for stages you sign off",
  "Your clients stay yours, in writing",
  "NDAs and agency references",
];

const BlackFridayHero = () => {
  return (
    <Section
      id="black-friday-hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-black max-bf-xl:items-start"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/black-friday/hero-gradient-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover max-bf-sm:hidden"
        />

        <Image
          src="/images/black-friday/hero-gradient-bg-mobile.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover max-bf-sm:block"
        />

        <Starfield className="absolute top-0 right-[-50px] z-0 h-full w-[260px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />
      </div>

      <Container className="relative z-10 pt-[180px] pb-[100px] max-bf-xl:px-[40px] max-bf-sm:px-[20px] max-bf-sm:pt-[130px] max-bf-sm:pb-[60px]">
        <div className="flex items-center justify-between gap-[60px] max-bf-xl:flex-col max-bf-xl:items-start max-bf-xl:gap-[40px]">
          <div className="w-[560px] shrink-0 max-bf-xl:w-full">
            <h1 className="text-[75px] leading-[80px] font-extrabold tracking-[-0.07em] text-white max-bf-sm:text-[44px] max-bf-sm:leading-[46px]">
              Help that doesn’t
              <br />
              <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                need fixing.
              </span>
            </h1>

            <p className="mt-[35px] max-w-[480px] text-[18px] leading-[27px] tracking-[-0.02em] text-white max-bf-sm:mt-[20px] max-bf-sm:text-[14px] max-bf-sm:leading-[20px]">
              White-label design, builds and maintenance on WordPress,
              WooCommerce and Shopify. 14 years behind the scenes for UK and US
              agencies.
            </p>

            <ul className="mt-[30px] flex flex-col gap-[10px] max-bf-sm:mt-[25px]">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-[15px] max-bf-sm:gap-[10px]"
                >
                  <CircleCheck
                    size={31}
                    strokeWidth={2}
                    className="text-dark-pink shrink-0 max-bf-sm:size-[22px]"
                  />

                  <span className="text-[22px] font-extrabold tracking-[-0.04em] text-white max-bf-sm:text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* <p className="mt-[45px] flex items-center justify-between gap-[15px] text-[22px] font-bold tracking-[-0.02em] text-white max-bf-sm:mt-[25px] max-bf-sm:gap-[10px] max-bf-sm:text-[16px]">
              <span className="text-[16px] font-normal max-bf-sm:max-w-[92px] max-bf-sm:text-[13px]">
                Black Friday prices:
              </span>{" "}
              <span className="max-bf-sm:max-w-[147px]">
                from $30/hr or $1,500/month
              </span>
              <ScrollLink
                href="#black-friday-pricing"
                className="text-[16px] font-normal tracking-[-0.02em] text-white underline underline-offset-2 transition-opacity duration-300 hover:text-white hover:opacity-100 max-bf-sm:max-w-[51px] max-bf-sm:text-[13px]"
              >
                See prices
              </ScrollLink>
            </p> */}
          </div>

          <BlackFridayQuoteForm />
        </div>
      </Container>
    </Section>
  );
};

export default BlackFridayHero;
