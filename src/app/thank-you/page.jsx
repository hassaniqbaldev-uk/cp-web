import CheckMarkIcon from "@/components/icons/CheckMarkIcon";
import LpPrimaryButton from "@/components/lp/LpPrimaryButton";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";

export const metadata = {
  title: "Thanks — Your Audit Request Is In",
  description:
    "We've received your audit request and will be in touch within 2–3 business days.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  "Request logged confirmation sent to your email",
  "Our experts review your site & goals within 2–3 business days",
  "You receive a full conversion audit with clear, actionable fixes",
];

const ThankYouPage = async ({ searchParams }) => {
  const params = await searchParams;
  const returnUrl = params?.return || "/";

  return (
    <main className="flex min-h-screen items-center justify-center px-[2rem] py-[6rem] xl:px-[0rem]">
      <div className="container">
        <div className="mx-auto flex max-w-[78rem] flex-col items-center text-center">
          {/* Check Badge */}
          <div className="bg-gradient-pink-orange mb-[3rem] inline-flex size-[8rem] items-center justify-center rounded-full md:size-[10rem]">
            <CheckMarkIcon color="#ffffff" width="40" height="40" />
          </div>

          {/* <div>
            <SectionLabel
              text="Confirmation sent to your email"
              textColor="#3078FF"
            />
          </div> */}

          <h1 className="mt-[1.5rem] mb-[2rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[4.8rem] md:leading-[6rem]">
            Thanks for your{" "}
            <span className="bg-gradient-pink-orange bg-clip-text text-transparent">
              enquiry
            </span>
          </h1>

          <div className="max-w-[60rem]">
            <SectionDescription
              text="We've received your details and our team will review what you have sent and come back to you shortly."
              textColor="#625C70"
            />
          </div>

          {/* What happens next */}
          {/* <div className="mt-[5rem] flex w-full max-w-[64rem] flex-col gap-[1.6rem]">
            {nextSteps.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-[1.5rem] border-b border-[#98989866] pb-[1.6rem] text-left"
              >
                <i className="relative top-[.6rem] min-w-max">
                  <CheckMarkIcon color="#FF37B3" />
                </i>
                <span className="text-[1.6rem] leading-[2.6rem] font-semibold tracking-normal text-[#312749] md:text-[1.8rem] md:leading-[3rem]">
                  {item}
                </span>
              </div>
            ))}
          </div> */}

          {/* CTAs */}
          <div className="mt-[5rem] flex flex-col items-center gap-[2.4rem] md:flex-row">
            <LpPrimaryButton
              text="Go Back"
              bGcolor="#FF37B3"
              textColor="#ffffff"
              href={returnUrl}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThankYouPage;
