import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import ScrollLink from "../ui/ScrollLink";
import { ArrowUpRight } from "lucide-react";

const StoreReviewCta = () => {
  return (
    <Section
      id="store-review-cta"
      className="max-bf-xl:pt-[60px] relative bg-black pt-[100px] pb-[60px]"
    >
      <Container className="max-bf-xl:px-[40px] max-bf-sm:px-[20px]">
        <div className="max-bf-xl:flex-col max-bf-xl:gap-[30px] flex items-center justify-between gap-[40px]">
          <div className="max-bf-xl:w-full max-bf-xl:text-center w-[520px] shrink-0">
            <h2 className="max-bf-sm:text-[42px] max-bf-sm:leading-[46px] text-[75px] leading-[80px] font-extrabold tracking-[-0.07em] text-white">
              See what’s
              <br />
              stopping your
              <span className="block bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[10px] pb-[10px] text-transparent">
                shoppers buying.
              </span>
            </h2>

            <ScrollLink
              href="#store-review-hero"
              className="group max-bf-xl:mt-[30px] max-bf-sm:text-[14px] mt-[40px] inline-flex items-center justify-center gap-[10px] rounded-full bg-white px-[28px] py-[16px] text-[16px] font-extrabold tracking-[-0.02em] text-black uppercase"
            >
              Get my free video review
              <ArrowUpRight
                size={18}
                strokeWidth={2.5}
                className="shrink-0 transition-[rotate] duration-300 ease-out group-hover:rotate-45"
              />
            </ScrollLink>
          </div>

          <div className="max-bf-xl:w-full max-bf-sm:max-w-[360px] w-[520px] shrink-0">
            <Image
              src="/images/store-review/cta-img.png"
              alt="Find what's stopping your shoppers buying"
              width={516}
              height={460}
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default StoreReviewCta;
