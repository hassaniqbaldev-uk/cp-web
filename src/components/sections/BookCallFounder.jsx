import { Container } from "../ui/Container";
import Section from "../ui/Section";
import Image from "next/image";
import { CircleCheck } from "lucide-react";

const points = [
  "Your store on screen, looked at together",
  "The 3 things most likely costing you sales",
  "Fixed prices, and a written quote within 1 working day",
];

// Stores we've built — black logos on white circles (the mobile* fields are
// unused here; kept so the data matches the hero's logo list).
const stores = [
  {
    id: "smokey-carter",
    src: "/images/black-friday/smokey-carter-logo.png",
    width: 53,
    height: 61,
    mobileSrc: "/images/black-friday/smokey-carter-logo-mobile.png",
    mobileWidth: 118,
    mobileHeight: 136,
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
    alt: "Cycling Jewellery",
  },
];

const BookCallFounder = () => {
  return (
    <Section
      id="your-call-is-with"
      className="max-bf-xl:py-[60px] relative bg-white pt-[200px] pb-[150px]"
    >
      <Container className="max-bf-xl:px-[40px] max-bf-sm:px-[20px] relative">
        <div className="max-bf-xl:flex-col max-bf-xl:gap-[40px] max-bf-sm:gap-[30px] flex items-center justify-between gap-[40px]">
          {/* Left — label + title */}
          <div className="max-bf-xl:order-1 max-bf-xl:w-full max-bf-xl:text-center w-[290px] shrink-0">
            <p className="max-bf-sm:text-[13px] text-[22px] font-medium tracking-[-0.02em] text-black uppercase">
              Your call is with
            </p>

            <h2 className="max-bf-xl:mx-auto max-bf-xl:max-w-[600px] max-bf-sm:text-[32px] max-bf-sm:leading-[36px] mt-[14px] text-[52px] leading-[55px] font-bold tracking-[-0.07em] text-black">
              Hassan Iqbal, founder of{" "}
              <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                CreativePixels.
              </span>
            </h2>
          </div>

          {/* Desktop (>=bf-xl): Hassan composed absolutely between the two
              text columns. */}
          <div className="max-bf-xl:hidden absolute bottom-[43px] left-[350px]">
            <Image
              src="/images/book-a-call/hassan-img.png"
              alt="Hassan Iqbal, founder of CreativePixels"
              width={834}
              height={939}
              className="block h-[469px] w-auto"
            />
          </div>

          {/* Tablet / mobile (<bf-xl): the columns stack, so Hassan flows in
              order between the title and the copy, using the mobile image. */}
          <div className="max-bf-xl:order-2 max-bf-xl:flex hidden w-full justify-center">
            <Image
              src="/images/book-a-call/hassan-img-mobile.png"
              alt="Hassan Iqbal, founder of CreativePixels"
              width={703}
              height={818}
              className="max-bf-sm:h-[320px] h-[440px] w-auto"
            />
          </div>

          {/* Right — intro + what you get on the call */}
          <div className="max-bf-xl:order-3 max-bf-xl:w-full max-bf-xl:max-w-[560px] w-[420px] shrink-0">
            <p className="max-bf-sm:text-[16px] max-bf-sm:leading-[24px] text-[20px] leading-[28px] tracking-[-0.02em] text-black">
              I’ve been building websites since I was 13. I’m Manchester-based,
              with a team behind me, and I look at every store myself before the
              call.
            </p>

            <ul className="mt-[45px] flex flex-col gap-[14px]">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-[12px]">
                  <CircleCheck
                    size={22}
                    strokeWidth={2}
                    className="text-dark-pink shrink-0"
                  />

                  <span className="max-bf-sm:text-[14px] text-[16px] font-semibold tracking-[-0.05em] text-black">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stores we've built pill bar */}
        <div className="max-bf-xl:flex-col max-bf-xl:items-center max-bf-xl:gap-[25px] max-bf-xl:rounded-[20px] max-bf-xl:px-[40px] max-bf-xl:py-[30px] max-bf-sm:mt-[30px] max-bf-sm:px-[20px] relative z-[10] mt-[50px] flex items-center justify-between gap-[40px] rounded-full bg-[#F5F5F5] px-[50px] py-[20px]">
          <p className="text-text-body max-bf-sm:text-[16px] shrink-0 text-[22px] font-medium tracking-[-0.02em] whitespace-nowrap uppercase">
            Stores we’ve built
          </p>

          <ul className="max-bf-sm:gap-[3px] flex flex-1 items-center justify-center gap-[12px]">
            {stores.map(({ id, src, alt, width, height }) => (
              <li
                key={id}
                className="max-bf-sm:size-[56px] flex size-[100px] items-center justify-center rounded-full border border-black/5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
              >
                {/* Black (dark) logo on a white circle */}
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className="max-bf-sm:h-auto max-bf-sm:max-h-[26px] max-bf-sm:w-auto max-bf-sm:max-w-[38px] max-bf-sm:object-contain"
                />
              </li>
            ))}
          </ul>

          <p className="max-bf-xl:max-w-full max-bf-sm:max-w-[220px] max-bf-xl:text-center max-bf-sm:text-[18px] max-w-[260px] shrink-0 text-right text-[22px] leading-[28px] font-extrabold tracking-[-0.04em] text-black">
            As heard on BBC Radio Manchester &amp; Lancashire
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default BookCallFounder;
