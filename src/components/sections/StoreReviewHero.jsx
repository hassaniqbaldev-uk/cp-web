import { Container } from "../ui/Container";
import Section from "../ui/Section";
import Starfield from "../ui/Starfield";
import StoreReviewQuoteForm from "./StoreReviewQuoteForm";
import { CircleCheck } from "lucide-react";
import Image from "next/image";

const checklist = [
  "Recorded by Hassan, not an AI report",
  "For stores doing £5k+ a month",
  "Fixed prices on the call, quote within 1 working day",
];

// Stores we've built. Desktop logos are dark PNGs rendered white (brightness-0
// invert) so they read on the dark badges; the mobile logos are already-white
// compact versions, shown at max-bf-sm with no filter.
const stores = [
  {
    id: "smokey-carter",
    src: "/images/black-friday/smokey-carter-logo.png",
    width: 53,
    height: 61,
    mobileSrc: "/images/black-friday/smokey-carter-logo-mobile.png",
    mobileWidth: 118,
    mobileHeight: 136,
    mobileInvert: true,
    alt: "The Smokey Carter",
  },
  {
    id: "ivy-duke",
    src: "/images/black-friday/ivy-duke-logo.png",
    width: 80,
    height: 38,
    mobileSrc: "/images/black-friday/ivy-duke-logo-mobile.png",
    mobileWidth: 179,
    mobileHeight: 86,
    mobileInvert: true,
    alt: "Ivy & Duke",
  },
  {
    id: "fultons",
    src: "/images/black-friday/fultons-logo.png",
    width: 73,
    height: 32,
    mobileSrc: "/images/black-friday/fultons-logo-mobile.png",
    mobileWidth: 164,
    mobileHeight: 72,
    mobileInvert: true,
    alt: "Fultons Jewellery",
  },
  {
    id: "lola",
    src: "/images/black-friday/lola-logo.png",
    width: 53,
    height: 53,
    mobileSrc: "/images/black-friday/lola-logo-mobile.png",
    mobileWidth: 119,
    mobileHeight: 119,
    mobileInvert: true,
    alt: "Lola & Blake",
  },
  {
    id: "cycling",
    src: "/images/store-review/cycling-logo.png",
    width: 89,
    height: 25,
    mobileSrc: "/images/store-review/cycling-logo-mobile.png",
    mobileWidth: 199,
    mobileHeight: 57,
    mobileInvert: true, // this mobile logo is dark, so invert it to white
    alt: "Cycling Jewellery",
  },
];

const StoreReviewHero = () => {
  return (
    <Section
      id="store-review-hero"
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
              Free video review · Shopify &amp; WooCommerce
            </span>

            <h1 className="max-bf-sm:text-[44px] max-bf-sm:leading-[46px] mt-[20px] text-[75px] leading-[80px] font-extrabold tracking-[-0.07em] text-white">
              Traffic,{" "}
              <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                no sales?
              </span>
              <br />
              We’ll show you why.
            </h1>

            <p className="max-bf-sm:mt-[20px] max-bf-sm:text-[14px] max-bf-sm:leading-[20px] mt-[30px] max-w-[470px] text-[18px] leading-[27px] tracking-[-0.02em] text-white">
              Hassan records a short video going through your store: the 3
              things most likely costing you sales, and the fix for each. Then a
              30-minute call with fixed prices. No obligation.
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

          <StoreReviewQuoteForm />
        </div>

        {/* Separator + "stores we've built" strip */}
        <div className="max-bf-sm:mt-[30px] mt-[110px] border-t border-white/10 pt-[58px]">
          <div className="max-bf-xl:flex-col max-bf-xl:gap-[25px] flex items-center justify-between gap-[40px]">
            <p className="max-bf-sm:text-[18px] shrink-0 text-[22px] font-medium tracking-[-0.02em] whitespace-nowrap text-white uppercase">
              Stores we’ve built
            </p>

            <ul className="flex flex-1 items-center justify-center gap-[12px]">
              {stores.map(
                ({
                  id,
                  src,
                  alt,
                  width,
                  height,
                  mobileSrc,
                  mobileWidth,
                  mobileHeight,
                  mobileInvert,
                }) => (
                  <li
                    key={id}
                    className="max-bf-sm:size-[56px] flex size-[116px] items-center justify-center rounded-full border border-white/10 bg-white/15"
                  >
                    {/* Desktop: dark logo inverted to white */}
                    <Image
                      src={src}
                      alt={alt}
                      width={width}
                      height={height}
                      className="max-bf-sm:hidden object-contain [filter:brightness(0)_invert(1)]"
                    />

                    {/* Mobile: compact logo. Most are already white; a dark one
                        (mobileInvert) is inverted to white. */}
                    <Image
                      src={mobileSrc}
                      alt={alt}
                      width={mobileWidth}
                      height={mobileHeight}
                      className={`max-bf-sm:block hidden h-auto max-h-[26px] w-auto max-w-[40px] object-contain ${
                        mobileInvert ? "[filter:brightness(0)_invert(1)]" : ""
                      }`}
                    />
                  </li>
                ),
              )}
            </ul>

            <p className="max-bf-xl:max-w-full max-bf-xl:text-center max-bf-sm:text-[15px] max-bf-sm:max-w-[200px] max-bf-sm:leading-[20px] max-w-[260px] shrink-0 text-right text-[22px] leading-[28px] font-extrabold tracking-[-0.04em] text-white">
              As heard on BBC Radio Manchester &amp; Lancashire
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default StoreReviewHero;
