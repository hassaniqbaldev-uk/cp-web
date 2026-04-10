import LandingCtaBg from "@/assets/images/backgrounds/landing-cta-bg.png";
import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";
import CheckMarkIcon from "../icons/CheckMarkIcon";

const LpCtaSection = () => {
  return (
    <section className="pb-[10rem]">
      <div className="relative container overflow-hidden rounded-[3rem] px-[7rem] py-[6rem]">
        {/*Background Image*/}
        <Image
          src={LandingCtaBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] rounded-[3rem] object-cover select-none"
        />

        <div className="relative z-[10] flex justify-between gap-[4rem]">
          <div className="w-[52rem]">
            <h2 className="mb-[3.8rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[4.8rem] md:leading-[5.2rem]">
              No Risk. No Obligation.{" "}
              <span className="bg-gradient-pink-orange bg-clip-text text-transparent">
                Just Results.
              </span>
            </h2>

            <div>
              <PrimaryButton
                text="Start Your Risk-Free Audit"
                textColor="#FFFFFF"
                bGcolor="#312749"
                href=""
              />
            </div>
          </div>

          <div className="flex w-[45rem] flex-col gap-[1.6rem]">
            {[
              "No upfront payments required",
              "Full transparency throughout the project",
              "You only pay when satisfied with your new WordPress website",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-[1.5rem] border-b border-[#98989866] pb-[1.6rem]"
              >
                <div className="relative top-[.7rem] min-w-max">
                  <CheckMarkIcon color="#FF37B3" />
                </div>{" "}
                <span className="text-[2rem] leading-[3.2rem] font-semibold tracking-normal text-[#312749]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LpCtaSection;
