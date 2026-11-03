import { Container } from "../ui/Container";
import Section from "../ui/Section";
import Starfield from "../ui/Starfield";
import BookCallQuoteForm from "./BookCallQuoteForm";
import { CircleCheck } from "lucide-react";
import Image from "next/image";

const checklist = [
  "We review your store live, together",
  "For stores doing £5k+ a month",
  "Fixed prices on the call, quote within 1 working day",
];

// Stores we've built. Logos are dark PNGs rendered white (brightness-0 invert)
// so they read on the dark badges. NOTE: no "Cycling Jewellery" asset exists
// yet — add one to public/images/black-friday/ to include it.
const stores = [
  {
    id: "smokey-carter",
    src: "/images/black-friday/smokey-carter-logo.png",
    alt: "The Smokey Carter",
    width: 45,
    height: 51,
  },
  {
    id: "ivy-duke",
    src: "/images/black-friday/ivy-duke-logo.png",
    alt: "Ivy & Duke",
    width: 68,
    height: 32,
  },
  {
    id: "fultons",
    src: "/images/black-friday/fultons-logo.png",
    alt: "Fultons Jewellery",
    width: 62,
    height: 27,
  },
  {
    id: "lola",
    src: "/images/black-friday/lola-logo.png",
    alt: "Lola & Blake",
    width: 45,
    height: 45,
  },
];

const BookCallHero = () => {
  return (
    <Section
      id="book-call-hero"
      className="relative flex min-h-screen flex-col overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/black-friday/hero-gradient-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="max-bf-sm:hidden object-cover"
        />

        <Image
          src="/images/black-friday/hero-gradient-bg-mobile.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="max-bf-sm:block hidden object-cover"
        />

        <Starfield className="absolute top-0 right-[-50px] z-0 h-full w-[260px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />
      </div>

      <Container className="max-bf-xl:px-[40px] max-bf-sm:px-[20px] max-bf-sm:pt-[120px] relative z-10 flex flex-1 flex-col pt-[150px] pb-[40px]">
        <div className="max-bf-xl:flex-col max-bf-sm:text-center max-bf-xl:items-start max-bf-xl:gap-[40px] flex flex-1 items-center justify-between gap-[60px]">
          <div className="max-bf-xl:w-full w-[600px] shrink-0">
            <span className="max-bf-sm:text-[12px] block text-[22px] font-medium tracking-[-0.02em] text-white uppercase">
              Free 30-minute call · Shopify &amp; WooCommerce
            </span>

            <h1 className="max-bf-sm:text-[44px] max-bf-sm:leading-[46px] mt-[20px] text-[75px] leading-[80px] font-extrabold tracking-[-0.07em] text-white">
              Book a free 30-minute call.
              <br />
              <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                Hassan reviews your store live.
              </span>
            </h1>

            <p className="max-bf-sm:mt-[20px] max-bf-sm:text-[14px] max-bf-sm:leading-[20px] mt-[30px] max-w-[470px] text-[18px] leading-[27px] tracking-[-0.02em] text-white">
              For Shopify and WooCommerce stores doing £5k+ a month. We look at
              your store together on the call, find what’s costing you sales,
              and you get fixed prices. No obligation.
            </p>

            <ul className="max-bf-sm:mt-[25px] max-bf-sm:hidden mt-[30px] flex flex-col gap-[14px]">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="max-bf-sm:gap-[10px] flex items-center gap-[14px]"
                >
                  <CircleCheck
                    size={26}
                    strokeWidth={2}
                    className="text-dark-pink max-bf-sm:size-[22px] shrink-0"
                  />

                  <span className="max-bf-sm:text-[15px] text-[22px] font-extrabold tracking-[-0.04em] text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <BookCallQuoteForm />
        </div>
      </Container>
    </Section>
  );
};

export default BookCallHero;
