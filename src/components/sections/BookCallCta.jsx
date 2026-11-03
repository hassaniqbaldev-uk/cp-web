import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import ScrollLink from "../ui/ScrollLink";
import { ArrowUpRight } from "lucide-react";

const BookCallCta = () => {
  return (
    <Section
      id="book-call-cta"
      className="relative pt-[100px] pb-[60px] max-bf-xl:pt-[60px]"
    >
      <Container className="relative z-10 max-bf-xl:px-[40px] max-bf-sm:px-[20px]">
        <div className="flex items-center justify-between gap-[40px] max-bf-xl:flex-col max-bf-xl:gap-[30px]">
          <div className="w-[480px] shrink-0 max-bf-xl:w-full max-bf-xl:text-center">
            <h2 className="max-bf-sm:text-[42px] max-bf-sm:leading-[46px] text-[75px] leading-[80px] font-extrabold tracking-[-0.07em] text-white">
              Let’s look at
              <br />
              your store
              <span className="block bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[10px] pb-[10px] text-transparent">
                together
              </span>
            </h2>

            <p className="mt-[24px] text-[18px] leading-[26px] tracking-[-0.02em] text-white/80 max-bf-sm:text-[15px]">
              Free 30-minute call with Hassan.
              <br />
              About 30 seconds to book.
            </p>

            <ScrollLink
              href="#book-call-hero"
              className="group mt-[40px] inline-flex items-center justify-center gap-[10px] rounded-full bg-white px-[28px] py-[16px] text-[16px] font-extrabold tracking-[-0.02em] text-black uppercase max-bf-xl:mt-[30px] max-bf-sm:text-[14px]"
            >
              Book my free call
              <ArrowUpRight
                size={18}
                strokeWidth={2.5}
                className="shrink-0 transition-[rotate] duration-300 ease-out group-hover:rotate-45"
              />
            </ScrollLink>
          </div>

          <div className="max-bf-xl:mx-auto max-bf-xl:w-full max-bf-xl:max-w-[420px] max-bf-sm:max-w-[320px] w-[520px] shrink-0">
            <Image
              src="/images/book-a-call/cta-img.png"
              alt=""
              width={1033}
              height={863}
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BookCallCta;
